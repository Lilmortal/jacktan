import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import fs from "fs";
import path from "path";
import getConfig from "next/config";
import ReactMarkdown from "react-markdown";
import PageBody from "../../components/PageBody";
import Navigation from "../../components/Navigation";

const { serverRuntimeConfig } = getConfig();

interface PostProps {
  post: string;
}

const Post: React.FC<PostProps> = ({ post }) => (
  <PageBody>
    <Navigation
      links={[
        { href: "/", text: "Works" },
        { href: "/blog", text: "Blog" },
      ]}
    />
    <ReactMarkdown>{post}</ReactMarkdown>
  </PageBody>
);

const getMdFileName = (fileName: string) =>
  fileName.substring(0, fileName.indexOf(".md"));

export const getStaticPaths: GetStaticPaths = async () => {
  const fileNames = await fs.promises.readdir(
    path.join(serverRuntimeConfig.PROJECT_ROOT, "contents/posts")
  );

  const paths = fileNames.map((fileName) => ({
    params: {
      post: getMdFileName(fileName),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

interface Params extends ParsedUrlQuery {
  post: string;
}

export const getStaticProps: GetStaticProps<PostProps, Params> = async ({
  params,
}) => {
  const { post } = params as Params;

  const content = await import(`../../contents/posts/${post}.md`);

  return { props: { post: content.default } };
};

export default Post;
