import Head from "next/head";
import Hero from "../components/Hero";
import Project from "../components/Project";
import { getClient } from "../lib/sanity.server";
import { Projects } from "../typings";
import Link from "next/link";

export const getServerSideProps = async () => {
  const allProjectQuery = `*[_type == 'post']| order(publishedAt desc)[0...5]{
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
const Home = ({ projects }: Props) => {
  console.log(projects);
  return (
    <div className="max-w-3xl flex flex-col min-h-screen lg:max-w-5xl bg-base-300 mx-auto">
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
      <div className="divider lg:divider-horizontal bg-base-300"> </div>
      <h1 className="text-warning opacity-80 text-lg bg-base-300 font-raleway font-bold">
        RECENTLY PUBLISHED
      </h1>
      {/* Left content section */}
      <div className="flex w-full mx-auto justify-between md:flex-row flex-col">
        <div className="mt-6 h-full w-full mx-auto items-center justify-start border border-red-400 border-opacity-10 flex flex-col space-y-8">
          {projects.map((project) => (
            <Project key={project._id} {...project} />
          ))}
        </div>
      </div>
      {/* End of Post Section */}
      <div className="divider"></div>
      <Link href="/posts">
        <button className="btn btn-primary mx-auto w-1/2">View All Post</button>
      </Link>
    </div>
  );
};

export default Home;
