import "../sass/components/home-page-slider.css";

function HomePageSLider() {
  return (
    <section className="home-page-slide">
      <article>
        <h1>Fresh Vegetables Big Discounts</h1>
        <span className="offer">Save up to 50% off on your first order</span>
        <form className="p-relative">
          <input
            type="email"
            name="email"
            placeholder="Yor Email Address"
            autoComplete="email"
          />
          <button className="subscribe p-absolute" name="btn">
            Subscribe
          </button>
        </form>
      </article>
    </section>
  );
}

export default HomePageSLider;
