import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Form as F } from "react-bootstrap";

import { Formik } from "formik";
import { loginValidationScheme } from "./validation";
import { auth } from "./../../firebase";
import { FORM_HELPER } from "./utils";
import { userActions, alertActions } from "@actions/index";
import Alert from "./../../../shared/alerts";
import { DefaultLoader } from "./../../../shared/loadings/DefaultLoader";

const LoginForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alert.alert);
  const isLoading = useSelector((state) => state.currentUser.isLoading);
  const validationData = useSelector(
    (state) => state.database.init.auth["sign-in"]?.labels[0]
  );
  const logInData = useSelector(
    (state) => state.database?.init.auth["sign-in"]
  );

  const signin = async (email, password) => {
    return await auth.signInWithEmailAndPassword(email, password);
  };

  const handleSubmit = async (values) => {
    dispatch(alertActions.clear());

    try {
      dispatch(userActions.SignInRequest);
      await signin(values.email, values.password);
      dispatch(userActions.signInSuccess);
      history.push("/dashboard");
    } catch (error) {
      dispatch(alertActions.error(error.message));
    }
  };

  if (isLoading) {
    return <DefaultLoader />;
  }

  return (
    <Formik
      {...{
        initialValues: {},
        validateOnChange: true,
        validationSchema: loginValidationScheme,
        validateOnBlur: true,
        enableReinitialize: true,
        validateOnMount: true,
        onSubmit: (values) => handleSubmit(values),
      }}
    >
      {({ values, errors, isValid, touched, handleChange, handleSubmit }) => (
        <>
          {alert && <Alert />}
          <h2>{logInData?.header}</h2>
          {logInData?.labels.map((item, index) => {
            const { placeholder, type } = item;
            return (
              <div className="form-control" key={index}>
                <input
                  name={FORM_HELPER[type.toUpperCase()]}
                  type={type}
                  id={FORM_HELPER[type.toUpperCase()]}
                  value={values[FORM_HELPER[type.toUpperCase()]]}
                  onChange={handleChange}
                  required
                  placeholder={placeholder}
                />

                {errors[FORM_HELPER[type.toUpperCase()]] ||
                  (touched[FORM_HELPER[type.toUpperCase()]] && (
                    <F.Text className="validation-alert">
                      {errors[FORM_HELPER[type.toUpperCase()]]}
                    </F.Text>
                  ))}
              </div>
            );
          })}
          <button
            {...{
              disabled: !isValid,
              onClick: handleSubmit,
            }}
          >
            {logInData?.buttonTitle}
          </button>
          <div className="auth-control">
            <Link className="create-account-link" to="/sign-up">
              {logInData?.link}
            </Link>
          </div>
        </>
      )}
    </Formik>
  );
};

export default LoginForm;
