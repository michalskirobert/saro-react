import { useDispatch, useSelector } from "react-redux";

import { fetchActions } from "../../../store/actions";
import { GENERAL_CONSTANTS } from "@utils/constants";
import { firestore } from "@components/feature/firebase";

export const useContainer = () => {
  const dispatch = useDispatch();
  const { language } = useSelector(({ general }) => general);

  const getNews = async () => {
    dispatch(fetchActions.getNewsRequest());
    firestore
      .collection(GENERAL_CONSTANTS.LANG)
      .doc(language)
      .collection(GENERAL_CONSTANTS.NEWS)
      .onSnapshot((resp) => {
        const newsData = resp.docs.map((item) => item.data());
        dispatch(fetchActions.getNewsSuccess(newsData));
      });
  };

  const getEvents = async () => {
    dispatch(fetchActions.getEventsRequest);
    firestore
      .collection(GENERAL_CONSTANTS.LANG)
      .doc(language)
      .collection(GENERAL_CONSTANTS.EVENTS)
      .onSnapshot((resp) => {
        const newsData = resp.docs.map((item) => item.data());

        dispatch(fetchActions.getEventsSuccess(newsData));
      });
  };

  const getArticles = async () => {
    dispatch(fetchActions.getArticlesRequest);
    firestore
      .collection(GENERAL_CONSTANTS.LANG)
      .doc(language)
      .collection(GENERAL_CONSTANTS.ARTICLES)
      .onSnapshot((resp) => {
        const newsData = resp.docs.map((item) => item.data());

        dispatch(fetchActions.getArticlesSuccess(newsData));
      });
  };

  return {
    getNews,
    getEvents,
    getArticles,
  };
};
