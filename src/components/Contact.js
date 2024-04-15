"use client";
import React from 'react'
import Image from "next/image";

function Contact() {
  return (
    <div className="contact">
    <div className="box">
      <div className="contactForm">
        <form action="">
          <h1>Contact Us</h1>
          <span>Feel free to contact us any time. We will get back to you as soon as we can!</span>
          <div className="cForm">
            <input type="text" placeholder="Name" spellcheck="false"/>
            <input type="text" placeholder="Email" spellcheck="false"/>
            <textarea name="" id="" placeholder="Message" spellcheck="false"></textarea>
            <button className="hoverBtn" type="submit">send</button>
          </div>
        </form>
      </div>
      <div className="cDatax">
        <div className="dCardr">
          <h1>Info</h1>
          <a href="##" className="rw">
            <Image width={50} height={50} src="/media/icons/mail3.png" alt=""/>
            info@studi-rent.com</a>
          <a href="##" className="rw">
            <Image width={50} height={50} src="/media/icons/call3.png" alt=""/>
            +201006776709</a>
          <a href="##" className="rw">
            <Image width={50} height={50} src="/media/icons/location3.png" alt=""/>
            street , city , country</a>
          <a href="##" className="rw">
            <Image width={50} height={50} src="/media/icons/timer.png" alt=""/>
            24 / 7</a>
        </div>
        <div className="longT"></div>
      </div>
    </div>
  </div>
  )
}

export default Contact