import { FORM_HELPER } from "./utils";

export function FirstStep({ handleChange, values, errors }) {
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
        <p>{errors[FORM_HELPER.EMAIL]}</p>
      </div>
      <div className="form-control">
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
        <p>{errors[FORM_HELPER.PASSWORD]}</p>
      </div>
      <div className="form-control">
        <label htmlFor="conf-password" className="floatLabel"></label>
        <input
          type="password"
          id="conf-password"
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
