import { useDispatch, useSelector } from "react-redux";

import * as ACTIONS from "../../../store/actions";
import { GENERAL_CONSTANTS } from "../../../utils/constants";
import { firestore } from "../../../components/feature/firebase";

export const useContainer = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.general.language);

  const getHero = async () => {
    dispatch(ACTIONS.heroActions.heroRequest());
    try {
      firestore
        .collection(GENERAL_CONSTANTS.LANG)
        .doc(lang)
        .collection(GENERAL_CONSTANTS.HERO)
        .onSnapshot((resp) => {
          const data = resp.docs.map((item) => item.docs.data());
          dispatch(ACTIONS.heroActions.heroSuccess(data));
        });
    } catch {
      dispatch(ACTIONS.heroActions.heroFailure());
    }
  };

  return {
    getHero,
  };
};
