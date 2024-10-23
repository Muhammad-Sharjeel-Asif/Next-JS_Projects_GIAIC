import Navbar from "./Components/Navbar";
import CardSection from "./Components/CardSection";
import Dashboard from "./Components/Dashboard";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <HeroSection/>      

      <CardSection/>      

      <div className="pt-14 px-36">
        <h2 className="text-black text-xl font-bold">Featured works</h2>
        <Dashboard/>
      </div>

      <div>
        <Footer/>
      </div>
    </>
  );
}
