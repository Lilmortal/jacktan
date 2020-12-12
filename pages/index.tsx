import React from "react";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import PageBody from "../components/PageBody";

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

const PortfolioPage: React.FC<Record<string, never>> = () => {
  return (
    <PageBody direction="column">
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
        <Card>
          <CardContent>
            <H2>Air New Zealand</H2>
            <H3>Star Alliance Redemption</H3>
            <Paragraph>
              <ul>
                <List>
                  Built from the ground up using React and Typescript.
                </List>
                <List>
                  Closely involved with UX whilst developing the UI layout for
                  the search for flight page, select flight page, and the
                  confirmation page while adhering to the design standards.
                </List>
                <List>
                  Worked with back end developers to decide the API format.
                </List>
                <List>
                  Worked with automated testers on writing automated tests.
                </List>
                <List>
                  Able to deliver the project on-time on a strict hard deadline.
                </List>
              </ul>
            </Paragraph>
            <H3>Inflight Wifi Payment</H3>
            <Paragraph>
              <ul>
                <List>
                  Built from the ground up using React and Typescript.
                </List>
                <List>
                  Worked closely with third party designers and AirNZ designers
                  to follow a standard.
                </List>
                <List>Made sure that it is PCI Compliant.</List>
                <List>
                  Fixed performance issues and dealing with unreliable
                  connections.
                </List>
                <List>Worked closely with the team using the Scrum model.</List>
              </ul>
            </Paragraph>
            <H3>Baggage Transit Unit Kiosk</H3>
            <Paragraph>
              <ul>
                <List>
                  Refactored the codebase by removing unused code, added unit
                  and integration tests, and set up the file architecture.
                </List>
                <List>Built using React and Typescript.</List>
                <List>
                  Worked closely with UX to set up the design standards for
                  Kiosk.
                </List>
              </ul>
            </Paragraph>
            <H3>Unison Standard</H3>
            <Paragraph>
              <ul>
                <List>
                  An early contributor to Air New Zealand new React common
                  repositories, which is currently being used by multiple teams.
                </List>
              </ul>
            </Paragraph>
            <H3>ET-Navigator</H3>
            <Paragraph>
              <ul>
                <List>Built using React, React-Router, and Redux.</List>
                <List>
                  Developed a REST wrapper around the current SOAP services
                  using Java and the SpringBoot framework.
                </List>
                <List>
                  Worked closely with project managers and business analysts
                  around a vague requirement.
                </List>
              </ul>
            </Paragraph>
            <H3>Flight Booking/Post Booking</H3>
            <Paragraph>
              <ul>
                <List>
                  Maintained the current booking website which is primarily
                  designed in Knockout, Mootools, and JSP on the front end, and
                  Stripes as the Java framework on the back-end.
                </List>
                <List>
                  Worked closely with the team using the Kanban model.
                </List>
                <List>
                  Developed several React components by wrapping them inside
                  Knockout.
                </List>
              </ul>
            </Paragraph>
            <H3>Recommendation Project</H3>
            <Paragraph>
              <ul>
                <List>
                  Built using Java and Apache Wicket as the framework, with
                  Jetty as the web server. Hosted on premise.
                </List>
              </ul>
            </Paragraph>
            <H3>Air Forms</H3>
            <Paragraph>
              <ul>
                <List>
                  Built using ASP.NET MVC4 and Bootstrap, and IIS as the web
                  server. Hosted on premise.
                </List>
              </ul>
            </Paragraph>
            <Paragraph>
              <ul>
                <List>
                  Mentored graduates around the Javascript ecosystem. Introduced
                  them to our design system, and code review their pull
                  requests.
                </List>
                <List>
                  Actively contributed to the front-end development guild by
                  highlighting the latest updates on the Javascript/React
                  ecosystem.
                </List>
                <List>
                  Developed and maintained several SQL Reports and Stored
                  Procedures to various departments using SQL Server Reporting
                  Services.
                </List>
              </ul>
            </Paragraph>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <H2>Food Budget</H2>
            <Paragraph>
              Developed the website using Next.js, React, Typescript, Node,
              Prisma ORM, Apollo Client, Apollo Server, Terraform, GraphQL
            </Paragraph>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <H2>Youngi Kim</H2>
            <Paragraph>
              Website I made for my friend. Developed using Next.js, Typescript,
              React, with Strapi as the headless CMS.
            </Paragraph>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <H2>BKA</H2>
            <Paragraph>
              Maintain several websites like the Kauri Dieback, which were made
              in ASP.NET MVC4, using Umbraco as our CMS.
            </Paragraph>
          </CardContent>
        </Card>
      </CardContainer>
    </PageBody>
  );
};

export default PortfolioPage;
