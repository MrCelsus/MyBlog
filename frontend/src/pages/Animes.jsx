import React from "react";
import AnimeCard from "@components/AnimeCard";
import articles from "../data.json";
import "./Animes.scss";

function Animes() {
  return (
    <article className="animes-container">
      {articles.map((article) => {
        return <AnimeCard article={article} />;
      })}
    </article>
  );
}

export default Animes;
