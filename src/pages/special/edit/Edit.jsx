import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Select from "react-select";
import { Editor } from "@tinymce/tinymce-react";
import { Button, Form as F } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";

import { Formik, Form } from "formik";
import { editValidationScheme, editEventsValidationScheme } from "./validation";

import CmsAlert from "./../../../components/shared/alerts/CmsAlert";
import { useEdit } from "./container";

import * as CONSTANTS from "./../../../utils/constants";
import BackArrow from "./../../../assets/images/components/forms/ArrowBendUpLeft.svg";
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
  const {
    alert,
    fetchCrew,
    crew,
    goBack,
    getEvent,
    editableContainer,
  } = useEdit();

  const query = new URLSearchParams(useLocation().search);
  const type = query.get("type");
  const id = query.get("id");

  useEffect(() => {
    getEvent(id, type);
    fetchCrew()
  }, []);

  return (
    <> 
    <Formik
    {...{
      initialValues: {},
      validateOnChange: true,
      validateOnMount: true,
      validationSchema: type === CONSTANTS.GENERAL_CONSTANTS.EVENTS ? editEventsValidationScheme : editValidationScheme,
      onSubmit: (values) => {
        console.log(values)              
      },
    }}>
      {({values,
        errors,
        isValid,
        touched,
        handleChange,
        handleSubmit,
        setFieldValue,
      })=>(    
    <section className="section edit" style={{paddingTop: "50px"}}>
      {alert && <CmsAlert />}
      <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/panel">
              Admin Panel
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Edit</Breadcrumb.Item>
          </Breadcrumb>
      <button className="btn go-back" onClick={() => goBack()}>
        <img src={BackArrow} alt="Back" />
        <p>Go Back</p>
      </button>
      <Form className="cms">
        <h2 className="main-title">Edit element</h2>
        <section className="form-container">
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              placeholder={editableContainer?.title}
              type="text"
              value={values[FORMIK_HELPER.TITLE]}
              onChange={handleChange}
            />
              {errors[FORMIK_HELPER.TITLE] || touched[FORMIK_HELPER.TITLE] ? (
                  <F.Text className="validation-alert">
                    {errors[FORMIK_HELPER.TITLE]}
                  </F.Text>
                ) : null}
          </div>   
          {type === CONSTANTS.GENERAL_CONSTANTS.EVENTS ? ( 
          <div className="form-control">
            <label htmlFor="subtitle">Subtitle</label>
            <input
              id="subtitle"
              placeholder={editableContainer?.subtitle}
              type="text"
              value={values[FORMIK_HELPER.SUBTITLE]}
              onChange={handleChange}
            />
              {errors[FORMIK_HELPER.SUBTITLE] || touched[FORMIK_HELPER.SUBTITLE] ? (
                  <F.Text className="validation-alert">
                    {errors[FORMIK_HELPER.SUBTITLE]}
                  </F.Text>
                ) : null}
          </div> ) : null }
          {type === CONSTANTS.GENERAL_CONSTANTS.EVENTS ? ( 
          <div className="form-control">
            <label htmlFor="city">City</label>
            <Select
              {...{
                id: "city",
                name: "city",
                placeholder: editableContainer?.city,
                options: cities.map((item) => ({
                  label: item.city,
                  value: item.city,
                })),
                onChange: (values) =>
                  setFieldValue(FORMIK_HELPER.CITY, values.value),
              }}
            />
            {errors[FORMIK_HELPER.CITY] ||
                touched[FORMIK_HELPER.CITY] ? (
                  <F.Text className="validation-alert">
                    {errors[FORMIK_HELPER.CITY]}
                  </F.Text>
                ) : null}
          </div> ) : null }
          {type === CONSTANTS.GENERAL_CONSTANTS.EVENTS ? (  
          <div className="form-control">
            <label htmlFor="place">Place</label>
            <input
              id="place"
              placeholder={editableContainer?.place}
              type="text"
              autoComplete="off"
              value={values[FORMIK_HELPER.PLACE]}
              onChange={handleChange}
            />
            {errors[FORMIK_HELPER.PLACE] || touched[FORMIK_HELPER.PLACE] ? (
                  <F.Text className="validation-alert">
                    {errors[FORMIK_HELPER.PLACE]}
                  </F.Text>
                ) : null}
          </div> ) : null }
          {type === CONSTANTS.GENERAL_CONSTANTS.EVENTS ? (  
          <div className="form-control">
            <label htmlFor="date">Date</label>
            <input
              id="date"
              type="date"
              placeholder={editableContainer?.date}
              value={values[FORMIK_HELPER.DATE]}
              onChange={handleChange}
            />
            {errors[FORMIK_HELPER.DATE] || touched[FORMIK_HELPER.DATE] ? (
                  <F.Text className="validation-alert">
                    {errors[FORMIK_HELPER.DATE]}
                  </F.Text>
                ) : null}
          </div>) : null }
          {type === CONSTANTS.GENERAL_CONSTANTS.EVENTS ? (  
          <div className="form-control">
            <label htmlFor="time">Time</label>
            <input
              id="time"
              type="time"
              placeholder={editableContainer?.time}
              value={values[FORMIK_HELPER.TIME]}
              onChange={handleChange}
            />
            {errors[FORMIK_HELPER.TIME] || touched[FORMIK_HELPER.TIME] ? (
                  <F.Text className="validation-alert">
                    {errors[FORMIK_HELPER.TIME]}
                  </F.Text>
                ) : null}
          </div>) : null }
          {type === CONSTANTS.GENERAL_CONSTANTS.EVENTS ? (          
          <div className="form-control">
            <label htmlFor="imgURL">Img URL</label>
            <input
              id="imgURL"
              placeholder={editableContainer?.imgURL}
              type="text"
              value={values[FORMIK_HELPER.IMG_URL]}
              onChange={handleChange}
            />
               {errors[FORMIK_HELPER.IMG_URL] || touched[FORMIK_HELPER.IMG_URL] ? (
                  <F.Text className="validation-alert">
                    {errors[FORMIK_HELPER.IMG_URL]}
                  </F.Text>
                ) : null}
          </div>) : null }
          {type === CONSTANTS.GENERAL_CONSTANTS.EVENTS ? (
          <div className="form-control">
            <label htmlFor="link">Link</label>
            <input
              id="link"
              placeholder={editableContainer?.link}
              type="text"
              value={values[FORMIK_HELPER.LINK]}
              onChange={handleChange}
            />
            {errors[FORMIK_HELPER.LINK] || touched[FORMIK_HELPER.LINK] ? (
                  <F.Text className="validation-alert">
                    {errors[FORMIK_HELPER.LINK]}
                  </F.Text>
                ) : null}
          </div>
            ) : null}
          {type === CONSTANTS.GENERAL_CONSTANTS.EVENTS ? null : (
            <div className="form-control">
              <label htmlFor="category">Category</label>
              <Select
                {...{
                  id: "category",
                  name: "category",
                  placeholder: editableContainer?.category,
                  options: categories.map((item) => ({
                    label: item.name,
                    value: item.name,
                  })),
                  onChange: (values) =>
                  setFieldValue(FORMIK_HELPER.CATEGORY, values.value),
                }}
              />
              {errors[FORMIK_HELPER.CATEGORY] || touched[FORMIK_HELPER.CATEGORY] ? (
                  <F.Text className="validation-alert">
                    {errors[FORMIK_HELPER.CATEGORY]}
                  </F.Text>
                ) : null}
            </div>
          )}
          <div className="form-control">
            <label htmlFor="language">Language</label>
            <Select
              {...{
                id: "language",
                name: "language",
                placeholder: editableContainer?.language,
                options: CONSTANTS.GENERAL_CONSTANTS.LANGUAGES.map((item) => ({
                  label: item.label,
                  value: item.lang,
                })),
                onChange: (values) =>
                      setFieldValue(FORMIK_HELPER.LANGUAGE, values.value),
              }}
            />
            {errors[FORMIK_HELPER.LANGUAGE] || touched[FORMIK_HELPER.LANGUAGE] ? (
                  <F.Text className="validation-alert">
                    {errors[FORMIK_HELPER.LANGUAGE]}
                  </F.Text>
                ) : null}
          </div>
          <div className="form-control">
            <label htmlFor="crew">Crew</label>
            <Select
              {...{
                id: "crew",
                name: "crew",
                placeholder: editableContainer?.crew,
                options: crew.map((item) => ({
                  label: `${item.name} ${item.surname}`,
                  value: `${item.name} ${item.surname}`,
                })),
                onChange: (values) =>
                setFieldValue(FORMIK_HELPER.CREW, values.value),
              }}
            />
            {errors[FORMIK_HELPER.CREW] || touched[FORMIK_HELPER.CREW] ? (
                  <F.Text className="validation-alert">
                    {errors[FORMIK_HELPER.CREW]}
                  </F.Text>
                ) : null}
          </div>
        </section>

        {type === CONSTANTS.GENERAL_CONSTANTS.EVENTS ? (
          <div className="form-control form-info">
            <label htmlFor="content">Info</label>
            <textarea
              id="content"
              placeholder={editableContainer?.content}
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
        ) : (
          <section className="editor">
            <Editor
              apiKey={`${process.env.REACT_APP_TINY_API_KEY}`}
              initialValue={editableContainer?.content}
              init={{
                plugins: [
                  "a11ychecker advcode advlist autolink link help imagetools image code lists charmap print preview hr anchor pagebreak",
                  " lists link linkchecker media mediaembed noneditable powerpaste preview",
                  "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
                  "table emoticons template help",
                ],
                a_plugin_option: true,
                a_configuration_option: 400,
                image_title: true,
                automatic_uploads: true,
                file_picker_types: "image",
                toolbar:
                  "insertfile undo redo a11ycheck | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons",
                menu: {
                  favs: {
                    title: "Shortcut",
                    items: "code visualaid | searchreplace | emoticons",
                  },
                },
                menubar: "favs file edit view insert format tools table help",
                image_caption: true,
                powerpaste_allow_local_images: true,
              }}
              onChange={(e) =>
                setFieldValue([FORMIK_HELPER.EDITOR], e.target.getContent())
              }
            />
            {errors[FORMIK_HELPER.EDITOR] || touched[FORMIK_HELPER.EDITOR] ? (
                <F.Text className="validation-alert">
                  {errors[FORMIK_HELPER.EDITOR]}
                </F.Text>
              ) : null}
          </section>
        )}
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
