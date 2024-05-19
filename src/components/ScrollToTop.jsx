import { useEffect, useRef } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

function ScrollToTop() {
  const arrow = useRef();

  // Calc Scroll And Show Or Hide Arrow
  useEffect(() => {
    let targetArrow = arrow.current;
    window.onscroll = function () {
      if (window.scrollY >= 2000) {
        targetArrow.style.display = "block";
      } else {
        targetArrow.style.display = "none";
      }
    };
  }, []);

  // Reset Scroll
  function resetScroll() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <div ref={arrow} className="scroll-to-top" onClick={resetScroll}>
      <FaArrowAltCircleUp />
    </div>
  );
}

export default ScrollToTop;
