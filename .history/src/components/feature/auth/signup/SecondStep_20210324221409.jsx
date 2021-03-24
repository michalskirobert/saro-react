import Select from "react-select";

import { FORM_HELPER } from "./utils";

const optionsGender = [
  { value: "male", label: "male" },
  { value: "female", label: "female" },
];

export function SecondStep({ handleChange, values, errors }) {
  function onChangeGender(value) {
    handleChange("gender", value);
  }
  function onChangeNativeLang(value) {
    handleChange("gender", value);
  }
  function onChangeStudyingLang(value) {
    handleChange("gender", value);
  }
  console.log(values);
  return (
    <>
      <div className="form-control">
        <Select
          width="100%"
          id="gender"
          options={options}
          // value={values[FORM_HELPER.GENDER]}
          onChange={onChange}
        />
        <p>{errors[FORM_HELPER.GENDER]}</p>
      </div>
      <div className="form-control">
        <Select
          width="100%"
          id="gender"
          options={options}
          // value={values[FORM_HELPER.GENDER]}
          onChange={onChange}
        />
        <p>{errors[FORM_HELPER.GENDER]}</p>
      </div>
      <div className="form-control">
        <Select
          width="100%"
          id="gender"
          options={options}
          // value={values[FORM_HELPER.GENDER]}
          onChange={onChange}
        />
        <p>{errors[FORM_HELPER.GENDER]}</p>
      </div>
      
    </>
  );
}
