// import React from "react";
import Button from "../Shared/Button";
// import alexa from "../../assets/hero-images/alexa.png";
import applewatch from "../../assets/hero-images/Apple-Watch.png";
import applevision from "../../assets/hero-images/Apple-vision.png";
import jbl from "../../assets/hero-images/jbl-spkar.png";

function Category2() {
  return (
    <div className="py-8">
      <div className="container">
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* third col */}
          <div
            className="col-span-2 py-10 pl-5 bg-gradient-to-br
          from-brandYellow/90
          to-brandGreen/90 text-white rounded-3xl relative h-[320px] flex items-end"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400 ">engoy</p>
                <p className="text-2xl font-semibold md-[2px]">with</p>
                <p className="text-4xl xl:text5xl font-bold opacity-90 md-2">
                Speaker
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-primary"}
                />
              </div>
            </div>
            <img
              src={jbl}
              alt=""
              className="w-[320px] absolute
            top-1/2 -translate-y-1/2 -right-0"
            />
          </div>
          {/* first col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-orange-500 to-blue-700 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400 ">engoy</p>
                <p className="text-2xl font-semibold md-[2px]">with</p>
                <p className="text-4xl xl:text-4xl font-bold opacity-90 md-2">
                  Apple Vision
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img
              src={applevision}
              alt=""
              className="w-[420px] absolute
             -right-4 lg:top-[2px]"
            />
          </div>
          {/* second col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-blue-500 to-orange-700 
          text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[1px] text-gray-400 ">engoy</p>
                <p className="text-2xl font-semibold md-[2px]">with</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-90 md-2">
                  Apple Watch
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img
              src={applewatch}
              alt=""
              className="w-[320px] absolute
            -right-20 lg:top-[90px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category2;
