import React from "react";
import { Projects } from "../typings";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoMdArrowRoundForward } from "react-icons/io";
import Link from "next/link";
type project = Projects;

const Project = ({ _id, title, description, slug, category }: project) => {
  return (
    <Link href={`/project/${slug.current}`}>
      <div
        key={_id}
        className="flex group flex-row rounded hover:cursor-pointer  justify-between space-y-4   w-full "
      >
        <div></div>
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-raleway font-bold group-hover:text-info ">
            {title}
          </h2>
          <h4 className="font-roboto text-lg">{description}</h4>
          <div className="flex flex-row items-center space-x-1 ">
            <h3 className="font-bold font-raleway text-md">Read More</h3>
            <IoMdArrowRoundForward
              size={19}
              className="text-info hidden group-hover:inline  transition duration-0 hover:duration-150"
            />
          </div>
        </div>
        <div>
          <h3 className="font-roboto text-neutral font-bold pr-4 pt-1 mr-2 pb-1 pl-4 bg-base-content rounded">
            {category.title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default Project;
