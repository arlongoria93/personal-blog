import type { NextPage } from "next";
import Head from "next/head";
import Project from "../components/Project";
import { getClient } from "../lib/sanity.server";
import { Projects } from "../typings";

export const getServerSideProps = async () => {
  const allProjectQuery = `*[_type == 'project']{
    _id,
   title,
   stack,
   slug,
   description,
   link
        }
      `;
  const projects = await getClient(false).fetch(allProjectQuery);
  return {
    props: {
      projects,
    },
  };
};

interface Props {
  projects: Projects[];
}

const Home = ({ projects }: Props) => {
  console.log(projects);
  return (
    <div className="max-w-7xl mx-auto border border-yellow-200">
      <Head>
        <title>Angelo Longoria</title>
        <meta
          name="description"
          content="Angelo Longoria personal website and blog"
        />
        <link rel="icon" href="/sword-in-stone.png" />
      </Head>
      <div className="flex justify-between">
        <div className="max-w-lg items-center p-4 justify-center border border-red-400 flex flex-col">
          <p>Angelo Longoria</p>
        </div>
        <div className="max-w-2xl flex flex-col items-center  space-y-12 border border-green-300">
          {projects.map((project) => (
            <Project {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
