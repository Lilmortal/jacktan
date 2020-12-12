import styled from "styled-components";

const PageBodyStyle = styled.div<PageBodyProps>`
  display: flex;
  min-height: 100vh;
  flex-direction: ${(props) => props.direction};
  width: 70%;
  margin: 0 auto;
`;

export interface PageBodyProps {
  direction?: "row" | "column";
}

const PageBody: React.FC<PageBodyProps> = ({ direction = "row", children }) => (
  <PageBodyStyle direction={direction}>{children}</PageBodyStyle>
);

export default PageBody;
