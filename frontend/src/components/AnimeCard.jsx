import React from 'react'

const AnimeCard = ({ anime }) => {
  return (
    <article>
      <h1>{anime.title}</h1>
      <h2>{anime.original_title}</h2>
    </article>
  )
}

export default AnimeCard