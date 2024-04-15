"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
function PostsInner() {
  useEffect(() => {
    let pagSpans = document.querySelectorAll(".page-link");
    pagSpans.forEach((e) => {
      e.addEventListener("click", () => {
        pagSpans.forEach((e) => {
          e.classList.remove("active");
        });
        e.classList.add("active");
      });
    });
  });
  function addToFav(el,id) {
    el.target.parentElement.classList.toggle("added");
  }
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
      id: 1165,
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
      <div className="box m0a postsInx">
        {posts.map((e, i) => (
          <div className="postxfd" key={e.id}>
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
            <button className="fav">
              <i className="fa-solid fa-heart" onClick={(el)=>{
              addToFav(el,e.id)
            }}></i>
            </button>
          </div>
        ))}
      </div>
      <div className="box m0a p5020">
        <div className="paginationCont">
          <div className="paginations">
            <ul className="spans">
              <li>
                <a href="##" className="page-link">
                  <Image
                    src="/media/icons/arrow-prev.svg"
                    alt=""
                    width={50}
                    height={50}
                  />
                </a>
              </li>
              <li>
                <a href="##" className="page-link active">
                  1
                </a>
              </li>
              <li>
                <a href="##" className="page-link">
                  2
                </a>
              </li>
              <li>
                <a href="##" className="page-link">
                  3
                </a>
              </li>
              <li>
                <a href="##" className="page-link">
                  ...
                </a>
              </li>
              <li>
                <a href="##" className="page-link">
                  13
                </a>
              </li>
              <li>
                <a href="##" className="page-link">
                  <Image
                    src="/media/icons/arrow-next.svg"
                    alt=""
                    width={50}
                    height={50}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostsInner;
