import React from "react";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const ProjectCard = ({ project, technologies }) => {
  const {
    id,
    title,
    description,
    tags,
    image,
    team_size,
    date,
    source_url,
    live_url,
  } = project;

  return (
    <article className="group bg-secondary rounded-xl overflow-hidden transition-all duration-300 ">
      <div className="block ">
        <div className="relative h-56 md:h-fit overflow-hidden">
          {image.length ? (
            <Swiper
              modules={[Navigation]}
              spaceBetween={4}
              grabCursor={true}
              slidesPerView={1}
              navigation={{
                nextEl: ".custom-button-next",
                prevEl: ".custom-button-prev",
              }}
              loop
            >
              {image.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={`/projects/${img}`}
                    alt={index}
                    className="w-full h-56 lg:h-full object-cover"
                  />
                </SwiperSlide>
              ))}
              <div className="absolute z-10 top-1/2 left-2 -translate-y-1/2">
                <button className="custom-button-prev text-white p-1 bg-light/20 rounded-md">
                  <FaAngleLeft />
                </button>
              </div>
              <div className="absolute z-10 top-1/2 right-2 -translate-y-1/2">
                <button className="custom-button-next text-white p-1 bg-light/20 rounded-md">
                  <FaAngleRight />
                </button>
              </div>
            </Swiper>
          ) : (
            <img
              src={`/projects/${image}`}
              alt={title}
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60"></div>
        </div>

        <div className="p-4">
          <Swiper spaceBetween={4} slidesPerView={"auto"} grabCursor={true}>
            {tags
              .map((tag) => technologies.find((tech) => tech.id === tag))
              .map((tech) => (
                <SwiperSlide
                  className="flex items-center gap-1 bg-black/30 p-1 rounded-md flex-shrink-0 !w-fit px-1.5"
                  key={tech.id}
                >
                  <div className="max-w-fit flex items-center gap-1">
                    <img
                      src={`/icons/${tech.path}`}
                      className="w-3 h-3 min-w-3"
                    />
                    <p className="text-xs text-light">{tech.name}</p>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>

          <h3 className="text-xl font-bold my-2 text-light transition-colors">
            {title}
          </h3>
          <p className="text-light/80 text-sm mb-1">{description}</p>
          <div className="my-2 w-full bg-light/20 h-[0.5px]"></div>

          <div className="relative flex justify-between items-center mb-2">
            <p className="text-light text-sm">Team size: {team_size}</p>
            <p className="text-light text-sm">{date}</p>
          </div>

          <div className="flex justify-end gap-3">
            <Link to={source_url} target="_blank">
              <FaGithub className="w-5 h-5" />
            </Link>
            <Link to={live_url} target="_blank">
              <HiOutlineExternalLink className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
