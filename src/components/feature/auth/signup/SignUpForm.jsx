import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import { Formik } from "formik";

import { FORM_HELPER } from "./utils";
import { signUpValidationScheme } from "./validation";
import { auth } from "./../../firebase";
import { userActions } from "../../../../store/actions";


const SignUpForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handlerSubmit = async (userData) => {
    try {
      dispatch(userActions.signUpRequest());
      await auth
        .createUserWithEmailAndPassword(userData.email, userData.password)
        .then((resp) => dispatch(userActions.signUp(resp.user.providerData)));
      history.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Formik
      {...{
        initialValues: {},
        validateOnChange: true,
        validationSchema: signUpValidationScheme,
        onSubmit: (values) => handlerSubmit(values),
      }}
    >
      {({ values, errors, isValid, handleChange, handleSubmit }) => (
        <>
          <h2>Register</h2>
          <div className="form-control">
            <label htmlFor="email" className="floatLabel"></label>
            <input
              type="email"
              id="email"
              value={values[FORM_HELPER.EMAIL]}
              onChange={handleChange}
              required
              placeholder="jane@example.com"
              tabindex="1"
            />
            <p>{!!errors[FORM_HELPER.EMAIL]}</p>
          </div>
          <div className="form-control">
            <label htmlFor="password" className="floatLabel"></label>
            <input
              type="password"
              id="password"
              value={values[FORM_HELPER.PASSWORD]}
              onChange={handleChange}
              required
              placeholder="••••••••••••"
              tabindex="2"
            />
            <p>{!!errors[FORM_HELPER.PASSWORD]}</p>
          </div>
          <div className="form-control">
            <label htmlFor="conf-password" className="floatLabel"></label>
            <input
              type="password"
              id="conf-password"
              value={values[FORM_HELPER.CONF_PASSWORD]}
              onChange={handleChange}
              required
              placeholder="••••••••••••"
              tabindex="3"
            />
            <p>{!!errors[FORM_HELPER.CONF_PASSWORD]}</p>
          </div>
          <button
            type="submit"
            tabindex="4"
            onClick={handleSubmit}
            disabled={!isValid}
          >
            Next
          </button>
          <div className="auth-control">
            <p style={{ display: "inline" }}>Do you have an account?</p>
            <Link to="/sign-in">Log-in</Link>
          </div>
        </>
      )}
    </Formik>
  );
};

export default SignUpForm;
