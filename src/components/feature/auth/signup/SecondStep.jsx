import { useSelector } from "react-redux";

import { FORM_HELPER } from "./utils";
import CustomFeedback from "@components/shared/custom-feedback/index";
import { CustomSelect } from "@components/shared/custom-select";
import { CustomInput } from "@components/shared/custom-inputs";
const genderOptions = [
  { value: "male", label: "male" },
  { value: "female", label: "female" },
];

export function SecondStep({
  handleChange,
  values,
  errors,
  touched,
  setFieldValue,
}) {
  const languagesData = useSelector((state) => state.database.dictionary);

  const languagesOptions = languagesData.languages?.map((lang) => {
    const container = {};

    container["value"] = lang.name;
    container["label"] = lang.name;

    return container;
  });

  return (
    <>
      <div className="form-control select">
        <CustomSelect
          {...{
            name: FORM_HELPER.GENDER,
            options: genderOptions,
            value: values[FORM_HELPER.GENDER]?.value,
            onChange: setFieldValue,
            placeholder: "Select your Gender",
          }}
        />

        {errors[FORM_HELPER.GENDER] || touched[FORM_HELPER.GENDER] ? (
          <CustomFeedback text={errors[FORM_HELPER.GENDER]}></CustomFeedback>
        ) : null}
      </div>
      <div className="form-control select">
        <CustomSelect
          {...{
            name: FORM_HELPER.NATIVE_LANG,
            options: languagesOptions,
            value: values[FORM_HELPER.NATIVE_LANG]?.value,
            onChange: setFieldValue,
            placeholder: "Select your Native Language",
          }}
        />
        {errors[FORM_HELPER.NATIVE_LANG] || touched[FORM_HELPER.NATIVE_LANG] ? (
          <CustomFeedback
            text={errors[FORM_HELPER.NATIVE_LANG]}
          ></CustomFeedback>
        ) : null}
      </div>
      <div className="form-control select">
        <CustomSelect
          {...{
            name: FORM_HELPER.STUDYING_LANG,
            options: languagesOptions,
            value: values[FORM_HELPER.STUDYING_LANG]?.value,
            onChange: setFieldValue,
            placeholder: "Select your Studying Language",
          }}
        />
        {errors[FORM_HELPER.STUDYING_LANG] ||
        touched[FORM_HELPER.STUDYING_LANG] ? (
          <CustomFeedback
            text={errors[FORM_HELPER.STUDYING_LANG]}
          ></CustomFeedback>
        ) : null}
      </div>
      <div className="form-control text">
        <CustomInput
          {...{
            isValid: errors[FORM_HELPER.HOBBIES],
            id: FORM_HELPER.HOBBIES,
            placeholder: "Your hobbies",
            type: "text",
            value: values[FORM_HELPER.HOBBIES],
            onChange: handleChange,
          }}
        />

        {errors[FORM_HELPER.HOBBIES] || touched[FORM_HELPER.HOBBIES] ? (
          <CustomFeedback text={errors[FORM_HELPER.HOBBIES]}></CustomFeedback>
        ) : null}
      </div>
      <div className="form-control ">
        <CustomInput
          {...{
            isValid: errors[FORM_HELPER.ABOUT],
            id: FORM_HELPER.ABOUT,
            placeholder: "About You",
            type: "text",
            value: values[FORM_HELPER.ABOUT],
            onChange: handleChange,
          }}
        />
        {errors[FORM_HELPER.ABOUT] || touched[FORM_HELPER.ABOUT] ? (
          <CustomFeedback text={errors[FORM_HELPER.ABOUT]}></CustomFeedback>
        ) : null}
      </div>
    </>
  );
}
