import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { cmsActions, fetchActions, uploadActions } from "@actions";
import * as CONSTANTS from "@utils/constants";
import { firestore, storage } from "@components/feature/firebase";

import { v4 as uuidv4 } from "uuid";

export const useContainer = () => {
  const alert = useSelector((state) => state.CMS.alert);
  const isLoading = useSelector((state) => state.CMS.isLoading);
  const lang = useSelector((state) => state.general.language);
  const crew = useSelector((state) => state.database.crew);
  const [invalid, setInvalid] = useState({ errorMsg: "" });
  const [image, setImage] = useState();
  const history = useHistory();
  const dispatch = useDispatch();

  const [infoContainer, setInfoContainer] = useState("");

  const addNews = async (id, values) => {
    await firestore
      .collection(CONSTANTS.GENERAL_CONSTANTS.LANG)
      .doc(lang)
      .collection(CONSTANTS.GENERAL_CONSTANTS.NEWS)
      .doc(id)
      .set({
        ...values,
        imgURL: image,
        type: CONSTANTS.GENERAL_CONSTANTS.NEWS,
        published: new Date(),
        publishedDate: new Date().toLocaleString(),
        id,
      });
    console.log("done");
  };

  const imageChangeHandler = (e) => {
    uploadImage(e.currentTarget.files[0]);
  };

  const uploadImage = async (file) => {
    setInvalid({});

    if (file.type !== "image/png") {
      setInvalid({ errorMsg: "ppp" });
      setImage(null);
      return;
    }

    dispatch(cmsActions.uploadImageRequest());
    storage
      .ref(`/images/${file.name}`)
      .put(file)
      .on("state_changed", () => {
        storage
          .ref("images")
          .child(file.name)
          .getDownloadURL()
          .then((resp) => {
            dispatch(cmsActions.uploadImageSuccess());
            setImage(resp);
          })
          .catch((err) => {
            dispatch(cmsActions.uploadImageFailure());
          });
      });
  };

  const handlerNews = (values) => {
    dispatch(cmsActions.clear());
    try {
      dispatch(cmsActions.addNewsReq());
      addNews(uuidv4(), values);
      dispatch(cmsActions.addNewsSuccess());
      history.push("/panel");
    } catch (error) {
      dispatch(cmsActions.addNewsFailure());
    }
  };

  const addEvents = async (id, values) => {
    return await firestore
      .collection(CONSTANTS.GENERAL_CONSTANTS.LANG)
      .doc(lang)
      .collection(CONSTANTS.GENERAL_CONSTANTS.EVENTS)
      .doc(id)
      .set({
        type: CONSTANTS.GENERAL_CONSTANTS.EVENTS,
        published: new Date(),
        publishedDate: new Date().toLocaleString(),
        id,
        ...values,
      });
  };

  const handlerEvents = (values) => {
    dispatch(cmsActions.clear());
    try {
      dispatch(cmsActions.addEventsReq());
      addEvents(uuidv4(), values);
      dispatch(cmsActions.addEventsSuccess());
      history.push("/panel");
    } catch (error) {
      dispatch(cmsActions.addEventsFailure());
    }
  };

  const addArticle = async (id, values) => {
    return await firestore
      .collection(CONSTANTS.GENERAL_CONSTANTS.LANG)
      .doc(lang)
      .collection(CONSTANTS.GENERAL_CONSTANTS.BLOG_POSTS)
      .doc(id)
      .set({
        ...values,
        id,
        type: CONSTANTS.GENERAL_CONSTANTS.BLOG_POSTS,
        published: new Date(),
        publishedDate: new Date().toLocaleString(),
      });
  };

  const handlerArticle = (values) => {
    dispatch(cmsActions.clear());
    try {
      dispatch(cmsActions.addArticleReq());
      addArticle(uuidv4(), values);
      dispatch(cmsActions.addArticleSuccess());
      history.push("/panel");
    } catch (error) {
      dispatch(cmsActions.addArticleFailure());
    }
  };

  const fetchCrew = async () => {
    return firestore
      .collection(CONSTANTS.GENERAL_CONSTANTS.LANG)
      .doc(lang)
      .collection(CONSTANTS.GENERAL_CONSTANTS.CREW)
      .onSnapshot((resp) =>
        dispatch(
          fetchActions.getCrewSuccess(resp.docs.map((item) => item.data()))
        )
      );
  };

  return {
    alert,
    isLoading,
    infoContainer,
    setInfoContainer,
    addNews,
    addArticle,
    addEvents,
    handlerNews,
    handlerEvents,
    handlerArticle,
    crew,
    fetchCrew,
    imageChangeHandler,
    isLoading,
    image,
    invalid,
  };
};
