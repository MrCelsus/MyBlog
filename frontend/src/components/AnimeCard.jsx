import React from "react";
import PropTypes from "prop-types";
import ArticleType from "../types/article";

function AnimeCard({ article }) {
  return (
    <article>
      <h1>{article.title}</h1>
      <h2>{article.original_title}</h2>
    </article>
  );
}

AnimeCard.propTypes = {
  article: PropTypes.instanceOf(ArticleType).isRequired,
};

export default AnimeCard;
