import React from "react";
import zin from "../../../public/zin.png";
import man1 from "../../../public/image (1).png";
import zin3 from "../../../public/Bike-Wrapper.png";
import zin4 from "../../../public/image.png";
import Image from "next/image";

const Cities = () => {
  return (
    <>
      <section
        className="w-full h-[100vh] bg-cover bg-center flex flex-col gap-[16px] items-start justify-center "
        style={{ backgroundImage: "url('/velik3.png')" }}
      >
        <p className="max-w-[1200px]  text-[white]">VELORETTI </p>
        <h1 className="max-w-[1200px] text-[70px] text-[white] ">City bikes</h1>
        <p className="max-w-[1200px]  text-[white]">VELORETTI </p>
      </section>
      <section className="flex max-w-[1200px] mx-auto justify-between my-[80px] items-center flex-col md:flex-row">
        <div className="flex flex-col gap-[16px] md:w-[60%] w-[90%] mx-auto">
          <h2 className="text-[50px] text-center">Forever Forward.</h2>
          <div className="flex max-w-[1200px] mx-auto justify-between my-[80px] items-center flex-col md:flex-row">
            <Image
              className="md:w-[48%] w-[90%]"
              src={zin}
              width={0}
              height={0}
              alt="man"
            />
            <Image
              className="md:w-[48%] w-[90%]"
              src={man1}
              width={0}
              height={0}
              alt="man"
            />
          </div>
        </div>
      </section>
      <section className="flex max-w-[1200px] mx-auto justify-between my-[80px] items-center flex-col md:flex-row">
        <div className="bg-[#EBEDEE] w-[48%] p-[15px]">
          <div className="flex justify-between">
            <p>Electric Ace</p>
            <p>€69,07 NET/MONTH</p>
          </div>
          <Image
            className="md:w-[70%] w-[90%] mx-auto"
            src={zin3}
            width={0}
            height={0}
            alt="man"
          />
        </div>
        <div className="bg-[#EBEDEE] w-[48%] p-[15px]">
          <div className="flex justify-between">
            <p>Electric Ace</p>
            <p>€69,07 NET/MONTH</p>
          </div>
          <Image
            className="md:w-[70%] w-[90%] mx-auto"
            src={zin3}
            width={0}
            height={0}
            alt="man"
          />
        </div>
      </section>

      <section className="flex max-w-[1200px] mx-auto justify-between my-[80px] items-center flex-col md:flex-row">
        <div className=" w-[48%] p-[15px]">
          <Image
            className="md:w-[70%] w-[90%] mx-auto"
            src={zin4}
            width={0}
            height={0}
            alt="man"
          />
        </div>
        <div className="w-[48%] p-[15px]">
          <p>
            Whether you like it easy or fast, we got both. Our men's range of
            bicycles combine modern clean design with great quality, so they're
            perfect for your daily city commute. Our men citybikes are the
            Caféracer, Caféchaser and the Berlin, but feel free to opt for a
            women's bike for that easy hop-on- hop-off Amsterdam style.
          </p>
        </div>
      </section>
      <section className="flex max-w-[1200px] mx-auto justify-between my-[80px] items-center flex-col md:flex-row">
        <div className="flex flex-col gap-[16px] md:w-[60%] w-[90%] mx-auto">
          <h2 className="text-[50px] text-center">City bikes for everyone.</h2>
        </div>
      </section>
    </>
  );
};

export default Cities;
