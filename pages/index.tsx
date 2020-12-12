import { GetStaticProps } from "next";
import React from "react";
import styled from "styled-components";
import { v4 } from "uuid";
import readFile from "../utils/readFile";
import Page from "../templates/Page";

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
    {name && <h3>{name}</h3>}
    <ul>
      {descriptions.map((description) => (
        <List key={v4()}>{description}</List>
      ))}
    </ul>
  </>
);

const PortfolioPage: React.FC<PortfolioPageProps> = ({ portfolios }) => {
  return (
    <Page>
      <Banner>
        <h1>Hello. My name is Jack Tan.</h1>
        <p>
          Full stack developer with a strong focus in Front end. Experienced
          with Javascript (React, Redux), Node, and Java.
        </p>
        <p>Looking to join a team that does interesting projects.</p>
      </Banner>
      <CardContainer>
        <h2>Projects</h2>
        {portfolios.map((portfolio) => (
          <Card key={portfolio.name}>
            <CardContent>
              <h2>{portfolio.name}</h2>
              {portfolio.projects.map((project) => (
                <React.Fragment key={v4()}>
                  <Project {...project} />
                </React.Fragment>
              ))}
            </CardContent>
          </Card>
        ))}
      </CardContainer>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const portfolios = await readFile("/contents/portfolio.json");

  return {
    props: { portfolios: JSON.parse(portfolios) },
  };
};

export default PortfolioPage;
