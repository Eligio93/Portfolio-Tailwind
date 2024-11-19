import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="mr-10 flex max-h-[800px] min-w-0 flex-[0_0_100%] flex-col gap-5 rounded-lg bg-slate-800 p-5 text-white transition-opacity duration-500 sm:gap-7 md:h-[580px] md:flex-[0_0_70%] lg:flex-[0_0_60%] xl:flex-[0_0_50%] 2xl:flex-[0_0_40%]">
      <div className="flex flex-col gap-5 sm:flex-row sm:gap-0">
        <img
          src={project["desktop-image"]}
          className="max-h-[150px] w-full object-contain sm:max-h-[180px]"
        />
        <img
          src={project["mobile-image"]}
          className="max-h-[150px] w-full object-contain sm:self-end"
        />
      </div>
      <Link
        to={`/projects/${project.title}`}
        className="flex flex-1 flex-col gap-5 hover:underline"
      >
        <h3 className="sm text-center text-2xl font-bold">{project.title}</h3>
        <p className="text-md line-clamp-5 items-center lg:line-clamp-4">
          {project.description}
        </p>
      </Link>
      <div className="flex flex-wrap justify-around sm:justify-around">
        {project["tech-stack"].map((tech) => {
          return (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center gap-2"
            >
              <img className="h-8 sm:h-10" src={tech.icon} title={tech.name} />
              <p className="hidden text-sm text-indigo-300 sm:block">
                {tech.name}
              </p>
            </div>
          );
        })}
      </div>
      <div className="mt-5 flex justify-around sm:justify-end sm:gap-5">
        <a
          href={project.gitHub}
          target="_blank"
          className="rounded-full bg-sky-500 px-3 py-2 text-sm font-bold transition-colors lg:border lg:border-sky-500 lg:bg-transparent lg:hover:bg-sky-500"
        >
          See Code
        </a>
        <a
          href={project.live}
          target="_blank"
          className="rounded-full bg-pink-500 px-3 py-2 text-sm font-bold transition-colors lg:border lg:border-pink-500 lg:bg-transparent lg:hover:bg-pink-500"
        >
          Watch Live
        </a>
      </div>
    </div>
  );
}
