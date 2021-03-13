import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { cmsActions } from "../../../utils/_actions";
import { generalConstants } from "../../../utils/_constants";
import { firestore } from "../../../components/feature/firebase";
import { idText } from "typescript";

export const useEdit = () => {
  const alert = useSelector((state) => state.CMS.alert);
  const [id, setId] = useState("");
  const [query, setQuery] = useState("");
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("");
  const [crew, setCrew] = useState("");
  const [eventTime, setEventTime] = useState(null);
  const [eventDate, setEventDate] = useState(null);
  const [eventCity, setEventCity] = useState(null);
  const [eventPlace, setEventPlace] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [link, setLink] = useState("");
  const [info, setInfo] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");

  const dispatch = useDispatch()
  const lang = useSelector((state) => state.general.language);

  const getEvent = async (id, type) => {
    return await firestore
      .collection(generalConstants.LANG)
      .doc(lang)
      .collection(generalConstants.EVENTS)
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          const {
            id,
            title,
            imageURL,
            info,
            date,
            time,
            author,
            city,
            place,
            link,
            language,
          } = doc.data();
          setId(id);
          setTitle(title);
          setImgURL(imageURL);
          setInfo(info);
          setEventDate(date);
          setEventTime(time);
          setCrew(author);
          setEventCity(city);
          setEventPlace(place);
          setLink(link);
          setLanguage(language);
        } else {
          console.log("Document not found");
        }
      })
      .catch((err) => {
        console.log("Error getting document", err);
      });
  };

  const updateEvent = async (id) => {
    return await firestore
      .collection(generalConstants.LANG)
      .doc(lang)
      .collection(generalConstants.EVENTS)
      .doc(id)
      .set({
        id,
        type: generalConstants.EVENTS,
        title: title,
        imageURL: imgURL,
        info: info,
        date: eventDate,
        time: eventTime,
        author: crew,
        city: eventCity,
        place: eventPlace,
        link: link,
        language: language,
        published: new Date(),
      });
  };

  const getNews = (id, type) => {
    firestore
      .collection("language")
      .doc("en")
      .collection("news")
      .doc(id)
      .onSnapshot((doc) => console.log(doc.data()));
  };

  const updateNews = async (id) => {
    return await firestore
      .collection(generalConstants.LANG)
      .doc(lang)
      .collection(generalConstants.NEWS)
      .doc(id)
      .set({
        id,
        type: generalConstants.NEWS,
        title: title,
        query: query,
        author: crew,
        language: language,
        category: category,
        published: new Date(),
      });
  };

  const getArticle = (id, type) => {
    firestore
      .collection(generalConstants.LANG)
      .doc(lang)
      .collection(generalConstants.BLOG_POSTS)
      .doc(id)
      .onSnapshot((doc) => console.log(doc.data()));
  };

  const updateArticle = async (id) => {
    return await firestore
      .collection(generalConstants.LANG)
      .doc(lang)
      .collection(generalConstants.BLOG_POSTS)
      .doc(id)
      .set({
        id,
        type: generalConstants.BLOG_POSTS,
        title: title,
        query: query,
        author: crew,
        language: language,
        category: category,
        published: new Date(),
      });
  };

  const handleEdit = async (id) => {
    console.log(getNews(id));
  };

  const handleEdtiorChange = (e) => {
    setQuery(e.target.getContent());
  };


  const handlerSubmit = async (e) => {
    e.preventDefault();
    dispatch(cmsActions.clear());
    switch (type) {
      case generalConstants.BLOG_POSTS:
        try {
          dispatch(cmsActions.addArticleReq());
          updateArticle(id);
          dispatch(cmsActions.addArticleSuccess());
        } catch (error) {
          dispatch(cmsActions.addArticleFailure());
        }
        break;
      case generalConstants.NEWS:
        try {
          dispatch(cmsActions.addNewsReq());
          updateNews(id);
          dispatch(cmsActions.addNewsSuccess());
        } catch (error) {
          dispatch(cmsActions.addNewsFailure());
        }
        break;
      case generalConstants.EVENTS:
        try {
          dispatch(cmsActions.addEventsReq());
          updateEvent(id);
          dispatch(cmsActions.addEventsSuccess());
        } catch (error) {
          dispatch(cmsActions.addEventsFailure());
        }
        break;
      default:
        return
    }
  };


  return {
    handleEdtiorChange,
    handlerSubmit,
    getEvent,
    updateEvent,
    getArticle,
    updateArticle,
    getNews,
    updateNews,
    alert,
    title,
    setTitle,
    imgURL,
    setImgURL,
    query,
    setQuery,
    eventDate,
    setEventDate,
    crew,
    setCrew,
    eventCity,
    setEventCity,
    eventPlace,
    setEventPlace,
    link,
    setLink,
    eventTime,
    setEventTime,
    language,
    setLanguage,
    info,
    setInfo,
    category,
    setCategory,
    handleEdit,
  };
};
