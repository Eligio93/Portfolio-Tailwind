import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import TechStack from "./components/TechStack/TechStack";
import AreasOfInterest from "./components/AreasOfInterest/AreasOfInterest";
import LatestProjects from "./components/LatestProjects/LatestProjects";
import Footer from "./components/Footer";
import astronautImage from "./assets/astronaut.png";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="scrollbar-hidden flex flex-col gap-5 rounded-lg p-3 md:p-5">
      <Header />
      <Hero />
      <hr />
      <TechStack />
      <hr />
      <AreasOfInterest />
      <hr />
      <LatestProjects />
      <hr />
      <div className="relative flex items-center justify-center">
        <img
          className="max-w-52 opacity-20 lg:max-w-80"
          src={astronautImage}
          alt=""
        />
        <div className="absolute flex flex-col items-center gap-10">
          <h3 className="text-center text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Want to see more Projects?
          </h3>
          <Link
            to={"/projects"}
            className="rounded-full bg-sky-500 px-5 py-2 font-bold text-white transition hover:scale-110"
          >
            Explore Portfolio
          </Link>
        </div>
      </div>
      <hr />
      <Footer />
    </div>
  );
}
