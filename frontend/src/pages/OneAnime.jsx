import React from "react";
import { useParams } from "react-router-dom";
import articles from "../data.json";
import "./OneAnime.scss";

function OneAnime() {
  const { id } = useParams();
  const article = articles.find((art) => art.id === parseInt(id, 10));

  return (
    <main className="anime-container">
      <h1>{article.title}</h1>
      <div className="img-container">
        <img src={article.image.src} alt={article.image.alt} />
        <legend>{article.resume}</legend>
      </div>
      <div className="text-container">
        <h2>{article.subtitle}</h2>
        <p>{article.text}</p>
      </div>
    </main>
  );
}

export default OneAnime;
