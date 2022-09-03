import "./featured.css"



const bariloche = "https://cf.bstatic.com/xdata/images/city/square250/664434.webp?k=a0cb0f948924bdcea039a5039afc78096d324afe4d3395ec68d09536fc0daa23&o="
const bsas = "https://cf.bstatic.com/xdata/images/city/square250/664052.webp?k=e0c8a97ea4cd0ab7e3757392c8fb02708767377e288a6c3e0889d22497e8e8f1&o="
const mendoza ="https://cf.bstatic.com/xdata/images/city/square250/664190.webp?k=9dce1821c3fbcbca4359a447c9be0ff0d92d097341fb2df26902cfc0d0f4cec3&o="
const cordoba = "https://cf.bstatic.com/xdata/images/city/square250/664125.webp?k=3be2e16a1d2305149375892729e5daa1ea89e17272e2e438bb5093f0964c8b5d&o="

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src={bsas} alt="buenos aires" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Buenos aires</h1>
          <h2>123 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img src={bariloche} alt="bariloche" className="featuredImg" />
        <div className="featuredTitles">
          <h1>San Carlos de Bariloche</h1>
          <h2>123 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img src={mendoza} alt="mendoza" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Mendoza</h1>
          <h2>123 properties</h2>
        </div>
      </div>



      <div className="featuredItem">
        <img src={cordoba} alt="cordoba" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Cordoba</h1>
          <h2>123 properties</h2>
        </div>
      </div>

    </div>
  )
}

export default Featured