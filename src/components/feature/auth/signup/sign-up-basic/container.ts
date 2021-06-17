import { useDispatch } from "react-redux";

import { auth } from "@components/feature/firebase";

import { stateStepsControl } from "@actions/index";

import { toast } from "react-toastify";

export const useSingUpBasicContainer = (): any => {
  const dispatch = useDispatch();
  const createAccount = async ({ email, password }) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      await dispatch(stateStepsControl.updateSteps(1));
    } catch (error) {
      toast.error(error);
    }
  };
  return { createAccount };
};
