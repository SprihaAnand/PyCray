import React from "react";
import "../css/Blog.css";
function Blog(props) {
  const image = props.image;
  return (
    <div>
      <div className="blog_container">
        <img
          src={require("../assets/Blogs/" + image)}
          alt=""
          className="blog_image"
        />
        <p>
          <span className="date">{props.date}</span>
          <span className="tag">{props.tag}</span>
        </p>
        <h3>{props.title}</h3>
        <p className="blog_description">{props.description}</p>
      </div>
    </div>
  );
}

export default Blog;
