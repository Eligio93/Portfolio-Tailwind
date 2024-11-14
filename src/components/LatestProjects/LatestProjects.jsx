import useEmblaCarousel from "embla-carousel-react";
import ProjectCard from "../Projects/ProjectCard";
import projectsList from "/src/data/projects.json";
import ClassNames from "embla-carousel-class-names";
import { useEffect, useState } from "react";

export default function LatestProjects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [ClassNames()]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (emblaApi) {
      const onSelect = () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      };
      emblaApi.on("select", onSelect);

      return () => {
        emblaApi.off("select", onSelect); //Listener cleanup
      };
    }
  }, [emblaApi]);

  function handleDotClick(index) {
    if (emblaApi) {
      emblaApi.scrollTo(index, false);
    }
  }

  return (
    <section className="flex flex-col gap-5 p-3 lg:gap-10">
      <h2 className="text-center text-4xl font-bold text-white lg:mb-5 lg:text-left">
        Latest Projects
      </h2>
      <div className="flex flex-col gap-5 overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {projectsList.slice(0, 4).map((project) => {
            return <ProjectCard key={project.title} project={project} />;
          })}
        </div>
        <div className="flex justify-center gap-3">
          {projectsList.slice(0, 4).map((project, index) => {
            return (
              <button
                key={index}
                className={`h-3 w-3 rounded-full border bg-transparent ${
                  selectedIndex === index
                    ? "bg-gradient-to-br from-sky-500 to-pink-500"
                    : "bg-transparent"
                }`}
                onClick={() => handleDotClick(index)}
              ></button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
