import React, { useContext } from 'react'
import { AppContext } from '../../App';
import { POSTER_URL } from '../../service/api';
import './MovieCard.css'

export const MovieCard = () => {

  const { movies } = useContext(AppContext);

  const movieList = movies.map((items, index) => {
    return (
        <div className="movie" key={index}>
          {items.poster_path ? (
            <img
              src={`${POSTER_URL}${items.poster_path}`}
              alt="{items.title}"
              className="poster"
            />
          ) : (
            <div className="_movie-placeholder">No Image found</div>
          )}
          <div className="movie-details">
            <div className="box" >
              <h4 className="title">{items.title}</h4>
              <p className="rating">{items.vote_average}</p>
            </div>
            <div className="overview">
              <h1>overview</h1>
              {items.overview}
            </div>
          </div>
        </div>
    );
  });

  return (
    <>
      {movieList}
    </>
  )
}
