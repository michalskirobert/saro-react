import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { firestore } from "./../../../components/feature/firebase";

const News = () => {
  const dispatch = useDispatch();
  const isRead = useSelector((state) => state.default.readMore);
  const isLoading = useSelector((state) => state.homePage.isLoading);
  const news = useSelector((state) => state.homePage.newsData || []);

  useEffect(() => {
    dispatch({ type: "LOADING" });
    const unsubscribe = firestore
      .collection("language")
      .doc("en")
      .collection("news")
      .onSnapshot((doc) => {
        let data = doc.docs.map((item) => {
          return {
            id: item.id,
            ...item.data(),
          };
        });
        dispatch({ type: "FETCH_NEWS", payload: data });
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
    <section className="section home" style={{ paddingTop: "35px" }}>
      <div className="wrapper">
        <h2 style={{ width: "100%", fontSize: "1.9rem" }}>News</h2>
        <article className="news">
          {news
            .map((article) => {
              const {
                title,
                author,
                avatarURL,
                date,
                content,
                id,
                imageURL,
              } = article;
              return (
                <div className="news__item" key={id}>
                  <div className="news__box">
                    <h2>{title}</h2>
                    <div className="blog author__info">
                      <a href="#" style={{ marginRight: "10px" }}>
                        {author}
                      </a>
                      <img src={avatarURL} alt={author} />
                    </div>
                    <div className="blog date">
                      <i>{date}</i>
                    </div>
                    <div className="news-content">
                      <img src={imageURL} alt={title} className="news-image" />
                      <div
                        className="blog content"
                        dangerouslySetInnerHTML={{ __html: content }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })
            .slice(0, isRead ? -1 : 2)}
          {news.length > 2 && (
            <button
              className="btn viewAll"
              onClick={() => dispatch({ type: "READ_MORE" })}
            >
              {isRead ? "See less" : "See more"}
            </button>
          )}
        </article>
      </div>
    </section>
  );
};

export default News;
