import { FORM_HELPER } from "./utils";

import { Form as F } from 'react-bootstrap';

export function FirstStep({ handleChange, values, errors, touched }) {
  return (
    <>
      <div className="form-control">
        <label htmlFor="email" className="floatLabel"></label>
        <input
          type="email"
          id="email"
          value={values[FORM_HELPER.EMAIL]}
          onChange={handleChange}
          required
          placeholder="jane@example.com"
          tabindex="1"
        />
        {errors[FORM_HELPER.EMAIL] || touched[FORM_HELPER.EMAIL] ? (
                  <F.Text className="validation-alert">
                    {errors[FORM_HELPER.EMAIL]}
                  </F.Text>
                ) : null}
      </div>
      <div className="form-control form-on-top">
        <label htmlFor="password" className="floatLabel"></label>
        <input
          type="password"
          id="password"
          value={values[FORM_HELPER.PASSWORD]}
          onChange={handleChange}
          required
          placeholder="••••••••••••"
          tabindex="2"
        />
        {errors[FORM_HELPER.PASSWORD] || touched[FORM_HELPER.PASSWORD] ? (
                  <F.Text className="validation-alert">
                    {errors[FORM_HELPER.PASSWORD]}
                  </F.Text>
                ) : null}
      </div>
      <div className="form-control">
        <label htmlFor="confPassword" className="floatLabel"></label>
        <input
          type="password"
          id="confPassword"
          value={values[FORM_HELPER.CONF_PASSWORD]}
          onChange={handleChange}
          required
          placeholder="••••••••••••"
          tabindex="3"
        />
        <p>{errors[FORM_HELPER.CONF_PASSWORD]}</p>
      </div>
    </>
  );
}
