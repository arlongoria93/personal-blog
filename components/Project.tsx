import React from "react";
import { Projects } from "../typings";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoMdArrowRoundForward } from "react-icons/io";
import Link from "next/link";
type project = Projects;

const Project = ({
  _id,
  title,
  description,
  slug,
  category,
  publishedAt,
}: project) => {
  const now = new Date(publishedAt);
  const offsetMs = now.getTimezoneOffset() * 60 * 1000;
  const dateLocal = new Date(now.getTime() - offsetMs);
  const str = dateLocal
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, "-")
    .replace("T", " ");
  return (
    <Link href={`/project/${slug.current}`}>
      <div
        key={_id}
        className="flex flex-row justify-between w-full space-y-4 rounded group bg-base-300 hover:cursor-pointer "
      >
        <div className="flex flex-col space-y-4 bg-base-300">
          <div>
            <h3 className="font-light text-neutral-content font-roboto opacity-60">
              {str}
            </h3>
          </div>
          {category.title === "article" ? (
            <h2 className="text-3xl font-bold transition ease-in-out font-raleway delay-50 group-hover:text-primary-focus">
              {title}
            </h2>
          ) : (
            <h2 className="text-3xl font-bold transition ease-in-out text-success font-raleway delay-50 group-hover:text-neutral-content">
              {title}
            </h2>
          )}

          <h4 className="text-lg font-roboto">{description}</h4>
          <div className="flex flex-row items-center">
            <h3 className="font-bold font-raleway text-md text-primary-focus hover:text-neutral-content">
              Read More
            </h3>
          </div>
        </div>
        <div>
          {category.title === "article" ? (
            <h3 className="pt-1 pb-1 pl-4 pr-4 mr-2 font-bold rounded font-roboto text-neutral bg-base-content">
              {category.title}
            </h3>
          ) : (
            <h3 className="pt-1 pb-1 pl-4 pr-4 mr-2 font-bold rounded font-roboto text-success bg-base-100">
              {category.title}
            </h3>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Project;
