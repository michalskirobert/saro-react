import { Dispatch } from "redux";

import * as C from "@utils/constants";

const setLoading = (payload: boolean) => (dispatch: Dispatch) =>
  dispatch({ type: C.GENERAL_CONSTANTS.IS_LOADING, payload });

export const generalActions = {
  setLoading,
};
