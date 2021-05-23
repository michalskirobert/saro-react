import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { toast } from "react-toastify";

import { Formik } from "formik";
import { loginValidationScheme } from "./validation";
import { auth } from "../../firebase";
import { FORM_HELPER } from "./utils";
import { alertActions, userActions } from "@actions/index";
import { NAuth } from "src/core/types";

import * as C from "@utils/constants";

import * as S from "./styles";
import { Loader } from "@components/shared/custom-loadings/Loader";
import { CustomInput } from "@components/shared/custom-inputs";
import { CustomButton } from "@components/shared/custom-button";

const LoginForm = (): JSX.Element => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isLoading } = useSelector(({ general }: RootStateOrAny) => general);
  const logInData = useSelector(
    ({ database }: RootStateOrAny) => database?.init.auth["sign-in"]
  );

  const signin = async (email: string, password: string): Promise<any> => {
    return await auth.signInWithEmailAndPassword(email, password);
  };

  const handleSubmit = async (
    values: NAuth.TEmailAndPasswordAuth
  ): Promise<void> => {
    dispatch(alertActions.clear());
    try {
      dispatch(userActions.SignInRequest());
      await signin(values.email, values.password);
      dispatch(userActions.signInSuccess());
      history.push(C.ROUTE_PATHS.DASHBOARD_ROUTE);
      toast.success(C.GENERAL_CONSTANTS.SIGN_IN_SUCCESS_MESSAGE);
    } catch (error) {
      dispatch(userActions.SignInFailure());
      toast.error(error.message);
    }
  };

  return (
    <Formik
      {...{
        initialValues: {},
        validateOnChange: true,
        validationSchema: loginValidationScheme,
        validateOnBlur: true,
        enableReinitialize: true,
        onSubmit: (values) =>
          handleSubmit(values as NAuth.TEmailAndPasswordAuth),
      }}
    >
      {({ values, errors, isValid, handleChange, handleSubmit }) => (
        <S.SignInContainer
          {...{
            isLoading,
          }}
        >
          {isLoading && <Loader />}
          <h2>{logInData?.header}</h2>
          {logInData?.labels.map((item, index: number) => {
            const { placeholder, type } = item;
            return (
              <div className={"form-control"} key={index}>
                <CustomInput
                  {...{
                    invalid: errors[FORM_HELPER[type.toUpperCase()]],
                    id: FORM_HELPER[type.toUpperCase()],
                    placeholder,
                    type,
                    value: values[FORM_HELPER[type.toUpperCase()]],
                    onChange: handleChange,
                  }}
                />

                {errors[FORM_HELPER[type.toUpperCase()]] && (
                  <S.Feedback>
                    {errors[FORM_HELPER[type.toUpperCase()]]}
                  </S.Feedback>
                )}
              </div>
            );
          })}
          <CustomButton
            {...{
              className: "submit-btn",
              type: "button",
              disabled: !isValid,
              onClick: handleSubmit,
              content: logInData?.buttonTitle,
            }}
          />
          <div className={"auth-control"}>
            <Link className={"create-account-link"} to={"/sign-up"}>
              {logInData?.link}
            </Link>
          </div>
        </S.SignInContainer>
      )}
    </Formik>
  );
};

export default LoginForm;
