"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Logo = () => {
  //update the size of the logo when the size of the screen changes
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);

  // change between the logo and the button when the user scrolls
  const [showButton, setShowButton] = useState(false);

  const changeNavButton = () => {
    if (window.scrollY >= 400 && window.innerWidth < 768) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavButton);
  }, []);

  return (
    <>
        <Image
          src="/logo-name.svg"
          alt="Logo"
          width={"150"}
          height={"74"}
          className="pt-2 relative"
        />
      <div
        style={{
          display: showButton ? "block" : "none",
        }}
      >
      </div>
    </>
  );
};

export default Logo;