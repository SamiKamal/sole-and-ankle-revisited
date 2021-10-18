import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, QUEREIS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
        <OnMobile>
          <IconWrapper>
            <Icon id="shopping-bag"/>
            <VisuallyHidden>Shopping cart</VisuallyHidden>
          </IconWrapper>
          <IconWrapper>
            <Icon id="search"/>
            <VisuallyHidden>Search for items</VisuallyHidden>
          </IconWrapper>
          <IconWrapper onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu"/>
            <VisuallyHidden>Navigation menu</VisuallyHidden>
          </IconWrapper>
          </OnMobile>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);
  z-index: -1;
  overflow-x: auto;
  height: auto;
  
  @media ${QUEREIS.tabletAndDown}{
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUEREIS.phoneAndDown}{
    padding: 18px 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(
    1rem,
    4.1vw - 1.75rem,
    3rem
  );
  margin: 0px 48px;

  @media ${QUEREIS.tabletAndDown}{
    margin-left: auto;
    justify-content: space-between;
    margin-right: 0;
  }

`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--font-weight-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }

  @media ${QUEREIS.tabletAndDown}{
    display: none;
  }

`;

const OnMobile = styled.div`
  display: none;

  @media ${QUEREIS.tabletAndDown}{
    display: flex;
    margin-left: auto;
  }
`

const IconWrapper = styled.button`
  border: none;
  background: none;

  &:not(:last-child){
    margin-right: 16px;
  }

`

export default Header;
