// import Banner from "@/components/Banner/Banner";
import Brands from "../components/Brands/Brand";
import FeatureProducts from "../components/Feature/FeatureProducts";
import Footer from "../components/Footer/Footer";
import LatestProducts from "@/components/LatestProducts/LatestProducts";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  //
  return (
    <div>
      <Navbar />
      <FeatureProducts />
      <Brands />
      <LatestProducts />
      {/* <Banner /> */}
      <Footer />
    </div>
  );
}
