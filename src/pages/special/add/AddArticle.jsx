import React, { useEffect } from "react";
import { Button, Form as F } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import {useSelector} from "react-redux";
import { AiOutlineClose } from "react-icons/ai";

import { Formik, Form } from "formik";
import { addArticleValidationScheme } from "./validation";

import CustomEditor from "@components/shared/custom-editor";
import CmsAlert from "@components/shared/alerts/CmsAlert";
import { CustomSelect } from "@components/shared/custom-select";

import { useContainer } from "./container";

import {
  FORMIK_HELPER,
  CMS_INPUT_TYPES,
  CMS_INPUT_PLACEHOLDERS,
} from "./utils.js";

import * as C from "@utils/constants";
import * as S from "./styles";

const AddArticle = () => {
  const userStatus = useSelector(state=> state?.currentUser?.status) 
  
  const {
    alert,
    categories,
    handleSubmit,
    crew,
    imageChangeHandler,
    image,
    deleteImage,
    invalid,
    imagesName,
    setImagesName,
    images,
    setImgName,
    imgName,
    handleEditorChange,
    value,
  } = useContainer();

  useEffect(() => {
    setImgName({ ...imgName, type: "article" });
    setImagesName({ ...imagesName, type: "article", kind: "images" });
    // eslint-disable-next-line
  }, []);

  return (
    <Formik
      {...{
        initialValues: {},
        validateOnChange: true,
        validateOnMount: true,
        validationSchema: addArticleValidationScheme,
        onSubmit: (values) => handleSubmit(values),
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
        <section className="section saro-panel">
          {alert && <CmsAlert />}
          <Breadcrumb>
            <Breadcrumb.Item href={C.ROUTE_PATHS.HOME_ROUTE}>
              {C.GENERAL_CONSTANTS.HOME}
            </Breadcrumb.Item>
            <Breadcrumb.Item href={C.ROUTE_PATHS.PANEL_ROUTE}>
              {C.GENERAL_CONSTANTS.ADMIN_PANEL}
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              {C.GENERAL_CONSTANTS.ADD_ARTICLES}
            </Breadcrumb.Item>
          </Breadcrumb>
          <h2 className="main-title">{C.GENERAL_CONSTANTS.ADD_ARTICLES}</h2>
          <Form className="cms">
            <section className="form-container">
              <div className="form-control">
                <label htmlFor={FORMIK_HELPER.TITLE}>
                  {C.CMS_LABELS.TITLE}
                </label>
                <input
                  {...{
                    className: errors[FORMIK_HELPER.TITLE] && "invalid",
                    id: FORMIK_HELPER.TITLE,
                    placeholder: CMS_INPUT_PLACEHOLDERS.TITLE,
                    type: CMS_INPUT_TYPES.TEXT,
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
              <div className="form-control">
                <label htmlFor={FORMIK_HELPER.CREW}>{C.CMS_LABELS.CREW}</label>
                <CustomSelect
                  {...{
                    name: FORMIK_HELPER.CREW,
                    placeholder: CMS_INPUT_PLACEHOLDERS.CREW,
                    isDisabled: (userStatus < 50),
                    invalid: errors[FORMIK_HELPER.CREW],
                    options: crew.map(({ name, surname }) => ({
                      label: `${name} ${surname}`,
                      value: `${name} ${surname}`,
                    })),
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
              <div className="form-control">
                <label htmlFor={FORMIK_HELPER.CATEGORY}>
                  {C.CMS_LABELS.CATEGORY}
                </label>
                <CustomSelect
                  {...{
                    name: FORMIK_HELPER.CATEGORY,
                    placeholder: CMS_INPUT_PLACEHOLDERS.CATEGORY,
                    invalid: errors[FORMIK_HELPER.CATEGORY],
                    options: categories.map((item) => ({
                      label: item,
                      value: item,
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
              <div className="form-control">
                <label htmlFor={FORMIK_HELPER.LANGUAGE}>
                  {C.CMS_LABELS.LANG}
                </label>
                <CustomSelect
                  {...{
                    name: FORMIK_HELPER.LANGUAGE,
                    placeholder: CMS_INPUT_PLACEHOLDERS.LANGUAGE,
                    invalid: errors[FORMIK_HELPER.LANGUAGE],
                    options: C.GENERAL_CONSTANTS.LANGUAGES.map((item) => ({
                      label: item.label,
                      value: item.lang,
                    })),
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
                <label htmlFor={FORMIK_HELPER.IMG_URL}>
                  {C.CMS_LABELS.UPLOAD_COVER_IMG}
                </label>
                <input
                  {...{
                    className: errors[FORMIK_HELPER.IMG_URL] && "invalid",
                    id: FORMIK_HELPER.IMG_URL,
                    type: "file",
                    value: values[FORMIK_HELPER.IMG_URL],
                    onChange: imageChangeHandler,
                  }}
                />
                {image && (
                  <>
                    <S.PreviewImg
                      {...{
                        src: image,
                        alt: "Preview",
                      }}
                    />
                    <S.DeleteUpload
                    {...{
                      type: CMS_INPUT_TYPES.BUTTON,
                      variant: C.GENERAL_CONSTANTS.B_DANGER,
                      onClick: () => deleteImage(image)
                    }}                      
                    >
                      <AiOutlineClose />
                    </S.DeleteUpload>
                  </>
                )}
                 {(errors[FORMIK_HELPER.IMG_URL] ||
                  touched[FORMIK_HELPER.IMG_URL]) && (
                    <F.Text className="validation-alert">{errors[FORMIK_HELPER.IMG_URL]}</F.Text>
                )}                
              </div>
              {/* <div className="form-control">
                <label htmlFor={FORMIK_HELPER.IMAGES_URL}>{C.CMS_LABELS.UPLOAD_IMGS}</label>
                <input
                  id={FORMIK_HELPER.IMAGES_URL}
                  name={FORMIK_HELPER.IMAGES_URL}
                  type="file"
                  onChange={(e) => {
                    imageChangeHandler(e, FORMIK_HELPER.IMAGES_URL);
                  }}
                />    

                <F.Text className="validation-alert">
                  {!invalid.errorMsg && !images && "Field required."}
                  {invalid && invalid.errorMsg}
                </F.Text>
              </div> */}
              <div className="form-control editor">
                <label>{C.CMS_LABELS.CONTENT}</label>
                <CustomEditor
                  {...{
                    propName: FORMIK_HELPER.EDITOR,
                    value: value[FORMIK_HELPER.EDITOR],
                    onChangeEditor: handleEditorChange,
                  }}
                />
                <F.Text className="validation-alert">
                  {!!value.length && errors[FORMIK_HELPER.EDITOR]}
                </F.Text>
              </div>
            </section>
            <Button
              {...{
                className: "submit-btn",
                type: CMS_INPUT_TYPES.SUBMIT,
                disabled: !isValid,
                onClick: handleSubmit,
              }}
            >
              {C.GENERAL_CONSTANTS.ADD}
            </Button>
          </Form>
        </section>
      )}
    </Formik>
  );
};

export default AddArticle;
