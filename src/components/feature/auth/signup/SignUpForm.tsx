import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { Formik } from "formik";

import { signUpValidationScheme } from "./validation";
import { auth } from "../../firebase";
import { userActions } from "@actions";
import { ReactComponent as ArrowBack } from "@assets/images/components/forms/arrowBack.svg";
import { FirstStep } from "./FirstStep";
import { SecondStep } from "./SecondStep";
import { useContainerSignUp } from "./container";

const SignUpForm = () => {
  const [step, setStep] = useState(1);

  const { handleSubmit } = useContainerSignUp();
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <Formik
      {...{
        initialValues: {},
        validateOnChange: true,
        validateOnMount: true,
        validationSchema: signUpValidationScheme,
        onSubmit: (values) => console.log(values),
      }}
    >
      {({
        values,
        errors,
        isValid,
        handleChange,
        handleSubmit,
        touched,
        setFieldValue,
      }) => (
        <>
          {step !== 1 && (
            <button
              className={"arrow-back-icon back"}
              type={"button"}
              onClick={() => setStep(step - 1)}
            >
              <ArrowBack />
            </button>
          )}
          <h2>Sign Up</h2>
          {step === 1 && (
            <FirstStep
              handleChange={handleChange}
              values={values}
              errors={errors}
              touched={touched}
            />
          )}
          {step === 2 && (
            <SecondStep
              setFieldValue={setFieldValue}
              handleChange={handleChange}
              values={values}
              errors={errors}
              touched={touched}
            />
          )}
          <button
            type={"submit"}
            tabIndex={"4"}
            onClick={handleSubmit}
            disabled={isValid}
          >
            {step === 2 ? "Sign Up" : "Next"}
          </button>
          <div className={"auth-control"}>
            <p style={{ display: "inline" }}>Do you have an account?</p>
            <Link to={"/sign-in"}>Log-in</Link>
          </div>
        </>
      )}
    </Formik>
  );
};

export default SignUpForm;
