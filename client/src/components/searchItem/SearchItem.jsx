import "./searchItem.css";

const villa =
  "https://cf.bstatic.com/xdata/images/hotel/square200/246185565.webp?k=595fd15a8fcc5ebd94a2047b3874d8f875db7dbc35af56b13ec2c3dfef920e5f&o=&s=1";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img src={villa} alt="" className="siImg" />

      <div className="siDesc">
        <h1 className="siTitle">Costanera.VM</h1>
        <span className="siDistance">
          Villa MaríaMostrar en el mapa <small>a 1 km del centro</small>
        </span>
        <span className="siTaxiOp">Taxi gratis al areopuerto</span>
        <span className="siSubtitle">Apartamento con aire acondicionado</span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          Puedes cancelar luego, asi que guarda este precio hoy!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$3333</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
