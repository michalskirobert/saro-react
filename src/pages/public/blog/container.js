import { useDispatch, useSelector } from "react-redux";

import { fetchActions } from "../../../store/actions";
import { GENERAL_CONSTANTS } from "@utils/constants";
import { firestore } from "@components/feature/firebase";

export const useContainer = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.general.language);
  const article = useSelector((state) => state.blog.posts);

  const getPosts = async () => {
    dispatch(fetchActions.getPostsRequest());
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
    getPosts,
    article,
  };
};
