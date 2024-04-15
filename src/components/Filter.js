"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

function Filter() {
  const [state, setstate] = useState("");
  const [state2, setstate2] = useState("");
  useEffect(() => {
    let path = window.location.pathname;
    let filterdPath = path.split("/");
    setstate(filterdPath[1]);
    setstate2(filterdPath[2]);
  }, [state]);
  function handelFilter (e){
    let icon = document.getElementById('icon');
    let price = document.getElementById('price');
    let selCity = document.getElementById('selCity');
    let selRooms = document.getElementById('selRooms');
    if(e.target.value === 'price'){
      icon.className = 'fa-regular fa-dollar-sign';
      price.style.display='block';
      selCity.style.display='none';
      selRooms.style.display='none';
    }else if(e.target.value === 'rooms'){
      icon.className = 'fa-regular fa-bed';
      selRooms.style.display='block';
      price.style.display='none';
      selCity.style.display='none';
    }else if(e.target.value === 'city'){
      icon.className = 'fa-regular fa-location-dot';
      selCity.style.display='block';
      selRooms.style.display='none';
      price.style.display='none';
    }
  }
  function showFilter(){
    let filts = document.querySelector('.filts');
    filts.classList.toggle('showFilter');
  }
  return (
    <div className="box navFilter">
      <div className="path">
        <span>
          <Image src="/media/icons/House.png" alt="" width={50} height={50} />{" "}
          Home
        </span>
        <Image
          className="arr"
          src="/media/icons/CaretRight.png"
          alt=""
          width={50}
          height={50}
        />
        <span>{state}</span>
      </div>
      {state === "posts" && state2 === undefined ? (
        <div className="filts">
          <div className="select">
            <select className="sel" name="" id="sort">
              <option value="price">Sort by : Price </option>
              <option value="price">Sort by : Rooms </option>
            </select>
            <i className="fa-regular fa-angle-down"></i>
          </div>
          <div className="select">
            <div className="sel" id="filter" onClick={showFilter}>
              Filter
            </div>
            <i className="fa-regular fa-angle-down"></i>
            <form className="dropFilter">
              <div className="selWrap">
                <select name="" id="filterSel" onInput={(e)=>{handelFilter(e)}}>
                  <option value="price">Price</option>
                  <option value="city">City</option>
                  <option value="rooms">Rooms</option>
                </select>
                <i className="fa-regular fa-dollar-sign" id="icon"></i>
                <i className="fa-regular fa-angle-down" id="arw"></i>
              </div>
              <input type="number" id="price" />
              <div className="select" id="selCity">
                <select name="" className="selCity">
                  <option value="Mansoura">Mansoura</option>
                </select>
                <i className="fa-regular fa-angle-down"></i>
              </div>
              <div className="select" id="selRooms">
                <select name="" className="selRooms">
                  <option value="1">1</option>
                </select>
                <i className="fa-regular fa-angle-down"></i>
              </div>
              <button type="sumit">Apply</button>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Filter;
