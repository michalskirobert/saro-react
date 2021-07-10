import { useEffect } from "react";

import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

import { fetchActions, userActions } from "@actions/index";

import { auth, firestore } from "@components/feature/firebase";

import { ConfigAppService } from "./service";

import * as C from "@utils/constants";

export const useInitialService = () => {
  const dispatch = useDispatch();
  const { language }: { language: string } = useSelector(
    ({ general }: RootStateOrAny) => general
  );

  const getDictionary = async (): Promise<void> => {
    try {
      dispatch(fetchActions.getDictionaryRequest());
      const dictionaries = await ConfigAppService.getDictionariesApp(language);
      dispatch(fetchActions.getDictionarySucces(dictionaries));
    } catch {
      dispatch(fetchActions.getDictionaryFailure());
    }
  };

  const getInitConfigApp = async (): Promise<void> => {
    try {
      dispatch(fetchActions.getInitConfigAppRequest());
      const initConfigApp = await ConfigAppService.getInitConfigApp();
      dispatch(fetchActions.getInitConfigAppSucces(initConfigApp));
    } catch {
      dispatch(fetchActions.getInitConfigAppFailure());
    }
  };

  const initialDataHandler = async (): Promise<void> => {
    await getDictionary();
    await getInitConfigApp();
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
    getInitConfigApp,
    initialDataHandler,
    language,
  };
};
