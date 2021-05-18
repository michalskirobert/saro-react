import { useEffect, useState } from "react";
import uuidv4 from "react-uuid";
import { useLocation } from "react-router-dom";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

import { cmsActions, fetchActions } from "@actions";
import * as CONSTANTS from "@utils/constants";
import { firestore, storage } from "@components/feature/firebase";

import { NCMS } from "src/core/types";

import moment from "moment";

export const useAddContainer = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  const currentPathname: string[] = location.pathname.split("/");
  const currentPage: string = currentPathname[currentPathname.length - 1];

  const { language: lang } = useSelector(
    ({ general }: RootStateOrAny) => general
  );
  const { crew, isLoading } = useSelector(
    ({ database }: RootStateOrAny) => database
  );
  const { status } = useSelector(
    ({ currentUser }: RootStateOrAny) => currentUser
  );
  const [value, setValue] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);
  const [image, setImage] = useState<string>("");
  const [images, setImages] = useState<string[]>([]);

  const addNewItem = async (
    id: string,
    values: Partial<NCMS.TDefaultBodyValue>
  ) => {
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

  const handleSubmit = async (values: Partial<NCMS.TDefaultBodyValue>) => {
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
      toast.error(CONSTANTS.GENERAL_CONSTANTS.FAILURE_MESSAGE);
    }
  };

  const uploadImage = async (file: any, multiple?: boolean): Promise<void> => {
    dispatch(cmsActions.uploadImageRequest());
    try {
      const fileRef = storage.ref(`/images/${currentPage}/${file?.name}`);
      await fileRef.put(file);
      multiple
        ? setImages([...images, String(fileRef.getDownloadURL())])     
        : setImage(String(fileRef.getDownloadURL()));
      dispatch(cmsActions.uploadImageSuccess());
      toast.success(
        CONSTANTS.GENERAL_CONSTANTS.UPLOAD_NEW_FILE_SUCCESS_MESSAGE
      );
    } catch (error) {
      dispatch(cmsActions.uploadImageFailure());
      toast.error(CONSTANTS.GENERAL_CONSTANTS.FAILURE_MESSAGE);
    }
  };

  const imageChangeHandler = async (
    event: React.SyntheticEvent<EventTarget>,
    multiple?: boolean
  ): Promise<void> => { 
    const files: any[] = Array.from((event.target as any).files); 
    if (!files) {
      multiple ? setImages([]) : setImage("");
      toast.error(CONSTANTS.GENERAL_CONSTANTS.FAILURE_MESSAGE);
      return;
    } else if (!multiple) {
      if (files[0]?.type !== "image/png") {
        setImage("");
        toast.error(CONSTANTS.GENERAL_CONSTANTS.INVALID_FILE_FORMAT);
        return;
      }
      uploadImage(files[0]);
      return;
    }
    files.forEach((file) => {
      if (file?.type !== "image/png") {
        setImages([]);
        toast.error(CONSTANTS.GENERAL_CONSTANTS.INVALID_FILE_FORMAT);
        return;
      }
      uploadImage(file, multiple);
    });
  };


  const deleteImage = async (file: string): Promise<void> => {
    try {
      await storage.refFromURL(file).delete();
      toast.success(CONSTANTS.GENERAL_CONSTANTS.FILE_REMOVED_MESSAGE);
    } catch (error) {
      toast.error(CONSTANTS.GENERAL_CONSTANTS.FAILURE_MESSAGE);
    } finally {
      setImage("");
    }
  };

  const fetchCrew = async (): Promise<() => void> => {
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

  const fetchCategories = async (): Promise<() => void> => {
    return firestore
      .collection(CONSTANTS.GENERAL_CONSTANTS.LANG)
      .doc(lang)
      .onSnapshot((resp) => {
        setCategories((resp as any).data().blogCategories);
      });
  };

  const handleEditorChange = (value: string): void => {
    setValue(value);
  };

  useEffect(() => {
    fetchCategories();
    fetchCrew();
    // eslint-disable-next-line
  }, []);

  return {
    isLoading,
    handleSubmit,
    crew,
    categories,
    fetchCrew,
    imageChangeHandler,
    image,
    deleteImage,
    images,
    setImages,
    handleEditorChange,
    value,
    status,
    addNewItem,
  };
};
