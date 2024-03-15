"use client";
import { React, useRef, useState, useEffect } from "react";

const Carousel = () => {
  const carouselRef1 = useRef(null);
  const carouselRef2 = useRef(null);
  const carouselRef3 = useRef(null);
  const refArray = [carouselRef1, carouselRef2, carouselRef3];
  const [currentRef, setCurrentRef] = useState(0);
  useEffect(() => {
    refArray.forEach((element, index) => {
      //Leaves only the current slide visible
      if (index === currentRef) {
        element.current.style.opacity = 1;
      } else {
        element.current.style.opacity = 0;
      }
    });
  }, [currentRef]);
  //Mobile swiping
  let touchstartX = 0;
  let touchendX = 0;
  function checkDirection() {
    //Adjusts state based off swipe direction
    if (touchendX < touchstartX) {
      currentRef > 0 ? setCurrentRef(currentRef - 1) : setCurrentRef(2);
      alert("swiped left!");
    }
    if (touchendX > touchstartX) {
      currentRef < 2 ? setCurrentRef(currentRef + 1) : setCurrentRef(0);
      alert("swiped right!");
    }
  }

  return (
    <div
      className="w-[100%] max-w-[1368px] relative"
      onTouchStart={(e) => {
        touchstartX = e.changedTouches[0].screenX;
      }}
      onTouchEnd={(e) => {
        touchendX = e.changedTouches[0].screenX;
        checkDirection();
      }}
    >
      <div ref={carouselRef1} className="w-[100%] max-w-[1368px] absolute">
        <div className="lg:w-[66.666%]">
          <img src="./carousel-1.jpeg" alt="cat" className="max-w-[100%]"></img>
        </div>
        <div className="flex flex-col bg-red-600 w-[100%] max-w-[1368px] py-10 px-8 gap-12">
          <div className="flex flex-col gap-3">
            <p className="text-white font-light">
              Mauris mollis, nibh a iaculis pulvinar
            </p>
            <h1 className="text-white text-3xl font-bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis
              sem, rutrum nec dapibus sed, lacinia vel ipsum.
            </h1>
          </div>
          <div>
            <button className="flex items-center gap-1 bg-white hover:bg-red-800 text-red-700 font-bold py-3 px-8 rounded-full">
              <p>About us</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className="w-[100%] max-w-[1368px] absolute opacity-0"
        ref={carouselRef2}
      >
        <div className="lg:w-[66.666%]">
          <img src="./carousel-2.jpeg" alt="cat" className="max-w-[100%]"></img>
        </div>
        <div className="flex flex-col bg-red-600 w-[100%] max-w-[1368px] py-10 px-8 gap-12">
          <div className="flex flex-col gap-3">
            <p className="text-white font-light">
              Mauris mollis, nibh a iaculis pulvinar
            </p>
            <h1 className="text-white text-3xl font-bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis
              sem, rutrum nec dapibus sed, lacinia vel ipsum.
            </h1>
          </div>
          <div>
            <button className="flex items-center gap-1 bg-white hover:bg-red-800 text-red-700 font-bold py-3 px-8 rounded-full">
              <p>More information</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className="w-[100%] max-w-[1368px] absolute opacity-0"
        ref={carouselRef3}
      >
        <div className="lg:w-[66.666%]">
          <img src="./carousel-3.jpeg" alt="cat" className="max-w-[100%]"></img>
        </div>
        <div className="flex flex-col bg-red-600 w-[100%] max-w-[1368px] py-10 px-8 gap-12">
          <div className="flex flex-col gap-3">
            <p className="text-white font-light">
              Mauris mollis, nibh a iaculis pulvinar
            </p>
            <h1 className="text-white text-3xl font-bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis
              sem, rutrum nec dapibus sed, lacinia vel ipsum.
            </h1>
          </div>
          <div>
            <button className="flex items-center gap-1 bg-white hover:bg-red-800 text-red-700 font-bold py-3 px-8 rounded-full">
              <p>More information</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
