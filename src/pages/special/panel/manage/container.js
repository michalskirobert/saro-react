import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import { firestore } from "@fire";
import { useContainer } from "./../../../public/home/container";
import { useEdit } from "./../../edit/container";

import { BUTTON_ACTIONS } from "./../utils";
import * as C from "@utils/constants";

export const useManageContainer = () => {
  const { getNews, getEvents, getPosts } = useContainer();
  const { handleEdit } = useEdit();

  const newsItems = useSelector((state) => state.database.news);
  const eventItems = useSelector((state) => state.database.events);
  const articleItems = useSelector((state) => state.database.posts); 

  const [key, setKey] = useState("");

  const [selectedRowsId, setSelectedRowsId] = useState([]);
  const [selectedRowId, setSelectedRowId] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const [isAll, setIsAll] = useState(false);

  const handleButtonActions = (action) => {
    switch (action) {
      case BUTTON_ACTIONS.DELETE:
        selectedRowsId.length > 0 || selectedRowId
          ? setShowAlert(true)
          : toast.info("Nothing to delete.", {
              position: toast.POSITION.TOP_CENTER,
            });
        break;

      case BUTTON_ACTIONS.EDIT:
        handleEdit(selectedRowId, key);
        break;
      case BUTTON_ACTIONS.IS_ALL:
        setSelectedRowsId([selectedRowId]);
        setIsAll(!isAll);
        break;
      default:
        return;
    }
  };
  const onChangePage = () => {
    return;
  };
  const deleteSelections = () => {
    selectedRowId
      ? removeItem(key, selectedRowId)
      : selectedRowsId.forEach((id) => removeItem(key, id));
    setShowAlert(false);
    toast.success("Items deleted", {
      autoClose: 2000,
      position: toast.POSITION.TOP_CENTER,      
    })
  };


  const removeItem = async (type, id) => {
    return await firestore
      .collection(C.GENERAL_CONSTANTS.LANG)
      .doc(C.GENERAL_CONSTANTS.CHANGE_LANGUAGE_TO.EN)
      .collection(type)
      .doc(id)
      .delete();
  };

  const isEditable = (selectedRowId) => {
    if (selectedRowsId.length > 1) {
      return true;
    } else if (!selectedRowId) {
      return true;
    }
    return false;
  };

  return { 
    isEditable,
    key,
    setKey,
    getNews,
    getEvents,
    getPosts,
    newsItems,
    eventItems,
    articleItems,    
    onChangePage,
    selectedRowsId,
    setSelectedRowsId,
    selectedRowId,
    setSelectedRowId,
    showAlert,
    setShowAlert,
    handleButtonActions,
    removeItem,
    handleEdit,
    deleteSelections,
    isAll,
    setIsAll,  
  };
};
