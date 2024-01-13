import Card from "../Card/Card";

const MoviePart = ({ title, movies, setIsMovie, isMovie }) => {
  //console.log(movies);

  return (
    <div className="movie-part overflow-hidden text-white flex flex-col gap-5">
      <div className="head w-full flex gap-3">
        <h1 className=" text-3xl font-semibold">{title}</h1>
        <button
          onClick={() => {
            setIsMovie(true);
          }}
          className={`w-fit font-thin px-3 py-2 rounded-2xl border ${
            isMovie ? "text-cyan-400 border-cyan-500" : " border-gray-700"
          } hover:border-cyan-500 hover:text-cyan-400`}
        >
          Movies
        </button>
        <button
          onClick={() => {
            setIsMovie(false);
          }}
          className={`w-fit font-thin px-3 py-2 rounded-2xl border ${
            !isMovie ? "text-cyan-400 border-cyan-500" : " border-gray-700"
          } hover:border-cyan-500 hover:text-cyan-400`}
        >
          TV Shows
        </button>
      </div>
      <div className="movie-lists grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xlg:grid-cols-5">
        {movies?.map((el, i) => {
          return (
            i < 10 && (
              <Card
                key={i}
                id={el.id}
                title={el.title ? el.title : el.name}
                image={el.poster_path}
                year={el.release_date ? el.release_date : el.first_air_date}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default MoviePart;
