import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { cmsActions } from "../../../store/actions";
import { generalConstants } from "../../../utils/constants";
import { firestore } from "../../../components/feature/firebase";

import { v4 as uuidv4 } from "uuid";

export const useContainer = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState();
  const [crew, setCrew] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [city, setCity] = useState("");
  const [place, setPlace] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [link, setLink] = useState("");
  const [category, setCategory] = useState("");
  const [avatarURL, setAvatarURL] = useState("https://via.placeholder.com/50");
  const alert = useSelector((state) => state.CMS.alert);
  const isLoading = useSelector((state) => state.CMS.isLoading);
  const history = useHistory();

  const dispatch = useDispatch();
  const lang = useSelector((state) => state.general.language);

  const addNews = async (id) => {
    return await firestore
      .collection(generalConstants.LANG)
      .doc(lang)
      .collection(generalConstants.NEWS)
      .doc(id)
      .set({
        type: generalConstants.NEWS,
        published: new Date().toLocaleString(),
        id,
        title,
        content,
        crew,
        category,
        language,
        avatarURL,
      });
  };

  const addEvents = async (id) => {
    return await firestore
      .collection(generalConstants.LANG)
      .doc(lang)
      .collection(generalConstants.EVENTS)
      .doc(id)
      .set({
        id,
        title,
        type: generalConstants.EVENTS,
        imgURL: imgURL || "https://via.placeholder.com/50",
        content,
        date,
        time,
        crew,
        city,
        place,
        link,
        language,
        published: new Date().toLocaleString(),
      });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(cmsActions.clear());
    try {
      dispatch(cmsActions.addNewsReq());
      addNews(uuidv4());
      dispatch(cmsActions.addNewsSuccess());
      history.push("/panel");
    } catch (error) {
      dispatch(cmsActions.addNewsFailure());
    }
  };

  const handlerEvents = (e) => {
    e.preventDefault();
    dispatch(cmsActions.clear());
    try {
      dispatch(cmsActions.addEventsReq());
      addEvents(uuidv4());
      dispatch(cmsActions.addEventsSuccess());
      history.push("/panel");
    } catch (error) {
      dispatch(cmsActions.addEventsFailure());
    }
  };

  const addArticle = async (id) => {
    return await firestore
      .collection(generalConstants.LANG)
      .doc(lang)
      .collection(generalConstants.BLOG_POSTS)
      .doc(id)
      .set({
        id,
        type: generalConstants.BLOG_POSTS,
        title,
        imgURL: imgURL || "https://via.placeholder.com/50",
        content,
        crew,
        category,
        language,
        published: new Date().toLocaleString(),
      });
  };

  const handlerArticle = (e) => {
    e.preventDefault();
    dispatch(cmsActions.clear());
    try {
      dispatch(cmsActions.addArticleReq());
      addArticle(uuidv4());
      dispatch(cmsActions.addArticleSuccess());
      history.push("/panel");
    } catch (error) {
      dispatch(cmsActions.addArticleFailure());
    }
  };

  const handleEdtiorChange = (e) => {
    setContent(e.target.getContent());
  };

  return {
    addNews,
    handlerSubmit,
    handleEdtiorChange,
    content,
    setContent,
    title,
    setTitle,
    language,
    setLanguage,
    crew,
    setCrew,
    category,
    setCategory,
    alert,
    isLoading,
    time,
    setTime,
    date,
    setDate,
    place,
    setPlace,
    handlerEvents,
    city,
    setCity,
    imgURL,
    setImgURL,
    link,
    setLink,
    handlerArticle,
    addArticle,
    setAvatarURL,
  };
};
