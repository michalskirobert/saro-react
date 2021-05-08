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
        modified: CONSTANTS.GENERAL_CONSTANTS.NOT_APPLICABLE_MESSAGE,
        id,
      });
  };

  const handleSubmit = async (values) => {
    try {
      dispatch(cmsActions.addNewItemRequest());
      await addNewItem(uuidv4(), values);
      dispatch(cmsActions.addNewItemSuccess());
      toast.success(CONSTANTS.GENERAL_CONSTANTS.ADD_NEW_ITEM_SUCCESS_MESSAGE);
      history.push(
        CONSTANTS.ROUTE_PATHS[`MANAGE_${currentPage.toUpperCase()}_ROUTE`]
      );
    } catch (error) {      
      dispatch(cmsActions.addNewItemFailure());
      toast.error(CONSTANTS.GENERAL_CONSTANTS.FAILURE_MESSAGE)
    }
  };

  // TO DO 
  //Musisz dodać do setValue prev state i dodać jako nowy state z komponentem czyli np
  // setValue(prev => {...prev, value: `<img src="${img} alt=${img.name} />"`})

  const imageChangeHandler = async (e) => {
    const file = e.target.files[0]   
    if(!file){
      setImage("")
      toast.error(CONSTANTS.GENERAL_CONSTANTS.FAILURE_MESSAGE)
      return
    } 
    if(file?.type !== "image/png"){
      setImage("")
      toast.error(CONSTANTS.GENERAL_CONSTANTS.INVALID_FILE_FORMAT)
      return
    }  
    file && uploadImage(file)       
  }

  const uploadImage = async (file) => {
    dispatch(cmsActions.uploadImageRequest())
    try {
      const fileRef = storage.ref(`/images/${currentPage}/${file?.name}`)
      await fileRef.put(file)
      setImage(await fileRef.getDownloadURL()) 
      dispatch(cmsActions.uploadImageSuccess())  
    } catch (error) {
      dispatch(cmsActions.uploadImageFailure())
      toast.error(CONSTANTS.GENERAL_CONSTANTS.FAILURE_MESSAGE)
    }   
  }

  const deleteImage = async (file) => {
    try {
      await storage.refFromURL(file).delete();     
      toast.success("file deleted")   
    } catch (error) {     
      toast.error(CONSTANTS.GENERAL_CONSTANTS.FAILURE_MESSAGE)
    }   finally {
      setImage("")  
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
