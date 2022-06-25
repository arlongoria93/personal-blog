import React from "react";
import { Projects } from "../typings";

type project = Projects;

const Project = ({ _id, title, description, stack, link }: project) => {
  return (
    <div
      key={_id}
      className="flex flex-col items-center w-full border p-2 rounded-md border-purple-300"
    >
      <h1>{title}</h1>
    </div>
  );
};

export default Project;
