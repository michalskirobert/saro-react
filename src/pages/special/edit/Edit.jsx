import React, { useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "react-bootstrap";

import CmsAlert from "./../../../components/shared/alerts/CmsAlert";
import { useContainer } from "./container";

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

  useEffect(()=>{
    getEvent()
  }, [])

  const {
    handleEdtiorChange,
    handlerSubmit,
    getEvent,
    alert,
    newTitle,
    setNewTitle,
    newImgURL,
    setNewImgURL,
    newQuery,
    newEventDate,
    setNewEventDate,
    setNewCrew,
    setNewEventCity,
    newPlace,
    setNewPlace,
    newLink,
    setNewLink,
    newEventTime,
    setNewEventTime,
    setNewLanguage,
  } = useContainer();

  return (
    <section className="section add-news">
      {alert && <CmsAlert />}
      <form className="cms" onSubmit={handlerSubmit}>
        <h2 class="main-title">Edit element</h2>
        <section className="form-container">
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              placeholder={newTitle}
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="city">City</label>
            <select id="city" onChange={(e) => setNewEventCity(e.target.value)}>
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
              placeholder={newPlace}
              type="text"
              value={newPlace}
              onChange={(e) => {
                setNewPlace(e.target.value);
              }}
            />
          </div>

          <div className="form-control">
            <label htmlFor="date">Date</label>
            <input
              id="date"
              type="date"
              value={newEventDate}
              onChange={(e) => {
                setNewEventDate(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="time">Time</label>
            <input
              id="time"
              type="time"
              value={newEventTime}
              onChange={(e) => {
                setNewEventTime(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="imgURL">Img URL</label>
            <input
              id="imgURL"
              placeholder={newImgURL}
              type="text"
              value={newImgURL}
              onChange={(e) => {
                setNewImgURL(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="link">Link</label>
            <input
              id="link"
              placeholder={newLink}
              type="text"
              value={newLink}
              onChange={(e) => {
                setNewLink(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="lang">Lang</label>
            <select id="lang" onChange={(e) => setNewLanguage(e.target.value)}>
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
            <select id="crew" onChange={(e) => setNewCrew(e.target.value)}>
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
        <section className="editor">
          <Editor
            apiKey={`${process.env.REACT_APP_TINY_API_KEY}`}
            initialValue={newQuery}
            init={{
              width: "100vw",
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
