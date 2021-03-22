import { useDispatch, useSelector } from "react-redux";

import {
  fetchActions,
  blogActions,
  eventsActions,
} from "../../../store/actions";
import { generalConstants } from "../../../utils/constants";
import { firestore } from "../../../components/feature/firebase";

export const useContainer = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.general.language);

  const getNews = async () => {
    dispatch(fetchActions.fetchNewsRequest);
    firestore
      .collection(generalConstants.LANG)
      .doc(lang)
      .collection(generalConstants.NEWS)
      .onSnapshot((resp) => {
        const newsData = resp.docs.map((item) => {
          return {
            id: item.id,
            ...item.data(),
          };
        });
        dispatch(fetchActions.fetchNews(newsData));
      });
  };

  const getEvents = async () => {
    dispatch(eventsActions.getEventsRequest);
    firestore
      .collection(generalConstants.LANG)
      .doc(lang)
      .collection(generalConstants.EVENTS)
      .onSnapshot((resp) => {
        const newsData = resp.docs.map((item) => item.data());
        dispatch(eventsActions.getEvents(newsData));
      });
  };

  const getPosts = async () => {
    dispatch(blogActions.getPostsRequest);
    firestore
      .collection(generalConstants.LANG)
      .doc(lang)
      .collection(generalConstants.BLOG_POSTS)
      .onSnapshot((resp) => {
        const newsData = resp.docs.map((item) => item.data());
        dispatch(blogActions.getPosts(newsData));
      });
  };

  

  return {
    getNews,
    getEvents,
    getPosts,
  };
};
