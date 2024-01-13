import { FaCirclePlay } from "react-icons/fa6";
import { MdFavorite } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { UserAuth } from "../../context/AuthContext";
import { db } from "../../config/firebase";

const Card = ({ id, title, image, year }) => {
  const [save, setSave] = useState(false);
  const { user } = UserAuth();
  const movieID = doc(db, "users", `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setSave((prev) => !prev);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          title,
          image,
          year,
          id,
        }),
      });
    } else {
      alert("Please log in to save a movie");
    }
  };
  year = year.substr(0, 4);
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);
  return (
    <div
      data-aos="zoom-in"
      className="movie-list max-w-md pb-4 relative flex flex-col gap-2"
    >
      <div className="relative rounded-xl">
        <img
          src={`https://image.tmdb.org/t/p/w500${image}`}
          className="rounded-xl"
          alt="movie"
        />
        <div className="absolute flex justify-end top-0 opacity-0 hover:opacity-100 rounded-xl bg-cyan-500/30 w-full h-full ">
          <MdFavorite
            onClick={saveShow}
            className={` ${
              save ? "text-red-600" : "text-black"
            } text-3xl cursor-pointer`}
          />
        </div>
      </div>
      <div className="movie-list-info ">
        <div className="flex justify-between text-sm text-gray-500">
          <h2>{year}</h2>
          <h2 className="w-fit border border-gray-500 rounded-full px-1">
            Movie
          </h2>
          <h2>124 min</h2>
        </div>
        <h1>{title}</h1>
      </div>
    </div>
  );
};
export default Card;
