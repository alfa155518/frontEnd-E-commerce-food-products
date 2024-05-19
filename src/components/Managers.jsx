import img_1 from "../images/manager-1.jpg";
import img_2 from "../images/manager-2.jpg";

import icon_1 from "../images/icon-1.jpg";
import icon_2 from "../images/icon-2.jpg";
import icon_3 from "../images/icon-3.jpg";

function Managers() {
  return (
    <section className="managers">
      <div className="managers-img p-relative">
        <img
          src={img_1}
          className="first-manager p-absolute"
          alt="manager-img"
        />
        <img src={img_2} className="second-manager" alt="manager-img" />
      </div>
      <div className="about-us">
        <article>
          <strong>About Our Managers</strong>
          <h2>Good Qualification Services And Better Experiences</h2>
          <p>
            Distinctively provide acces mutfuncto users whereas transparent
            proceses somes ncentivize eficient functionalities rather than
            extensible archtectur communicate leveraged services and
            cross-platform.
          </p>
        </article>
        <ul className="our-services">
          <li>
            <div className="icon">
              <img src={icon_1} alt="icon-1" />
            </div>
            <div className="details">
              <span>Skilled Instructors</span>
              <p>
                Distinctively provide acces mutfuncto users whereas communicate
                leveraged services
              </p>
            </div>
          </li>
          <li>
            <div className="icon">
              <img src={icon_2} alt="icon-2" />
            </div>
            <div className="details">
              <span>Get Certificate</span>
              <p>
                Distinctively provide acces mutfuncto users whereas communicate
                leveraged services
              </p>
            </div>
          </li>
          <li>
            <div className="icon">
              <img src={icon_3} alt="icon-3" />
            </div>
            <div className="details">
              <span>Online Classes</span>
              <p>
                Distinctively provide acces mutfuncto users whereas communicate
                leveraged services
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Managers;
