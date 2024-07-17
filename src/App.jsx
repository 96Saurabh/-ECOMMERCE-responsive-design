import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Products from "./components/Products/Products";
import watch from "./assets/hero-images/watch.png"

const BannerData = {
  discount: "30% OFF",
  title: "10 Jan to 28 Jan",
  title2: "Air SOLO Bass",
  image: "https://www.pngall.com/wp-content/uploads/4/Headphone-Download-Free-PNG.png",
  title3: "Winter Sale",
  title4: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  bgColor: "#2dcc6f",
};
const BannerData2 = {
  discount: "30% OFF",
  title: "10 Jan to 28 Jan",
  title2: "Air SOLO Bass",
  image: "https://www.pngall.com/wp-content/uploads/15/Apple-iWatch-PNG1.png",
  title3: "Winter Sale",
  title4: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  bgColor: "#1a1718",
};

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products/>
      <Banner data={BannerData2} />
      <Category />
      <Products/>
    </div>
  );
}

export default App;
