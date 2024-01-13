import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SmallCard = ({ serial, image, title, rate }) => {
  //rate = rate.toString();
  //rate = rate.substr(0, 3);

  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);
  return (
    <div
      data-aos="flip-up"
      className="w-full flex gap-3 items-center overflow-hidden bg-neutral-900 hover:bg-cyan-500 hover:text-neutral-900 rounded-xl "
    >
      <h1 className="absolute text-xs font-bold text-cyan-500 top-0 -right-0 border-2 border-cyan-500 bg-neutral-900 px-2 py-1 rounded-full">
        {serial + 1}
      </h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${image}`}
        className="w-1/12 lg:w-2/12"
        alt=""
      />
      <div className="detail flex flex-col">
        <div className="flex gap-2 text-sm text-gray-500">
          <h3>Movie /</h3>
          <h3>Rating: {rate}</h3>
        </div>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default SmallCard;
