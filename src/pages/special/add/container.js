import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { cmsActions, fetchActions } from "../../../store/actions";
import { GENERAL_CONSTANTS } from "../../../utils/constants";
import { firestore } from "../../../components/feature/firebase";

import { v4 as uuidv4 } from "uuid";

export const useContainer = () => {
  const alert = useSelector((state) => state.CMS.alert);
  const isLoading = useSelector((state) => state.CMS.isLoading);
  const lang = useSelector((state) => state.general.language);
  const crew = useSelector((state) => state.database.crew);
  const history = useHistory();
  const dispatch = useDispatch();

  const [infoContainer, setInfoContainer] = useState({
    id: "",
    title: "",
    city: "",
    place: "",
    date: "",
    subtitle: "",
    time: "",
    imgURL: "",
    link: "",
    crew: "",
    language: "",
    category: "",
    content: "",
  });

  const addNews = async (id) => {
    return await firestore
      .collection(GENERAL_CONSTANTS.LANG)
      .doc(infoContainer.language)
      .collection(GENERAL_CONSTANTS.NEWS)
      .doc(id)
      .set({
        type: GENERAL_CONSTANTS.NEWS,
        published: new Date(),
        publishedDate: new Date().toLocaleString(),
        id,
        title: infoContainer.title,
        imgURL: infoContainer.imgURL || "https://via.placeholder.com/50",
        crew: infoContainer.crew,
        language: infoContainer.language,
        category: infoContainer.category,
        content: infoContainer.content,
      });
  };

  const handlerNews = (e) => {
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

  const addEvents = async (id) => {
    return await firestore
      .collection(GENERAL_CONSTANTS.LANG)
      .doc(infoContainer.language)
      .collection(GENERAL_CONSTANTS.EVENTS)
      .doc(id)
      .set({
        type: GENERAL_CONSTANTS.EVENTS,
        published: new Date(),
        publishedDate: new Date().toLocaleString(),
        id,
        title: infoContainer.title,
        city: infoContainer.city,
        place: infoContainer.place,
        subtitle: infoContainer.subtitle,
        date: infoContainer.date,
        time: infoContainer.time,
        imgURL: infoContainer.imgURL ?? "https://via.placeholder.com/50",
        link: infoContainer.link,
        crew: infoContainer.crew,
        language: infoContainer.language,
        content: infoContainer.content,
      });
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
      .collection(GENERAL_CONSTANTS.LANG)
      .doc(infoContainer.language)
      .collection(GENERAL_CONSTANTS.BLOG_POSTS)
      .doc(id)
      .set({
        type: GENERAL_CONSTANTS.BLOG_POSTS,
        published: new Date(),
        publishedDate: new Date().toLocaleString(),
        id,
        title: infoContainer.title,
        crew: infoContainer.crew,
        language: infoContainer.language,
        category: infoContainer.category,
        content: infoContainer.content,
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
    const value = e.target.getContent();
    setInfoContainer((prevState) => {
      return { ...prevState, content: value };
    });
  };

  const fetchCrew = async () => {
    return firestore
      .collection(GENERAL_CONSTANTS.LANG)
      .doc(lang)
      .collection(GENERAL_CONSTANTS.CREW)
      .onSnapshot((resp) => resp.docs.map(item =>  dispatch(fetchActions.getCrewSuccess(item.data()))
      );
  };

  const goBack = () => {
    history.goBack();
  };

  return {
    alert,
    goBack,
    isLoading,
    infoContainer,
    setInfoContainer,
    addNews,
    addArticle,
    addEvents,
    handleEdtiorChange,
    handlerNews,
    handlerEvents,
    handlerArticle,
    crew,
    fetchCrew,
  };
};
