import React from "react";
import Button from "../Shared/Button";
import image from "../../assets/hero-images/product.png"
import applewatch from "../../assets/hero-images/Apple-Watch.png"
import laptop from "../../assets/hero-images/apple.png"


function Category() {
  return (
    <div className="py-8">
      <div className="container">
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-black/90
          to-black/70 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400 ">engoy</p>
                <p className="text-2xl font-semibold md-[2px]">with</p>
                <p className="text-4xl xl:text5xl font-bold opacity-50 md-2">earPhone</p>
                <Button 
                text="Browse"
                bgColor={"bg-primary"}
                textColor={"text-white"}
                />
              </div>
            </div>
            <img src={image} alt="" className="w-[320px] absolute
            bottom-0 "/>
          </div>
          {/* second col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandYellow/90
          to-brandYellow/100 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400 ">engoy</p>
                <p className="text-2xl font-semibold md-[2px]">with</p>
                <p className="text-4xl xl:text5xl font-bold opacity-50 md-2">Apple Watch</p>
                <Button 
                text="Browse"
                bgColor={"bg-primary"}
                textColor={"text-white"}
                />
              </div>
            </div>
            <img src={applewatch} alt="" className="w-[320px] absolute
            -right-4 lg:top-[40px] "/>
          </div>
          {/* third col */}
          <div className="col-span-2 py-10 pl-5 bg-gradient-to-br from-primary/50
          to-orange-700 text-white rounded-3xl relative h-[320px] flex items-end">
            <div >
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400 ">engoy</p>
                <p className="text-2xl font-semibold md-[2px]">with</p>
                <p className="text-4xl xl:text5xl font-bold opacity-50 md-2">Loptop</p>
                <Button 
                text="Browse"
                bgColor={"bg-white"}
                textColor={"text-primary"}
                />
              </div>
            </div>
            <img src={laptop} alt="" className="w-[320px] absolute
            top-1/2 -translate-y-1/2 -right-0"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
