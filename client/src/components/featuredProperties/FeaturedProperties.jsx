import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

// const rio =
//   "https://cf.bstatic.com/xdata/images/xphoto/600x400/89176841.jpg?k=ed550e4aacb5ab80d514e556de78919ebfdbfd7a5feccad22b4dbd3aad7c30c2&o=";

// const colombia =
//   "https://cf.bstatic.com/xdata/images/xphoto/600x400/89177151.jpg?k=cbf7134dd07cf466be5abbdd5c090d1f296a5e8452cc6b6cebb9ab8cf728eea9&o=";

// const florianopolis =
//   "https://cf.bstatic.com/xdata/images/xphoto/600x400/89176887.jpg?k=8314e57a52f6febb1842f805e34fc37245b3883d2523720498d6cd8aa80b9e14&o=";

// const salvador =
//   "https://cf.bstatic.com/xdata/images/xphoto/600x400/89176840.jpg?k=f73e5134c316a806d12c39b7e860758c2c6325e5f8e6670fd3cac1b8d62daa38&o=";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");

  return (
    <div className="fp">
      {loading ? (
        "Loading please stand by..."
      ) : (
        <>
          {data.map((e) => (
            <div className="fpItem" key={e?._id}>
              <img src={e?.photos[0]} alt="" className="fpImage" />
              <span className="fpName">{e?.name}</span>
              <span className="fpCity">{e?.city}</span>
              <span className="fpPrice">Desde {e?.cheapest}</span>
              {e?.rating && (
                <div className="fpRating">
                  <button>{e.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
