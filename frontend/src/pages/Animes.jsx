import React from "react";
import AnimeCard from "@components/AnimeCard";
import articles from "../data.json";

function Animes() {
  return (
    <section>
      <AnimeCard article={articles[0]} />
    </section>
  );
}

export default Animes;
