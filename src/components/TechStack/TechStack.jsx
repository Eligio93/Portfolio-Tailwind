import TechStackImage from "/TechStackImage.svg";
import cssIcon from "/cssIcon.svg";
import htmlIcon from "/htmlIcon.svg";
import javascriptIcon from "/javascriptIcon.svg";
import reactIcon from "/reactIcon.svg";
import tailwindIcon from "/tailwindIcon.svg";
import viteIcon from "/viteIcon.svg";
import gitIcon from "/gitIconFooter.svg";
import mongoDbIcon from "/mongoDbIcon.svg";
import nodeIcon from "/nodeIcon.svg";
import nextJsIcon from "/nextJsIcon.svg";
import typescripticon from "/typescriptIcon.svg";

export default function TechStack() {
  const technologies = [
    {
      name: "HTML",
      icon: htmlIcon,
    },
    {
      name: "CSS",
      icon: cssIcon,
    },
    {
      name: "JavaScript",
      icon: javascriptIcon,
    },
    {
      name: "Vite",
      icon: viteIcon,
    },
    {
      name: "React",
      icon: reactIcon,
    },
    {
      name: "Typescript",
      icon: typescripticon,
    },
    {
      name: "Tailwind",
      icon: tailwindIcon,
    },
    {
      name: "NextJS",
      icon: nextJsIcon,
    },
    {
      name: "Node",
      icon: nodeIcon,
    },
    {
      name: "MongoDB",
      icon: mongoDbIcon,
    },
    {
      name: "Git",
      icon: gitIcon,
    },
  ];

  return (
    <section className="flex flex-col items-center gap-5 p-3 lg:gap-10">
      <h2 className="text-center text-4xl font-bold text-white md:text-left lg:mb-5 lg:self-start">
        Tech Stack
      </h2>

      <div className="flex flex-wrap justify-around gap-5 lg:max-w-[40%] lg:gap-10">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="flex max-w-16 flex-col items-center gap-3 lg:max-w-20"
          >
            <div>
              <img
                className="transition duration-300 lg:grayscale lg:hover:scale-110 lg:hover:drop-shadow-md lg:hover:grayscale-0"
                src={tech.icon}
                alt={tech.name}
                title={tech.name}
              />
            </div>
            <p className="text-md text-white lg:text-lg">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
