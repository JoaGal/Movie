import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { API_KEY, API_NOWPLAYING, API_URL } from "../service/api";

export function useFetch() {
  const [nowPlaying, setNowPlaying] = useState([]);

  const fetchSlider = useCallback(async () => {
    try {
      const response = await axios.get(`${API_URL}${API_NOWPLAYING}`, {
        params: {
          api_key: API_KEY,
          language: 'en',
          page: 1,
        },
      });
      const data = response.data.results;
      setNowPlaying(data);
    } catch {}
  }, []);

  useEffect(() => {
    fetchSlider();
  }, []);

  return {
    nowPlaying,
    setNowPlaying,
    fetchSlider,
  };
}