import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

import { fetchActions, userActions } from "@actions/index";

import { auth, db, firestore } from "@components/feature/firebase";

import * as C from "@utils/constants";

export const useInitialService = () => {
  const dispatch = useDispatch();
  const language = useSelector(
    ({ general }: RootStateOrAny) => general?.language
  );
  // const currentPath = useLocation().pathname.split("/");
  // const currentPage = currentPath[currentPath.length - 1] || "";

  const getDictionary = async () => {
    try {
      dispatch(fetchActions.getDictionaryRequest);
      db.ref(`/${C.GENERAL_CONSTANTS.DICTIONARY}`).on(
        "value",
        (querySnapShot) => {
          dispatch(fetchActions.getDictionarySucces(querySnapShot.val()));
        }
      );
    } catch {
      dispatch(fetchActions.getDictionaryFailure());
    }
  };

  const getDataHandler = async () => {
    try {
      dispatch(fetchActions.getDatabaseRequest);
      db.ref(`/${C.GENERAL_CONSTANTS.LANG}`)
        .child(language)
        .on("value", (querySnapShot) => {
          dispatch(fetchActions.getDatabaseSucces(querySnapShot.val()));
        });
    } catch {
      dispatch(fetchActions.getDatabaseFailure());
    }
  };

  const initialDataHandler = async () => {
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
    // currentPage,
  };
};
