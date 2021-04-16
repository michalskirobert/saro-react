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
  const logInData = useSelector((state) => state.database.init.auth["sign-in"]);

  const signin = async (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
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
        validationSchema: loginValidationScheme(
          validationData?.invalid,
          validationData?.valid
        ),
        validateOnMount: true,
        onSubmit: (values) => handleSubmit(values),
      }}
    >
      {({ values, errors, isValid, touched, handleChange, handleSubmit }) => (
        <>
          {alert && <Alert />}
          <h2>{logInData?.header}</h2>
          <div className="form-control">
            <label htmlFor="email" className="label"></label>
            <input
              name="email"
              type="email"
              id="email"
              value={values[FORM_HELPER.EMAIL]}
              onChange={handleChange}
              required
              placeholder="jane@example.com"
            />

            {errors[FORM_HELPER.EMAIL] || touched[FORM_HELPER.EMAIL] ? (
              <F.Text className="validation-alert">
                {errors[FORM_HELPER.EMAIL]}
              </F.Text>
            ) : null}
          </div>
          <div className="form-control">
            <label htmlFor="password" className="label"></label>
            <input
              type="password"
              id="password"
              value={values[FORM_HELPER.PASSWORD]}
              onChange={handleChange}
              required
              placeholder="••••••••••••"
            />
            {errors[FORM_HELPER.PASSWORD] || touched[FORM_HELPER.PASSWORD] ? (
              <F.Text className="validation-alert">
                {errors[FORM_HELPER.PASSWORD]}
              </F.Text>
            ) : null}
          </div>
          <button type="submit" disabled={!isValid} onClick={handleSubmit}>
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
