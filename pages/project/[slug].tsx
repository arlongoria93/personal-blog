import React from "react";
import { GetStaticProps } from "next";
import { getClient } from "../../lib/sanity.server";
import { Projects } from "../../typings";
import PortableText from "react-portable-text";
import { FaGlobeAmericas, FaGithub } from "react-icons/fa";
interface Props {
  post: Projects;
}
const Projects = ({ post }: Props) => {
  return (
    <div className="max-w-3xl flex flex-col min-h-screen lg:max-w-5xl bg-base-300 mx-auto">
      <div className="divider"></div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-warning opacity-80 text-3xl bg-base-300 font-raleway font-bold">
          {post.title}
        </h1>

        <div className="flex flex-row items-center space-x-4 justify-center w-full">
          {post.stack && (
            <h3 className="font-raleway font-bold text-lg">Tech Used:</h3>
          )}
          {post.stack?.map((stack) => (
            <h1 className="font-roboto font-normal">{stack}</h1>
          ))}
        </div>
        {post.github && post.deployed ? (
          <div className="flex flex-row p-4">
            <a target="_blank" href={post.github}>
              <div className="btn btn-ghost">
                <FaGithub size={20} />
              </div>
            </a>

            <a target="_blank" href={post.deployed}>
              <div className="btn btn-ghost">
                <FaGlobeAmericas size={20} />
              </div>
            </a>
          </div>
        ) : (
          ""
        )}
        <div className="max-w-3xl p-4 lg:max-w-4xl mt-8">
          {post.body && (
            <PortableText
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
              content={post.body}
              serializers={{
                h1: (props: any) => (
                  <h1 className="font-raleway font-bold text-lg">
                    {props.children}
                  </h1>
                ),
                p: (props: any) => (
                  <p className="font-bold font-roboto ">{props.children}</p>
                ),
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
export const getStaticPaths = async () => {
  const query = `*[_type == "post"]{
        _id,
        slug{
            current
        }
    }`;
  const posts = await getClient(false).fetch(query);
  const paths = posts.map((post: Projects) => ({
    params: {
      slug: post.slug.current,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type=='post' && slug.current == $slug][0]{
        _id,
        title,
        body,
        stack,
        github,
        deployed
       }`;

  const post = await getClient(false).fetch(query, {
    slug: params?.slug,
  });

  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};
