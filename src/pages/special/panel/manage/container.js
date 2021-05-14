import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { firestore } from "@fire";
import { useEdit } from "./../../edit/container";

import { BUTTON_ACTIONS } from "./../utils";

import { fetchActions } from "@actions";
import * as C from "@utils/constants";

export const useManageContainer = () => {
  const { handleEdit } = useEdit();
  const history = useHistory();
  const location = useLocation();
  const { language } = useSelector(({ general }) => general);
  const dispatch = useDispatch();

  const currentPathname = location.pathname.split("/");
  const currentPage = currentPathname[currentPathname.length - 1];

  const { news, events, articles, isLoading } = useSelector(
    ({ database }) => database
  );

  const [selectedRowsId, setSelectedRowsId] = useState([]);
  const [selectedRowId, setSelectedRowId] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const [isAll, setIsAll] = useState(false);

  const handleButtonActions = (action) => {
    switch (action) {
      case BUTTON_ACTIONS.DELETE:
        selectedRowsId.length > 0 || selectedRowId
          ? setShowAlert(true)
          : toast.info(C.GENERAL_CONSTANTS.NOTHING_TO_DELETE_MESSAGE, {
              position: toast.POSITION.TOP_CENTER,
            });
        break;

      case BUTTON_ACTIONS.EDIT:
        handleEdit(selectedRowId, currentPage);
        break;
      case BUTTON_ACTIONS.IS_ALL:
        setSelectedRowsId([]);
        setIsAll(!isAll);
        break;
      case BUTTON_ACTIONS.ADD:
        history.push(
          C.ROUTE_PATHS[`ADD_NEW_${currentPage.toUpperCase()}_ROUTE`]
        );
        break;
      default:
        return;
    }
  };

  const getEvents = async () => {
    return firestore
      .collection(C.GENERAL_CONSTANTS.LANG)
      .doc(language)
      .collection(C.GENERAL_CONSTANTS.EVENTS)
      .onSnapshot((resp) =>
        dispatch(
          fetchActions.getEventsSuccess(resp.docs.map((item) => item.data()))
        )
      );
  };

  const deleteSelections = () => {
    if (isAll && selectedRowsId.length > 0) {
      selectedRowsId.forEach((id) => removeItem(currentPage, id));
    }
    if (!isAll && selectedRowId) {
      removeItem(currentPage, selectedRowId);
    }

    setShowAlert(false);
    toast.success(C.GENERAL_CONSTANTS.DELETE_ITEMS_SUCCESS_MESSAGE, {
      autoClose: 2000,
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const removeItem = async (currentPage, id) => {
    return await firestore
      .collection(C.GENERAL_CONSTANTS.LANG)
      .doc(C.GENERAL_CONSTANTS.CHANGE_LANGUAGE_TO.EN)
      .collection(currentPage)
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

  useEffect(() => {
    (async () => getEvents())();
  }, []);

  return {
    isEditable,
    news,
    events,
    articles,
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
    isLoading,
  };
};
