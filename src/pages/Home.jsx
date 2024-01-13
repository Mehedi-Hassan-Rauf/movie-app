import ImageSlider from "../components/Home/ImageSlider";
import url1 from "../assets/1.jpg";
import url2 from "../assets/2.jpg";
import url3 from "../assets/3.jpg";
import url4 from "../assets/4.jpg";
import url5 from "../assets/5.jpg";
import Movies from "../components/Home/Movies";
import { useEffect, useState } from "react";
import axios from "axios";
import Urls from "../requests";

const Home = () => {
  const [posters, setPosters] = useState([]);
  //const dum = posters[0];
  useEffect(() => {
    axios.get(Urls.popularMovies).then((res) => {
      setPosters(res.data.results);
      //console.log(res.data.results);
    });
  }, []);
  //console.log(dum.title);
  return (
    <div className="home w-full h-full flex items-center flex-col gap-10">
      <ImageSlider>
        {posters?.map((el, i) => (
          <img
            key={i}
            className=" object-cover"
            src={`https://image.tmdb.org/t/p/original${el.backdrop_path}`}
            alt="slide"
          />
        ))}
      </ImageSlider>
      <Movies />
    </div>
  );
};

export default Home;
