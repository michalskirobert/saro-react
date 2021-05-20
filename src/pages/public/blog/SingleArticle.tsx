import React, { useEffect } from "react";

import { useContainer } from "./container";

const SingleArticle = () => {
  const { getarticle, article } = useContainer();

  useEffect(() => {
    getarticle();
  });

  return (
    <article className={"post"}>
      {article.map(({ title, imageURL, content, date, author, category }) => {
        return (
          <>
            <div className={"image__container"}>
              <img src={imageURL} alt={title} />
            </div>
            <div className={"content__container"}>
              <div className={"header"}>
                <h2>{title}</h2>
              </div>
              <div className={"category"}>
                <h3>{category}</h3>
              </div>
              <div className={"content"}>
                <b>{date}</b>
                <i>{author}</i>
                <p>{content}</p>
              </div>
            </div>
          </>
        );
      })}
    </article>
  );
};

export default SingleArticle;
