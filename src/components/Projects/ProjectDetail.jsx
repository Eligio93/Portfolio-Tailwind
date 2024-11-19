import { useParams } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header/Header";
import ProjectsList from "../../data/projects.json";
import flyingAstronaut from "/flyingAstronaut.png";
import { Link } from "react-router-dom";

export default function ProjectDetail() {
  window.scrollTo(0, 0);
  const projectTitle = useParams().projectId;
  const project = ProjectsList.find((p) => p.title === projectTitle);
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
        <section className="flex flex-col gap-5">
          <h2 className="font-bold text-gray-500">Developed with</h2>
          <div className="flex flex-wrap items-center justify-around gap-5 lg:gap-8 lg:justify-evenly ">
            {project["tech-stack"].map((tech) => {
              return (
                <div
                  key={tech.name}
                  className="group flex flex-col items-center justify-center gap-2"
                >
                  <img
                    className="h-8 w-8 transition duration-300 sm:h-9 sm:w-9"
                    src={tech.icon}
                    alt={tech.name}
                    key={tech.name}
                  />
                  <p className="hidden text-indigo-300 animate-duration-1000 animate-fill-forwards animate-once group-hover:animate-fade-left sm:block lg:invisible lg:group-hover:visible">
                    {tech.name}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <div className="flex flex-col gap-7">
          <h1 className="mx-auto w-fit bg-gradient-to-r from-sky-500 to-pink-500 bg-clip-text text-center text-3xl font-bold text-transparent">
            {project.title.toUpperCase()}
          </h1>
          {Object.entries(project.readMe).map(([key, value]) => {
            return (
              <div key={key}>
                <h2 className="text-2xl lg:text-3xl">{key.toUpperCase()}</h2>
                <p className="text-md mt-5 sm:text-lg">{value}</p>
              </div>
            );
          })}
        </div>
        <hr />
        <section className="relative flex items-center justify-center">
          <img
            className="max-w-52 opacity-20 lg:max-w-80"
            src={flyingAstronaut}
            alt=""
          />
          <div className="absolute flex flex-col items-center gap-10">
            <h3 className="text-center text-3xl font-bold text-white sm:text-4xl lg:text-4xl">
              Are you already tired of exploring?
            </h3>
            <Link
              to={"/projects"}
              className="rounded-full bg-sky-500 px-5 py-2 font-bold text-white transition hover:scale-110"
            >
              All Projects
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
