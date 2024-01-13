import { FaCirclePlay } from "react-icons/fa6";
import SmallCard from "../Card/SmallCard";
import MoviePart from "./MoviePart";
import Urls from "../../requests";
import { useEffect, useState } from "react";
import axios from "axios";

const Movies = () => {
  const [isMovie, setIsMovie] = useState(true);
  const [isMovie1, setIsMovie1] = useState(false);
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularTvShows, setPopularTvShows] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [topTvShows, setTopTvShows] = useState([]);
  useEffect(() => {
    axios.get(Urls.popularMovies).then((res) => {
      setPopularMovies(res.data.results);
    });
    axios.get(Urls.popularTvShows).then((res) => {
      setPopularTvShows(res.data.results);
    });
    axios.get(Urls.topRatedMovies).then((res) => {
      setTopMovies(res.data.results);
    });
    axios.get(Urls.topRatedTvShows).then((res) => {
      setTopTvShows(res.data.results);
    });
  }, []);
  return (
    <div className="overflow-hidden movies w-11/12 xl:w-full flex flex-col lg:flex-row gap-7 justify-between container">
      <div className=" flex flex-col gap-10 w-full lg:w-3/4">
        <MoviePart
          title={"Popular "}
          isMovie={isMovie}
          setIsMovie={setIsMovie}
          movies={isMovie ? popularMovies : popularTvShows}
        />
        <MoviePart
          isMovie={isMovie1}
          setIsMovie={setIsMovie1}
          title={"Top Rated "}
          movies={isMovie1 ? topMovies : topTvShows}
        />
      </div>
      <div className="top5 flex flex-col gap-32 w-full lg:w-1/4">
        <div className="top5-movies flex flex-col gap-8 text-white w-full">
          <div className="head flex gap-2">
            <FaCirclePlay className="text-cyan-500 text-3xl" />
            <h1 className="text-xl">TOP 5 Movies</h1>
          </div>
          <div className="flex flex-col gap-4 relative">
            {topMovies?.map((el, i) => {
              return (
                i < 5 && (
                  <SmallCard
                    key={i}
                    serial={i}
                    image={el.poster_path}
                    title={el.title}
                    rate={el.vote_average}
                  />
                )
              );
            })}
          </div>
        </div>
        <div className="top5-tv-show flex flex-col gap-8 text-white w-full">
          <div className="head flex gap-2">
            <FaCirclePlay className="text-cyan-500 text-3xl" />
            <h1 className="text-xl">TOP 5 Tv Shows</h1>
          </div>
          <div className="flex flex-col gap-4 relative">
            {topTvShows?.map((el, i) => {
              return (
                i < 5 && (
                  <SmallCard
                    key={i}
                    serial={i}
                    image={el.poster_path}
                    title={el.name}
                    rate={el.vote_average}
                  />
                )
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
