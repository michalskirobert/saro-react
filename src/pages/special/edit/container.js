import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { cmsActions, fetchActions } from "../../../store/actions";
import { firestore } from "@components/feature/firebase";

import * as CONSTANTS from "@utils/constants";

export const useEdit = () => {
  const alert = useSelector((state) => state.CMS.alert);
  const [type, setType] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const [editableContainer, setEditableContainer] = useState({});

  const lang = useSelector((state) => state.general.language);
  const editable = useSelector((state) => state.CMS.edit);
  const database = useSelector((state) => state.database);

  const getDatabase = (id, type) => {
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

  const updateDatabase = async (id, type, values) => {
    dispatch(cmsActions.clear());
    console.log("works");
    try {
      dispatch(cmsActions.updateRequest);
      await firestore
        .collection(CONSTANTS.GENERAL_CONSTANTS.LANG)
        .doc(lang)
        .collection(type)
        .doc(id)
        .update({
          ...values,
          published: new Date(),
          publishedDate: new Date().toLocaleString(),
        });
      dispatch(cmsActions.updateSuccess);
      history.push("/panel");
    } catch (error) {
      console.error(error);
      dispatch(cmsActions.updateFailure);
    }
  };

  const handleEdit = async (id, type) => {
    history.push(`/panel/edit?type=${type}&id=${id}`);
  };

  const handleEdtiorChange = (e) => {
    const value = e.target.getContent();
    setEditableContainer((prevState) => {
      return { ...prevState, content: value };
    });
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

  const goBack = () => {
    history.goBack();
  };

  return {
    fetchCrew,
    alert,
    goBack,
    handleEdtiorChange,
    handleEdit,
    editableContainer,
    setEditableContainer,
    editable,
    database,
    getDatabase,
    updateDatabase,
  };
};
