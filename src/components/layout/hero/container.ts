import { useDispatch, useSelector } from "react-redux";

import * as ACTIONS from "../../../store/actions";
import { GENERAL_CONSTANTS } from "@utils/constants";
import { firestore } from "@components/feature/firebase";

export const useContainer = () => {
  const dispatch = useDispatch();
  const { language: lang } = useSelector(({ general }: any) => general);

  const getHero = async () => {
    dispatch(ACTIONS.heroActions.getHeroRequest());
    try {
      firestore
        .collection(GENERAL_CONSTANTS.LANG)
        .doc(lang)
        .collection(GENERAL_CONSTANTS.HERO)
        .orderBy("title")
        .onSnapshot((resp) => {
          const data = resp.docs.map((item) => item.data());
          dispatch(ACTIONS.heroActions.getHeroSuccess(data));
        });
    } catch {
      dispatch(ACTIONS.heroActions.getHeroFailure());
    }
  };

  return {
    getHero,
  };
};
