import React from "react";
import "./SingleContent.css";
import { img_300, unavailable } from "../../config/config";

const SingleContent = (props) => {
  const { id, poster, title, date, media_type, vote_average } = props;

  return (
    <div className="card">
      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="sub-title">
        {media_type === "tv" ? "TV Show" : "Movie "}
      </span>
      <span className="sub-title">{date}</span>
    </div>
  );
};

export default SingleContent;
