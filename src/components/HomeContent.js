"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function HomeContent() {
  const [posts, setPost] = useState([
    {
      id: 125,
      sellerId: 505,
      showHome: true,
      title: "Best Property one",
      images: ["/media/images/house1.jpg", "/media/images/house1.jpg"],
      details: {
        city: "Mansoura",
        loaction: "Mansoura city , Elglaa street",
        price: 3000,
        rooms: 9,
        bedrooms: 3,
        bathrooms: 3,
        kitchen: 1,
      },
    },
    {
      id: 1254,
      sellerId: 505,
      showHome: true,
      title: "Best Property one",
      images: ["/media/images/house1.jpg", "/media/images/house1.jpg"],
      details: {
        city: "Mansoura",
        loaction: "Mansoura city , Elglaa street",
        price: 3000,
        rooms: 9,
        bedrooms: 3,
        bathrooms: 3,
        kitchen: 1,
      },
    },
    {
      id: 1253,
      sellerId: 502,
      showHome: true,
      title: "Best Property one",
      images: ["/media/images/house1.jpg", "/media/images/house1.jpg"],
      details: {
        city: "Mansoura",
        loaction: "Mansoura city , Elglaa street",
        price: 3000,
        rooms: 9,
        bedrooms: 3,
        bathrooms: 3,
        kitchen: 1,
      },
    },
    {
      id: 1296,
      sellerId: 505,
      showHome: true,
      title: "Best Property one",
      images: ["/media/images/house1.jpg", "/media/images/house1.jpg"],
      details: {
        city: "Mansoura",
        loaction: "Mansoura city , Elglaa street",
        price: 3000,
        rooms: 9,
        bedrooms: 3,
        bathrooms: 3,
        kitchen: 1,
      },
    },
    {
      id: 189,
      sellerId: 560,
      showHome: true,
      title: "Best Property one",
      images: ["/media/images/house1.jpg", "/media/images/house1.jpg"],
      details: {
        city: "Mansoura",
        loaction: "Mansoura city , Elglaa street",
        price: 3000,
        rooms: 9,
        bedrooms: 3,
        bathrooms: 3,
        kitchen: 1,
      },
    },
  ]);
  return (
    <>
      <div className="homeCont">
        <div className="box hmdw">
          <div className="homeT">
            <h1>Let’s find a home That’s perfect for you</h1>
            <p>Unlock your perfect student living experience now!</p>
            <span>Let’s discuss soon.. </span>
          </div>
          <Image src="/media/about.png" alt="" width={500} height={600} />
        </div>
      </div>
      <div className="box aboutCo">
        <header>
          <h1>About Us</h1>
        </header>
        <p>
          &quot;Our website aims to assist students in finding suitable
          accommodation that matches their needs in terms of affordability,
          location, and amenities, ensuring they can focus on their studies
          without the stress of searching for housing. We provide a
          comprehensive platform where students can easily browse through a wide
          range of options, enabling them to discover the perfect living space
          that fits both their budget and preferences, thus creating an
          environment conducive to academic success.&quot;
        </p>
        <a href="/about">See More</a>
      </div>
      <div className="box m0a slider">
        <header>
          <h1>Posts</h1>
        </header>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            500: {
              slidesPerView: 1.3,
            },
            600: {
              slidesPerView: 1.7,
            },
            800: {
              slidesPerView: 2,
            },
            925: {
              slidesPerView: 2.5,
            },
            1151: {
              slidesPerView: 3,
            },
          }}
        >
          {posts.map((e, i) => (
            <SwiperSlide key={e.id}>
              <div className="postxfd">
                <Image
                  className="postcfImg"
                  src={e.images[0]}
                  width={300}
                  height={300}
                  alt=""
                />
                <h2>{e.title}</h2>
                <div className="feats">
                  <div className="ft">
                    <Image
                      className="postcfImg"
                      src={"/media/icons/Place-Marker.png"}
                      width={20}
                      height={20}
                      alt=""
                    />
                    {e.details.loaction}
                  </div>
                  <div className="ft">
                    <Image
                      className="postcfImg"
                      src={"/media/icons/Open Door.png"}
                      width={20}
                      height={20}
                      alt=""
                    />
                    {e.details.rooms} Rooms
                  </div>
                  <div className="ft">
                    <Image
                      className="postcfImg"
                      src={"/media/icons/Sleeping in Bed.png"}
                      width={20}
                      height={20}
                      alt=""
                    />
                    {e.details.bedrooms} Bedrooms
                  </div>
                  <div className="ft">
                    <Image
                      className="postcfImg"
                      src={"/media/icons/Bathtub.png"}
                      width={20}
                      height={20}
                      alt=""
                    />
                    {e.details.bathrooms} Bathrooms
                  </div>
                  <div className="ft">
                    <Image
                      className="postcfImg"
                      src={"/media/icons/Kitchen.png"}
                      width={20}
                      height={20}
                      alt=""
                    />
                    {e.details.kitchen} Kitchen
                  </div>
                </div>
                <div className="pricexx">
                  <span>EGP {e.details.price}</span>
                  <a href={"/posts/" + e.id}>See More</a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <a href="/posts" className="btn2 m0a">
          See All posts
        </a>
      </div>
      <div className="join">
        <div className="box joinCont">
          <div className="joinText">
            <h1>
              Join us and register your <br />
              property now !
            </h1>
            <span>
              Soluta alias incidunt. Omnis facilis aliquid sed laboriosam
              voluptatem. <br />
              Voluptatem similique perspiciatis est.
            </span>
          </div>
          <a href="##" className="btn bacWhite">
            Subscribe Now
          </a>
        </div>
      </div>
    </>
  );
}

export default HomeContent;
