import React from "react";
import Select from "react-select";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "react-bootstrap";

import { Formik, Form } from "formik";
import { addValidationScheme } from "./validation";

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

const AddArticle = () => {
  const {
    alert,
    goBack,
    isLoading,
    infoContainer,
    setInfoContainer,
    handleEdtiorChange,
    handlerArticle,
  } = useContainer();
  return (
    <Formik 
    {...{
      initialValues: {title: ""},
      validateOnChange: true,
      validateOnMount: true,
      validationSchema: addValidationScheme,
      onSubmit: (values) => console.log(values),
    }}>
      {({ values,
          errors,
          isValid,
          touched,
          handleChange,
          handleSubmit,
          setFieldValue,})=>(    
    <section className="section add-article">
      {alert && <CmsAlert />}
      <button className="btn go-back" onClick={() => goBack()}>
        <img src={BackArrow} alt="Back" />
      </button>
      <Form className="cms" onSubmit={handlerArticle}>
        <h2 className="main-title">Add Article</h2>
        <section className="form-container">
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              placeholder="add title"
              type="text"
              value={values[FORMIK_HELPER.TITLE]}
              onChange={handleChange}
            />
            {<div className="validation-alert">{errors[FORMIK_HELPER.TITLE]}</div>} 
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
          <div className="form-control">
            <label htmlFor="category">Category</label>
            <Select
              {...{
                id: "category",
                name: "category",
                options: categories.map((item) => ({
                  label: item.name,
                  value: item.name,
                })),
                onChange: (values) =>
                setFieldValue(FORMIK_HELPER.CATEGORY, values.value),
              }}
            />
            {<div className="validation-alert">{errors[FORMIK_HELPER.CATEGORY]}</div>}
          </div>
          <div className="form-control">
            <label htmlFor="language">Language</label>
            <Select
              {...{
                id: "language",
                name: "language",
                options: C.GENERAL_CONSTANTS.LANGUAGES.map((item) => ({
                  label: item.label,
                  value: item.lang,
                })),
                onChange: (values) =>
                setFieldValue(FORMIK_HELPER.LANGUAGE, values.value),
              }}
            />
             {<div className="validation-alert">{errors[FORMIK_HELPER.LANGUAGE]}</div>}
          </div>
        </section>

        <section className="editor">
          <Editor
            apiKey={`${process.env.REACT_APP_TINY_API_KEY}`}
            initialValue={infoContainer.content}
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
              setFieldValue([FORMIK_HELPER.EDITOR], e.target.getContent())}
          />
          {<div className="validation-alert">{errors[FORMIK_HELPER.EDITOR]}</div>}
        </section>
        <Button type="submit" disabled={!isValid} onClick={handleSubmit}>
          Add
        </Button>
      </Form>
    </section>
    )}
    </Formik>
  );
};

export default AddArticle;
