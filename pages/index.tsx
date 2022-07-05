import Head from "next/head";
import Hero from "../components/Hero";
import Project from "../components/Project";
import { getClient } from "../lib/sanity.server";
import { Projects } from "../typings";
import Link from "next/link";

import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

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

      {/* Recent Post Divider */}
      <div className="divider lg:divider-horizontal bg-base-300"> </div>

      {/* Left content section */}
      <div className="flex w-full mx-auto justify-between lg:flex-row flex-col">
        <div className="mt-6 h-full w-full mx-auto lg:max-w-3xl items-center justify-start flex flex-col space-y-8">
          <Hero />
          <h1 className="text-warning opacity-80 text-lg bg-base-300 font-raleway font-bold">
            RECENTLY PUBLISHED
          </h1>
          {projects.map((project) => (
            <Project key={project._id} {...project} />
          ))}
        </div>
        <div className="hidden lg:inline-flex p-2  w-1/4    flex-col">
          <div className="flex h-full p-4 text-warning opacity-90 flex-col font-raleway font-bold  space-y-8 text-xl">
            <div>
              <h1>FEATURED TOPICS</h1>
              <div className="flex flex-col mt-4 space-y-4">
                <div className="flex flex-col  items-start text-lg w-full justify-start space-y-4">
                  <h3 className="font-roboto text-neutral hover:cursor-pointer  font-bold pr-4 pt-1 mr-2 pb-1 pl-4 bg-base-content rounded">
                    article
                  </h3>
                  <h3 className="font-roboto hover:cursor-pointer text-success font-bold pr-4 pt-1 mr-2 pb-1 pl-4 bg-base-100 rounded">
                    project
                  </h3>
                </div>
              </div>
            </div>
            <div>
              <h1>SOCIAL</h1>
              <div className="flex mt-4 flex-col space-y-4">
                <div className="flex flex-row items-center w-full justify-start space-x-4">
                  <BsGithub size={33} style={{ color: "white" }} />
                  <a
                    className="text-base-content text-lg"
                    target="_blank"
                    href="https://github.com/arlongoria93"
                  >
                    Github
                  </a>
                </div>
                <div className="flex flex-row items-center w-full justify-start space-x-4">
                  <BsLinkedin size={33} style={{ color: "#0077bf" }} />{" "}
                  <a
                    className="text-base-content text-lg"
                    target="_blank"
                    href="https://www.linkedin.com/in/angelo-longoria/"
                  >
                    LinkedIn
                  </a>
                </div>
                <div className="flex flex-row items-center w-full justify-start space-x-4">
                  <BsTwitter style={{ color: "#1DA1F2" }} size={33} />
                  <a
                    className="text-base-content text-lg"
                    target="_blank"
                    href="https://twitter.com/angelo_longoria"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
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
