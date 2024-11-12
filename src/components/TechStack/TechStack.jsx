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
    <section className="flex flex-col gap-5 p-3 lg:gap-10">
      <h2 className="text-center text-4xl font-bold text-white md:text-left lg:mb-5">
        Tech Stack
      </h2>

      <div className="flex flex-wrap justify-around gap-5">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="flex max-w-16 flex-col items-center gap-3 lg:max-w-20 "
          >
            <div>
              <img src={tech.icon} alt={tech.name} />
            </div>
            <p className="text-md text-white lg:text-lg">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
