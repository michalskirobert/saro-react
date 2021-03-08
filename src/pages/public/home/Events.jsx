import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useContainer } from "./container";
import { DefaultLoader } from "./../../../components/shared/loadings/DefaultLoader";

const Event = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events);
  const isLoading = useSelector((state) => state.events.isLoading);

  const { getEvents } = useContainer();

  useEffect(() => {
    getEvents();
  }, []);

  if (isLoading) {
    return <DefaultLoader />;
  }

  return (
    <section className="events" style={{ padding: "0" }}>
      {events && <h1 style={{ width: "100%" }}>Upcoming events</h1>}
      <div className="event-slider">
        {events
          .map((event) => {
            const {
              id,
              title,
              imageURL,
              info,
              place,
              city,
              link,
            } = event;
            return (
              <article className="event" key={id}>
                <img src={imageURL} alt={title} />
                <div className="event-box">
                  <h2 style={{ textAlign: "left" }}>{title}</h2>
                  <p style={{ display: "inline" }}>
                    {info.length > 90 ? `${info.substring(0, 90)}...` : info}
                  </p>
                </div>
                <div className="event-info">
                  <div className="event-control">
                    <strong>Time:</strong>{" "}
                    <p style={{ display: "inline" }}>
                      Empty :)
                    </p>
                  </div>
                  <div className="event-control">
                    <strong>Place:</strong> <p>{place} in</p>{" "}
                    <b style={{ fontWeight: "bold", color: "blueviolet" }}>
                      {city}{" "}
                    </b>
                  </div>
                </div>
                <Link className="btn join-us" to={`/events/${id}`}>
                  {link}
                </Link>
              </article>
            );
          })
          .slice(0, 3)}
      </div>
      {events.length > 3 && (
        <Link className="btn viewAll" to="/events">
          View all
        </Link>
      )}
    </section>
  );
};

export default Event;
