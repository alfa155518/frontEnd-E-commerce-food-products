import man_img from "../images/blog-1.jpg";
import blog_img_1 from "../images/blog-2.jpg";
import blog_img_2 from "../images/blog-3.jpg";

function RelatedBlog() {
  return (
    <aside className="related-blog">
      <h2>Related Article</h2>
      <ul className="articles">
        <li>
          <img src={man_img} alt="related-img" />
          <strong>Poor Peoples Campaign Our Resources</strong>
          <span>Jun 05,2022</span>
        </li>
        <li>
          <img src={blog_img_1} alt="related-img" />
          <strong>Lorem ipsum dolor sit amet.</strong>
          <span>Jun 06,2023</span>
        </li>
        <li>
          <img src={blog_img_2} alt="related-img" />
          <strong>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            doloribus.
          </strong>
          <span>Jun 05,2024</span>
        </li>
      </ul>
    </aside>
  );
}

export default RelatedBlog;
