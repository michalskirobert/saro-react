import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button, Form as F } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";

import { Formik, Form } from "formik";
import { editValidationScheme } from "./validation";

import CustomEditor from "@components/shared/custom-editor";
import CmsAlert from "@components/shared/alerts/CmsAlert";
import { CustomSelect } from "@components/shared/custom-select";

import { useEdit } from "./container";

import * as CONSTANTS from "@utils/constants";
import { FORMIK_HELPER, CMS_INPUT_TYPES } from "./utils.js";

const cities = [
  {
    city: "Warsaw",
  },
  {
    city: "Cracow",
  },
];

const categories = [
  {
    id: 1,
    name: "Events",
  },
  {
    id: 2,
    name: "Food",
  },
  {
    id: 3,
    name: "Traditions",
  },
];

const Edit = () => {
  const { alert, fetchCrew, getDatabase, database, updateDatabase } = useEdit();

  const query = new URLSearchParams(useLocation().search);
  const type = query.get(CONSTANTS.GENERAL_CONSTANTS.TYPE);
  const id = query.get(CONSTANTS.GENERAL_CONSTANTS.ID);

  useEffect(() => {
    getDatabase(id, type);
    fetchCrew();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Formik
        {...{
          initialValues: { ...database[type] },
          validateOnChange: true,
          validateOnMount: true,
          validationSchema: editValidationScheme(type),
          onSubmit: (values) => updateDatabase(id, type, values),
          enableReinitialize: true,
        }}
      >
        {({
          values,
          errors,
          isValid,
          touched,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => (
          <section className="section saro-panel edit">
            {alert && <CmsAlert />}
            <Breadcrumb>
              <Breadcrumb.Item href={CONSTANTS.ROUTE_PATHS.HOME_ROUTE}>
                {CONSTANTS.GENERAL_CONSTANTS.HOME}
              </Breadcrumb.Item>
              <Breadcrumb.Item href={CONSTANTS.ROUTE_PATHS.PANEL_ROUTE}>
                {CONSTANTS.GENERAL_CONSTANTS.ADMIN_PANEL}
              </Breadcrumb.Item>
              <Breadcrumb.Item active>
                {CONSTANTS.GENERAL_CONSTANTS.EDIT}
              </Breadcrumb.Item>
            </Breadcrumb>

            <Form className="cms">
              <h2 className="main-title">{CONSTANTS.GENERAL_CONSTANTS.EDIT}</h2>
              <section className="form-container">
                <div className="form-control">
                  <label htmlFor={FORMIK_HELPER.TITLE}>
                    {CONSTANTS.CMS_LABELS.TITLE}
                  </label>
                  <input
                    {...{
                      className: errors[FORMIK_HELPER.TITLE] && "invalid",
                      id: FORMIK_HELPER.TITLE,
                      typ: CMS_INPUT_TYPES.TEXT,
                      placeholder: database[type]?.title,
                      value: values[FORMIK_HELPER.TITLE],
                      onChange: handleChange,
                    }}
                  />
                  {(errors[FORMIK_HELPER.TITLE] ||
                    touched[FORMIK_HELPER.TITLE]) && (
                    <F.Text className="validation-alert">
                      {errors[FORMIK_HELPER.TITLE]}
                    </F.Text>
                  )}
                </div>
                {type !== CONSTANTS.GENERAL_CONSTANTS.ARTICLES && (
                  <div className="form-control">
                    <label htmlFor={FORMIK_HELPER.SUBTITLE}>
                      {CONSTANTS.CMS_LABELS.SUBTITLE}
                    </label>
                    <input
                      {...{
                        className: errors[FORMIK_HELPER.SUBTITLE] && "invalid",
                        id: FORMIK_HELPER.SUBTITLE,
                        type: CMS_INPUT_TYPES.TEXT,
                        placeholder: database[type]?.subtitle,
                        value: values[FORMIK_HELPER.SUBTITLE],
                        onChange: handleChange,
                      }}
                    />
                    {(errors[FORMIK_HELPER.SUBTITLE] ||
                      touched[FORMIK_HELPER.SUBTITLE]) && (
                      <F.Text className="validation-alert">
                        {errors[FORMIK_HELPER.SUBTITLE]}
                      </F.Text>
                    )}
                  </div>
                )}
                {type === CONSTANTS.GENERAL_CONSTANTS.EVENTS && (
                  <div className="form-control">
                    <label htmlFor={FORMIK_HELPER.CITY}>
                      {CONSTANTS.CMS_LABELS.CITY}
                    </label>
                    <CustomSelect
                      {...{
                        name: FORMIK_HELPER.CITY,
                        placeholder: database[type]?.city,
                        disabled: !errors[FORMIK_HELPER.CITY],
                        options: cities.map(({ city }) => ({
                          label: city,
                          value: city,
                        })),
                        onChange: setFieldValue,
                      }}
                    />
                    {(errors[FORMIK_HELPER.CITY] ||
                      touched[FORMIK_HELPER.CITY]) && (
                      <F.Text className="validation-alert">
                        {errors[FORMIK_HELPER.CITY]}
                      </F.Text>
                    )}
                  </div>
                )}
                {type === CONSTANTS.GENERAL_CONSTANTS.EVENTS && (
                  <div className="form-control">
                    <label htmlFor={FORMIK_HELPER.PLACE}>
                      {CONSTANTS.CMS_LABELS.PLACE}
                    </label>
                    <input
                      {...{
                        className: errors[FORMIK_HELPER.PLACE] && "invalid",
                        id: FORMIK_HELPER.PLACE,
                        type: CMS_INPUT_TYPES.TEXT,
                        autoComplete: "off",
                        placeholder: database[type]?.place,
                        value: values[FORMIK_HELPER.PLACE],
                        onChange: handleChange,
                      }}
                    />
                    {(errors[FORMIK_HELPER.PLACE] ||
                      touched[FORMIK_HELPER.PLACE]) && (
                      <F.Text className="validation-alert">
                        {errors[FORMIK_HELPER.PLACE]}
                      </F.Text>
                    )}
                  </div>
                )}
                {type === CONSTANTS.GENERAL_CONSTANTS.EVENTS && (
                  <div className="form-control">
                    <label htmlFor={FORMIK_HELPER.DATE}>
                      {CONSTANTS.CMS_LABELS.DATE}
                    </label>
                    <input
                      {...{
                        className: errors[FORMIK_HELPER.DATE] && "invalid",
                        id: FORMIK_HELPER.DATE,
                        type: CMS_INPUT_TYPES.DATE,
                        placeholder: database[type]?.date,
                        value: values[FORMIK_HELPER.DATE],
                        onChange: handleChange,
                      }}
                    />
                    {(errors[FORMIK_HELPER.DATE] ||
                      touched[FORMIK_HELPER.DATE]) && (
                      <F.Text className="validation-alert">
                        {errors[FORMIK_HELPER.DATE]}
                      </F.Text>
                    )}
                  </div>
                )}
                {type === CONSTANTS.GENERAL_CONSTANTS.EVENTS && (
                  <div className="form-control">
                    <label htmlFor={FORMIK_HELPER.TIME}>
                      {CONSTANTS.CMS_LABELS.TIME}
                    </label>
                    <input
                      {...{
                        className: errors[FORMIK_HELPER.TIME] && "invalid",
                        id: FORMIK_HELPER.TIME,
                        type: CMS_INPUT_TYPES.TIME,
                        placeholder: database[type]?.time,
                        value: values[FORMIK_HELPER.TIME],
                        onChange: handleChange,
                      }}
                    />
                    {(errors[FORMIK_HELPER.TIME] ||
                      touched[FORMIK_HELPER.TIME]) && (
                      <F.Text className="validation-alert">
                        {errors[FORMIK_HELPER.TIME]}
                      </F.Text>
                    )}
                  </div>
                )}
                {type !== CONSTANTS.GENERAL_CONSTANTS.ARTICLES && (
                  <div className="form-control">
                    <label htmlFor={FORMIK_HELPER.IMG_URL}>
                      {CONSTANTS.CMS_LABELS.IMG_URL}
                    </label>
                    <input
                      {...{
                        className: errors[FORMIK_HELPER.IMG_URL] && "invalid",
                        id: FORMIK_HELPER.IMG_URL,
                        type: CMS_INPUT_TYPES.TEXT,
                        placeholder: database[type]?.imgURL,
                        value: values[FORMIK_HELPER.IMG_URL],
                        onChange: handleChange,
                      }}
                    />
                    {(errors[FORMIK_HELPER.IMG_URL] ||
                      touched[FORMIK_HELPER.IMG_URL]) && (
                      <F.Text className="validation-alert">
                        {errors[FORMIK_HELPER.IMG_URL]}
                      </F.Text>
                    )}
                  </div>
                )}
                {type === CONSTANTS.GENERAL_CONSTANTS.EVENTS && (
                  <div className="form-control">
                    <label htmlFor={FORMIK_HELPER.LINK}>
                      {CONSTANTS.CMS_LABELS.LINK}
                    </label>
                    <input
                      {...{
                        className: errors[FORMIK_HELPER.LINK] && "invalid",
                        id: FORMIK_HELPER.LINK,
                        type: CMS_INPUT_TYPES.TEXT,
                        placeholder: database[type]?.link,
                        value: values[FORMIK_HELPER.LINK],
                        onChange: handleChange,
                      }}
                    />
                    {(errors[FORMIK_HELPER.LINK] ||
                      touched[FORMIK_HELPER.LINK]) && (
                      <F.Text className="validation-alert">
                        {errors[FORMIK_HELPER.LINK]}
                      </F.Text>
                    )}
                  </div>
                )}
                {type !== CONSTANTS.GENERAL_CONSTANTS.EVENTS && (
                  <div className="form-control">
                    <label htmlFor={FORMIK_HELPER.CATEGORY}>
                      {CONSTANTS.CMS_LABELS.CATEGORY}
                    </label>
                    <CustomSelect
                      {...{
                        name: FORMIK_HELPER.CATEGORY,
                        placeholder: database[type]?.category,
                        invalid: !errors[FORMIK_HELPER.CATEGORY],
                        options: categories.map(({ name }) => ({
                          label: name,
                          value: name,
                        })),
                        onChange: setFieldValue,
                      }}
                    />
                    {(errors[FORMIK_HELPER.CATEGORY] ||
                      touched[FORMIK_HELPER.CATEGORY]) && (
                      <F.Text className="validation-alert">
                        {errors[FORMIK_HELPER.CATEGORY]}
                      </F.Text>
                    )}
                  </div>
                )}
                <div className="form-control">
                  <label htmlFor={FORMIK_HELPER.LANGUAGE}>
                    {CONSTANTS.CMS_LABELS.LANG}
                  </label>
                  <CustomSelect
                    {...{
                      name: FORMIK_HELPER.LANGUAGE,
                      placeholder: database[type]?.language,
                      invalid: !errors[FORMIK_HELPER.LANGUAGE],
                      options: CONSTANTS.GENERAL_CONSTANTS.LANGUAGES.map(
                        ({ label, lang }) => ({
                          label: label,
                          value: lang,
                        })
                      ),
                      onChange: setFieldValue,
                    }}
                  />
                  {(errors[FORMIK_HELPER.LANGUAGE] ||
                    touched[FORMIK_HELPER.LANGUAGE]) && (
                    <F.Text className="validation-alert">
                      {errors[FORMIK_HELPER.LANGUAGE]}
                    </F.Text>
                  )}
                </div>
                <div className="form-control">
                  <label htmlFor={FORMIK_HELPER.CREW}>
                    {CONSTANTS.CMS_LABELS.CREW}
                  </label>
                  <CustomSelect
                    {...{
                      name: FORMIK_HELPER.CREW,
                      placeholder: database[type]?.crew,
                      invalid: !errors[FORMIK_HELPER.CREW],
                      disabled: true,
                      options: database[CONSTANTS.GENERAL_CONSTANTS.CREW].map(
                        ({ name, surname }) => ({
                          label: `${name} ${surname}`,
                          value: `${name} ${surname}`,
                        })
                      ),
                      onChange: setFieldValue,
                    }}
                  />
                  {(errors[FORMIK_HELPER.CREW] ||
                    touched[FORMIK_HELPER.CREW]) && (
                    <F.Text className="validation-alert">
                      {errors[FORMIK_HELPER.CREW]}
                    </F.Text>
                  )}
                </div>

                {type === CONSTANTS.GENERAL_CONSTANTS.EVENTS ? (
                  <div className="form-control form-info">
                    <label htmlFor={FORMIK_HELPER.EDITOR}>
                      {CONSTANTS.CMS_LABELS.CONTENT}
                    </label>
                    <textarea
                      {...{
                        id: FORMIK_HELPER.EDITOR,
                        placeholder: database[type]?.content,
                        value: values[FORMIK_HELPER.EDITOR],
                        onChange: handleChange,
                        cols: "30",
                        rows: "10",
                      }}
                    ></textarea>
                    {(errors[FORMIK_HELPER.EDITOR] ||
                      touched[FORMIK_HELPER.EDITOR]) && (
                      <F.Text className="validation-alert">
                        {errors[FORMIK_HELPER.EDITOR]}
                      </F.Text>
                    )}
                  </div>
                ) : (
                  <div className="form-control editor">
                    <CustomEditor
                      {...{
                        propName: FORMIK_HELPER.EDITOR,
                        onChangeEditor: setFieldValue,
                      }}
                    />
                    {(errors[FORMIK_HELPER.EDITOR] ||
                      touched[FORMIK_HELPER.EDITOR]) && (
                      <F.Text className="validation-alert">
                        {errors[FORMIK_HELPER.EDITOR]}
                      </F.Text>
                    )}
                  </div>
                )}
              </section>
              <Button
                {...{
                  className: "submit-btn",
                  type: CMS_INPUT_TYPES.SUBMIT,
                  disabled: !isValid,
                  onClick: handleSubmit,
                }}
              >
                {CONSTANTS.GENERAL_CONSTANTS.SEND}
              </Button>
            </Form>
          </section>
        )}
      </Formik>
    </>
  );
};

export default Edit;
