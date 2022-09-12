import { Link } from "react-router-dom";
import "./searchItem.css";

// const villa =
//   "https://cf.bstatic.com/xdata/images/hotel/square200/246185565.webp?k=595fd15a8fcc5ebd94a2047b3874d8f875db7dbc35af56b13ec2c3dfef920e5f&o=&s=1";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="siImg" />

      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">
          {item.city} Mostrar en el mapa
          <small>{item.distance} km del centro</small>
        </span>
        <span className="siTaxiOp">Taxi gratis al areopuerto</span>
        <span className="siSubtitle">Apartamento con aire acondicionado</span>
        <span className="siFeatures">{item.description}</span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          Puedes cancelar luego, asi que guarda este precio hoy!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && (
          <div className="siRating">
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}

        <div className="siDetailTexts">
          <span className="siPrice">Desde {item.cheapest}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={"/hotels/" + item._id}>
            <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
