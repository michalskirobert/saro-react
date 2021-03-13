import {
  fetchActions,
  blogActions,
  eventsActions,
} from "../../../utils/_actions";
import { generalConstants } from "../../../utils/_constants";
import { firestore } from "../../../components/feature/firebase";
import { useDispatch, useSelector } from "react-redux";

export const useContainer = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.general.language);
  const article = useSelector((state) => state.blog.posts);

  const getPosts = async () => {
    dispatch(blogActions.getPostsRequest());
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
    article,
  };
};
