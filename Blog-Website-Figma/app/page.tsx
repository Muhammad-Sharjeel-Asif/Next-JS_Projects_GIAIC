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

      <Dashboard/>

      <Footer/>
    </>
  );
}
