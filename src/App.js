import React, { createContext, useCallback, useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./Components/Nav/Nav";
import { Contact } from "./Pages/Contact/Contact";
import { Home } from "./Pages/Home/Home";
import { Movies } from "./Pages/Movies/Movies";

import axios from "axios";
import { API_KEY, API_URL } from "./service/api";
import { IoIosAdd } from "react-icons/io";
import { LoginAcccess } from "./Pages/Login/LoginAcccess";
import { GiChessKing, GiChessKnight, GiChessPawn, GiChessQueen, GiChessRook } from "react-icons/gi";

export const AppContext = createContext();

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const searchMovie = useRef('');
  const [select, setSelect] = useState(<IoIosAdd className='user-ico'/>)

  const fetchMovies = useCallback(
    async (searchMovie) => {
      const type = searchMovie ? "search/movie" : "discover/movie";
      try {
        const {
          data: { results, total_pages },
        } = await axios.get(`${API_URL}/${type}`, {
          params: {
            api_key: API_KEY,
            language: 'en',
            page: page,
            query: searchMovie,
          },
        });
        setMovies(results);
        setTotalPage(total_pages);
      } catch (error) { }
    },
    [page]
  );

  const SelectUser = () => {
    if ( window.localStorage.getItem('User', 'Queen') === 'Queen' ) {
        setSelect(<GiChessQueen className='user-ico'/>)
    } else if ( window.localStorage.getItem('User', 'Rook') === 'Rook') {
        setSelect(<GiChessRook className='user-ico'/>)
    } else if (window.localStorage.getItem('User', 'Knight') === 'Knight') {
        setSelect(<GiChessKnight className='user-ico'/>)
    } else if ( window.localStorage.getItem('User', 'King') === 'King') {
        setSelect(<GiChessKing className='user-ico'/>)
    } else if ( window.localStorage.getItem('User', 'Pawn') === 'Pawn') {
        setSelect(<GiChessPawn className='user-ico'/>)
    }
}

useEffect(() => {
  SelectUser()
}, [])

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);


  function backPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function nextPage() {
    if (page < totalPage) {
      setPage(page + 1);
    }
  }
  return (
    <AppContext.Provider
      value={{
        movies,
        setMovies,
        searchMovie,
        fetchMovies,
        backPage,
        nextPage,
        page,
        totalPage,
        select, 
        setSelect,
        SelectUser,

      }}
    >
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginAcccess />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};
