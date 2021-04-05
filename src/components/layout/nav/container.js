import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { cmsActions, fetchActions} from "@actions";
import * as CONSTANTS from "@utils/constants";
import { firestore } from "@components/feature/firebase";


export const useContainer = () => {
    const dispatch = useDispatch();

    const nav = useSelector((state) => state.database.nav)

    const fetchNav = (lang) => {
        dispatch(fetchActions.getNavRequest())
        try {
          firestore
            .collection(CONSTANTS.GENERAL_CONSTANTS.LANG)
            .doc(lang)
            .onSnapshot((resp) => {
              console.log(resp.data())
              // dispatch(fetchActions.geNavSuccess(resp.docs.map(item => item.data())))
            });
        } catch (error) {
          dispatch(fetchActions.getNavFailure());
        }
      };


    return {
        fetchNav,
        nav
    }
}