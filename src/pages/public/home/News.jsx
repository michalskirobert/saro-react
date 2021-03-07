import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useContainer } from "./container";
import { DefaultLoader } from "./../../../components/shared/loadings/DefaultLoader";
import { newsActions } from "../../../_actions";

const News = () => {
  const dispatch = useDispatch();
  const isRead = useSelector((state) => state.news.viewMore);
  const isLoading = useSelector((state) => state.news.isLoading);
  const news = useSelector((state) => state.news.posts);

  const { getNews } = useContainer();

  useEffect(() => {
    getNews();
  }, []);

  if (isLoading) {
    return <DefaultLoader />;
  }

  return (
    <section className="section home" style={{ paddingTop: "35px" }}>
      <div className="wrapper">
        {news && <h2 style={{ width: "100%", fontSize: "1.9rem" }}>News</h2>}
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
              onClick={() => dispatch(newsActions.viewMore())}
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
