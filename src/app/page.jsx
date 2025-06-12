import Image from "next/image";
import Link from "next/link";

import man1 from "../../public/Wrapper.png";
import zin from "../../public/zin.png";
import zin2 from "../../public/zin2.png";
import zin3 from "../../public/Bike-Wrapper.png";

export default function Home() {
  return (
    <>
      <section
        className="w-full h-[100vh] bg-cover bg-center flex flex-col gap-[16px] items-start justify-center "
        style={{ backgroundImage: "url('/velik1.png')" }}
      >
        <div className="max-w-[1200px] mx-auto flex flex-col items-start justify-start text-start w-full">
          <p className="max-w-[1200px]  text-[white]">VELORETTI BUSINESS</p>
          <h1 className="max-w-[1200px] text-[70px] text-[white] ">
            Bike lease plan for employees.
          </h1>
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
          <h2 className="text-[50px]">Bike plans for employees.</h2>
          <p className="text-[#808080dc]">
            Veloretti Electrics benefit both the environment and the health of
            your employees. Oh, and they look good too. Cost-free for the
            employer and outside of the WKR.
          </p>
          <p className="text-[#808080dc]">Discover more</p>
        </div>
      </section>
      <section
        className="w-full h-[100vh] bg-cover bg-center flex flex-col gap-[16px] items-start justify-center "
        style={{ backgroundImage: "url('/velik2.png')" }}
      >
        <div className="max-w-[1200px] mx-auto flex flex-col items-start justify-start text-start">
        <h2 className=" text-[40px] text-[white] w-[50%] ">
            Service, maintenance and insurance
          </h2>
          <p className="  text-[white] w-[50%]">
            The lease includes an all-in service package. Throughout the entire
            36 months, you are fully insured against damage, theft and
            maintenance. In addition, you always have access to roadside
            assistance.
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
          <h2 className="text-[50px]">Free of charge for employers</h2>
          <p className="text-[#808080dc]">
            The bike plan is totally independent of the WKR and is free for you
            as an employer. The employee pays the lease costs and you, as the
            employer, decide whether you want to contribute to the costs.
          </p>
          <p className="text-[#808080dc]">Cost example</p>
        </div>
      </section>
      <section className="flex max-w-[1200px] mx-auto justify-between my-[80px] items-center flex-col md:flex-row">
        <div className="flex flex-col gap-[16px] md:w-[40%] w-[90%]">
          <h2 className="text-[50px]">How it works</h2>
          <div>
            <p className="">Register your company</p>
            <p className="text-[#808080dc]">
              Fill in our registration form with your company details. After
              your registration, our leasing partner will do a credit check. You
              will hear whether your application has been approved within 24
              hours.
            </p>
          </div>
          <div>
            <p className="">Determine the requirements</p>
            <p className="text-[#808080dc]">
              You get acces to the digital platform. Set the requirements for
              your employees and share the registration link.
            </p>
          </div>
          <div>
            <p className="">Ride your bike!</p>
            <p className="text-[#808080dc]">
              Let's go! Your employees can choose their bikes and they'll be
              delivered straight to their homes.
            </p>
          </div>
          <div>
            <p className="">Administration</p>
            <p className="text-[#808080dc]">
              Everything in one place. The digital platform gives you an easy
              overview of all the information for your payroll.
            </p>
          </div>
        </div>
        <Image
          className="md:w-[40%] w-[90%]"
          src={zin2}
          width={0}
          height={0}
          alt="man"
        />
      </section>
      <section className="flex max-w-[1200px] mx-auto justify-between my-[80px] items-center flex-col md:flex-row gap-[24px]">
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
        <div className="flex flex-col gap-[16px] md:w-[60%] w-[90%] mx-auto">
          <h2 className="text-[50px] text-center">Get in touch</h2>
          <div className="border-[#808080dc] border-[1px] p-[10px]">
            First name
          </div>
          <div className="border-[#808080dc] border-[1px] p-[10px]">
            Last name{" "}
          </div>
          <div className="border-[#808080dc] border-[1px] p-[10px]">
            Email address{" "}
          </div>
          <div className="border-[#808080dc] border-[1px] p-[10px]">
            Phone number{" "}
          </div>
          <div className="border-[#808080dc] border-[1px] p-[10px]">
            Company name{" "}
          </div>
          <div className="border-[#808080dc] border-[1px] p-[10px]">
            Company Size
          </div>
          <div className="border-[#808080dc] border-[1px] p-[10px]">
            Number of bikes
          </div>
          <textarea
            defaultValue="How can we help"
            className="border-[#808080dc] border-[1px] p-[10px] h-[200px]"
          ></textarea>
          <div className="border-[#808080dc] border-[1px] p-[10px] bg-[grey] text-white text-center rounded-4xl">
            Send the request
          </div>
        </div>
      </section>
      <section className="flex max-w-[1200px] mx-auto justify-center my-[80px] items-center ">
        <div className="flex flex-col gap-[30px] md:w-[60%] w-[90%]">
          <h2 className="md:text-[80px] text-[40px]">Any questions?</h2>
          <div>
            <p className="">What about the paperwork?</p>
            <p className="text-[#808080dc]">
              Fill in our registration form with your company details. After
              your registration, our leasing partner will do a credit check. You
              will hear whether your application has been approved within 24
              hours.
            </p>
          </div>

          <p className="">
            How does it work with an employee who retires early?
          </p>

          <p className="">
            What does a Veloretti Bike Plan cost for an employer?
          </p>

          <p className="">
            How is the insurance & maintenance arranged when leasing a Veloretti
            bike?
          </p>

          <p>What are the legal requirements for the Veloretti bicycle plan?</p>
        </div>
      </section>
    </>
  );
}
