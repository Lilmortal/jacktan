import { GetStaticProps } from "next";
import React from "react";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import PageBody from "../components/PageBody";
import fs from "fs";
import path from "path";
import getConfig from "next/config";
import { v4 } from "uuid";

const { serverRuntimeConfig } = getConfig();

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 1rem 0;
  background-image: linear-gradient(to right, transparent, white),
    url("./airnz-headquarters.jpg");
  background-repeat: no-repeat;
  background-size: 50% 100%;
`;

const CardContent = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  margin: 1rem 1rem 1rem 40%;
  background-color: rgba(255, 255, 255, 0.7);

  & > p {
    padding: 1rem;
  }
`;

const Banner = styled.div`
  padding: 3rem 0 3rem calc(50%);
`;

const H1 = styled.h1`
  font-size: 4rem;
`;

const H2 = styled.h2``;

const H3 = styled.h3``;

const Paragraph = styled.p``;

const List = styled.li`
  list-style-type: none;

  &:before {
    content: "▹";
    padding-right: 1rem;
  }
`;

interface ProjectProps {
  name?: string;
  descriptions: string[];
}

interface PortfolioProps {
  name: string;
  projects: ProjectProps[];
}

interface PortfolioPageProps {
  portfolios: PortfolioProps[];
}

const Project: React.FC<ProjectProps> = ({ name, descriptions }) => (
  <>
    {name && <H3>{name}</H3>}
    <ul>
      {descriptions.map((description) => (
        <List key={v4()}>{description}</List>
      ))}
    </ul>
  </>
);

const PortfolioPage: React.FC<PortfolioPageProps> = ({ portfolios }) => {
  return (
    <PageBody>
      <Navigation
        links={[
          { href: "/", text: "Works" },
          { href: "/blog", text: "Blog" },
        ]}
      />
      <Banner>
        <H1>Hello. My name is Jack Tan.</H1>
        <Paragraph>
          Full stack developer with a strong focus in Front end. Experienced
          with Javascript (React, Redux), Node, and Java.
        </Paragraph>
        <Paragraph>
          Looking to join a team that does interesting projects.
        </Paragraph>
      </Banner>
      <CardContainer>
        <H2>Projects</H2>
        {portfolios.map((portfolio) => (
          <Card key={portfolio.name}>
            <CardContent>
              <H2>{portfolio.name}</H2>
              {portfolio.projects.map((project) => (
                <React.Fragment key={v4()}>
                  <Project {...project} />
                </React.Fragment>
              ))}
            </CardContent>
          </Card>
        ))}
      </CardContainer>
    </PageBody>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const portfolios = fs
    .readFileSync(
      path.join(serverRuntimeConfig.PROJECT_ROOT, "/contents/portfolio.json")
    )
    .toString();

  return {
    props: { portfolios: JSON.parse(portfolios) },
  };
};

export default PortfolioPage;
