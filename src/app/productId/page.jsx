import React from "react";
import Image from "next/image";
import zin4 from "../../../public/image (2).png";
import zin3 from "../../../public/Bike-Wrapper.png";
import woman from "../../../public/Span2.png";
import woman2 from "../../../public/Video_wrapper.png";
import img1 from "../../../public/Video_wrapper (1).png";
import img2 from "../../../public/Text-media-static_background (1).png";
import img3 from "../../../public/Video_wrapper (2).png";
import img4 from "../../../public/Video_wrapper (3).png";
import img5 from "../../../public/Span (1).png";
import img6 from "../../../public/Bike-highlights_background.png";

const ProductsById = () => {
  return (
    <>
      <section className="flex max-w-[1200px] mx-auto gap-[20px] my-[80px] items-center flex-col md:flex-row">
        <div className="bg-[#EBEDEE] md:w-[48%] w-[90%] p-[15px] md:h-[600px] h-[300px] flex items-center justify-center">
          <Image
            className=" w-[90%] mx-auto"
            src={zin4}
            width={0}
            height={200}
            alt="man"
          />
        </div>
        <div className="flex flex-col gap-[16px]  justify-center">
          <div className="flex justify-between">
            <p>Electric Ivy</p>
            <p>€ 3.299</p>
          </div>
          <div className="flex justify-between  items-center">
            <div className="bg-[#EBEDEE]">
              <Image
                className="md:w-[30%] w-[90%] mx-auto "
                src={zin3}
                width={0}
                height={0}
                alt="man"
              />
              <p>Electric Ace</p>
            </div>
            <div className="bg-[#EBEDEE] w-[48%]">
              <Image
                className="md:w-[30%] w-[90%] mx-auto"
                src={zin4}
                width={0}
                height={200}
                alt="man"
              />
              <p>Electric Ivy</p>
            </div>
          </div>
          <p className="border-y-[#e1d8d8] py-[24px] border-y-[1px]">
            Ivy Two Matte Black
          </p>
          <p>3 interest-free payments with </p>
          <p>
            The Ivy Two is a step-through frame electric bike combining design,
            advanced technology, and safety features. Rider height: between 164
            and 184cm.
          </p>
          <p className="bg-[#e1d8d8] rounded-3xl p-[10px_30px] flex justify-start items-start w-[30%]">
            Scroll to Specifications
          </p>
          <p className="bg-[black] rounded-3xl text-white text-center py-[10px]">
            Customise now
          </p>
          <p className=" border-t-[1px] border-t-[#e1d8d8] mt-[24px]">
            Shipping to the Netherlands, Belgium & Germany only.Delivery time:
            5-15 business days
          </p>
        </div>
      </section>
      <section
        className="w-full h-[100vh] bg-cover bg-center flex flex-col gap-[16px] items-start justify-center "
        style={{ backgroundImage: "url('/velik8.png')" }}
      >
        <h1 className="md:w-[40%] w-[90%] max-w-[1200px] text-[70px] text-[white] ">
          Removable long- range battery
        </h1>
        <p className="md:w-[30%] w-[90%] max-w-[1200px]  text-[white]">
          Recharge anytime, anywhere. Our in-house developed battery is built to
          go the distance. With a powerful 540 Wh and an impressive range of up
          to 120km, you'll have the freedom to explore without worrying about
          running out of power. And if you do need to recharge, our removable
          and smart battery pack can be easily detached and charged with any
          electrical outlet.
        </p>
      </section>
      <section className="flex max-w-[1440px] mx-auto justify-between items-center flex-col md:flex-row">
        <div className="flex flex-col gap-[16px] md:w-[35%] w-[90%]">
          <h2 className="text-[50px]">Ivy Two</h2>
          <p className="text-[#808080dc]">
            Introducing the Ivy Two, the electric bike that takes your daily
            commute to the next level. With an accessible lower frame, the
            latest technology, and safety features, the Ivy delivers instant
            power, convenience, and peace of mind at every turn, making it the
            go-to bike for any commute. Equipped with a bright LED brake light
            for enhanced visibility and safety tracking for added security, the
            Ivy Two is the perfect combination of design, technology, and
            safety.{" "}
          </p>
        </div>
        <Image className="" src={woman} width={0} height={0} alt="man" />
      </section>
      <section className="flex max-w-[1440px] mx-auto justify-between items-center flex-col md:flex-row">
        <Image className="" src={woman2} width={0} height={0} alt="man" />
        <div className="flex flex-col gap-[16px] md:w-[35%] w-[90%]">
          <h2 className="text-[50px]">Ivy Two</h2>
          <p className="text-[#808080dc]">
            Introducing the Ivy Two, the electric bike that takes your daily
            commute to the next level. With an accessible lower frame, the
            latest technology, and safety features, the Ivy delivers instant
            power, convenience, and peace of mind at every turn, making it the
            go-to bike for any commute. Equipped with a bright LED brake light
            for enhanced visibility and safety tracking for added security, the
            Ivy Two is the perfect combination of design, technology, and
            safety.{" "}
          </p>
        </div>
      </section>
      <section
        className="w-full h-[100vh] bg-cover bg-center flex flex-col gap-[16px] items-start justify-center "
        style={{ backgroundImage: "url('/velik9.png')" }}
      >
        <h1 className="md:w-[40%] w-[90%] max-w-[1200px] text-[70px] text-[white] ">
          Built-in display
        </h1>
        <p className="md:w-[30%] w-[90%] max-w-[1200px]  text-[white]">
          Discover a new level of convenience and control with our elegantly
          designed integrated display. Everything you need to manage your ride
          is right at your fingertips, from customizing your bike's settings to
          navigating unfamiliar parts of the city. And with seamless integration
          to our app, you can access all your data and ride information with
          ease.
        </p>
      </section>
      <section className="flex max-w-[1440px] mx-auto justify-between items-center flex-col md:flex-row">
        <div className="flex flex-col gap-[16px] md:w-[35%] w-[90%]">
          <h2 className="text-[50px]">Enviolo® automated gears</h2>
          <p className="text-[#808080dc]">
            Never think about shifting gears again. The Enviolo® gear system
            takes automated gear-shifting to the next level, delivering the
            ultimate ride experience every time. This advanced technology
            effortlessly shifts gears to optimize performance, delivering a
            natural and effortless ride. Say goodbye to clunky gear changes and
            hello to a ride that's both easy and efficient.
          </p>
        </div>
        <Image className="" src={img1} width={0} height={0} alt="man" />
      </section>
      <section className="flex max-w-[1440px] mx-auto justify-between items-center flex-col md:flex-row">
        <Image className="" src={img2} width={0} height={0} alt="man" />
        <div className="flex flex-col gap-[16px] md:w-[35%] w-[90%]">
          <h2 className="text-[50px]">Gates® belt drive</h2>
          <p className="text-[#808080dc]">
            The Gates Carbon Belt drive is a game-changer. Made from premium
            quality carbon, it offers unmatched durability and strength. And the
            best part? You'll never have to worry about oiling your chain again.
            With our carbon belt, you'll enjoy a seamless, hassle-free biking
            experience that requires no maintenance for up to 30,000 kilometers.
          </p>
        </div>
      </section>
      <section className="flex max-w-[1440px] mx-auto justify-between items-center flex-col md:flex-row">
        <div className="flex flex-col gap-[16px] md:w-[35%] w-[90%]">
          <h2 className="text-[50px]">LED brake light</h2>
          <p className="text-[#808080dc]">
            When commuting, safety is priority. We acknowledge the significance
            of being alert and responsive on the road. That's why we created our
            brake light to activate instantly and illuminate brightly upon
            pressing the brakes. This feature guarantees that other drivers and
            commuters are immediately notified of your intention to slow down or
            come to a complete stop, ensuring your safety on the road.
          </p>
        </div>
        <Image className="" src={img3} width={0} height={0} alt="man" />
      </section>
      <section
        className="w-full h-[100vh] bg-cover bg-center flex flex-col gap-[16px] items-start justify-center "
        style={{ backgroundImage: "url('/velik10.png')" }}
      >
        <h1 className="md:w-[40%] w-[90%] max-w-[1200px] text-[70px] text-[white] ">
          Osram® precision light
        </h1>
        <p className="md:w-[30%] w-[90%] max-w-[1200px]  text-[white]">
          Safety is fundamental when it comes to biking. We've designed the
          precision front light with precision and clarity in mind. From dark
          roads to challenging city terrain, the precision front light, with its
          strong beam, is designed to help you navigate with ease and safety. No
          matter the environment, we make sure we provide you with the
          visibility you need.
        </p>
      </section>
      <section className="flex max-w-[1200px] mx-auto justify-between my-[80px] items-center flex-col md:flex-row">
        <Image
          className="md:w-[40%] w-[90%]"
          src={img4}
          width={0}
          height={0}
          alt="man"
        />
        <div className="flex flex-col gap-[16px] md:w-[40%] w-[90%]">
          <h2 className="text-[50px]">Safety tracking</h2>
          <p className="text-[#808080dc]">
            The Electric Two comes with safety tracking. In case you find
            yourself in an uncertain situation, simply press the button on your
            handlebar to alert your loved ones of your live location and feel
            more secure.
          </p>
          <p className="text-[#808080dc]">
            Whether you're commuting in the city or exploring the countryside,
            you can have peace of mind knowing that notifying is just a button
            press away. Moreover, the tracking feature automatically deactivates
            after an hour, allowing you to enjoy your rides with complete
            privacy and security.
          </p>
        </div>
      </section>
      <section className="flex max-w-[1200px] mx-auto justify-between my-[80px] items-center flex-col md:flex-row">
        <div className="flex flex-col gap-[16px] md:w-[40%] w-[90%]">
          <h2 className="text-[50px]">Shimano® hydraulic discbrakes</h2>
          <p className="text-[#808080dc]">
            The Shimano® discbrakes are premium hydraulic disc brakes designed
            to deliver lightning-fast stopping power, so you can ride with
            complete confidence and control. Rest assured, you'll feel the
            difference in the moments you need it most.{" "}
          </p>
          <p className="text-[#808080dc]">Learn more</p>
        </div>
        <Image
          className="md:w-[40%] w-[90%]"
          src={img5}
          width={0}
          height={0}
          alt="man"
        />
      </section>
      <section className="max-w-[1400px] mx-auto flex justify-center items-center">
        <Image
          className="md:w-[40%] w-[90%]"
          src={img6}
          width={0}
          height={0}
          alt="man"
        />
      </section>
      <section className="max-w-[1400px] mx-auto">
        <h2 className="text-[50px]">All in the details.</h2>
        <div className="flex justify-between">
          <div className="flex flex-col gap-[16px]">
            <h2 className="text-[25px]">Frame</h2>
            <div>
              <p className="font-bold">Frame</p>
              <p className="text-[#808080dc]">Coated aluminium with integrated battery case</p>
            </div>
            <div>
              <p className="font-bold">Paint</p>
              <p className="text-[#808080dc]">PPG Powder Coating 2K</p>
            </div>
            <div>
              <p className="font-bold">Weight</p>
              <p className="text-[#808080dc]">Frame 26 kg</p>
              <p className="text-[#808080dc]">Battery 3 kg</p>
            </div>
            <div>
              <p className="font-bold">Rider Height</p>
              <p className="text-[#808080dc]">164-184cm</p>
            </div>
            <p className="text-[#808080dc]">Your bike comes 85% assembled.</p>
          </div>
          <div className="flex flex-col gap-[16px]">
            <h2 className="text-[25px]">Components</h2>
            <div>
              <p className="font-bold">Motor</p>
              <p className="text-[#808080dc]">
                Bafang® 36v 250W / Torq + Rotation Sensor w/ a maximum torque of
                65 Nm
              </p>
            </div>
            <div>
              <p className="font-bold">Battery</p>
              <p className="text-[#808080dc]">Removable Smart Battery / 36Vdc, 540 WH 60-120 km range</p>
            </div>
            <div>
              <p className="font-bold">Gears</p>
              <p className="text-[#808080dc]">
                Enviolo® TR / Pro 44T Stepless Automatic Shifting / Ratio 310%
              </p>
            </div>
            <div>
              <p className="font-bold">Display</p>
              <p className="text-[#808080dc]">Veloretti built-in display</p>
            </div>
            <div>
              <p className="font-bold">Brakes</p>
              <p className="text-[#808080dc]">Shimano® MT200 hydraulic disc brakes</p>
            </div>
            <div>
              <p className="font-bold">Tires</p>
              <p className="text-[#808080dc]">Performance Plus tire / 50-622 / Anti Puncture level</p>
            </div>
            <div>
              <p className="font-bold">Belt</p>
              <p className="text-[#808080dc]">Gates® Carbon Beltdrive / 122T CDX</p>
            </div>
            <div>
              <p className="font-bold">Light front</p>
              <p className="text-[#808080dc]">Osram® Precision front light LED, StVZO approved</p>
            </div>
            <div>
              <p className="font-bold">Light rear</p>
              <p className="text-[#808080dc]">COB Hyperbolic LED</p>
            </div>
          </div>
          <div className="flex flex-col gap-[16px]">
            <h2 className="text-[25px]">Accessories</h2>
            <div>
              <p className="font-bold">Abus plug</p>
              <p className="text-[#808080dc]">In-chain lock 140 cm</p>
            </div>
            <div>
              <p className="font-bold">Front carrier</p>
              <p className="text-[#808080dc]">AVS front carrier 480g Carrying Capacity: 10 kg (22 lb)</p>
            </div>
            <div>
              <p className="font-bold">Rear carrier</p>
              <p className="text-[#808080dc]">TBA</p>
            </div>
            <div>
              <p className="font-bold">Basket</p>
              <p className="text-[#808080dc]">AVS basket 1.33kg Carrying Capacity: 10 kg (22 lb)</p>
            </div>
            <div>
              <p className="font-bold">Cargo basket</p>
              <p className="text-[#808080dc]">AVS cargo basket 1.7kg Carrying Capacity: 10 kg (22 lb)</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsById;
