import React from "react";
import Select from "react-select";
import { Button } from "react-bootstrap";

import { Formik, Form } from "formik";
import { addEventsValidationScheme } from "./validation";

import CmsAlert from "./../../../components/shared/alerts/CmsAlert";
import { useContainer } from "./container";
import BackArrow from "./../../../assets/images/components/forms/ArrowBendUpLeft.svg";

import * as C from "./../../../utils/constants";
import { FORMIK_HELPER } from "./utils.js";

const people = [
  {
    id: 1,
    name: "Robert",
  },
  {
    id: 22,
    name: "xxx",
  },
];

const cities = [
  {
    city: "Warsaw",
  },
  {
    city: "Cracow",
  },
];

const AddEvents = () => {
  const {
    alert,
    goBack,
    isLoading,
    infoContainer,
    setInfoContainer,
    handlerEvents,
  } = useContainer();
  return (
    <Formik
      {...{
      initialValues: {title: "", place: "", imgURL: "", link: ""},
      validateOnChange: true,
      validateOnMount: true,
      validationSchema: addEventsValidationScheme,
      onSubmit: (values) => console.log(values),
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
      })=>(     
      <section className="section add-news">
      {alert && <CmsAlert />}
      <button className="btn go-back" onClick={() => goBack()}>
        <img src={BackArrow} alt="Back" />
      </button>
      <Form className="cms" onSubmit={handlerEvents}>
        <h2 className="main-title">Add event</h2>
        <section className="form-container">
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              value={values[FORMIK_HELPER.TITLE]}
              placeholder="add title"
              onChange={handleChange}
            />
            {<div className="validation-alert">{errors[FORMIK_HELPER.TITLE]}</div>}  
          </div>

          <div className="form-control">
            <label htmlFor="city">City</label>
            <Select
              {...{
                id: "city",
                name: "city",
                options: cities.map((item) => ({
                  label: item.city,
                  value: item.city,
                })),
                onChange: (values) =>
                setFieldValue(FORMIK_HELPER.CITY, values.value),
              }}
            />
             {<div className="validation-alert">{errors[FORMIK_HELPER.CITY]}</div>}  
          </div>

          <div className="form-control">
            <label htmlFor="place">Place</label>
            <input
              id="place"
              placeholder="add place"
              type="text"
              value={values[FORMIK_HELPER.PLACE]}
              onChange={handleChange}
            />
             {<div className="validation-alert">{errors[FORMIK_HELPER.PLACE]}</div>} 
          </div>

          <div className="form-control">
            <label htmlFor="date">Date</label>
            <input
              id="date"
              type="date"
              value={values[FORMIK_HELPER.DATE]}
              onChange={handleChange}
            />
             {<div className="validation-alert">{errors[FORMIK_HELPER.DATE]}</div>}
          </div>
          <div className="form-control">
            <label htmlFor="time">Time</label>
            <input
              id="time"
              type="time"
              value={values[FORMIK_HELPER.TIME]}
              onChange={handleChange}
            />
            {<div className="validation-alert">{errors[FORMIK_HELPER.TIME]}</div>}
          </div>
          <div className="form-control">
            <label htmlFor="imgURL">Img URL</label>
            <input
              id="imgURL"
              placeholder="add img URL"
              type="text"
              value={values[FORMIK_HELPER.IMG_URL]}
              onChange={handleChange}
            />
             {<div className="validation-alert">{errors[FORMIK_HELPER.IMG_URL]}</div>}
          </div>
          <div className="form-control">
            <label htmlFor="link">Link</label>
            <input
              id="link"
              placeholder="add link"
              type="text"
              value={values[FORMIK_HELPER.LINK]}
              onChange={handleChange}
            />
             {<div className="validation-alert">{errors[FORMIK_HELPER.LINK]}</div>}
          </div>
          <div className="form-control">
            <label htmlFor="language">Lang</label>
            <Select
              {...{
                id: "language",
                name: "language",
                options: C.GENERAL_CONSTANTS.LANGUAGES.map((item) => ({
                  label: item.label,
                  value: item.lang,
                })),
                onChange: (values) => setFieldValue(FORMIK_HELPER.LANGUAGE, values.value),
              }}
            />
             {<div className="validation-alert">{errors[FORMIK_HELPER.LANGUAGE]}</div>}
          </div>
          <div className="form-control">
            <label htmlFor="crew">Crew</label>
            <Select
              {...{
                id: "crew",
                name: "crew",
                options: people.map((item) => ({
                  label: item.name,
                  value: item.name,
                })),
                onChange: (values) => setFieldValue(FORMIK_HELPER.CREW, values.value),
              }}
            />
             {<div className="validation-alert">{errors[FORMIK_HELPER.CREW]}</div>}
          </div>
        </section>
        <div className="form-control form-info">
          <label htmlFor="content">Info</label>
          <textarea
            id="content"
            placeholder="add event details"
            value={values[FORMIK_HELPER.EDITOR]}
            onChange={handleChange}
            cols="30"
            rows="10"
          ></textarea>   
          {<div className="validation-alert">{errors[FORMIK_HELPER.EDITOR]}</div>}          
        </div>   

        <Button type="submit" disabled={!isValid} onClick={handleSubmit}>
          Add
        </Button>
      </Form>
    </section>
    )}
    </Formik>
  );
};

export default AddEvents;
