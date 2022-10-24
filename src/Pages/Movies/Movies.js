import React, { useState } from "react";
import "./Movies.css";
import { useContext } from "react";
import { AppContext } from "../../App";
import { HiSearch } from "react-icons/hi";
// import StarRatings from "react-star-ratings";
import { MovieCard } from "../../Components/MovieCard/MovieCard";

export const Movies = () => {
  const { backPage, nextPage, page, totalPage, searchMovie, fetchMovies } =
    useContext(AppContext);
    
  const [search, setSearch] = useState(false);


  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(searchMovie.current.value)
  }
  


  return (
    <div className="container">
      <form onSubmit={searchMovies}>
        <div className='box-search'>
          <button type={'submit'} className={search ? 'button-search' : 'button-search2'} onClick={() => setSearch(true)}>
            <HiSearch className='icon-search' />
          </button>
          <input className={search ? 'search' : 'search2'} name='search' type='text' ref={searchMovie}/>
        </div>
      </form>
      <div className="box-movie"><MovieCard/></div>
      <div className='pages-movies'>
        {page !== 1 ? (
          <button
            onClick={backPage}
            className="btn-pages"
          >
            Prev
          </button>
        ) : null}
        <span className='pages'>
          {page} / {totalPage}
        </span>
        {page === totalPage ? null : (
          <button
            onClick={nextPage}
            className="btn-pages"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
