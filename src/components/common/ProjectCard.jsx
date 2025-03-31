import React from "react";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { FcRemoveImage } from "react-icons/fc";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { twMerge } from "tailwind-merge";

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
    <article className="group bg-dark rounded-xl overflow-hidden transition-all duration-300 ">
      <div className="flex flex-col h-full">
        <div className="relative h-40 md:h-fit overflow-hidden">
          {Array.isArray(image) ? (
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
                    className="w-full h-40 object-cover"
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
            <>
              {image ? (
                <img
                  src={`/projects/${image}`}
                  alt={title}
                  className="w-full h-40 object-cover transition-all duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-40 bg-primary/30 flex justify-center items-center flex-col gap-1">
                  <FcRemoveImage className="w-10 h-10" />
                  <p className="text-secondary">no image</p>
                </div>
              )}
            </>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60"></div>
        </div>

        <div className="p-4 flex flex-col flex-grow justify-between">
          <div>
            {tags?.length && (
              <Swiper
                spaceBetween={4}
                slidesPerView={"auto"}
                grabCursor={true}
                className="mb-2"
              >
                {tags
                  .map((tag) => technologies.find((tech) => tech.id === tag))
                  .map((tech) => (
                    <SwiperSlide
                      className="flex items-center gap-1 bg-primary p-1 rounded-md flex-shrink-0 !w-fit px-1.5"
                      key={tech.id}
                    >
                      <div className="max-w-fit flex items-center gap-1">
                        <img
                          src={`/icons/${tech.path}`}
                          className="w-3 h-3 min-w-3"
                        />
                        <p className="text-xs text-secondary/90">{tech.name}</p>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            )}

            <h3 className="text-xl font-bold text-secondary transition-colors mb-2">
              {title}
            </h3>
            <p className="text-secondary/80 text-sm">{description}</p>
          </div>
          <div>
            <div className="w-full bg-secondary/20 h-[0.5px] my-2"></div>

            <div className="flex flex-col gap-1">
              <div className="relative flex justify-between items-center">
                <p className="text-secondary text-sm">Team size: {team_size}</p>
                <p className="text-secondary text-sm">{date}</p>
              </div>

              <div
                className={twMerge(
                  "flex justify-end gap-2",
                  !source_url && !live_url && "hidden"
                )}
              >
                {source_url && (
                  <Link to={source_url} target="_blank">
                    <FaGithub className="w-5 h-5 text-secondary hover:text-accent" />
                  </Link>
                )}
                {live_url && (
                  <Link to={live_url} target="_blank">
                    <HiOutlineExternalLink className="w-5 h-5 text-secondary hover:text-accent" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
