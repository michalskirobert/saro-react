import React, {useEffect} from "react";
import Select from "react-select";
import { Button, Form as F } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";

import { Formik, Form } from "formik";
import { addEventsValidationScheme } from "./validation";

import CmsAlert from "./../../../components/shared/alerts/CmsAlert";
import { useContainer } from "./container";
import BackArrow from "./../../../assets/images/components/forms/ArrowBendUpLeft.svg";

import * as C from "./../../../utils/constants";
import { FORMIK_HELPER } from "./utils.js";


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
    crew,
    fetchCrew,
  } = useContainer();

  useEffect(() => {
    fetchCrew();
  }, []);
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
      <section className="section add-news" style={{paddingTop: "50px"}}>
      {alert && <CmsAlert />}
      <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/panel">
              Admin Panel
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Add Event</Breadcrumb.Item>
          </Breadcrumb>
      <button className="btn go-back" onClick={() => goBack()}>
        <img src={BackArrow} alt="Back" /><p>Go Back</p>
      </button>
      <Form className="cms">
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
            {errors[FORMIK_HELPER.TITLE] || touched[FORMIK_HELPER.TITLE] ? 
                  <F.Text className="validation-alert">
                    {errors[FORMIK_HELPER.TITLE]}
                  </F.Text>  : null
                }
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
             {errors[FORMIK_HELPER.CITY] || touched[FORMIK_HELPER.CITY] ? 
                  <F.Text className="validation-alert">
                    {errors[FORMIK_HELPER.CITY]}
                  </F.Text>  : null
                }
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
            {errors[FORMIK_HELPER.PLACE] || touched[FORMIK_HELPER.PLACE] ? 
                  <F.Text className="validation-alert">
                    {errors[FORMIK_HELPER.PLACE]}
                  </F.Text>  : null
                }
          </div>

          <div className="form-control">
            <label htmlFor="date">Date</label>
            <input
              id="date"
              type="date"
              value={values[FORMIK_HELPER.DATE]}
              onChange={handleChange}
            />
            {errors[FORMIK_HELPER.DATE] || touched[FORMIK_HELPER.DATE] ? 
                  <F.Text className="validation-alert">
                    {errors[FORMIK_HELPER.DATE]}
                  </F.Text>  : null
                }
          </div>
          <div className="form-control">
            <label htmlFor="time">Time</label>
            <input
              id="time"
              type="time"
              value={values[FORMIK_HELPER.TIME]}
              onChange={handleChange}
            />
            {errors[FORMIK_HELPER.TIME] || touched[FORMIK_HELPER.TIME] ? 
                  <F.Text className="validation-alert">
                    {errors[FORMIK_HELPER.TIME]}
                  </F.Text>  : null
                }
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
            {errors[FORMIK_HELPER.IMG_URL] || touched[FORMIK_HELPER.IMG_URL] ? 
                  <F.Text className="validation-alert">
                    {errors[FORMIK_HELPER.IMG_URL]}
                  </F.Text>  : null
                }
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
             {errors[FORMIK_HELPER.LINK] || touched[FORMIK_HELPER.LINK] ? 
                  <F.Text className="validation-alert">
                    {errors[FORMIK_HELPER.LINK]}
                  </F.Text>  : null
                }
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
             {errors[FORMIK_HELPER.LANGUAGE] || touched[FORMIK_HELPER.LANGUAGE] ? 
                  <F.Text className="validation-alert">
                    {errors[FORMIK_HELPER.LANGUAGE]}
                  </F.Text>  : null
                }
          </div>
          <div className="form-control">
            <label htmlFor="crew">Crew</label>
            <Select
              {...{
                id: "crew",
                name: "crew",
                options: crew.map((item) => ({
                  label: `${item.name} ${item.surname}`,
                  value: `${item.name} ${item.surname}`,
                })),
                onChange: (values) => setFieldValue(FORMIK_HELPER.CREW, values.value),
              }}
            />
            {errors[FORMIK_HELPER.CREW] || touched[FORMIK_HELPER.CREW] ? 
                  <F.Text className="validation-alert">
                    {errors[FORMIK_HELPER.CREW]}
                  </F.Text>  : null
                }
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
         {errors[FORMIK_HELPER.EDITOR] || touched[FORMIK_HELPER.EDITOR] ? 
                  <F.Text className="validation-alert">
                    {errors[FORMIK_HELPER.EDITOR]}
                  </F.Text>  : null
                }   
        </div>   

        <Button className="submit-btn" type="submit" disabled={!isValid} onClick={handleSubmit}>
          Add
        </Button>
      </Form>
    </section>
    )}
    </Formik>
  );
};

export default AddEvents;
