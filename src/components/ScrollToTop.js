import React, { useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollToTop = () => {
  const [state, setState] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setState(true);
      } else {
        setState(false);
      }
    });
  }, []);
  return (
    <>
      {state && (
        <button
          className="btn btn-dark shadow text-center p-0"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            position: "fixed",
            bottom: 50,
            right: 10,
            borderRadius: "100%",
            width: "3em",
            height: "3em",
          }}
        >
          <KeyboardArrowUpIcon />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
