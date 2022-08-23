import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <NavbarWrapper>
      <Nav>
        <Title>TITLE</Title>
        <LinkWrapper>
          <Link href="/about">
            <a>ABOUT US</a>
          </Link>
          <Link href="/portfolio">
            <a>PORTFOLIO</a>
          </Link>

          <Link href="/contact">
            <a>CONTACT</a>
          </Link>
        </LinkWrapper>
      </Nav>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.div`
  width: 100%;
  background-color: gray;
  padding: 10px;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: white;
`;

const LinkWrapper = styled.div`
  display: flex;
  gap: 32px;
  font-size: 1.5rem;
  color: white;
`;

export default Navbar;
