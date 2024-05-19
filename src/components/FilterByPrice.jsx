import { useContext } from "react";
import { PopularProductsContext } from "../context/ContextProducts";

function FilterByPrice() {
  const { showProductsByPrice, pricesRange } = useContext(
    PopularProductsContext
  );

  return (
    <div className="filter-by-price">
      <h3 className="category-name">Filter By Prices</h3>
      <div className="ranges">
        <form>
          <label htmlFor="range-element">
            <input
              id="range-element"
              type="range"
              max={1000}
              step={10}
              onChange={(e) => showProductsByPrice(e.target.value)}
            />
          </label>
          <div className="prices">
            <span>from:$10</span>
            <span>to:${pricesRange ? pricesRange : 0}</span>
          </div>

          <div className="colors">
            <h4>Color</h4>

            <div className="box">
              <input type="checkbox" id="one" />
              <label htmlFor="one">Red(56)</label>
            </div>

            <div className="box">
              <input type="checkbox" id="tow" />
              <label htmlFor="tow">Green(70)</label>
            </div>

            <div className="box">
              <input type="checkbox" id="three" />
              <label htmlFor="three">Blue(90)</label>
            </div>
          </div>
          <div className="collections">
            <h5>Items Collections</h5>
            <div className="items">
              <input type="checkbox" id="four" />
              <label htmlFor="four">New(560)</label>
            </div>

            <div className="items">
              <input type="checkbox" id="five" />
              <label htmlFor="five">Used(1000)</label>
            </div>

            <div className="items">
              <input type="checkbox" id="six" />
              <label htmlFor="six">Returned(90)</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FilterByPrice;
