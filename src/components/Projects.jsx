import Header from "./Header/Header";
import Footer from "./Footer";
import projectsList from "/src/data/projects.json";
import { Link } from "react-router-dom";
import React from "react";

export default function Projects() {
  window.scrollTo(0, 0);
  return (
    <div className="flex flex-col gap-5 rounded-lg p-3 text-white md:p-5">
      <Header />
      <section className="flex flex-col gap-8">
        {projectsList.map((project) => (
          <React.Fragment key={project.title}>
            <div className="group flex flex-col gap-3 xl:flex-row xl:justify-between">
              <Link
                to={`/projects/${project.title}`}
                className="self-center from-sky-500 to-pink-500 text-center text-3xl font-bold xl:text-6xl xl:group-hover:bg-gradient-to-r xl:group-hover:bg-clip-text xl:group-hover:text-transparent"
              >
                {project.title}
              </Link>
              <div className="flex flex-col gap-5 md:flex-row md:justify-center">
                <img
                  className="mx-auto max-h-[300px] w-fit object-contain animate-duration-1000 animate-fill-forwards animate-once sm:rounded-lg md:m-0 md:max-h-[200px] xl:invisible xl:group-hover:visible xl:group-hover:animate-fade-left"
                  src={project.mainImage}
                />
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center md:flex-col xl:invisible">
                  <Link className="rounded-full border border-green-500 px-5 py-2 text-center transition-colors hover:bg-green-500 sm:font-bold">
                    Project Detail
                  </Link>
                  <Link className="rounded-full border border-sky-500 px-5 py-2 text-center transition-colors hover:bg-sky-500 sm:font-bold">
                    See Code
                  </Link>
                  <Link className="rounded-full border border-pink-500 px-5 py-2 text-center transition-colors hover:bg-pink-500 sm:font-bold">
                    Watch Live
                  </Link>
                </div>
              </div>
            </div>
            <hr />
          </React.Fragment>
        ))}
      </section>
      <Footer />
    </div>
  );
}
