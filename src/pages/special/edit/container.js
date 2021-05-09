import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { toast } from "react-toastify";

import { cmsActions, fetchActions, alertActions } from "@actions";
import { firestore } from "@components/feature/firebase";

import moment from "moment";

import * as CONSTANTS from "@utils/constants";

export const useEdit = () => {
  const query = new URLSearchParams(useLocation().search);
  const type = query.get(CONSTANTS.GENERAL_CONSTANTS.TYPE);
  const id = query.get(CONSTANTS.GENERAL_CONSTANTS.ID);

  const userStatus = useSelector((state) => state?.currentUser?.status);

  const alert = useSelector((state) => state.CMS.alert);
  const history = useHistory();
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.general.language);
  const database = useSelector((state) => state.database);
  const footer = database.init.footer;

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
    dispatch(alertActions.clear());
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
      toast.success(CONSTANTS.GENERAL_CONSTANTS.UPDATE_ITEM_SUCCESS_MESSAGE)
      history.push("/panel")      
      
    } catch (error) {
      dispatch(cmsActions.updateFailure);
      toast.error(CONSTANTS.GENERAL_CONSTANTS.FAILURE_MESSAGE)
    }
  };

  const handleEdit = async (id, type) => {
    history.push(`/panel/edit?type=${type}&id=${id}`);
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

  useEffect(() => {
    getDatabase(id, type);
    fetchCrew();
    // eslint-disable-next-line
  }, []);

  return {
    fetchCrew,
    alert,
    handleEdit,
    database,
    getDatabase,
    updateDatabase,
    footer,
    type,
    userStatus,
  };
};
