import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchActions, userActions } from "@actions";

import { db, auth, firestore } from "@fire";

import * as C from "@utils/constants";

export const useInitialService = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.general.language);

  const getDictionary = async () => {
    try {
      dispatch(fetchActions.getDictionaryRequest);
      db.ref(`/${C.GENERAL_CONSTANTS.DICTIONARY}`).on(
        "value",
        (querySnapShot) => {
          dispatch(fetchActions.getDictionarySucces(querySnapShot.val()));
        }
      );
    } catch (error) {
      dispatch(fetchActions.getDictionaryFailure(error));
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
    } catch (error) {
      dispatch(fetchActions.getDatabaseFailure(error));
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
  };
};
