import { useEffect } from "react";

import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

import { fetchActions, userActions } from "@actions/index";

import { auth, firestore } from "@components/feature/firebase";

import { ConfigAppService } from "./service";

import * as C from "@utils/constants";

export const useInitialService = () => {
  const dispatch = useDispatch();
  const { language }: { language: string } = useSelector(
    ({ general }: RootStateOrAny) => general?.language
  );

  const getDictionary = async (): Promise<void> => {
    try {
      dispatch(fetchActions.getDictionaryRequest);
      const initConfigApp = await ConfigAppService.getInitConfigApp();
      fetchActions.getDictionarySucces(initConfigApp);
      console.log(initConfigApp);
    } catch {
      dispatch(fetchActions.getDictionaryFailure());
    }
  };

  const getDataHandler = async (): Promise<void> => {
    try {
      dispatch(fetchActions.getDatabaseRequest());
      const databaseInitConfigApp = await ConfigAppService.getDictionariesApp(
        language
      );
      dispatch(fetchActions.getDatabaseSucces(databaseInitConfigApp));
    } catch {
      dispatch(fetchActions.getDatabaseFailure());
    }
  };

  const initialDataHandler = async (): Promise<void> => {
    await getDictionary();
    await getDataHandler();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        firestore
          .collection(C.GENERAL_CONSTANTS.USERS)
          .doc(user.uid)
          .onSnapshot((currentUser) => {
            dispatch(userActions.signInSuccess(currentUser.data()));
          });
      } else {
        dispatch(userActions.logout());
      }
    });
    return () => unsubscribe();
  });

  useEffect(() => {
    initialDataHandler();
  }, []);

  return {
    getDictionary,
    getDataHandler,
    initialDataHandler,
    language,
  };
};
