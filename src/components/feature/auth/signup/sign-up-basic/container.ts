import { useDispatch } from "react-redux";
import { auth } from "@components/feature/firebase";
import { stateStepsControl } from "@actions/index";

export const useSingUpBasicContainer = (): any => {
  const dispatch = useDispatch();
  const createAccount = async ({ email, password }) => {
    console.log("next clicked");
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      await dispatch(stateStepsControl.updateSteps(1));
    } catch (error) {
      console.log(error);
    }
  };
  return { createAccount };
};
