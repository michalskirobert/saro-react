import { useState, useEffect } from "react";
import uuidv4 from "react-uuid";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { FORMIK_HELPER } from "./utils";

import { cmsActions, fetchActions } from "@actions";
import * as CONSTANTS from "@utils/constants";
import { firestore, storage } from "@components/feature/firebase";

import moment from "moment";

import { toast } from "react-toastify";

export const useContainer = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const currentPathname = location.pathname.split("/");
  const currentPage = currentPathname[currentPathname.length - 1];

  const alert = useSelector((state) => state.CMS.alert);
  const isLoading = useSelector((state) => state.CMS.isLoading);
  const lang = useSelector((state) => state.general.language);
  const crew = useSelector((state) => state.database.crew);
  const [value, setValue] = useState("");
  const [imgName, setImgName] = useState("");
  const [imagesName, setImagesName] = useState("");
  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState("");
  const [images, setImages] = useState("");
  const [infoContainer, setInfoContainer] = useState("");

  const addNewItem = async (id, values) => {
    return await firestore
      .collection(CONSTANTS.GENERAL_CONSTANTS.LANG)
      .doc(lang)
      .collection(currentPage)
      .doc(id)
      .set({
        ...values,
        imgURL: image ?? "",
        imagesURL: images ?? "",
        type: currentPage,
        published: moment().toISOString(),
        modified: "N/A",
        id,
      });
  };

  const handleSubmit = async (values) => {
    try {
      dispatch(cmsActions.addNewItemRequest());
      await addNewItem(uuidv4(), values);
      dispatch(cmsActions.addNewItemSuccess());
      toast.success("Event has been successfully added");
      history.push(
        CONSTANTS.ROUTE_PATHS[`MANAGE_${currentPage.toUpperCase()}_ROUTE`]
      );
    } catch (error) {
      dispatch(cmsActions.addNewItemFailure());
    }
  };

  const imageChangeHandler = (e, type) => {
    const file = e.currentTarget.files[0];
    if (type !== FORMIK_HELPER.IMAGES_URL) {
      uploadImage(file);
      return;
    }
    uploadImage(file, FORMIK_HELPER.IMAGES_URL);
  };

  const uploadImage = async (file, type) => {
    //Musisz dodać do setValue prev state i dodać jako nowy state z komponentem czyli np
    // setValue(prev => {...prev, value: `<img src="${img} alt=${img.name} />"`})
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
        setCategories(resp.data().blogCategories);
      });
  };

  const handleEditorChange = (value) => {
    setValue(value);
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
    handleSubmit,
    crew,
    categories,
    fetchCrew,
    imageChangeHandler,
    image,
    deleteImage,
    setImgName,
    imgName,
    imagesName,
    setImagesName,
    images,
    setImages,
    handleEditorChange,
    value,
    addNewItem,
  };
};
