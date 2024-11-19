import { Link } from "react-router-dom";

export default function InterestCard({ image, title, description }) {
  return (
    <div className="flex min-h-[500px] max-w-xs flex-col items-center gap-3 rounded-md border border-gray-500 bg-gradient-to-b from-sky-950 to-sky-800 pb-8 text-white sm:max-w-[40%] lg:max-w-[30%]">
      <img className="max-h-[50%]" src={image} />
      <p className="text-center text-xl font-bold lg:text-3xl">{title}</p>
      <p className="flex-1 p-3 text-center lg:text-xl">{description}</p>
      <Link to={"/contacts"} className="rounded-md bg-sky-500 px-6 py-2">
        Get In Touch
      </Link>
    </div>
  );
}
