"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

function Nav() {
  useEffect(() => {
    let links = document.querySelectorAll('.link');
    let path = window.location.pathname;
    let filterdPath = path.split('/');
    if (path === "/") {
      links.forEach((e)=>{e.innerHTML.toLocaleLowerCase() === "home" ? e.classList.add('active'): e.classList.remove('active')});
    }else if(filterdPath[1] === 'about'){
      links.forEach((e)=>{e.innerHTML.toLocaleLowerCase() === "about" ? e.classList.add('active'): e.classList.remove('active')});
    }else if(filterdPath[1] === 'posts'){
      links.forEach((e)=>{e.innerHTML.toLocaleLowerCase() === "posts" ? e.classList.add('active'): e.classList.remove('active')});
    }else if(filterdPath[1] === 'contact'){
      links.forEach((e)=>{e.innerHTML.toLocaleLowerCase() === "contact" ? e.classList.add('active'): e.classList.remove('active')});
    }
  },);
  const menuControl = () => {
    let nav = document.querySelector("nav");
    nav.classList.toggle("activeMenu");
  };
  return (
    <nav>
      <div className="box f-s">
        <Link href="/" className="logo">
          <Image src="/media/logo.png" alt="" width={200} height={200} />
        </Link>
        <div className="links">
          <div className="ls">
            <ul className="mainLinks">
              <li>
                <Link className="link" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="link" href="/posts">
                  Posts
                </Link>
              </li>
              <li>
                <Link className="link" href="/about">
                  about
                </Link>
              </li>
              <li>
                <Link className="link" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="last">
          <div className="mLinks">
            <Link href="/login">Login</Link>
          </div>
          <button className="menu" onClick={menuControl}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
