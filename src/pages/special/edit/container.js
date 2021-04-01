import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { cmsActions, fetchActions } from "../../../store/actions";
import { GENERAL_CONSTANTS } from "../../../utils/constants";
import { firestore } from "../../../components/feature/firebase";

export const useEdit = () => {
  const alert = useSelector((state) => state.CMS.alert);
  const [type, setType] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const [editableContainer, setEditableContainer] = useState({});

  const lang = useSelector((state) => state.general.language);
  const editable = useSelector((state) => state.CMS.edit);
  const crew = useSelector((state) => state.database.crew);

  const getEvent = (id, type) => {
    try {
      firestore
        .collection(GENERAL_CONSTANTS.LANG)
        .doc(lang)
        .collection(type)
        .doc(id)
        .onSnapshot((doc) => setEditableContainer(doc.data()));
    } catch (error) {}
  };

  const updateEvent = async (id, type) => {
    return await firestore
      .collection(GENERAL_CONSTANTS.LANG)
      .doc(lang)
      .collection(type)
      .doc(id)
      .update({
        id,
        type: GENERAL_CONSTANTS.EVENTS,
        title: editableContainer.title,
        imgURL: editableContainer.imgURL || "https://via.placeholder.com/50",
        content: editableContainer.content,
        date: editableContainer.date,
        time: editableContainer.time,
        crew: editableContainer.crew,
        city: editableContainer.city,
        place: editableContainer.place,
        link: editableContainer.link,
        language: editableContainer.language,
        published: new Date(),
        publishedDate: new Date().toLocaleString(),
      });
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

  const handlerSubmit = async (type, id) => {
    dispatch(cmsActions.clear());
    switch (type) {
      case GENERAL_CONSTANTS.EVENTS:
        try {
          dispatch(cmsActions.addEventsReq());
          updateEvent(id, type);
          dispatch(cmsActions.addEventsSuccess());
          history.push(`/panel`);
        } catch (error) {
          dispatch(cmsActions.addEventsFailure());
        }
        break;
      default:
        return;
    }
  };

  
  const fetchCrew = async () => {
    return firestore
      .collection(GENERAL_CONSTANTS.LANG)
      .doc(lang)
      .collection(GENERAL_CONSTANTS.CREW)
      .onSnapshot((resp) =>
        dispatch(
          fetchActions.getCrewSuccess(resp.docs.map((item) => item.data()))
        )
      );
  };

  const goBack = () => {
    history.goBack()
  }

  return {
    fetchCrew,
    crew,
    alert,
    goBack,
    handleEdtiorChange,
    handlerSubmit,
    getEvent,
    handleEdit,
    editableContainer,
    setEditableContainer,
    editable,
  };
};
