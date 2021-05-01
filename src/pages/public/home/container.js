import { useDispatch, useSelector } from "react-redux";
import { db } from "@fire";

import { fetchActions } from "../../../store/actions";
import { GENERAL_CONSTANTS } from "@utils/constants";
import { firestore } from "@components/feature/firebase";

import * as C from "@utils/constants";

export const useContainer = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.general.language);

  const getNews = async () => {
    dispatch(fetchActions.getNewsRequest());
    firestore
      .collection(GENERAL_CONSTANTS.LANG)
      .doc(lang)
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
      .doc(lang)
      .collection(GENERAL_CONSTANTS.EVENTS)
      .onSnapshot((resp) => {
        const newsData = resp.docs.map((item) => item.data());

        dispatch(fetchActions.getEventsSuccess(newsData));
      });
  };

  const getPosts = async () => {
    dispatch(fetchActions.getPostsRequest);
    firestore
      .collection(GENERAL_CONSTANTS.LANG)
      .doc(lang)
      .collection(GENERAL_CONSTANTS.BLOG_POSTS)
      .onSnapshot((resp) => {
        const newsData = resp.docs.map((item) => item.data());

        dispatch(fetchActions.getPostsSuccess(newsData));
      });
  };

  return {
    getNews,
    getEvents,
    getPosts,
  };
};
