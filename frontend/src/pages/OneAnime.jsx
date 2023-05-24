import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./OneAnime.scss";

function OneAnime() {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/articles/${id}`)
      .then((res) => res.json())
      .then((art) => setArticle(art))
      .catch((err) => console.error(err));
  }, []);

  return (
    <main className="anime-container">
      {article && (
        <>
          <h1>{article.title}</h1>
          <div className="img-container">
            <img src={article.src} alt={article.alt} />
            <legend>{article.resume}</legend>
          </div>
          <div className="text-container">
            <h2>{article.subtitle}</h2>
            <p>{article.text}</p>
          </div>
        </>
      )}
    </main>
  );
}

export default OneAnime;
