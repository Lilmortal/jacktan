import styled from "styled-components";
import Navigation from "../components/Navigation";
import PageBody from "../components/PageBody";

const BlogContainer = styled.div`
  display: flex;
  flex-grow: 1;
`;

const Blog = styled.div`
  display: flex;
`;

const BlogPage: React.FC<Record<string, never>> = () => {
  return (
    <PageBody>
      <Navigation
        links={[
          { href: "/", text: "Works" },
          { href: "/blog", text: "Blog" },
        ]}
      />
      <BlogContainer>
        <Blog></Blog>
      </BlogContainer>
    </PageBody>
  );
};

export default BlogPage;
