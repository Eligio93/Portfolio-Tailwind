import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  let greetings = [
    "Hello",
    "Ciao",
    "Bonjour",
    "Hola",
    "Hallo",
    "Olá",
    "Привет",
    "Hej",
  ];
  const [greetingIndex, setGreetingIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="m-3 mx-auto flex flex-col items-center justify-center gap-5 rounded-lg p-5 text-white lg:gap-8">
      <p className="animate-fade text-5xl text-sky-500 animate-alternate animate-duration-[1500ms] animate-infinite animate-ease-linear">
        {greetings[greetingIndex] + "!"}
      </p>
      <p className="text-center text-2xl">
        I'm{" "}
        <span className="text-4xl font-bold lg:text-6xl">
          Eligio Cristantielli
        </span>
      </p>
      <p className="text-center text-lg leading-7 md:w-4/5 lg:w-1/2 lg:text-2xl">
        Welcome to my portfolio website! Here, you'll discover my latest
        projects, the technologies I use, and the services I offer. Don't
        hesitate to reach out—I'd love to hear from you. Enjoy exploring!
      </p>
      <div className="flex flex-col justify-between gap-3 sm:flex-row">
        <Link
          to={"/projects"}
          className="rounded-full bg-sky-500 px-5 py-2 font-bold"
        >
          Explore Portfolio
        </Link>
        <Link
          to={"/contacts"}
          className="rounded-full border border-pink-500 px-5 py-2 font-bold hover:bg-pink-500"
        >
          Get In Touch
        </Link>
      </div>
    </div>
  );
}
