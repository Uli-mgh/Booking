import "./featuredProperties.css";

const rio =
	"https://cf.bstatic.com/xdata/images/xphoto/600x400/89176841.jpg?k=ed550e4aacb5ab80d514e556de78919ebfdbfd7a5feccad22b4dbd3aad7c30c2&o=";

const colombia =
	"https://cf.bstatic.com/xdata/images/xphoto/600x400/89177151.jpg?k=cbf7134dd07cf466be5abbdd5c090d1f296a5e8452cc6b6cebb9ab8cf728eea9&o=";

const florianopolis =
	"https://cf.bstatic.com/xdata/images/xphoto/600x400/89176887.jpg?k=8314e57a52f6febb1842f805e34fc37245b3883d2523720498d6cd8aa80b9e14&o=";

const salvador =
	"https://cf.bstatic.com/xdata/images/xphoto/600x400/89176840.jpg?k=f73e5134c316a806d12c39b7e860758c2c6325e5f8e6670fd3cac1b8d62daa38&o=";

const FeaturedProperties = () => {
	return (
		<div className="fp">
			<div className="fpItem">
				<img src={rio} alt="rio" className="fpImage" />
				<span className="fpName">Rio de Janeiro, Brasil </span>
				<span className="fpCity">Futbol - Fotografia - Bares </span>
				<span className="fpPrice">Desde $ 8.751</span>
				<div className="fpRating">
					<button>8.9</button>
					<span>Excellent</span>
				</div>
			</div>

			<div className="fpItem">
				<img src={colombia} alt="colombia" className="fpImage" />
				<span className="fpName">Cartagena de Indias, Colombia</span>
				<span className="fpCity">Clima tropical - Fotografia - Bares </span>
				<span className="fpPrice">Desde $ 10.812</span>
				<div className="fpRating">
					<button>8.9</button>
					<span>Exepcional</span>
				</div>
			</div>

			<div className="fpItem">
				<img src={florianopolis} alt="florianopolis" className="fpImage" />
				<span className="fpName">Florianopolis, Brasil</span>
				<span className="fpCity">Visitas turisticas - Paisajes - Resto </span>
				<span className="fpPrice">Desde $ 7.751</span>
				<div className="fpRating">
					<button>8.9</button>
					<span>Excellent</span>
				</div>
			</div>

			<div className="fpItem">
				<img src={salvador} alt="salvador" className="fpImage" />
				<span className="fpName">Salvador, Brasil</span>
				<span className="fpCity">Musica - Iglesias - Centro historico </span>
				<span className="fpPrice">Desde $ 5.932</span>
				<div className="fpRating">
					<button>7.9</button>
					<span>Excellent</span>
				</div>
			</div>
		</div>
	);
};

export default FeaturedProperties;
