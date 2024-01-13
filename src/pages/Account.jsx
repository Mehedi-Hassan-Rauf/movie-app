import { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { MdDelete } from "react-icons/md";
import { db } from "../config/firebase";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";

const Account = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();
  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  const movieRef = doc(db, "users", `${user?.email}`);
  const deleteShow = async (passedID) => {
    try {
      const result = movies.filter((item) => item.id !== passedID);
      await updateDoc(movieRef, {
        savedShows: result,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="account overflow-hidden w-11/12 pt-32 flex flex-col justify-center items-center ">
      <h1>Saved items</h1>
      <div className="w-11/12 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {movies?.map((movie, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="relative">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.image}`}
                className="w-fit"
                alt=""
              />
              <div className="absolute flex justify-end top-0 opacity-0 hover:opacity-100 rounded-xl bg-cyan-500/30 w-full h-full ">
                <MdDelete
                  onClick={() => {
                    deleteShow(movie.id);
                  }}
                  className="text-red-600 text-3xl cursor-pointer"
                />
              </div>
            </div>
            <div className="detail  flex flex-col">
              <div className="flex gap-2 text-sm text-gray-500">
                <h3>Movie /</h3>
                <h3>Rating: {movie.rate}</h3>
              </div>
              <h1>{movie.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Account;
