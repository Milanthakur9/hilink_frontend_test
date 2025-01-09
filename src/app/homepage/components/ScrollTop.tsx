import React, { useState, useEffect } from "react";
import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Image from "next/image";
import scrollTop from "../../../assets/background_patterns/scrollTop.webp";

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setVisible(scrollPosition > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {visible && (
        <Fab
          sx={{
            background: "transparent",
            transition: "all .4s linear",
            "&:hover": {
              background: "transparent",
              transform: " scale(1.062) translateY(-10px)",
            },
          }}
          size="small"
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            zIndex: 1000,
          }}
        >
          {/* <KeyboardArrowUpIcon /> */}
          <Image src={scrollTop} alt="scrollTop" height={65} width={65} />
        </Fab>
      )}
    </div>
  );
};

export default ScrollToTop;
