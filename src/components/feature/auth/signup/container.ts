import { useDispatch, useSelector } from "react-redux";
import { auth, firestore } from "@components/feature/firebase";
import { useHistory } from "react-router-dom";

import { stateStepsControl, userActions } from "@actions/index";

export const useContainerSignUp = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const steps = useSelector((state) => state.stateStepsControl);

  const loginFirstStep = async () => {
    try {
      dispatch(userActions.signUpRequest());
      await auth
        .createUserWithEmailAndPassword(
          steps.stateStepsControl["step-1"].email,
          steps.stateStepsControl["step-1"].password
        )
        .then((resp) => dispatch(userActions.signUp(resp.user.providerData)));
      history.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  const loginSecondStep = async () => {
    try {
    } catch (error) {}
  };

  const handleSubmit = async () => {
    switch (steps.stateStepsControl) {
      case "step-1":
        await loginFirstStep();
        break;
      case "step-2":
        loginSecondStep();
        break;
    }
  };

  return {
    handleSubmit,
  };
};
