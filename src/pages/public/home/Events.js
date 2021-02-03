import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { firestore } from "./../../../components/feature/firestore";

const Event = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.homePage.eventsData || []);
  const isLoading = useSelector((state) => state.homePage.isLoading);

  useEffect(() => {
    dispatch({ type: "LOADING" });
    const unsubscribe = firestore
      .collection("language")
      .doc("en")
      .collection("events")
      .onSnapshot((doc) => {
        let data = doc.docs.map((item) => {
          return {
            id: item.id,
            ...item.data(),
          };
        });
        dispatch({ type: "FETCH_EVENTS", payload: data });
        console.log(events);
        dispatch({ type: "STOP_LOADING" });
      });
    return () => {
      unsubscribe();
    };
  }, []);

  if (isLoading) {
    return (
      <div className="loading-page">
        <h2>Loading..</h2>
      </div>
    );
  }

  return (
    <section className="events" style={{ padding: "0" }}>
      <h1 style={{ width: "100%" }}>Upcoming events</h1>
      <div className="event-slider">
        {events
          .map((event) => {
            const {
              id,
              title,
              imageURL,
              info,
              time,
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
                    <p style={{ display: "inline" }}>{time}</p>
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
