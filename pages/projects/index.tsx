import React from "react";
import { getClient } from "../../lib/sanity.server";
import { Projects } from "../../typings";
import Link from "next/link";
import Project from "../../components/Project";
import ReactPaginate from "react-paginate";
import { useState } from "react";

export const getServerSideProps = async () => {
  const allProjectQuery = `*["project" in category[]->title]| order(publishedAt desc){
    _id,
   title,
   stack,
   slug,
   description,
   publishedAt,
   category[0]->{title},
   body,
   link } `;
  const projects = await getClient(false).fetch(allProjectQuery);
  return { props: { projects } };
};

interface Props {
  projects: Projects[];
}

const Posts = ({ projects }: Props) => {
  const [currentItems, setCurrentItems] = useState(projects);
  const [pageNumber, setPageNumber] = useState(0);

  const postPerPage = 5;
  const pagesVisited = pageNumber * postPerPage;

  const displayPosts = currentItems
    .slice(pagesVisited, pagesVisited + postPerPage)
    .map((project) => {
      return <Project key={project._id} {...project} />;
    });

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="max-w-3xl flex flex-col min-h-screen lg:max-w-5xl bg-base-300 mx-auto">
      <h1 className="text-warning opacity-80 text-xl p-4 text-center bg-base-300 font-raleway font-bold">
        ALL POST
      </h1>
      <div className="mt-6 h-full w-full mx-auto items-center justify-start flex flex-col space-y-8">
        {displayPosts}
      </div>
      <div className="divider"></div>
      <ReactPaginate
        pageCount={Math.ceil(projects.length / postPerPage)}
        pageRangeDisplayed={1}
        onPageChange={changePage}
        containerClassName={
          pageNumber === 0
            ? " w-full flex justify-center"
            : pageNumber === Math.ceil(projects.length / postPerPage) - 1
            ? "w-full flex justify-center"
            : "w-full flex justify-between"
        }
        activeClassName="btn btn-md hidden btn-active"
        pageClassName="btn hidden btn-md"
        previousClassName={
          pageNumber === 0 ? "btn btn-md hidden" : "btn btn-primary"
        }
        nextClassName={
          pageNumber < Math.ceil(projects.length / postPerPage) - 1
            ? "btn btn-primary"
            : "hidden"
        }
      />

      <div className="mt-4"></div>
    </div>
  );
};
export default Posts;
