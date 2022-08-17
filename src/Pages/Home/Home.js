import React, { useEffect, useState } from "react";
import './Home.css';
import { API_KEY, API_URL, POSTER_URL } from "../../service/api";
import { useFetch } from "../../Hooks/useFetch";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Home = () => {
  const { nowPlaying } = useFetch();
  console.log(nowPlaying);

  return (
    <section className="pb-5">
      <div className="">
        <Carousel
          autoPlay={true}
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          interval={3000}
        >
          {nowPlaying.slice(0, 8).map((item, i) => (
            <div key={i}>
              <div
                className="hero"
                style={{
                  backgroundImage: `url(${POSTER_URL}${item.backdrop_path})`,
                }}
              >
                <div className="hero-content max-center">
                  <h1 className={"hero-title"}>{item.title}</h1>
                  {item.overview ? (
                    <p className={"hero-overview"}>{item.overview}</p>
                    ) : null}
                  <button className="button-trailer">Play Trailer</button>
                </div>
                {/* <YouTube className='trailer'/> */}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}