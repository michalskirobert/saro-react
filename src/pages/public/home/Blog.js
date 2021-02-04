import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { firestore } from "./../../../components/feature/firebase";

const Blog = () => {
  const dispatch = useDispatch();
  const lastPosts = useSelector((state) => state.homePage.lastPosts || []);
  useEffect(() => {
    const unsubscribe = firestore
      .collection("language")
      .doc("en")
      .collection("blog")
      .onSnapshot((doc) => {
        let data = doc.docs.map((item) => item.data());
        dispatch({ type: "FETCH_POSTS", payload: data });
      });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <section className="blog" style={{ padding: "0" }}>
      <h1 style={{ width: "100%" }}>Blog last posts</h1>
      <div className="posts-slider">
        {lastPosts
          .map((event, index) => {
            const {
              title,
              imageURL,
              content,
              date,
              readMore,
              author,
              category,
            } = event;
            return (
              <article className="last-posts" key={index}>
                <img src={imageURL} alt={title} />
                <div className="last-posts-box">
                  <h2 style={{ textAlign: "left" }}>{title}</h2>
                  <p style={{ display: "inline" }}>
                    {content.length > 150
                      ? `${content.substring(0, 150)}...`
                      : content}
                  </p>
                </div>
                <div className="post-info">
                  <div className="post-control">
                    <strong>Published:</strong>
                    <p style={{ display: "inline" }}> {date}</p>
                  </div>
                  <div className="post-control">
                    <strong>Author:</strong>
                    <p style={{ display: "inline" }}> {author}</p>
                  </div>
                  <div className="post-control">
                    <strong>Category:</strong>
                    <p style={{ display: "inline" }}> {category}</p>
                  </div>
                </div>
                <Link className="btn join-us" to={`/blog/${index}`}>
                  {readMore}
                </Link>
              </article>
            );
          })
          .slice(0, 3)}
      </div>
      {lastPosts.length > 3 && (
        <Link className="btn viewAll" to="/blog">
          View all
        </Link>
      )}
    </section>
  );
};

export default Blog;
