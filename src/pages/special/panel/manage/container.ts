import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { firestore } from "@components/feature/firebase";
import { NCMS } from "src/core/types";

import { BUTTON_ACTIONS } from "../utils";

import * as C from "@utils/constants";
import { fetchActions } from "@actions/index";

export const useManageContainer = (): NCMS.TManageContainer => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const currentPathname = location.pathname.split("/");
  const currentPage = currentPathname[currentPathname.length - 1];
  const PAGE_INDEX = `ADD_NEW_${currentPage.toUpperCase()}_ROUTE`;

  const { news, events, articles, isLoading } = useSelector(
    ({ database }: RootStateOrAny) => database
  );
  const { language } = useSelector(({ general }: RootStateOrAny) => general);

  const [selectedRowsId, setSelectedRowsId] = useState<string[]>([]);
  const [selectedRowId, setSelectedRowId] = useState<string>("");
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [isAll, setIsAll] = useState<boolean>(false);

  const handleEdit = async (id: string, type: string): Promise<void> => {
    history.push(`/panel/edit?type=${type}&id=${id}`);
  };

  const handleButtonActions = (action: string): void => {
    switch (action) {
      case BUTTON_ACTIONS.DELETE:
        selectedRowsId.length > 0 || selectedRowId
          ? setShowAlert(true)
          : toast.info(C.GENERAL_CONSTANTS.NOTHING_TO_DELETE_MESSAGE, {
              position: toast.POSITION.TOP_CENTER,
            });
        break;

      case BUTTON_ACTIONS.EDIT:
        handleEdit(selectedRowId as string, currentPage as string);
        break;
      case BUTTON_ACTIONS.IS_ALL:
        setSelectedRowsId([]);
        setIsAll(!isAll);
        break;
      case BUTTON_ACTIONS.ADD:
        history.push(C.ROUTE_PATHS[PAGE_INDEX]);
        break;
      default:
        return;
    }
  };

  const getEvents = async (): Promise<() => void> => {
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

  const removeItem = async (currentPage: string, id: string): Promise<void> => {
    return await firestore
      .collection(C.GENERAL_CONSTANTS.LANG)
      .doc(C.GENERAL_CONSTANTS.CHANGE_LANGUAGE_TO.EN)
      .collection(currentPage)
      .doc(id)
      .delete();
  };

  const deleteSelections = (): void => {
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

  const isEditable = (selectedRowId: string): boolean => {
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
