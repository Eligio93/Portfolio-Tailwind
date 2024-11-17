import { useParams } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header/Header";
import ProjectsList from "../../data/projects.json";
import flyingAstronaut from "/flyingAstronaut.png";

export default function ProjectDetail() {
  const projectTitle = useParams().projectId;
  const project = ProjectsList.find((p) => p.title === projectTitle);
  console.log("ENTRIES:", Object.entries(project.readMe));
  console.log(project);
  return (
    <div className="flex flex-col gap-5 rounded-lg p-3 md:p-5">
      <Header />
      <div className="relative flex flex-col gap-10 text-white lg:mx-auto lg:max-w-[80%] lg:gap-10">
        <section className="flex flex-col gap-5 sm:flex-row sm:justify-center sm:gap-10">
          <img
            className="max-h-[200px] object-contain"
            src={project["desktop-image"]}
            alt="Project Desktop Snap"
          />
          <img
            className="max-h-[200px] object-contain"
            src={project["mobile-image"]}
            alt="Project Mobile Snap"
          />
        </section>
        <section className="flex flex-col items-center gap-5 sm:flex-row sm:justify-end">
          <a
            className="rounded-full bg-sky-500 px-5 py-2 font-bold"
            href={project.gitHub}
            target="_blank"
            rel="noopener noreferrer"
          >
            See Code
          </a>
          <a
            className="rounded-full border border-pink-500 px-5 py-2 text-center font-bold transition-colors hover:bg-pink-500"
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch Live
          </a>
        </section>
        <section className="flex justify-around lg:absolute lg:-left-20 lg:flex-col lg:gap-5">
          {project["tech-stack"].map((tech) => {
            return (
              <div className="group sticky top-0 flex flex-col items-center justify-center gap-2 lg:flex-row lg:justify-start lg:gap-6">
                <p className="hidden animate-fade-left text-indigo-300 animate-duration-1000 animate-fill-forwards animate-once sm:block lg:hidden lg:group-hover:block">
                  {tech.name}
                </p>
                <img
                  className="h-8 w-8 transition duration-300 sm:h-9 sm:w-9 lg:h-10 lg:w-10 lg:grayscale lg:hover:drop-shadow-md lg:hover:grayscale-0"
                  src={tech.icon}
                  alt={tech.name}
                  key={tech.name}
                />
              </div>
            );
          })}
        </section>

        <div className="flex flex-col gap-7">
          <h1 className="mx-auto w-fit bg-gradient-to-r from-sky-500 to-pink-500 bg-clip-text text-center text-3xl font-bold text-transparent">
            {project.title.toUpperCase()}
          </h1>
          {Object.entries(project.readMe).map(([key, value]) => {
            return (
              <div key={key}>
                <h2 className="text-2xl lg:text-3xl">{key}</h2>
                <p className="text-md mt-5 sm:text-lg">{value}</p>
              </div>
            );
          })}
        </div>
        <img className="mx-auto max-w-lg" src={flyingAstronaut} alt="" />
      </div>
      <Footer />
    </div>
  );
}
