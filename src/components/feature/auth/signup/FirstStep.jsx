import { Form as F } from "react-bootstrap";
import { useSelector } from "react-redux";

import uuid4 from "react-uuid";
import { FORM_HELPER } from "./utils";

export function FirstStep({ handleChange, values, errors, touched }) {
  const firstStepData = useSelector(
    (state) => state.database.init.auth["sign-up"]?.labels["step-1"]
  );

  return (
    <>
      {firstStepData?.map((item, index) => {
        const { label, placeholder, type } = item;
        return (
          <div className="form-control" key={uuid4()}>
            <label htmlFor={label} className="floatLabel"></label>
            <input
              type={type}
              id={label}
              value={values[label]}
              onChange={handleChange}
              required
              placeholder={placeholder}
              tabIndex={index}
            />
            {errors[FORM_HELPER.EMAIL] || touched[FORM_HELPER.EMAIL] ? (
              <F.Text className="validation-alert">
                {errors[FORM_HELPER.EMAIL]}
              </F.Text>
            ) : null}
          </div>
        );
      })}
    </>
  );
}
