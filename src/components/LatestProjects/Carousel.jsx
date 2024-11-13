import useEmblaCarousel from "embla-carousel-react";

export default function Carousel() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        <div className="flex-[0_0_100%] text-white">Slide 1</div>
        <div className="flex-[0_0_100%]">Slide 2</div>
        <div className="flex-[0_0_100%]">Slide 3</div>
      </div>
    </div>
  );
}
