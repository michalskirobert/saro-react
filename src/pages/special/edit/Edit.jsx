import React, { useEffect } from "react";
import Select from "react-select";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "react-bootstrap";

import CmsAlert from "./../../../components/shared/alerts/CmsAlert";
import { useEdit } from "./container";

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
    handleEdtiorChange,
    handlerSubmit,
    getEvent,
    alert,
    title,
    setTitle,
    imgURL,
    setImgURL,
    query,
    eventDate,
    setEventDate,
    setCrew,
    setEventCity,
    eventPlace,
    setEventPlace,
    link,
    setLink,
    eventTime,
    setEventTime,
    setLanguage,
    info,
    setInfo,
    setCategory,
    editable,
  } = useEdit();

  useEffect(() => {
    getEvent();
  }, []);

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
              placeholder={editable ? editable.title : "null"}
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="city">City</label>
            <Select
              {...{
                id: "city",
                name: "city",
                defaultValue: cities[0],
                options: cities.map((item) => ({
                  label: item.city,
                  value: item.city,
                })),
                onChange: (options) => setEventCity(options),
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="place">Place</label>
            <input
              id="place"
              placeholder={eventPlace}
              type="text"
              value={eventPlace}
              onChange={(e) => {
                setEventPlace(e.target.value);
              }}
            />
          </div>

          <div className="form-control">
            <label htmlFor="date">Date</label>
            <input
              id="date"
              type="date"
              value={eventDate}
              onChange={(e) => {
                setEventDate(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="time">Time</label>
            <input
              id="time"
              type="time"
              value={eventTime}
              onChange={(e) => {
                setEventTime(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="imgURL">Img URL</label>
            <input
              id="imgURL"
              placeholder={imgURL}
              type="text"
              value={imgURL}
              onChange={(e) => {
                setImgURL(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="link">Link</label>
            <input
              id="link"
              placeholder={link}
              type="text"
              value={link}
              onChange={(e) => {
                setLink(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="category">Category</label>
            <Select
              {...{
                id: "category",
                name: "category",
                defaultValue: categories[0],
                options: categories.map((item) => ({
                  label: item.name,
                  value: item.name,
                })),
                onChange: (options) => setCategory(options),
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="lang">Lang</label>
            <Select
              {...{
                id: "lang",
                name: "lang",
                defaultValue: lang[0],
                options: lang.map((item) => ({
                  label: item.lang,
                  value: item.lang,
                })),
                onChange: (options) => setLanguage(options),
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="crew">Crew</label>
            <Select
              {...{
                id: "crew",
                name: "crew",
                defaultValue: people[0],
                options: people.map((item) => ({
                  label: item.name,
                  value: item.name,
                })),
                onChange: (options) => setCrew(options),
              }}
            />
          </div>
        </section>

        <div className="form-control form-info">
          <label htmlFor="info">Info</label>
          <textarea
            id="info"
            placeholder="add event details"
            value={info}
            onChange={(e) => {
              setInfo(e.target.value);
            }}
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <section className="editor">
          <Editor
            apiKey={`${process.env.REACT_APP_TINY_API_KEY}`}
            initialValue={query}
            init={{
              plugins: [
                "a11ychecker advcode advlist autolink link help imagetools image code lists charmap print preview hr anchor pagebreak",
                " lists link linkchecker media mediaembed noneditable powerpaste preview",
                "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
                "table emoticons template paste help",
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
        <Button type="submit">Send</Button>
      </form>
    </section>
  );
};

export default Edit;
