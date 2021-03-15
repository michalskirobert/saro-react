import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { cmsActions } from "../../../utils/_actions";
import { generalConstants } from "../../../utils/_constants";
import { firestore } from "../../../components/feature/firebase";
import { useHistory } from "react-router";

export const useEdit = () => {
  const alert = useSelector((state) => state.CMS.alert);
  const [type, setType] = useState("");
  const history = useHistory();

  const [editableContainer, setEditableContainer] = useState({
    id: "",
    title: "",
    city: "",
    place: "",
    date: "",
    time: "",   
    imgURL: "",
    link: "",
    crew: "",   
    language: "",   
    category: "", 
    content: "",
    
  }); //zróbcie pod to, za dużo wprowadzania... po co marnować czas ;) nałóżcie name dla inputów itd..

  const dispatch = useDispatch();
  const lang = useSelector((state) => state.general.language);
  const editable = useSelector((state) => state.CMS.edit);

  const getEvent = async (id, type) => {
    return await firestore
      .collection(generalConstants.LANG)
      .doc(lang)
      .collection(generalConstants.EVENTS)
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setType(type)
          const { id, title, city, place, date, time, imgURL, link, crew, language, content} = doc.data();
          setEditableContainer(prevState => {
            return {...prevState, id, title, city, place, date, time, imgURL, link, crew, language, content}
          })
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
        title: editableContainer.title,
        imageURL: editableContainer.imgURL,
        content: editableContainer.content,
        date: editableContainer.date,
        time: editableContainer.time,
        crew: editableContainer.crew,
        city: editableContainer.city,
        place: editableContainer.place,
        link: editableContainer.link,
        language: editableContainer.language,
        published: new Date(),
      });
  };


  const handleEdit = async (id, type) => {
    await getEvent(id, type);
    history.push("/panel/edit");
  };

  const handleEdtiorChange = (e) => {
    const value = e.target.getContent()
    setEditableContainer(prevState=> {
      return {...prevState, content: value}
    });
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    dispatch(cmsActions.clear());
    switch (type) {
      case generalConstants.EVENTS:
        try {
          dispatch(cmsActions.addEventsReq());
          updateEvent(editableContainer.id);
          dispatch(cmsActions.addEventsSuccess());
        } catch (error) {
          dispatch(cmsActions.addEventsFailure());
        }
        break;
      default:
        return;
    }
  };

  return {
    alert,
    handleEdtiorChange,
    handlerSubmit,
    getEvent,
    handleEdit,
    editableContainer,
    setEditableContainer,
    editable,
  };
};
