import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Form, Formik } from "formik";
import { CustomButton } from "@components/shared/custom-button";
import { CustomFeedback } from "@components/shared/custom-feedback";

import { signUpFirstStepValidationScheme } from "./validation";
import { CustomInput } from "@components/shared/custom-inputs";

const SignUpForm = (): JSX.Element => {
  const step1 = useSelector(
    ({ database }: RootStateOrAny) =>
      database?.init?.auth["sign-up"]?.labels["step-1"]
  );
  const buttonContent = useSelector(
    ({ database }: RootStateOrAny) =>
      database?.init?.auth["sign-up"]?.buttonTitle
  );

  return (
    <section className={"section signup"}>
      <Formik
        {...{
          initialValues: {},
          validateOnChange: true,
          validateOnMount: true,
          validationSchema: signUpFirstStepValidationScheme,
          onSubmit: (values) => console.log(values),
        }}
      >
        {({ values, errors, isValid, touched, handleChange, handleSubmit }) => (
          <Form>
            {step1?.map(({ label, placeholder, type }, index) => {
              // console.log(values);
              return (
                <section key={index} {...{ className: "sign-up-form step-1" }}>
                  <div className={"form-control"}>
                    <CustomInput
                      {...{
                        label,
                        invalid: errors[type],
                        id: label,
                        placeholder,
                        type,
                        value: values[type],
                        onChange: handleChange,
                      }}
                    />
                    {(errors[type] || touched[type]) && (
                      <CustomFeedback
                        {...{ text: errors[type] }}
                      ></CustomFeedback>
                    )}
                  </div>
                </section>
              );
            })}
            <CustomButton
              {...{
                className: "submit-btn",
                disabled: !isValid,
                type: "button",
                content: buttonContent,
                onClick: handleSubmit,
              }}
            />
          </Form>
        )}
      </Formik>
      <div className={"auth-control"}>
        <p style={{ display: "inline" }}>Do you have an account?</p>
        <Link to={"/sign-in"}> Log-in</Link>
      </div>
    </section>
  );
};

export default SignUpForm;

// const [step, setStep] = useState(1);
// return (
//   <Formik
//     {...{
//       initialValues: {},
//       validateOnChange: true,
//       validateOnMount: true,
//       validationSchema: signUpValidationScheme,
//       onSubmit: (values) => console.log(values),
//     }}
//   >
//     {({
//       values,
//       errors,
//       isValid,
//       handleChange,
//       handleSubmit,
//       touched,
//       setFieldValue,
//     }) => (
//       <>
//         {step !== 1 && (
//           <button
//             className={"arrow-back-icon back"}
//             type={"button"}
//             onClick={() => setStep(step - 1)}
//           >
//             <ArrowBack />
//           </button>
//         )}
//         <h2>Sign Up</h2>
//         {step === 1 && (
//           <FirstStep
//             handleChange={handleChange}
//             values={values}
//             errors={errors}
//             touched={touched}
//           />
//         )}
//         {step === 2 && (
//           <SecondStep
//             setFieldValue={setFieldValue}
//             handleChange={handleChange}
//             values={values}
//             errors={errors}
//             touched={touched}
//           />
//         )}
//         <button
//           type={"submit"}
//           tabIndex={"4"}
//           onClick={handleSubmit}
//           disabled={isValid}
//         >
//           {step === 2 ? "Sign Up" : "Next"}
//         </button>
//         <div className={"auth-control"}>
//           <p style={{ display: "inline" }}>Do you have an account?</p>
//           <Link to={"/sign-in"}>Log-in</Link>
//         </div>
//       </>
//     )}
//   </Formik>
// );
