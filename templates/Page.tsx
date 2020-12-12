import Navigation from "../components/Navigation";
import PageBody from "../components/PageBody";

export interface PageProps {
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => (
  <PageBody>
    <Navigation
      links={[
        { href: "/", text: "Works" },
        { href: "/blog", text: "Blog" },
      ]}
    />
    {children}
  </PageBody>
);

export default Page;
