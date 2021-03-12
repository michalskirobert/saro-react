import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useContainer } from "./container";
import { DefaultLoader } from "./../../../components/shared/loadings/DefaultLoader";

const Blog = () => {
  const lastPosts = useSelector((state) => state.blog.posts);
  const isLoading = useSelector((state) => state.blog.isLoading);
  const { getPosts } = useContainer();

  useEffect(() => {
    getPosts();
  }, []);

  if (isLoading) {
    return <DefaultLoader />;
  }
  return (
    <section className="blog" style={{ padding: "0" }}>
      {lastPosts && <h1 style={{ width: "100%" }}>Blog last posts</h1>}
      <div className="posts-slider">
        {lastPosts &&
          lastPosts
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
                      {content && content.length > 150
                        ? `${content.substring(0, 150)}...`
                        : content}
                    </p>
                  </div>
                  <div className="post-info">
                    <div className="post-control">
                      <strong>Published:</strong>
                      <p style={{ display: "inline" }}></p>
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
      {lastPosts && lastPosts.length > 3 && (
        <Link className="btn viewAll" to="/blog">
          View all
        </Link>
      )}
    </section>
  );
};

export default Blog;
