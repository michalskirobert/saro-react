import React, { useEffect } from "react";
import Select from "react-select";

import CmsAlert from "./../../../components/shared/alerts/CmsAlert";
import { useEdit } from "./container";

import { Editor } from "@tinymce/tinymce-react";
import { Button } from "react-bootstrap";

const cities = [
  {
    city: "Warsaw",
  },
  {
    city: "Cracow",
  },
];
const lang = [
  {
    lang: "en",
  },
  {
    lang: "ja",
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

const Edit = () => {
  const {
    alert,
    handleEdtiorChange,
    handlerSubmit,
    getEvent,
    editableContainer,
    setEditableContainer,
  } = useEdit();

  useEffect(() => {
    getEvent();
  });

  return (
    <section className="section add-news">
      {alert && <CmsAlert />}

      <form className="cms" onSubmit={handlerSubmit}>
        <h2 className="main-title">Edit element</h2>
        <section className="form-container">
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              placeholder={
                editableContainer ? editableContainer.title : "add title..."
              }
              type="text"
              value={editableContainer.title}
              onChange={(e) => {
                const value = e.target.value;
                setEditableContainer((prevState) => {
                  return { ...prevState, title: value };
                });
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="city">City</label>
            <Select
              {...{
                id: "city",
                name: "city",
                defaultValue: editableContainer ? editableContainer.city : cities[0],
                options: cities.map((item) => ({
                  label: item.city,
                  value: item.city,
                })),
                onChange: (options) => {
                  setEditableContainer((prevState) => {
                    return { ...prevState, city: options };
                  });
                },
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="place">Place</label>
            <input
              id="place"
              placeholder={
                editableContainer ? editableContainer.place : "add place..."
              }
              type="text"
              value={editableContainer.place}
              onChange={(e) => {
                const value = e.target.value;
                setEditableContainer((prevState) => {
                  return { ...prevState, place: value };
                });
              }}
            />
          </div>

          <div className="form-control">
            <label htmlFor="date">Date</label>
            <input
              id="date"
              type="date"
              placeholder={editableContainer ? editableContainer.date : null}
              value={editableContainer.date}
              onChange={(e) => {
                const value = e.target.value;
                setEditableContainer((prevState) => {
                  return { ...prevState, date: value };
                });
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="time">Time</label>
            <input
              id="time"
              type="time"
              placeholder={editableContainer ? editableContainer.time : null}
              value={editableContainer.time}
              onChange={(e) => {
                const value = e.target.value;
                setEditableContainer((prevState) => {
                  return { ...prevState, time: value };
                });
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="imgURL">Img URL</label>
            <input
              id="imgURL"
              placeholder={
                editableContainer ? editableContainer.imgURL : "add img URL..."
              }
              type="text"
              value={editableContainer.imgURL}
              onChange={(e) => {
                const value = e.target.value;
                setEditableContainer((prevState) => {
                  return { ...prevState, imgURL: value };
                });
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="link">Link</label>
            <input
              id="link"
              placeholder={
                editableContainer ? editableContainer.link : "add link..."
              }
              type="text"
              value={editableContainer.link}
              onChange={(e) => {
                const value = e.target.value;
                setEditableContainer((prevState) => {
                  return { ...prevState, link: value };
                });
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="category">Category</label>
            <Select
              {...{
                id: "category",
                name: "category",
                defaultValue: editableContainer ? editableContainer.category : categories[0],
                options: categories.map((item) => ({
                  label: item.name,
                  value: item.name,
                })),
                onChange: (options) => {
                  setEditableContainer((prevState) => {
                    return { ...prevState, category: options };
                  });
                },
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="lang">Lang</label>
            <Select
              {...{
                id: "lang",
                name: "lang",
                defaultValue:  editableContainer ? editableContainer.language : lang[0],
                options: lang.map((item) => ({
                  label: item.lang,
                  value: item.lang,
                })),
                onChange: (options) => {
                  setEditableContainer((prevState) => {
                    return { ...prevState, language: options };
                  });
                },
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="crew">Crew</label>
            <Select
              {...{
                id: "crew",
                name: "crew",
                defaultValue: editableContainer ? editableContainer.crew : people[0],
                options: people.map((item) => ({
                  label: item.name,
                  value: item.name,
                })),
                onChange: (options) => {
                  setEditableContainer((prevState) => {
                    return { ...prevState, crew: options };
                  });
                },
              }}
            />
          </div>
        </section>

        <div className="form-control form-info">
          <label htmlFor="content">Info</label>
          <textarea
            id="content"
            placeholder={
              editableContainer
                ? editableContainer.content
                : "add description..."
            }
            value={editableContainer.content}
            onChange={(e) => {
              const value = e.target.value;
              setEditableContainer((prevState) => {
                return { ...prevState, content: value };
              });
            }}
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <section className="editor">
          <Editor
            apiKey={`${process.env.REACT_APP_TINY_API_KEY}`}
            initialValue={editableContainer.content}
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
            onChange={handleEdtiorChange}
          />
        </section>
        <Button onClick={handlerSubmit} type="submit">Send</Button>
      </form>
    </section>
  );
};

export default Edit;
