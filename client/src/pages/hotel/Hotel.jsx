import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import "./hotel.css";
import { FaLocationArrow } from "react-icons/fa";
import { useContext, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  // console.log(id);

  const { data, loading, error } = useFetch(`/hotels/hotel/${id}`);
  const { dates } = useContext(SearchContext);
  console.log(dates);
  const images = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlidenumber;

    if (direction === "l") {
      newSlidenumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlidenumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlidenumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "Loading..."
      ) : (
        <div className="hotelContainer">
          {open && (
            <div className="slider">
              <AiFillCloseCircle
                className="close"
                onClick={() => setOpen(false)}
              />
              <BsFillArrowLeftCircleFill
                className="arrow"
                onClick={() => handleMove("l")}
              />
              <div className="sliderWrapper">
                <img
                  src={images[slideNumber].src}
                  alt=""
                  className="sliderImg"
                />
              </div>
              <BsFillArrowRightCircleFill
                className="arrow"
                onClick={() => handleMove("r")}
              />
            </div>
          )}
          <div className="hotelWrapper">
            <button className="bookNow">Reserve now!</button>
            <h1 className="hotelTitle">{data?.name}</h1>
            <div className="hotelAddress">
              <FaLocationArrow />
              <span>{data?.address}</span>
            </div>
            <span className="hotelDistance">
              Excelente ubicacion - a {data?.distance} metros del centro
            </span>
            <div className="hotelImages">
              {/* NOTA MENTAL PARA ULISES DEL FUTURO, AGREGA EL ARRAY DE IMAGENES A LA DB */}
              {images.map((image, index) => (
                <div className="hotelImgWrapper" key={index}>
                  <img
                    src={image.src}
                    alt="Hotel"
                    onClick={() => handleOpen(index)}
                    className="hotelImg"
                  />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">En el corazon de la ciudad</h1>
                <p className="hotelDesc">{data?.description}</p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfecta para una estancia de 9 noches!</h1>
                <span>
                  Located in the real heart of {data?.city}, this property has
                  an excelent location score of {data?.rating}!
                </span>
                <h2>
                  <b>${data.cheapest * 9}</b> (9 nights)
                </h2>
                <button>Reserva ahora!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Hotel;
