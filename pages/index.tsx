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
  return (
    <div className="max-w-5xl mx-auto ">
      <Head>
        <title>angelo@longoria</title>
        <meta
          name="description"
          content="Angelo Longoria personal website and blog"
        />
        <link rel="icon" href="/sword-in-stone.png" />
      </Head>

      {/* Left content section */}
      <div className="flex w-full mx-auto justify-between md:flex-row flex-col">
        <div className="md:max-w-xl2 w-full mx-auto items-center p-4 justify-center  border border-red-400 flex flex-col">
          <p>Left Content Section</p>
        </div>

        {/* Right content section */}
        <div className="hidden lg:flex flex-col w-full md:max-w-sm  md:order-2">
          <div className="w-full border border-purple-300">
            <div className="flex flex-row items-center justify-around w-full p-0 border border-yellow-800">
              <h3 className="text-accent hidden md:visible normal-case text-xl font-bold">
                SOCIAL
              </h3>
              <h3>Github</h3>
              <h3>LinkedIn</h3>
              <h3>Twitter</h3>
            </div>
          </div>
          {/* <div className="max-w-2xl w-full flex flex-col items-center  space-y-12 border border-green-300">
            {projects.map((project) => (
              <Project {...project} />
            ))}
          </div> */}
        </div>
        {/* End of Right */}
      </div>
    </div>
  );
};

export default Home;
