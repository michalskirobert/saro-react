import Select from "react-select";

import { FORM_HELPER } from "./utils";

const options = [
  { value: "male", label: "male" },
  { value: "female", label: "female" },
];

const optionsNativeLang = [
  { value: "english", label: "english" },
  { value: "polish", label: "polish" },
];

const optionsStudyingLang = [
  { value: "polish", label: "polish" },
  { value: "english", label: "english" },
];

export function SecondStep({ handleChange, values, errors }) {
  function onChange(value) {
    handleChange("gender", value);
  }
  function onChangeNativeLang(value) {
    handleChange("gender", value);
  }
  function onChangeStudyingLang(value) {
    handleChange("gender", value);
  }

  return (
    <>
      <div className="form-control">
        <Select
          width="100%"
          id="gender"
          options={options}
          // value={values[FORM_HELPER.GENDER]}
          onChange={onChange}
          placeholder="Select your Gender"
        />
        <p>{errors[FORM_HELPER.GENDER]}</p>
      </div>
      <div className="select">
        <Select
          width="100%"
          id="nativeLang"
          options={optionsNativeLang}
          // value={values[FORM_HELPER.GENDER]}
          onChange={onChangeNativeLang}
          placeholder="Select your Native Language "
        />
        <p>{errors[FORM_HELPER.NATIVE_LANG]}</p>
      </div>
      <div className="select">
        <Select
          width="100%"
          id="studyingLang"
          options={optionsStudyingLang}
          // value={values[FORM_HELPER.GENDER]}
          onChange={onChangeStudyingLang}
          placeholder="Select your Studying Language"
        />
        <p>{errors[FORM_HELPER.STUDYING_LANG]}</p>
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
        <p>{errors[FORM_HELPER.HOBBIES]}</p>
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
        <p>{errors[FORM_HELPER.ABOUT]}</p>
      </div>
    </>
  );
}
