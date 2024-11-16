import InterestCard from "./InterestCard";
import fullStackImage from "/fullStackImage.svg";
import SEOImage from "/SEOImage.svg";
import analyticImage from "/analyticsImage.svg";
import { motion } from "framer-motion";

export default function AreasOfInterest() {
  return (
    <section className="flex flex-col gap-5 p-3 lg:gap-10">
      <h2 className="text-center text-4xl font-bold text-white lg:mb-5 lg:text-left">
        Areas of Interest
      </h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: "-180px" }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap justify-center gap-5 md:justify-around lg:justify-between"
      >
        <InterestCard
          image={fullStackImage}
          title={"Full Stack Development"}
          description={
            "Comprehensive web solutions covering both front-end and back-end development to build robust, user-friendly applications tailored to meet diverse business needs."
          }
        />
        <InterestCard
          image={SEOImage}
          title={"SEO Optimization"}
          description={
            " Strategic enhancement of website content and structure to improve search engine rankings, drive organic traffic, and maximize online visibility."
          }
        />
        <InterestCard
          image={analyticImage}
          title={"Data & Analytics"}
          description={
            "In-depth analysis and interpretation of data to provide actionable insights, enabling data-driven decision-making and optimized business performance."
          }
        />
      </motion.div>
    </section>
  );
}
