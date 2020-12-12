import React from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import styled from "styled-components";
import removeMarkdown from "remove-markdown";
import { v4 } from "uuid";
import readDir from "../utils/readDir";
import readFile from "../utils/readFile";
import Page from "../templates/Page";

const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Blog = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  padding: 3rem 1rem;
`;

const Anchor = styled.a`
  text-decoration: underline;
  cursor: pointer;
  color: lightblue;
`;

interface BlogProps {
  title: string;
  content: string;
  href: string;
}

interface BlogPageProps {
  blogs: BlogProps[];
}

const BlogPage: React.FC<BlogPageProps> = ({ blogs }) => {
  return (
    <Page>
      <BlogContainer>
        <Blog>
          {blogs.map((blog) => (
            <React.Fragment key={v4()}>
              <Link href={blog.href}>
                <h2>
                  <Anchor>{blog.title}</Anchor>
                </h2>
              </Link>
              {blog.content}
            </React.Fragment>
          ))}
        </Blog>
      </BlogContainer>
    </Page>
  );
};

export const getStaticProps: GetStaticProps<BlogPageProps> = async () => {
  const fileNames = await readDir("contents/posts");

  const blogs: BlogProps[] = await Promise.all(
    fileNames.map(async (fileName) => {
      const post = await readFile(`/contents/posts/${fileName}`);

      const title = removeMarkdown(
        post.substring(0, post.indexOf("\n"))
      ).trim();
      let content = removeMarkdown(post.substring(post.indexOf("\n")))
        .trim()
        .substring(0, 100);

      if (content.length > 100) {
        content += "...";
      }

      const href = `posts/${fileName.substring(0, fileName.indexOf(".md"))}`;
      return { title, content, href };
    })
  );

  return {
    props: {
      blogs,
    },
  };
};

export default BlogPage;
