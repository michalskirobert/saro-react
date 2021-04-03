import React, {useEffect} from "react";
import Select from "react-select";
import { Editor } from "@tinymce/tinymce-react";
import { Button, Form as F } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";

import { Formik, Form } from "formik";
import { addArticleValidationScheme } from "./validation";

import CmsAlert from "@components/shared/alerts/CmsAlert";
import { useContainer } from "./container";
import BackArrow from "@assets/images/components/forms/ArrowBendUpLeft.svg";

import * as C from "@utils/constants";
import { FORMIK_HELPER } from "./utils.js";


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
    infoContainer,
    fetchCrew,
    handlerArticle,
    crew,
  } = useContainer();

  useEffect(() => {
    fetchCrew();
  }, []);
  return (
    <Formik
      {...{
        initialValues: { title: "" },
        validateOnChange: true,
        validateOnMount: true,
        validationSchema: addArticleValidationScheme,
        onSubmit: (values) => {console.log(values)
        handlerArticle(values)},
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
        <section className="section add-article" style={{paddingTop: "50px"}}>
          {alert && <CmsAlert />}
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/panel">
              Admin Panel
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Add Article</Breadcrumb.Item>
          </Breadcrumb>
          <button className="btn go-back" onClick={() => goBack()}>
            <img src={BackArrow} alt="Back" /><p>Go Back</p>
          </button>
          <Form className="cms" >
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
               {errors[FORMIK_HELPER.TITLE] || touched[FORMIK_HELPER.TITLE] ? 
                  <F.Text className="validation-alert">
                    {errors[FORMIK_HELPER.TITLE]}
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
                    onChange: (values) =>
                      setFieldValue(FORMIK_HELPER.CREW, values.value),
                  }}
                />
                {errors[FORMIK_HELPER.CREW] || touched[FORMIK_HELPER.CREW] ? 
                  <F.Text className="validation-alert">
                    {errors[FORMIK_HELPER.CREW]}
                  </F.Text>  : null
                }
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
                {errors[FORMIK_HELPER.CATEGORY] || touched[FORMIK_HELPER.CATEGORY] ? 
                  <F.Text className="validation-alert">
                    {errors[FORMIK_HELPER.CATEGORY]}
                  </F.Text>  : null
                }
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
                {errors[FORMIK_HELPER.LANGUAGE] || touched[FORMIK_HELPER.LANGUAGE] ? 
                  <F.Text className="validation-alert">
                    {errors[FORMIK_HELPER.LANGUAGE]}
                  </F.Text>  : null
                }
              </div>
            </section>

            <section className="editor">
              <Editor
                apiKey={`${process.env.REACT_APP_TINY_API_KEY}`}
                initialValue={infoContainer.content}
                init={{
                  plugins: [
                    "advlist autolink link help imagetools image code lists charmap print preview hr anchor pagebreak",
                    " lists link media noneditable preview",
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
              {errors[FORMIK_HELPER.EDITOR] || touched[FORMIK_HELPER.EDITOR] ? 
                  <F.Text className="validation-alert">
                    {errors[FORMIK_HELPER.EDITOR]}
                  </F.Text>  : null
                }
            </section>
            <Button
              className="submit-btn"
              type="submit"
              disabled={!isValid}
              onClick={handleSubmit}
            >
              Add
            </Button>
          </Form>
        </section>
      )}
    </Formik>
  );
};

export default AddArticle;
