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
        className="flex group bg-base-300 flex-row rounded hover:cursor-pointer  justify-between space-y-4   w-full "
      >
        <div className="flex flex-col bg-base-300 space-y-4">
          <div>
            <h3 className="text-neutral-content font-roboto font-light opacity-60">
              {str}
            </h3>
          </div>
          <h2 className="text-3xl font-raleway font-bold group-hover:text-accent">
            {title}
          </h2>
          <h4 className="font-roboto text-lg">{description}</h4>
          <div className="flex flex-row items-center">
            <h3 className="font-bold font-raleway text-md">Read More</h3>
            <IoMdArrowRoundForward
              size={19}
              className="text-accent  hidden group-hover:inline  transition duration-0 hover:duration-150"
            />
          </div>
        </div>
        <div>
          {category.title === "article" ? (
            <h3 className="font-roboto text-neutral font-bold pr-4 pt-1 mr-2 pb-1 pl-4 bg-base-content rounded">
              {category.title}
            </h3>
          ) : (
            <h3 className="font-roboto text-success font-bold pr-4 pt-1 mr-2 pb-1 pl-4 bg-base-100 rounded">
              {category.title}
            </h3>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Project;
