import { useDispatch, useSelector } from "react-redux";

import { fetchActions } from "../../../store/actions";
import { GENERAL_CONSTANTS } from "@utils/constants";
import { firestore } from "@components/feature/firebase";

export const useContainer = () => {
  const dispatch = useDispatch();
  const {language: lang} = useSelector(({general}: any) => general);
  const {article} = useSelector(({blog}: any) => blog);

  const getarticle = async () => {
    dispatch(fetchActions.getArticlesRequest());
    firestore
      .collection(GENERAL_CONSTANTS.LANG)
      .doc(lang)
      .collection(GENERAL_CONSTANTS.ARTICLES)
      .onSnapshot((resp) => {
        const newsData = resp.docs.map((item) => item.data());
        dispatch(fetchActions.getArticlesSuccess(newsData));
      });
  };

  return {
    getarticle,
    article,
  };
};
