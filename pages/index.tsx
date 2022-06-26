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
    <div className="max-w-7xl mx-auto border border-yellow-200">
      <Head>
        <title>angelo@longoria</title>
        <meta
          name="description"
          content="Angelo Longoria personal website and blog"
        />
        <link rel="icon" href="/sword-in-stone.png" />
      </Head>

      {/* Left content section */}
      <div className="flex justify-between">
        <div className="max-w-lg items-center p-4 justify-center border border-red-400 flex flex-col">
          <p>Left Content Section</p>
        </div>

        {/* Right content section */}
        <div>
          <div className="w-full flex flex-col justify-start border border-green-700 prose ">
            <h1>Social</h1>
            <ul className="list-none flex flex-col justify-start items-center p-0 text-left border border-yellow-200">
              <li>
                <h3>Github</h3>
              </li>
              <li>
                <h3>LinkedIn</h3>
              </li>
              <li>
                <h3>Twitter</h3>
              </li>
            </ul>
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
