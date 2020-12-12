import styled from "styled-components";
import Link from "next/link";

export interface LinkProps {
  href: string;
  text: string;
}

export interface NavigationProps {
  links: LinkProps[];
}

const NavigationStyle = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: flex-end;
`;

const Nav = styled.div`
  padding: 0 1rem;
`;

const NavLink = styled.a`
  color: var(--text-color);
  cursor: pointer;
`;

const Navigation: React.FC<NavigationProps> = ({ links }) => (
  <NavigationStyle>
    {links.map((link) => (
      <Nav key={link.href}>
        <Link href={link.href}>
          <NavLink>{link.text}</NavLink>
        </Link>
      </Nav>
    ))}
  </NavigationStyle>
);

export default Navigation;
