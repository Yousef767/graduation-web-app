"use client";
import Filter from "@/components/Filter";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";

import "swiper/css";

function PostDetails({ params }) {
  const [imgs, setimgs] = useState([
    { url: "/media/images/s1.jpg" },
    { url: "/media/images/s2.jpg" },
  ]);
  useEffect(() => {
    const shareButton = document.getElementById("shareBtn");
    if (navigator.share) {
      shareButton.addEventListener("click", async () => {
        try {
          await navigator.share({
            title: "Post Details",
            text: "Check out this post",
            url: window.location.href,
          });
        } catch (error) {
          console.error("Error sharing:", error);
        }
      });
    } else {
      shareButton.addEventListener("click", () => {
        alert(
          "Your browser does not support sharing. You can copy the link manually."
        );
      });
    }
  });
  useEffect(() => {
    let addToFav = document.getElementById("addToFav");
    let addText = document.getElementById("addText");
    addToFav.addEventListener("click", () => {
      addToFav.classList.toggle("added")
    });
    
  });
  return (
    <>
      <Nav />
      <Filter />
      <div className="postDet">
        <div className="box pdst">
          <Swiper
            slidesPerView={1}
            modules={[Pagination, Autoplay]}
            pagination={{
              dynamicBullets: true,
            }}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
            className="sw2"
          >
            {imgs.map((e, i) => (
              <SwiperSlide key={i}>
                <Image src={e.url} alt="" width={1000} height={1000} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="diP">
            <h2>Description</h2>
            <p>
              Officiis maxime illum rerum consectetur beatae qui. Impedit ut
              cumque nisi voluptatem reiciendis in natus perspiciatis illum.
              Maiores provident molestiae modi quo. Repellat delectus
              iure.Tenetur tempore eveniet sunt omnis repellat quaerat. Voluptas
              quos maiores. Omnis itaque ea voluptates ut praesentium. Culpa
              illo alias cupiditate vel. Distinctio aut voluptate eum dolor
              quas.Voluptatem deleniti similique praesentium enim dolor nam
              dolore et. Debitis nesciunt dolorum et dolore aut doloremque quas.
              Ut neque nulla quis quam cupiditate ea ex qui reprehenderit. Quia
              est atque. Pariatur illum quus.
            </p>
          </div>
          <div className="det">
            <h2>Details</h2>
            <div className="feats">
              <div className="ft">
                <Image
                  className="postcfImg"
                  src={"/media/icons/Place-Marker.png"}
                  width={20}
                  height={20}
                  alt=""
                />
                Mansoura
              </div>
              <div className="ft">
                <Image
                  className="postcfImg"
                  src={"/media/icons/Open Door.png"}
                  width={20}
                  height={20}
                  alt=""
                />
                9 Rooms
              </div>
              <div className="ft">
                <Image
                  className="postcfImg"
                  src={"/media/icons/Sleeping in Bed.png"}
                  width={20}
                  height={20}
                  alt=""
                />
                9 Bedrooms
              </div>
              <div className="ft">
                <Image
                  className="postcfImg"
                  src={"/media/icons/Bathtub.png"}
                  width={20}
                  height={20}
                  alt=""
                />
                9 Bathrooms
              </div>
              <div className="ft">
                <Image
                  className="postcfImg"
                  src={"/media/icons/Kitchen.png"}
                  width={20}
                  height={20}
                  alt=""
                />
                9 Kitchen
              </div>
            </div>
            <div className="adtBtns">
              <button className="btn" id="addToFav">
                <span id="addText">Add to favorite </span>
                <i className="fa-solid fa-heart"></i>
              </button>
              <button className="btn" id="shareBtn">
                share <i className="fa-solid fa-share"></i>
              </button>
            </div>
            <div className="prx">
              Price <span>EGP 5.000</span>
            </div>
            <a href="##" className="contBtn">
              Contact us now
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PostDetails;
