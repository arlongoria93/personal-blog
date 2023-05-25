import React from "react";
import { GetStaticProps } from "next";
import { getClient } from "../../lib/sanity.server";
import { Projects } from "../../typings";
import PortableText from "react-portable-text";
import { FaGlobeAmericas, FaGithub } from "react-icons/fa";
import { urlFor } from "../../lib/sanity";

interface Props {
  post: Projects;
}
const Projects = ({ post }: Props) => {
  return (
    <div className="flex flex-col max-w-3xl min-h-screen mx-auto lg:max-w-5xl bg-base-300">
      <div className="divider"></div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-warning opacity-80 bg-base-300 font-raleway">
          {post.title}
        </h1>

        <div className="flex flex-row items-center justify-center w-full space-x-4">
          {post.stack && (
            <h3 className="text-lg font-bold font-raleway">Tech Used:</h3>
          )}
          {post.stack?.map((stack, i) => (
            <h1 key={i} className="font-normal font-roboto">
              {stack}
            </h1>
          ))}
        </div>

        <div className="flex flex-row p-4">
          {post.github && (
            <a target="_blank" rel="noopener noreferrer" href={post.github}>
              <div className="btn btn-ghost">
                <FaGithub size={30} />
              </div>
            </a>
          )}
          {post.deployed && (
            <a target="_blank" rel="noopener noreferrer" href={post.deployed}>
              <div className="btn btn-ghost">
                <FaGlobeAmericas size={30} />
              </div>
            </a>
          )}
        </div>
        <div className="max-w-3xl p-4 mt-8 lg:max-w-4xl">
          {post.mainImage && (
            <img
              src={urlFor(post.mainImage).url()!}
              alt={post.title}
              className="rounded shadow-sm"
            />
          )}
          {post.body && (
            <PortableText
              className="flex flex-col gap-8 text-xl leading-relaxed font-roboto"
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
              content={post.body}
              serializers={{
                h1: (props: any) => (
                  <h1 className="hidden mb-12 text-3xl font-bold font-raleway">
                    {props.children}
                  </h1>
                ),
                p: (props: any) => (
                  <p className="text-2xl font-light font-roboto">
                    {props.children}
                  </p>
                ),

                normal: (props: any) => (
                  <p className="text-xl leading-relaxed font-roboto">
                    {props.children}
                  </p>
                ),
                link: (props: any) => (
                  <a href={props.href} target="_blank" rel="noreferrer ">
                    <span className="text-secondary">{props.children}</span>
                  </a>
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
        mainImage,
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
