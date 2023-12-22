// pages/index.js
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection.jsx';
import ProductCard from '../Components/ProductCard';
import products from "../../public/Assets/MOCK_DATA.json";
import Banner from '../Components/Banner';


const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Banner />
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;