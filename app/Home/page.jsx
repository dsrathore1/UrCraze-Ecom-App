// pages/index.js
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection.jsx';
import Banner from '../Components/Banner';
import Companies_Logo from '../Components/Companies_Logo';


const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Companies_Logo />
      <Banner />
    </div>
  );
};

export default Home;