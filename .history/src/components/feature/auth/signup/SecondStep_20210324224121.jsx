import Select from "react-select";

import { FORM_HELPER } from "./utils";

const optionsGender = [
  { value: "male", label: "male" },
  { value: "female", label: "female" },
];
const optionsNativeLang = [
  { value: "english", label: "english" },
  { value: "polish", label: "polish" },
];
const optionsStudyingLang = [
  { value: "english", label: "english" },
  { value: "polish", label: "polish" },
];


export function SecondStep({ handleChange, values, errors }) {
  function onChangeGender(value) {
    handleChange("gender", value);
  }
  function onChangeNativeLang(value) {
    handleChange("nativeLang", value);
  }
  function onChangeStudyingLang(value) {
    handleChange("studyingLang", value);
  }
  console.log(values);
  return (
<>
      <div className="form-control">
        <Select
          width="100%"
          id="gender"
          options={optionsGender}
          // value={values[FORM_HELPER.GENDER]}
          onChange={onChangeGender}
        />
        <p>{errors[FORM_HELPER.GENDER]}</p>
      </div>
      
      </>
    
  );
}
