import React from "react";
import Select from "react-select";
import { Button } from "react-bootstrap";

import CmsAlert from "./../../../components/shared/alerts/CmsAlert";
import { useContainer } from "./container";

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
    title,
    setTitle,
    setLanguage,
    setCrew,
    alert,
    isLoading,
    eventTime,
    setEventTime,
    eventDate,
    setEventDate,
    info,
    setInfo,
    eventPlace,
    setEventPlace,
    handlerEvents,
    setEventCity,
    imgURL,
    setImgURL,
    link,
    setLink,
  } = useContainer();
  return (
    <section className="section add-news">
      {alert && <CmsAlert />}

      <form className="cms" onSubmit={handlerEvents}>
        <h2 className="main-title">Add event</h2>
        <section className="form-container">
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              value={title}
              placeholder="add title"
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
                onChange: (options) => setEventCity(options.value),
              }}
            />
          </div>

          <div className="form-control">
            <label htmlFor="place">Place</label>
            <input
              id="place"
              placeholder="add place"
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
              placeholder=" add img URL"
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
              placeholder="add link"
              type="text"
              value={link}
              onChange={(e) => {
                setLink(e.target.value);
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
                onChange: (options) => setLanguage(options.value),
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
                onChange: (options) => setCrew(options.value),
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

        <Button type="submit" disabled={isLoading}>
          Add
        </Button>
      </form>
    </section>
  );
};

export default AddEvents;
