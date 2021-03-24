import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import { Formik } from "formik";
import { loginValidationScheme } from "./validation";
import { auth } from "./../../firebase";
import { FORM_HELPER } from "./utils";
import { userActions, alertActions } from "../../../../store/actions";
import Alert from "./../../../shared/alerts";
import { DefaultLoader } from "./../../../shared/loadings/DefaultLoader";

const LoginForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alert.alert);
  const isLoading = useSelector((state) => state.currentUser.isLoading);

  const signin = async (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const handleSubmit = async (values) => {
    console.log(values);
    dispatch(alertActions.clear());
    try {
      await signin(values.email, values.password);
      dispatch(userActions.request());
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
        initialValues: {
          email: "",
          password: "",
        },
        validateOnChange: true,
        validationSchema: loginValidationScheme,
        onSubmit: (values) => handleSubmit(values),
      }}
    >
      {({ values, errors, isValid, touched, handleChange, handleSubmit }) => (
        <>
          {alert && <Alert />}
          <h2>Log in</h2>
          <div className="form-control">
            <label htmlFor="email" className="label">
              {errors.email && touched.email ? (
                <div className="error__message">{errors.email}</div>
              ) : null}
            </label>
            <input
              name="email"
              type="email"
              id="email"
              value={values[FORM_HELPER.EMAIL]}
              onChange={handleChange}
              required
              placeholder="jane@example.com"
            />
          </div>
          <div className="form-control">
            <label htmlFor="password" className="label">
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
            </label>
            <input
              type="password"
              id="password"
              value={values[FORM_HELPER.PASSWORD]}
              onChange={handleChange}
              required
              placeholder="••••••••••••"
            />
          </div>
          <button type="submit" disabled={!isValid} onClick={handleSubmit}>
            LOG IN
          </button>
          <div className="auth-control">
            <Link className="create-account-link" to="/sign-up">
              Create an account
            </Link>
          </div>
        </>
      )}
    </Formik>
  );
};

export default LoginForm;
