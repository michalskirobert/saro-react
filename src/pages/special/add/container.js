import { useState, useEffect } from "react";
import uuidv4 from "react-uuid";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { FORMIK_HELPER } from "./utils";

import { cmsActions, fetchActions } from "@actions";
import * as CONSTANTS from "@utils/constants";
import { firestore, storage } from "@components/feature/firebase";

export const useContainer = () => {
  const alert = useSelector((state) => state.CMS.alert);
  const isLoading = useSelector((state) => state.CMS.isLoading);
  const lang = useSelector((state) => state.general.language);
  const crew = useSelector((state) => state.database.crew);
  const [imgName, setImgName] = useState("");
  const [imagesName, setImagesName] = useState("");
  const [invalid, setInvalid] = useState({ errorMsg: "" });
  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState();
  const [images, setImages] = useState();
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
        imagesURL: images,
        type: CONSTANTS.GENERAL_CONSTANTS.NEWS,
        published: new Date(),
        publishedDate: new Date().toLocaleString(),
        id,
      });
  };

  const imageChangeHandler = (e, type) => {
    const file = e.currentTarget.files[0];
    console.log({ file });
    if (type !== FORMIK_HELPER.IMAGES_URL) {
      uploadImage(file);
      return;
    }
    uploadImage(file, FORMIK_HELPER.IMAGES_URL);
  };

  const uploadImage = async (file, type) => {
    let uploadFile = `/images/${
      type === FORMIK_HELPER.IMAGES_URL ? imagesName.type : imgName.type
    }/${file.name}`;

    // if (file.type !== "image/png") {
    //   setInvalid({
    //     [`errorMsg-${type}`]: "Invalid file format. Choose jpg/png",
    //   });
    //   !image && setImage(null);
    //   !images && setImages(null);
    //   return;
    // } else if (!type) {
    //   setImgName(file.name);
    //   setInvalid({});
    // }

    // setImagesName(file.name);
    // setInvalid({});

    dispatch(cmsActions.uploadImageRequest());

    storage
      .ref(uploadFile)
      .put(file)
      .on("state_changed", () => {
        type === FORMIK_HELPER.IMAGES_URL
          ? setImagesName({ ...imagesName, name: file.name })
          : setImgName({ ...imgName, name: file.name });
        console.log({ uploadFile });
        storage
          .ref(
            `/images/${
              type === FORMIK_HELPER.IMAGES_URL ? imagesName.type : imgName.type
            } `
          )
          .child(file.name)
          .getDownloadURL()
          .then((resp) => {
            dispatch(cmsActions.uploadImageSuccess());
            type === FORMIK_HELPER.IMAGES_URL
              ? setImages(resp)
              : setImage(resp);
          })
          .catch(() => {
            dispatch(cmsActions.uploadImageFailure());
          });
      });
  };

  const deleteImage = async (file) => {
    return await storage.refFromURL(file).delete();
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
        imgURL: image,
        imagesURL: images,
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

  const fetchCategories = () => {
    firestore
      .collection(CONSTANTS.GENERAL_CONSTANTS.LANG)
      .doc(lang)
      .onSnapshot((resp) => {
        setCategories(resp.data().blogCategory);
      });
  };

  useEffect(() => {
    fetchCategories();
    fetchCrew();
    // eslint-disable-next-line
  }, []);

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
    categories,
    fetchCrew,
    imageChangeHandler,
    image,
    invalid,
    deleteImage,
    setImgName,
    imgName,
    imagesName,
    setImagesName,
    images,
    setImages,
  };
};
