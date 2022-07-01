import React from "react";
import { GetStaticProps } from "next";
import { getClient } from "../../lib/sanity.server";
import { Projects } from "../../typings";
interface Props {
  post: Projects;
}
const Projects = ({ post }: Props) => {
  console.log(post);
  return (
    <div className="max-w-3xl flex flex-col min-h-screen lg:max-w-5xl bg-base-300 mx-auto">
      <div className="divider"></div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-warning opacity-80 text-3xl bg-base-300 font-raleway font-bold">
          {post.title}
        </h1>

        <div className="flex justify-center w-full">
          <h3>
            Tech Used:
            <span className="flex">
              {post.stack?.map((stack) => (
                <h1>{stack}</h1>
              ))}
            </span>
          </h3>
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
  const paths = posts.map((post: project) => ({
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
