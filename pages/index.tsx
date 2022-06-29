import Head from "next/head";
import Hero from "../components/Hero";
import Project from "../components/Project";
import { getClient } from "../lib/sanity.server";
import { Projects } from "../typings";
import Link from "next/link";

export const getServerSideProps = async () => {
  const allProjectQuery = `*[_type == 'post']{
    _id,
   title,
   stack,
   slug,
   description,
   link } `;
  const projects = await getClient(false).fetch(allProjectQuery);
  return { props: { projects } };
};

interface Props {
  projects: Projects[];
}
const Home = ({ projects }: Props) => {
  return (
    <div className="max-w-3xl lg:max-w-5xl mx-auto">
      <Head>
        <title>angelo@longoria</title>
        <meta
          name="description"
          content="Angelo Longoria personal website and blog"
        />
        <link rel="icon" href="/sword-in-stone.png" />
      </Head>
      {/* Hero Section */}
      <Hero />
      {/* Recent Post Divider */}
      <div className="divider"></div>
      <h1 className="text-accent font-raleway font-bold">RECENT POST</h1>
      {/* Left content section */}
      <div className="flex w-full mx-auto justify-between md:flex-row flex-col">
        <div className="mt-10 w-full mx-auto items-center justify-center  border border-red-400 border-opacity-10 flex flex-col space-y-8">
          {projects.map((project) => (
            <Project key={project._id} {...project} />
          ))}
        </div>
      </div>
      {/* End of Post Section */}
      <div className="divider"></div>
    </div>
  );
};

export default Home;
