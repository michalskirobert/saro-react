import { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { toast } from "react-toastify";

import { cmsActions, fetchActions } from "@actions";
import { firestore, storage } from "@components/feature/firebase";

import { NCMS } from "src/core/types";

import moment from "moment";

import * as CONSTANTS from "@utils/constants";

export const useEditContainer = () => {
  const query: URLSearchParams = new URLSearchParams(useLocation().search);
  const type = String(query.get(CONSTANTS.GENERAL_CONSTANTS.TYPE));
  const id = String(query.get(CONSTANTS.GENERAL_CONSTANTS.ID));

  const history = useHistory();
  const dispatch = useDispatch();

  const { status } = useSelector(
    ({ currentUser }: RootStateOrAny) => currentUser
  );
  const { language: lang } = useSelector(
    ({ general }: RootStateOrAny) => general
  );
  const database = useSelector(({ database }: RootStateOrAny) => database);
  const [categories, setCategories] = useState<string[]>([]);
  const [image, setImage] = useState<string>("");
  const [images, setImages] = useState<string[]>([]);

  const getEditedItem = async (id: string, type: string): Promise<void> => {
    try {
      firestore
        .collection(CONSTANTS.GENERAL_CONSTANTS.LANG)
        .doc(lang)
        .collection(type)
        .doc(id)
        .onSnapshot((doc) =>
          dispatch(
            fetchActions[`get${type[0].toUpperCase() + type.slice(1)}Success`](
              doc.data()
            )
          )
        );
    } catch (error) {}
  };

  const updateEditedItem = async (
    id: string,
    type: string,
    values: Partial<NCMS.TDefaultBodyValue>
  ): Promise<void> => {
    try {
      dispatch(cmsActions.updateRequest());
      await firestore
        .collection(CONSTANTS.GENERAL_CONSTANTS.LANG)
        .doc(lang)
        .collection(type)
        .doc(id)
        .update({
          ...values,
          modified: moment().toISOString(),
        });
      dispatch(cmsActions.updateSuccess());
      toast.success(CONSTANTS.GENERAL_CONSTANTS.UPDATE_ITEM_SUCCESS_MESSAGE);
      history.push("/panel");
    } catch (error) {
      dispatch(cmsActions.updateFailure());
      toast.error(CONSTANTS.GENERAL_CONSTANTS.FAILURE_MESSAGE);
    }
  };

  const handleEdit = async (id: string, type: string): Promise<void> => {
    history.push(`/panel/edit?type=${type}&id=${id}`);
  };

  const uploadImage = async (file: any, multiple?: boolean): Promise<void> => {
    dispatch(cmsActions.uploadImageRequest());
    try {
      const fileRef = storage.ref(`/images/${type}/${file?.name}`);
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

  useEffect(() => {
    getEditedItem(id as string, type as string);
    fetchCrew();
    fetchCategories();
    // eslint-disable-next-line
  }, []);

  return {
    handleEdit,
    database,
    getEditedItem,
    updateEditedItem,
    type,
    status,
    categories,
    image,
    images,
    imageChangeHandler,
    deleteImage,
    fetchCrew,
  };
};
