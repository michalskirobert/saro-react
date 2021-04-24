import Select from "react-select";
import { Form as F } from "react-bootstrap";

import { FORM_HELPER } from "./utils";

const options = [
  { value: "male", label: "male" },
  { value: "female", label: "female" },
];

const optionsLang = [
  { value: "english", label: "english" },
  { value: "polish", label: "polish" },
];

export function SecondStep({
  handleChange,
  values,
  errors,
  touched,
  setFieldValue,
}) {
  console.log(values);
  return (
    <>
      <div className="form-control select">
        <Select
          width="100%"
          id="gender"
          options={options}
          value={values[FORM_HELPER.GENDER]}
          onChange={(value) => setFieldValue(FORM_HELPER.GENDER, value.value)}
          placeholder="Select your Gender"
        />
        {errors[FORM_HELPER.GENDER] || touched[FORM_HELPER.GENDER] ? (
          <F.Text className="validation-alert">
            {errors[FORM_HELPER.GENDER]}
          </F.Text>
        ) : null}
      </div>
      <div className="form-control select">
        <Select
          width="100%"
          id="nativeLang"
          options={optionsLang}
          value={values[FORM_HELPER.NATIVE_LANG]}
          onChange={(value) =>
            setFieldValue(FORM_HELPER.NATIVE_LANG, value.value)
          }
          placeholder="Select your Native Language "
        />
        {errors[FORM_HELPER.NATIVE_LANG] || touched[FORM_HELPER.NATIVE_LANG] ? (
          <F.Text className="validation-alert">
            {errors[FORM_HELPER.NATIVE_LANG]}
          </F.Text>
        ) : null}
      </div>
      <div className="form-control select">
        <Select
          width="100%"
          id="studyingLang"
          options={optionsLang}
          value={values[FORM_HELPER.STUDYING_LANG]}
          onChange={(value) =>
            setFieldValue(FORM_HELPER.STUDYING_LANG, value.value)
          }
          placeholder="Select your Studying Language"
        />
        {errors[FORM_HELPER.STUDYING_LANG] ||
        touched[FORM_HELPER.STUDYING_LANG] ? (
          <F.Text className="validation-alert">
            {errors[FORM_HELPER.STUDYING_LANG]}
          </F.Text>
        ) : null}
      </div>
      <div className="form-control">
        <label htmlFor="hobbies" className="floatLabel"></label>
        <input
          type="text"
          id="hobbies"
          value={values[FORM_HELPER.HOBBIES]}
          onChange={handleChange}
          required
          placeholder="Your hobbies"
        />
        {errors[FORM_HELPER.HOBBIES] || touched[FORM_HELPER.HOBBIES] ? (
          <F.Text className="validation-alert">
            {errors[FORM_HELPER.HOBBIES]}
          </F.Text>
        ) : null}
      </div>
      <div className="form-control">
        <label htmlFor="about" className="floatLabel"></label>
        <input
          type="text"
          id="about"
          value={values[FORM_HELPER.ABOUT]}
          onChange={handleChange}
          required
          placeholder="About You"
        />
        {errors[FORM_HELPER.ABOUT] || touched[FORM_HELPER.ABOUT] ? (
          <F.Text className="validation-alert">
            {errors[FORM_HELPER.ABOUT]}
          </F.Text>
        ) : null}
      </div>
    </>
  );
}
