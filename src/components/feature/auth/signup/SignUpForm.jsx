import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import { Formik, Form } from "formik";

import { FORM_HELPER } from "./utils";
import { signUpValidationScheme } from "./validation";
import { auth } from "./../../firebase";
import { userActions } from "../../../../store/actions";
import { ReactComponent as ArrowBack } from "../../../../assets/images/components/forms/arrowBack.svg";
import { FirstStep } from "./FirstStep";
import { SecondStep } from "./SecondStep";

const SignUpForm = () => {
  const [step, setStep] = useState(1);

  const history = useHistory();
  const dispatch = useDispatch();

  const handlerSubmit = async (userData) => {
    if (step === 2) {
      try {
        dispatch(userActions.signUpRequest());
        await auth
          .createUserWithEmailAndPassword(userData.email, userData.password)
          .then((resp) => dispatch(userActions.signUp(resp.user.providerData)))
        history.push("/");
      } catch (error) {
        console.error(error);
      }
    } else {
      setStep(step + 1);
      // actions.setTouched({});
      // actions.setSubmitting(false);
    }
  };

  return (
    <Formik
      {...{
        initialValues: { gender: "male", nativeLang: "english", studyingLang: "polish", hobbies: "", about:"" },
        validateOnChange: true,
        validationSchema: signUpValidationScheme,
        onSubmit: (values) => handlerSubmit(values),
      }}
    >
      {({ values, errors, isValid, handleChange, handleSubmit }) => (
        <Form>
          {step !== 1 ? (
            <button
              className="arrow-back-icon"
              type="button"
              onClick={() => setStep(step - 1)}
            >
              <ArrowBack />
            </button>
          ) : null}
          <h2>Sign Up</h2>
          {step === 1 ? (
            <FirstStep
              handleChange={handleChange}
              values={values}
              errors={errors}
            />
          ) : null}
          {step === 2 ? (
            <SecondStep
              handleChange={handleChange}
              values={values}
              errors={errors}
            />
          ) : null}
          <button
            type="submit"
            tabindex="4"
            onClick={handleSubmit}
            disabled={!isValid}
          >
            {step === 2 ? "Sign Up" : "Next"}
          </button>
          <div className="auth-control">
            <p style={{ display: "inline" }}>Do you have an account?</p>
            <Link to="/sign-in">Log-in</Link>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
