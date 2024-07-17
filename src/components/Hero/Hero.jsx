// import React from "react";
import Slider from "react-slick";
// import image1 from "../../assets/hero-images/eagel1.jpg";
// import image2 from "../../assets/hero-images/makhana_1.jpg";
import Button from "../Shared/Button";

const HeroData = [
  {
    id: 1,
    img: "https://www.pngall.com/wp-content/uploads/4/Headphone-Download-Free-PNG.png",
    title: "WireLess",
    title2: "HeadPhone",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    img: "https://assets-global.website-files.com/63f95db6291455fdf7a6a4e6/647e2f6116943add1c770447_APPLE%20VISION%20PRO.png",
    title: "WireLess",
    title2: "Vision",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    img: "",
    title: "WireLess",
    title2: "HeadPhone",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container">
      <div
        className="overflow-hidden rounded-3xl min-h-[550px]
    sm:min-h-[650px] hero-bg-color flex justify-center items-center"
      >
        {/* Hero Section */}
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings} className="w-full">
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className=" grid grid-cols-1 sm:grid-cols-2">
                  {/* test const section */}
                  <div
                    className="flex flex-col justify-center
                    gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1
                    relative z-10"
                  >
                    <h1 className="test-2xl sm:text-6xl">{data.subtitle}</h1>
                    <h1 className="test-5xl sm:text-6xl lg:text-7xl text-white font-bold">
                      {data.title}
                    </h1>
                    <h1
                      className="text-5xl uppercase text-white/19 dark:text-white/4 sm:text-[80px] 
                    md:text-[100px] xl:text-[150px] font-bold"
                    >
                      {data.title2}
                    </h1>
                    <div>
                      <Button 
                      text="Shop Now"
                      bgColor="bg-primary"
                      textColor="text-white"
                      
                      />
                    </div>
                  </div>
                  <div className="order-1 sm:order-2">
                    <div>
                      <img
                        src={data.img}
                        alt={data.title}
                        className="w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] 
                    sm:scale-105 lg:scale-110 object-contain mx-auto
                    drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] relative z-40"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Hero;
