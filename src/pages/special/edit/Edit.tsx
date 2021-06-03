import React from "react";
import { useLocation } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, FormText } from "reactstrap";

import { AiOutlineClose } from "react-icons/ai";

import { Form, Formik } from "formik";
import { editValidationScheme } from "./validation";

import { NCMS } from "src/core/types";

import CustomEditor from "@components/shared/custom-editor";
import { CustomSelect } from "@components/shared/custom-select";
import { CustomInput } from "@components/shared/custom-inputs";
import { CustomButton } from "@components/shared/custom-button";

import { useEditContainer } from "./container";

import * as CONSTANTS from "@utils/constants";
import { CMS_INPUT_TYPES, FORMIK_HELPER } from "./utils";

import * as S from "./styles";

const cities = [
  {
    city: "Warsaw",
  },
  {
    city: "Cracow",
  },
];

const Edit = (): JSX.Element => {
  const query: URLSearchParams = new URLSearchParams(useLocation().search);
  const type: string | null = String(
    query.get(CONSTANTS.GENERAL_CONSTANTS.TYPE)
  );
  const id: string | null = String(query.get(CONSTANTS.GENERAL_CONSTANTS.ID));
  const {
    database,
    updateEditedItem,
    status,
    categories,
    imageChangeHandler,
    image,
    deleteImage,
  } = useEditContainer();

  return (
    <>
      <Formik
        {...{
          initialValues: { ...database[type] },
          validateOnChange: true,
          validateOnMount: true,
          validationSchema: editValidationScheme(type as string),
          onSubmit: (values: Partial<NCMS.TDefaultBodyValue>) =>
            updateEditedItem(id as string, type as string, values),
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
          <section className={"section saro-panel edit"}>
            <Breadcrumb>
              <BreadcrumbItem>
                <a href={CONSTANTS.ROUTE_PATHS.HOME_ROUTE}>
                  {CONSTANTS.GENERAL_CONSTANTS.HOME}
                </a>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <a href={CONSTANTS.ROUTE_PATHS.PANEL_ROUTE}>
                  {CONSTANTS.GENERAL_CONSTANTS.ADMIN_PANEL}
                </a>
              </BreadcrumbItem>
              <BreadcrumbItem active>
                {CONSTANTS.GENERAL_CONSTANTS.EDIT}
              </BreadcrumbItem>
            </Breadcrumb>

            <Form className={"cms"}>
              <h2 className={"main-title"}>
                {CONSTANTS.GENERAL_CONSTANTS.EDIT}
              </h2>
              <section className={"form-container"}>
                <div className={"form-control"}>
                  <CustomInput
                    {...{
                      label: CONSTANTS.CMS_LABELS.TITLE,
                      invalid: !!errors[FORMIK_HELPER.TITLE],
                      id: FORMIK_HELPER.TITLE,
                      type: CMS_INPUT_TYPES.TEXT,
                      placeholder: database[type]?.title,
                      value: values[FORMIK_HELPER.TITLE],
                      onChange: handleChange,
                    }}
                  />
                  {(errors[FORMIK_HELPER.TITLE] ||
                    touched[FORMIK_HELPER.TITLE]) && (
                    <FormText className={"validation-alert"}>
                      {errors[FORMIK_HELPER.TITLE]}
                    </FormText>
                  )}
                </div>
                {type !== CONSTANTS.GENERAL_CONSTANTS.ARTICLES && (
                  <div className={"form-control"}>
                    <CustomInput
                      {...{
                        label: CONSTANTS.CMS_LABELS.SUBTITLE,
                        invalid: !!errors[FORMIK_HELPER.SUBTITLE],
                        id: FORMIK_HELPER.SUBTITLE,
                        type: CMS_INPUT_TYPES.TEXT,
                        placeholder: database[type]?.subtitle,
                        value: values[FORMIK_HELPER.SUBTITLE],
                        onChange: handleChange,
                      }}
                    />
                    {(errors[FORMIK_HELPER.SUBTITLE] ||
                      touched[FORMIK_HELPER.SUBTITLE]) && (
                      <FormText className={"validation-alert"}>
                        {errors[FORMIK_HELPER.SUBTITLE]}
                      </FormText>
                    )}
                  </div>
                )}
                {type !== CONSTANTS.GENERAL_CONSTANTS.EVENTS && (
                  <div className={"form-control"}>      
                    <CustomSelect
                      {...{
                        labelText: CONSTANTS.CMS_LABELS.CATEGORY,
                        name: FORMIK_HELPER.CATEGORY,
                        placeholder: database[type]?.category,
                        invalid: !!errors[FORMIK_HELPER.CATEGORY],
                        options: categories.map(({ name }: any) => ({
                          label: name,
                          value: name,
                        })),
                        onChange: setFieldValue,
                      }}
                    />
                    {(errors[FORMIK_HELPER.CATEGORY] ||
                      touched[FORMIK_HELPER.CATEGORY]) && (
                      <FormText className={"validation-alert"}>
                        {errors[FORMIK_HELPER.CATEGORY]}
                      </FormText>
                    )}
                  </div>
                )}
                {type === CONSTANTS.GENERAL_CONSTANTS.EVENTS && (
                  <div className={"form-control"}>              
                    <CustomSelect
                      {...{
                        labelText: CONSTANTS.CMS_LABELS.CITY,
                        name: FORMIK_HELPER.CITY,
                        placeholder: database[type]?.city,
                        invalid: !!errors[FORMIK_HELPER.CITY],
                        options: cities.map(({ city }) => ({
                          label: city,
                          value: city,
                        })),
                        onChange: setFieldValue,
                      }}
                    />
                    {(errors[FORMIK_HELPER.CITY] ||
                      touched[FORMIK_HELPER.CITY]) && (
                      <FormText className={"validation-alert"}>
                        {errors[FORMIK_HELPER.CITY]}
                      </FormText>
                    )}
                  </div>
                )}
                {type === CONSTANTS.GENERAL_CONSTANTS.EVENTS && (
                  <div className={"form-control"}>
                    <CustomInput
                      {...{
                        label: CONSTANTS.CMS_LABELS.PLACE,
                        invalid: !!errors[FORMIK_HELPER.PLACE],
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
                      <FormText className={"validation-alert"}>
                        {errors[FORMIK_HELPER.PLACE]}
                      </FormText>
                    )}
                  </div>
                )}
                {type === CONSTANTS.GENERAL_CONSTANTS.EVENTS && (
                  <div className={"form-control"}>
                    <CustomInput
                      {...{
                        label: CONSTANTS.CMS_LABELS.DATE,
                        invalid: !!errors[FORMIK_HELPER.DATE],
                        id: FORMIK_HELPER.DATE,
                        type: CMS_INPUT_TYPES.DATE,
                        placeholder: database[type]?.date,
                        value: values[FORMIK_HELPER.DATE],
                        onChange: handleChange,
                      }}
                    />
                    {(errors[FORMIK_HELPER.DATE] ||
                      touched[FORMIK_HELPER.DATE]) && (
                      <FormText className={"validation-alert"}>
                        {errors[FORMIK_HELPER.DATE]}
                      </FormText>
                    )}
                  </div>
                )}
                {type === CONSTANTS.GENERAL_CONSTANTS.EVENTS && (
                  <div className={"form-control"}>
                    <CustomInput
                      {...{
                        label: CONSTANTS.CMS_LABELS.TIME,
                        invalid: !!errors[FORMIK_HELPER.TIME],
                        id: FORMIK_HELPER.TIME,
                        type: CMS_INPUT_TYPES.TIME,
                        placeholder: database[type]?.time,
                        value: values[FORMIK_HELPER.TIME],
                        onChange: handleChange,
                      }}
                    />
                    {(errors[FORMIK_HELPER.TIME] ||
                      touched[FORMIK_HELPER.TIME]) && (
                      <FormText className={"validation-alert"}>
                        {errors[FORMIK_HELPER.TIME]}
                      </FormText>
                    )}
                  </div>
                )}
                {type === CONSTANTS.GENERAL_CONSTANTS.EVENTS && (
                  <div className={"form-control"}>
                    <CustomInput
                      {...{
                        label: CONSTANTS.CMS_LABELS.LINK,
                        invalid: !!errors[FORMIK_HELPER.LINK],
                        id: FORMIK_HELPER.LINK,
                        type: CMS_INPUT_TYPES.TEXT,
                        placeholder: database[type]?.link,
                        value: values[FORMIK_HELPER.LINK],
                        onChange: handleChange,
                      }}
                    />
                    {(errors[FORMIK_HELPER.LINK] ||
                      touched[FORMIK_HELPER.LINK]) && (
                      <FormText className={"validation-alert"}>
                        {errors[FORMIK_HELPER.LINK]}
                      </FormText>
                    )}
                  </div>
                )}
                <div className={"form-control"}>
                  <CustomInput
                    {...{
                      label: CONSTANTS.CMS_LABELS.UPLOAD_COVER_IMG,
                      invalid: !!errors[FORMIK_HELPER.IMG_URL],
                      id: FORMIK_HELPER.IMG_URL,
                      type: CMS_INPUT_TYPES.FILE,
                      placeholder: database[type]?.imgURL,
                      value: values[FORMIK_HELPER.IMG_URL],
                      onChange: (event: React.SyntheticEvent<EventTarget>) =>
                        imageChangeHandler(event, false),
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
                          variant: CONSTANTS.GENERAL_CONSTANTS.B_DANGER,
                          onClick: () => deleteImage(image),
                        }}
                      >
                        <AiOutlineClose />
                      </S.DeleteUpload>
                    </>
                  )}
                  {(errors[FORMIK_HELPER.IMG_URL] ||
                    touched[FORMIK_HELPER.IMG_URL]) && (
                    <FormText className={"validation-alert"}>
                      {errors[FORMIK_HELPER.IMG_URL]}
                    </FormText>
                  )}
                </div>
                {type !== CONSTANTS.GENERAL_CONSTANTS.EVENTS && (
                  <div className={"form-control"}>
                    <CustomInput
                      {...{
                        label: CONSTANTS.CMS_LABELS.UPLOAD_IMGS,
                        invalid: !!errors[FORMIK_HELPER.IMAGES_URL],
                        id: FORMIK_HELPER.IMAGES_URL,
                        type: CMS_INPUT_TYPES.FILE,
                        placeholder: database[type]?.imagesURL,
                        value: values[FORMIK_HELPER.IMAGES_URL],
                        onChange: (event: React.SyntheticEvent<EventTarget>) =>
                          imageChangeHandler(event, true),
                        multiple: true,
                      }}
                    />
                  </div>
                )}
                <div className={"form-control"}>             
                  <CustomSelect
                    {...{
                      labelText: CONSTANTS.CMS_LABELS.LANG,
                      name: FORMIK_HELPER.LANGUAGE,
                      placeholder: database[type]?.language,
                      invalid: !!errors[FORMIK_HELPER.LANGUAGE],
                      options: CONSTANTS.GENERAL_CONSTANTS.LANGUAGES.map(
                        (item) => ({
                          label: item.label,
                          value: item.lang,
                        })
                      ),
                      onChange: (options) =>
                        setFieldValue(
                          FORMIK_HELPER.LANGUAGE,
                          (options as any).value
                        ),
                    }}
                  />
                  {(errors[FORMIK_HELPER.LANGUAGE] ||
                    touched[FORMIK_HELPER.LANGUAGE]) && (
                    <FormText className={"validation-alert"}>
                      {errors[FORMIK_HELPER.LANGUAGE]}
                    </FormText>
                  )}
                </div>
                <div className={"form-control"}>              
                  <CustomSelect
                    {...{
                      labelText: CONSTANTS.CMS_LABELS.CREW,
                      name: FORMIK_HELPER.CREW,
                      placeholder: database[type]?.crew,
                      invalid: !!errors[FORMIK_HELPER.CREW],
                      isDisabled: status < 50,
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
                    <FormText className={"validation-alert"}>
                      {errors[FORMIK_HELPER.CREW]}
                    </FormText>
                  )}
                </div>

                {type === CONSTANTS.GENERAL_CONSTANTS.EVENTS ? (
                  <div className={"form-control form-info"}>
                    <label htmlFor={FORMIK_HELPER.EDITOR}>
                      {CONSTANTS.CMS_LABELS.CONTENT}
                    </label>
                    <textarea
                      {...{
                        id: FORMIK_HELPER.EDITOR,
                        placeholder: database[type]?.content,
                        value: values[FORMIK_HELPER.EDITOR],
                        onChange: handleChange,
                        cols: 30,
                        rows: 10,
                      }}
                    />
                    {(errors[FORMIK_HELPER.EDITOR] ||
                      touched[FORMIK_HELPER.EDITOR]) && (
                      <FormText className={"validation-alert"}>
                        {errors[FORMIK_HELPER.EDITOR]}
                      </FormText>
                    )}
                  </div>
                ) : (
                  <div className={"form-control editor"}>
                    <CustomEditor
                      {...{
                        propName: FORMIK_HELPER.EDITOR,
                        onChangeEditor: setFieldValue,
                      }}
                    />
                    {(errors[FORMIK_HELPER.EDITOR] ||
                      touched[FORMIK_HELPER.EDITOR]) && (
                      <FormText className={"validation-alert"}>
                        {errors[FORMIK_HELPER.EDITOR]}
                      </FormText>
                    )}
                  </div>
                )}
              </section>
              <CustomButton
                {...{
                  className: "submit-btn",
                  type: "submit",
                  disabled: !isValid,
                  onClick: handleSubmit,
                  content: CONSTANTS.GENERAL_CONSTANTS.SEND,
                }}
              />
            </Form>
          </section>
        )}
      </Formik>
    </>
  );
};

export default Edit;
