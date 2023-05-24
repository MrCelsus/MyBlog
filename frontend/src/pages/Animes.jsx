import React, { useState, useEffect } from "react";
import AnimeCard from "@components/AnimeCard";
import "./Animes.scss";

function Animes() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/articles`)
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <article className="animes-container">
      {articles.map((article) => {
        return <AnimeCard article={article} />;
      })}
    </article>
  );
}

export default Animes;
