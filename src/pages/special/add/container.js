import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { cmsActions } from "../../../utils/_actions";
import { generalConstants } from "../../../utils/_constants";
import { firestore } from "../../../components/feature/firebase";

export const useContainer = () => {
  const [query, setQuery] = useState("");
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState();
  const [crew, setCrew] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventCity, setEventCity] = useState("");
  const [eventPlace, setEventPlace] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [link, setLink] = useState("");
  const [info, setInfo] = useState("");
  const [category, setCategory] = useState("");
  const alert = useSelector((state) => state.CMS.alert);
  const isLoading = useSelector((state) => state.CMS.isLoading);

  const dispatch = useDispatch();
  const lang = useSelector((state) => state.general.language);

  const addNews = async (id) => {
    return await firestore
      .collection(generalConstants.LANG)
      .doc(lang)
      .collection(generalConstants.NEWS)
      .doc(id)
      .set({
        id,
        title: title,
        imageURL: imgURL,
        content: query,
        date: new Date(),
        author: crew,
        category: category,
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
        imageURL: imgURL,
        info,
        date: eventDate,
        time: eventTime,
        author: crew,
        city: eventCity,
        place: eventPlace,
        link,
        language: language.value,
        published: new Date(),
      });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(cmsActions.clear());
    try {
      dispatch(cmsActions.addNewsReq());
      addNews(uuidv4());
      dispatch(cmsActions.addNewsSuccess());
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
        id: id,
        title: title,
        imageURL: imgURL,
        content: query,
        author: crew,
        category: category,
        published: new Date(),
      });
  };

  const handlerArticle = (e) => {
    e.preventDefault();
    dispatch(cmsActions.clear());
    try {
      dispatch(cmsActions.addArticleReq());
      addArticle(uuidv4());
      dispatch(cmsActions.addArticleSuccess());
    } catch (error) {
      dispatch(cmsActions.addArticleFailure());
    }
  };

  const handleEdtiorChange = (e) => {
    setQuery(e.target.getContent());
  };

  return {
    addNews,
    handlerSubmit,
    handleEdtiorChange,
    query,
    setQuery,
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
    eventTime,
    setEventTime,
    eventDate,
    setEventDate,
    info,
    setInfo,
    eventPlace,
    setEventPlace,
    handlerEvents,
    eventCity,
    setEventCity,
    imgURL,
    setImgURL,
    link,
    setLink,
    handlerArticle,
    addArticle,
  };
};
