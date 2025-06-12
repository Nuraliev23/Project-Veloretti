import React from "react";

import man1 from "../../../public/Wrapper.png";
import zin from "../../../public/zin.png";
import img1 from "../../../public/Image Span.png";
import img2 from "../../../public/image.png";
import Image from "next/image";
const About = () => {
  return (
    <>
      <section
        className="w-full h-[100vh] bg-cover bg-center flex flex-col gap-[16px] items-start justify-center "
        style={{ backgroundImage: "url('/about.jpg')" }}
      >
        <div className="max-w-[1200px] mx-auto flex flex-col items-start justify-start text-start w-full">
          <p className="max-w-[1200px]  text-[white]">VELORETTI BUSINESS</p>
          <h1 className="max-w-[1200px] text-[70px] text-[white] ">About us</h1>
          <p className="max-w-[1200px]  text-[white]">Forever Forward.</p>
        </div>
      </section>
      <section className="flex max-w-[1200px] mx-auto justify-between my-[80px] items-center flex-col md:flex-row">
        <Image
          className="md:w-[40%] w-[90%]"
          src={man1}
          width={0}
          height={0}
          alt="man"
        />
        <div className="flex flex-col gap-[16px] md:w-[40%] w-[90%]">
          <h2 className="text-[50px]">Forever forward</h2>
          <p className="text-[#808080dc]">
            Our bikes are made to stand the test of time, both aesthetically and
            practically. Whether you’re after a state-of-the-art electric bike,
            a classic city bike, or a kids bike for the school run, we want to
            help make your commute the best part of your day. 
          </p>
        </div>
      </section>
      <section className="flex max-w-[1200px] mx-auto justify-between my-[80px] items-center flex-col md:flex-row">
        <div className="flex flex-col gap-[16px] md:w-[40%] w-[90%]">
          <h2 className="text-[50px]">Part of Pon.Bike</h2>
          <p className="text-[#808080dc]">
            Veloretti was founded in Amsterdam in 2012 with a mission to make
            clean, timeless bikes that are great quality and delivered to your
            door at a fair price. We are proud to now be part of Pon.Bike, the
            world-leading family of bike brands. With this support, we can
            continue to evolve our designs, take care of our riders, and help
            keep their bikes on the road.
          </p>
        </div>
        <Image
          className="md:w-[40%] w-[90%]"
          src={zin}
          width={0}
          height={0}
          alt="man"
        />
      </section>
      <section className="flex max-w-[1200px] mx-auto justify-between my-[80px] items-center flex-col md:flex-row">
        <div className="flex flex-col gap-[16px] md:w-[60%] w-[90%] mx-auto">
          <h2 className="text-[50px] text-center">
            Designed in Amsterdam, handmade in Europe, personal in all cities.
          </h2>
        </div>
      </section>

      <section
        className="w-full h-[100vh] bg-cover bg-center flex flex-col gap-[16px] items-end justify-center "
        style={{ backgroundImage: "url('/velik4.jpg')" }}
      >
        <div className="max-w-[1200px] mx-auto flex flex-col items-center md:items-end justify-center text-start">
          <h1 className=" text-[70px] text-[white] ">
            Made for you
          </h1>
          <p className="md:w-[30%] w-[80%] text-[white]">
            Elevate your ride with a bicycle that mirrors your unique style and
            personality. From an Ace Two electric bike with the latest
            technology packed into a minimalist design, or a bright yellow
            Berlin for those who like to ride light and have a craving for
            nostalgia. Our diverse range of models and colours cater to riders
            of all kinds.
          </p>
        </div>
      </section>
      <section className=" max-w-[1200px] mx-auto justify-between my-[80px] items-center">
        <h2>Explore Our Bikes</h2>
        <div className="flex max-w-[1200px] mx-auto justify-between items-center flex-col md:flex-row gap-[24px]">
          <div className="bg-[#EBEDEE] md:w-[48%] w-[90%] p-[15px] rounded-2xl">
            <div className="flex justify-between">
              <p>Electric Ace</p>
              <p>€69,07 NET/MONTH</p>
            </div>
            <Image
              className="md:w-[70%] w-[90%] mx-auto my-[20px]"
              src={img1}
              width={0}
              height={0}
              alt="man"
            />
            <div className="flex gap-[24px] items-center ">
              <p className="bg-[white] rounded-3xl p-[10px]">Buy Now</p>
              <p>Learn more</p>
            </div>
          </div>
          <div className="bg-[#EBEDEE] md:w-[48%] w-[90%]  p-[15px]  rounded-2xl">
            <div className="flex justify-between">
              <p>Electric Ace</p>
              <p>€69,07 NET/MONTH</p>
            </div>
            <Image
              className="md:w-[70%] w-[90%] mx-auto  my-[20px]"
              src={img2}
              width={0}
              height={0}
              alt="man"
            />
            <div className="flex gap-[24px] items-center ">
              <p className="bg-[white] rounded-3xl p-[10px]">Buy Now</p>
              <p>Learn more</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
