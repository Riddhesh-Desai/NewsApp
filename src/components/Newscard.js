import React from "react";

export default function Newscard(props) {
  const { author, title, description, url, urlToImage, publishedAt } = props;
  return (
    <div className="card my-2 bg-dark">
      <img src={urlToImage} className="card-img-top img-fluid" alt=" not found" />
      <div className="card-body">
        <h5 className="card-title">{title} </h5>
        <p className="card-text">{description}</p>
        <a href={url} className="btn btn-outline-danger" target="_blank" rel="noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
}
