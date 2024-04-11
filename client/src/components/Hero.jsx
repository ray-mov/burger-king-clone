import card_1 from "../assets/hero-card-1.jpg";
import card_2 from "../assets/hero-card-2.png";
import card_3 from "../assets/hero-card-3.jpeg";
import HeroCard from "./sub_components/HeroCard";
const Hero = () => {
  return (
    <div className="flex gap-16 px-12 justify-evenly pt-5">
      <HeroCard img={card_1} />
      <HeroCard img={card_2} />
      <HeroCard img={card_3} />
    </div>
  )
}

export default Hero