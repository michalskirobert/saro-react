import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { FormText } from "reactstrap";
import { toast } from "react-toastify";

import { Form, Formik } from "formik";
import { CustomButton } from "@components/shared/custom-button";

import { signUpValidationScheme } from "./validation";
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
  console.log(step1);
  toast.error("nie udalo się");
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
      {({ values, errors, isValid, touched, handleChange, handleSubmit }) => (
        <Form>
          {step1?.map(({ invalid, label, placeholder, type, valid }, index) => {
            return (
              <section key={index} {...{ className: "sign-up-form step-1" }}>
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
                    <FormText className={"validation-alert"}>
                      {/* to do: fix validation message */}
                      {valid} {invalid}
                    </FormText>
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
