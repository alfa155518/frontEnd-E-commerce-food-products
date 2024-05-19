import MainHeader from "../layout/MainHeader";
import NavBar from "../layout/NavBar";
import SecondNav from "../layout/SecondNav";
import Footer from "../layout/Footer";
import "../sass/pages/blog.css";
import BlogContent from "../sections/BlogContent";
import RelatedBlog from "../sections/RelatedBlog";

function Blog() {
  return (
    <>
      <MainHeader />
      <NavBar />
      <SecondNav />
      <section className="wrapper-blog">
        <div className="section-img">Our Blog</div>
        <div className="main-img">
          <h2>Read Our Blog</h2>
        </div>
        <div className="blog-content-container">
          <BlogContent />
          <RelatedBlog />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Blog;
