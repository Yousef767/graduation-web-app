"use client";
import React, { useEffect } from "react";
import Nav from "./Nav";
import HomeContent from "./HomeContent";
import Footer from "./Footer";

function Home() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let nav = document.querySelector("nav");
      if (window.scrollY >= 100) {
        nav.classList.add("color");
      } else {
        nav.classList.remove("color");
      }
    });
  });

  return (
    <>
      <Nav />
      <HomeContent />
      <Footer/>
    </>
  );
}

export default Home;
