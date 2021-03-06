import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Select from "react-select";
import { Button, Form as F } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";

import CustomEditor from "@components/shared/custom-editor";
import { Formik, Form } from "formik";
import { editValidationScheme } from "./validation";

import CmsAlert from "@components/shared/alerts/CmsAlert";
import { useEdit } from "./container";

import * as CONSTANTS from "@utils/constants";
import { FORMIK_HELPER } from "./utils.js";

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
          <section className="section edit">
            {alert && <CmsAlert />}
            <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/panel">
              Admin Panel
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Edit</Breadcrumb.Item>
          </Breadcrumb>

            <Form className="cms">
              <h2 className="main-title">Edit element</h2>
              <section className="form-container">
                <div className="form-control">
                  <label htmlFor="title">Title</label>
                  <input
                    id="title"
                    type="text"
                    placeholder={database[type]?.title}
                    value={values[FORMIK_HELPER.TITLE]}
                    onChange={handleChange}
                  />
                  {(errors[FORMIK_HELPER.TITLE] ||
                  touched[FORMIK_HELPER.TITLE]) && (
                    <F.Text className="validation-alert">
                      {errors[FORMIK_HELPER.TITLE]}
                    </F.Text>
                  )}
                </div>
                {type !== CONSTANTS.GENERAL_CONSTANTS.BLOG_POSTS && (
                  <div className="form-control">
                    <label htmlFor="subtitle">Subtitle</label>
                    <input
                      id="subtitle"
                      type="text"
                      placeholder={database[type]?.subtitle}
                      value={values[FORMIK_HELPER.SUBTITLE]}
                      onChange={handleChange}
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
                    <label htmlFor="city">City</label>
                    <Select
                      {...{
                        id: "city",
                        name: "city",
                        placeholder: database[type]?.city,
                        options: cities.map((item) => ({
                          label: item.city,
                          value: item.city,
                        })),
                        onChange: (values) =>
                          setFieldValue(FORMIK_HELPER.CITY, values.value),
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
                    <label htmlFor="place">Place</label>
                    <input
                      id="place"
                      type="text"
                      autoComplete="off"
                      placeholder={database[type]?.place}
                      value={values[FORMIK_HELPER.PLACE]}
                      onChange={handleChange}
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
                    <label htmlFor="date">Date</label>
                    <input
                      id="date"
                      type="date"
                      placeholder={database[type]?.date}
                      value={values[FORMIK_HELPER.DATE]}
                      onChange={handleChange}
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
                    <label htmlFor="time">Time</label>
                    <input
                      id="time"
                      type="time"
                      placeholder={database[type]?.time}
                      value={values[FORMIK_HELPER.TIME]}
                      onChange={handleChange}
                    />
                    {(errors[FORMIK_HELPER.TIME] ||
                    touched[FORMIK_HELPER.TIME]) && (
                      <F.Text className="validation-alert">
                        {errors[FORMIK_HELPER.TIME]}
                      </F.Text>
                    )}
                  </div>
                )}
                {type !== CONSTANTS.GENERAL_CONSTANTS.BLOG_POSTS && (
                  <div className="form-control">
                    <label htmlFor="imgURL">Img URL</label>
                    <input
                      id="imgURL"
                      type="text"
                      placeholder={database[type]?.imgURL}
                      value={values[FORMIK_HELPER.IMG_URL]}
                      onChange={handleChange}
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
                    <label htmlFor="link">Link</label>
                    <input
                      id="link"
                      type="text"
                      placeholder={database[type]?.link}
                      value={values[FORMIK_HELPER.LINK]}
                      onChange={handleChange}
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
                    <label htmlFor="category">Category</label>
                    <Select
                      {...{
                        id: "category",
                        name: "category",
                        placeholder: database[type]?.category,
                        options: categories.map((item) => ({
                          label: item.name,
                          value: item.name,
                        })),
                        onChange: (values) =>
                          setFieldValue(FORMIK_HELPER.CATEGORY, values.value),
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
                  <label htmlFor="language">Language</label>
                  <Select
                    {...{
                      id: "language",
                      name: "language",
                      placeholder: database[type]?.language,
                      options: CONSTANTS.GENERAL_CONSTANTS.LANGUAGES.map(
                        (item) => ({
                          label: item.label,
                          value: item.lang,
                        })
                      ),
                      onChange: (values) =>
                        setFieldValue(FORMIK_HELPER.LANGUAGE, values.value),
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
                  <label htmlFor="crew">Crew</label>
                  <Select
                    {...{
                      id: "crew",
                      name: "crew",
                      placeholder: database[type]?.crew,
                      options: database[CONSTANTS.GENERAL_CONSTANTS.CREW].map(
                        (item) => ({
                          label: `${item.name} ${item.surname}`,
                          value: `${item.name} ${item.surname}`,
                        })
                      ),
                      onChange: (values) =>
                        setFieldValue(FORMIK_HELPER.CREW, values.value),
                    }}
                  />
                  {(errors[FORMIK_HELPER.CREW] || touched[FORMIK_HELPER.CREW]) && (
                    <F.Text className="validation-alert">
                      {errors[FORMIK_HELPER.CREW]}
                    </F.Text>
                  )}
                </div>
              

              {type === CONSTANTS.GENERAL_CONSTANTS.EVENTS ? (
                <div className="form-control form-info">
                  <label htmlFor="content">Info</label>
                  <textarea
                    id="content"
                    placeholder={database[type]?.content}
                    value={values[FORMIK_HELPER.EDITOR]}
                    onChange={handleChange}
                    cols="30"
                    rows="10"
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
                className="submit-btn"
                type="button"
                disabled={!isValid}
                onClick={handleSubmit}
              >
                Send
              </Button>
            </Form>
          </section>
        )}
      </Formik>
    </>
  );
};

export default Edit;
