import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Form, Formik } from "formik";
import { CustomFeedback } from "@components/shared/custom-feedback";
import { CustomStepButton } from "@components/shared/custom-step-button";
import { useSingUpBasicContainer } from "./container";

// import { signUpFirstStepValidationScheme } from "./validation";
import { CustomInput } from "@components/shared/custom-inputs";
// import { FORM_HELPER } from "../utils";

const SignUpBasic = (): JSX.Element => {
  const step1 = useSelector(
    ({ database }: RootStateOrAny) =>
      database?.init?.auth["sign-up"]?.labels["step-1"]
  );
  const { createAccount } = useSingUpBasicContainer();

  return (
    <section className={"section signup"}>
      <Formik
        {...{
          initialValues: {},
          validateOnChange: true,
          validateOnMount: true,
          // validationSchema: signUpFirstStepValidationScheme,
          onSubmit: (values) => createAccount(values),
        }}
      >
        {({ values, errors, isValid, touched, handleChange, handleSubmit }) => (
          <Form>
            {step1?.map(
              (
                {
                  label,
                  placeholder,
                  type,
                }: { label: string; placeholder: string; type: string },
                index: number
              ) => {
                return (
                  <section
                    key={index}
                    {...{ className: "sign-up-form step-1" }}
                  >
                    <div className={"form-control"}>
                      <CustomInput
                        {...{
                          label,
                          invalid: errors[label],
                          id: label,
                          placeholder,
                          type,
                          value: values[label],
                          onChange: handleChange,
                        }}
                      />
                      {(errors[label] || touched[label]) && (
                        <CustomFeedback {...{ text: errors[label] }} />
                      )}
                    </div>
                  </section>
                );
              }
            )}
            <CustomStepButton
              {...{
                onNextClick: handleSubmit,
                itemIndex: 0,
                isLastStep: false,
                isNextDisabled: !isValid,
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

export default SignUpBasic;

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
