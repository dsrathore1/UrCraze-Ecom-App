// pages/index.js
import HeroSection from '../Components/HeroSection.jsx';
import Banner from '../Components/Banner';
import Companies_Logo from '../Components/Companies_Logo';
import Categories from '../Components/Categories/Categories.jsx';


const Home = () => {
  return (
    <div>
      <HeroSection />
      <Companies_Logo />
      <Banner />
      <Categories/>
    </div>
  );
};

export default Home;