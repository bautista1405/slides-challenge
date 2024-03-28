'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";

import Navbar from "components/components/navbar";
import RightArrowIcon from "components/components/icons/RightArrowIcon";

import { TfiArrowCircleUp } from "react-icons/tfi";

const HomePage: React.FC = () => {
  const [isSmall, setIsSmall] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth < 768); // Adjust the screen size threshold as needed
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen md:p-10 bg-white">
      <div className="flex justify-end xs:p-4 sm:p-0">
        <Navbar />
      </div>
      <div className="xl:flex md:p-20 sm:block">
        <div className="p-12 flex align-center">
          <div className="xs:m-auto xl:max-w-xl xs:max-w-[240px] xs:max-h-[300px] md:max-h-[500px] md:max-w-7xl">
            <div className="text-xs xs:text-center md:text-left uppercase tracking-widest text-gray-900">About — Personal</div>
            <h1 className="mt-2 text-2xl xs:text-xl md:text-4xl text-gray-900">¡Hello! <b>I&apos;m Angela Smith</b></h1>
            <p className={`mt-4 text-gray-700 ${isSmall ? 'truncate' : ''}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
            {!isSmall ?
              <button className="mt-6 bg-black text-white px-4 py-3 rounded-xl hover:bg-opacity-90 flex">
                Get started <RightArrowIcon className="ml-2" />
              </button>
              : null
            }
          </div>
        </div>
        <div className="relative flex-1 mt-[-50px]">
          <div 
            className="xs:relative md:absolute overflow-hidden xl:mt-0 xs:mt-10 xs:max-w-[300px] md:max-w-full xs:m-auto" 
            style={{borderRadius: '120px 40px 120px 40px', filter: 'grayscale(100%)'}}
          >
            <Image
              alt="Angela Smith"
              className="h-[550px] w-[700px] xs:max-h-[300px] xl:max-h-[600px] lg:max-h-[350px] md:max-h-[550px]"
              height={500}
              src="/pexels-girl.jpg"
              width={500}
            />
          </div>
        </div>
      </div>
      {isSmall ?
        <div className="ml-3 mr-3">
          <button className="flex justify-center bg-black text-white px-4 py-3 rounded-lg hover:bg-opacity-90 w-full mt-5">
            Get started <RightArrowIcon className="ml-2" />
          </button>
        </div>
        : null
      }
      <div className="flex justify-center xs:mt-4 md:mt-28 text-black">
        <TfiArrowCircleUp />
      </div>
    </div>
  )
}

export default HomePage;
