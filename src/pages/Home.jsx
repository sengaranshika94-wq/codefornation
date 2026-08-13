import GreetingIntro from "../components/intro/GreetingIntro.jsx";
import Hero from "../components/hero/Hero.jsx";

import "./styles/Home.scss";


function Home() {
  return (
    <main className="home">
      <GreetingIntro />
      <Hero />
      
    </main>
  );
}

export default Home;