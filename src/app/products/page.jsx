import Image from "next/image";
import React from "react";
import zin3 from "../../../public/Bike-Wrapper.png";
import zin4 from "../../../public/image (2).png";
import img1 from "../../../public/Image Span.png";
import img2 from "../../../public/image.png";
import zin from "../../../public/zin.png";
import img3 from "../../../public/Span.png";
import img4 from "../../../public/Collection-item-info-testimonial_icon-Wrapper (1).png";
import img5 from "../../../public/Collection-item-info-testimonial_icon-Wrapper.png";
import img6 from "../../../public/image (1).png";

const Products = () => {
  return (
    <>
      <section
        className="w-full h-[100vh] bg-cover bg-center flex flex-col gap-[16px] items-start justify-center "
        style={{ backgroundImage: "url('/velik5.png')" }}
      >
        <div className="max-w-[1200px] mx-auto flex flex-col items-start justify-start text-start w-full">
          <p className="max-w-[1200px]  text-[white]">VELORETTI ELECTRIC</p>
          <h1 className="max-w-[1200px] text-[70px] text-[white] ">
            This is Two.
          </h1>
          <p className="max-w-[1200px]  text-[white]">
            Introducing the all-new Ivy and Ace
          </p>
        </div>
      </section>

      <section className="flex max-w-[1200px] mx-auto justify-between my-[80px] items-center flex-col md:flex-row gap-[24px]">
        <div className="bg-[#EBEDEE] md:w-[48%] w-[90%] p-[15px]">
          <div className="flex justify-between">
            <p>Electric Ace</p>
            <p>€69,07 NET/MONTH</p>
          </div>
          <Image
            className="md:w-[70%] w-[90%] mx-auto h-[350px]"
            src={zin3}
            width={0}
            height={0}
            alt="man"
          />
        </div>
        <div className="bg-[#EBEDEE] md:w-[48%] w-[90%] p-[15px] h-[400px]">
          <div className="flex justify-between">
            <p>Electric Ace</p>
            <p>€69,07 NET/MONTH</p>
          </div>
          <Image
            className="md:w-[70%] w-[90%] mx-auto"
            src={zin4}
            width={0}
            height={200}
            alt="man"
          />
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
          <div className="bg-[#EBEDEE] md:w-[48%] w-[90%] p-[15px]  rounded-2xl">
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
      <section className="flex flex-col gap-[16px] max-w-[1200px] mx-auto my-[90px]">
        <h1 className="text-[50px] md:w-[50%] w-[90%]">
          Make your commute the best part of your day.
        </h1>
        <div className="flex items-center justify-between">
          <p className="md:w-[50%] w-[90%]">
            Clean and timeless designs that make every ride a thrill. Wherever
            you're heading, our bikes are made to make your daily commute a joy.
          </p>
          <p className="text-[70px]">R</p>
        </div>
      </section>

      <section
        className="w-full h-[100vh] bg-cover bg-center flex flex-col gap-[16px] items-start justify-center my-[40px]"
        style={{ backgroundImage: "url('/velik6.png')" }}
      >
        <div className="max-w-[1200px] mx-auto flex flex-col items-start justify-start text-start">
          <h1 className="md:w-[40%] w-[90%] max-w-[1200px] text-[70px] text-[white] ">
            Discover your local Veloretti partner store
          </h1>
          <p className="md:w-[40%] w-[90%] max-w-[1200px]  text-[white]">
            Our partner stores across the Netherlands are there for you. Whether
            you're looking to pick up a newly ordered bike, need a fix, or want
            to take a test ride on our Ivy or Ace Two, your ideal biking
            experience is closer than you think.
          </p>
          <p className="max-w-[1200px] bg-[white] rounded-3xl p-[10px_30px]">
            Find a partner store near you
          </p>
        </div>
      </section>
      <section className="flex max-w-[1200px] mx-auto justify-between my-[80px] items-center flex-col md:flex-row">
        <Image
          className="md:w-[40%] w-[90%]"
          src={zin}
          width={0}
          height={0}
          alt="man"
        />
        <div className="flex flex-col gap-[16px] md:w-[40%] w-[90%]">
          <h2 className="text-[50px]">Leasings</h2>
          <p className="text-[#808080dc]">
            Want to provide your organisation with mobility in a unique and
            creative way? Our Electric and City bikes are the perfect solution
            for healthier employees. So whether it's customised employee
            bicycles or standout promotional rides, both small and big
            organisations share the love of our Veloretti designs. Depending on
            the number of bikes, we will give you a customised quote.{" "}
          </p>
          <p className="text-[#808080dc]">Learn more</p>
        </div>
      </section>

      <section className="flex flex-col gap-[16px] max-w-[1200px] mx-auto my-[90px]">
        <h1 className="text-[50px] md:w-[50%] w-[90%]">They talked about us</h1>
        <div className="flex items-center gap-[16px] flex-col md:flex-row ">
          <div className="border-[1px] w-[90%] md:w-[32%] border-[#808080dc] p-[15px] h-[200px] flex flex-col justify-center gap-[20px] items-center">
            <p>
              "One of the best e-bikes available at any price and far and away
              my favourite ride of the year."
            </p>
            <Image
              className="md:w-[40%] w-[90%]"
              src={img3}
              width={0}
              height={0}
              alt="man"
            />
          </div>
          <div className="w-[90%] md:w-[32%] border-[1px] border-[#808080dc] p-[15px] h-[200px] flex flex-col justify-center gap-[20px] items-center">
            <p>
              “This second-generation Ace is a superhero amongst urban e- bikes…
              9/10.”
            </p>
            <Image
              className="md:w-[40%] w-[90%]"
              src={img5}
              width={0}
              height={0}
              alt="man"
            />
          </div>
          <div className="w-[90%] md:w-[32%] border-[1px] border-[#808080dc] p-[15px] h-[200px] flex flex-col justify-center gap-[20px] items-center">
            <p>
              "The timeless, chic design and stunning craftsmanship make them
              the perfect way to get around the city."
            </p>
            <Image
              className="md:w-[40%] w-[90%]"
              src={img4}
              width={0}
              height={0}
              alt="man"
            />
          </div>
        </div>
      </section>
      <section
        className="w-full h-[100vh] bg-cover bg-center flex flex-col gap-[16px] items-start justify-center my-[40px]"
        style={{ backgroundImage: "url('/velik7.png')" }}
      >
        <div className="max-w-[1200px] mx-auto flex flex-col items-start justify-start text-start">
          <h1 className="md:w-[40%] w-[90%] max-w-[1200px] text-[70px] text-[white] ">
            Red Dot Award
          </h1>
          <p className="md:w-[40%] w-[90%] max-w-[1200px]  text-[white]">
            Good design is what drives us, and we're proud to share that
            Veloretti Electric Two has already won the prestigious Red Dot
            Design Award 2023, as judged by the world's best product designers.
          </p>
        </div>
      </section>
      <section className="flex max-w-[1200px] mx-auto justify-between my-[80px] items-center flex-col md:flex-row">
        <div className="flex flex-col gap-[16px] md:w-[40%] w-[90%]">
          <h2 className="text-[50px]">Ride carefree</h2>
          <p className="text-[#808080dc]">
            Our Qover x Veloretti insurance plan has got you covered. It offers
            comprehensive coverage against theft, provides assistance in case of
            any issues, and covers any damages to your bike.{" "}
          </p>
          <p className="text-[#808080dc]">Learn more</p>
        </div>
        <Image
          className="md:w-[40%] w-[90%]"
          src={img6}
          width={0}
          height={0}
          alt="man"
        />
      </section>
    </>
  );
};

export default Products;
