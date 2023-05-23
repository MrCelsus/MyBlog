import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ArticleType from "../types/article";

function AnimeCard({ article }) {
  return (
    <section className="card-container">
      <img src={article.src} alt={article.alt} />
      <h2>{article.title}</h2>
      <h3>{article.original_title}</h3>
      <Link to={`/animes/${article.id}`}>
        <button type="button" className="btn">
          {" "}
          En savoir plus{" "}
        </button>
      </Link>
    </section>
  );
}

AnimeCard.propTypes = {
  article: PropTypes.instanceOf(ArticleType).isRequired,
};

export default AnimeCard;
