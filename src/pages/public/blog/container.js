import { fetchActions, blogActions, eventsActions } from "../../../_actions";
import { generalConstants } from "../../../_constants";
import { firestore } from "../../../components/feature/firebase";
import { useDispatch, useSelector } from "react-redux";

export const useContainer = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.default.language);

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
    getPosts,
  };
};
