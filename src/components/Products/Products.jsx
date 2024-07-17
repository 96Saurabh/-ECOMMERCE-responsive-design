import React from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";


const ProductsData = [
  {
    id: 1,
    img: "https://www.apple.com/v/watch/bn/images/overview/welcome/startframe__xspkedg7rsiu_xlarge.jpg",
    title: "Boat Headphonn",
    price: "120",
    asoDelay: "0"
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwZ2LhwaOxM7VZW8cC00bmwJlX_0DdGQZm8FnnDfRztw2s0s0LnFZMBuh48eYTlEBsZoc&usqp=CAU",
    title: "Sony Headphones",
    price: "150",
    asoDelay: "0"
  },
  {
    id: 3,
    img: "https://resources.diariolibre.com/images/binrepository/apple-watch-series-6-ig-jpg-medium_16673654_20210623110910.jpg",
    title: "JBL Earbuds",
    price: "100",
    asoDelay: "0"
  },
  {
    id: 4,
    img: "https://hips.hearstapps.com/hmg-prod/images/apple-watch-series-6-red-1200x670-1600436126.jpg",
    title: "Sennheiser Headphones",
    price: "200",
    asoDelay: "0"
  },
  {
    id: 5,
    img: "https://media.hitekno.com/thumbs/2018/09/13/13521-apple-watch-series-4/730x480-img-13521-apple-watch-series-4.jpg",
    title: "Beats Headphones",
    price: "250",
    asoDelay: "0"
  },
  {
    id: 6,
    img: "https://theverifier.co.il/wp-content/uploads/2021/12/apple-watch-2022.jpeg",
    title: "Skullcandy Headphones",
    price: "110",
    asoDelay: "0"
  },
  {
    id: 7,
    img: "https://www.apple.com/newsroom/images/product/airpods/standard/Apple-AirPods-Pro-2nd-gen-hero-220907_big.jpg.large.jpg",
    title: "Bose Headphones",
    price: "300",
    asoDelay: "0"
  },
  {
    id: 8,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa_--rsR5tkyXZ6rHOIGTM1jbXyNu2-OF-_g&s",
    title: "Apple AirPods",
    price: "160",
    asoDelay: "0"
  },
  {
    id: 9,
    img: "https://static.toiimg.com/thumb/msid-71796366,width-1280,height-720,resizemode-4/71796366.jpg",
    title: "Samsung Earbuds",
    price: "130",
    asoDelay: "0"
  },
  {
    id: 10,
    img: "https://www.cnet.com/a/img/resize/f636a18349de9afaa7268616de26dd7456577925/hub/2023/09/26/cdecf7b6-069e-48bf-9046-133efae96eca/airpods-pro-2-usb-c-blue-background.jpg?auto=webp&fit=crop&height=360&width=640",
    title: "Philips Headphones",
    price: "140",
    asoDelay: "0"
  },
  {
    id: 11,
    img: "https://i.pcmag.com/imagery/articles/02GcH7wtgt0lTP8UzeBPL10-1.fit_lim.size_1200x630.v1685997476.jpg",
    title: "Pioneer Headphones",
    price: "170",
    asoDelay: "0"
  },
  {
    id: 12,
    img: "https://www.apple.com/v/apple-watch-series-9/d/images/overview/chip/close-up_endframe__cj0yx18ms5w2_large.jpg",
    title: "Pioneer Headphones",
    price: "170",
    asoDelay: "0"
  }
];


function Products() {
  return (
    <div>
      <div>
        {/* heading section */}
        <Heading title="Our Product" subtitle=" Expoler the product" />
        {/* body section */}
        <ProductCard data={ProductsData}/>
      </div>
    </div>
  );
}

export default Products;
