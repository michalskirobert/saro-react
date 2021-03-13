import React, { useEffect } from "react";
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
    getNews,
    handlerNews,
    getArticle,
    handlerArticle,
    handleEdtiorChange,
    handlerSubmit,
    getEvent,
    handlerEvents,
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
  } = useEdit();

  useEffect(() => {
    getEvent();
  }, [getEvent]);

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
              placeholder={title}
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="city">City</label>
            <select id="city" onChange={(e) => setEventCity(e.target.value)}>
              {cities &&
                cities.map((item, index) => {
                  const { city } = item;
                  return (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  );
                })}
            </select>
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
            <select id="category" onChange={(e) => setCategory(e.target.value)}>
              {categories.map(({ name, id }) => {
                return (
                  <option key={id} value={name}>
                    {name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="lang">Lang</label>
            <select id="lang" onChange={(e) => setLanguage(e.target.value)}>
              {lang.map((item, index) => {
                return (
                  <option key={index} value={item.lang}>
                    {item.lang}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="crew">Crew</label>
            <select id="crew" onChange={(e) => setCrew(e.target.value)}>
              {people.map(({ name, id }) => {
                return (
                  <option key={id} value={name}>
                    {name}
                  </option>
                );
              })}
            </select>
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
