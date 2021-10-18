/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES, COLORS, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <DarkWrapper isOpen={isOpen} onDismiss={onDismiss}>
     <Wrapper>
        <UnstyledButton onClick={onDismiss}>
          <Icon id="close"/>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </UnstyledButton>
        <Nav>
          <MobileNavLink href="/sale">Sale</MobileNavLink>
          <MobileNavLink href="/new">New&nbsp;Releases</MobileNavLink>
          <MobileNavLink href="/men">Men</MobileNavLink>
          <MobileNavLink href="/women">Women</MobileNavLink>
          <MobileNavLink href="/kids">Kids</MobileNavLink>
          <MobileNavLink href="/collections">Collections</MobileNavLink>
        </Nav>
        <Footer>
          <MobileFooterLink href="/terms">Terms and Conditions</MobileFooterLink>
          <MobileFooterLink href="/privacy">Privacy Policy</MobileFooterLink>
          <MobileFooterLink href="/contact">Contact Us</MobileFooterLink>
        </Footer>
      </Wrapper>
    </DarkWrapper>
  );
};


const DarkWrapper = styled(DialogOverlay)`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);

`

const Wrapper = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 60%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  padding: 22px 22px 32px 32px;
  background-color: white;

  button{
    align-self: flex-end; 
  }
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  
`
const Footer = styled.footer`
  display: flex;
  flex-direction: column;
`

const MobileNavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color:var(--color-gray-900);
  font-weight: var(--font-weight-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
  margin-bottom: 22px;
`

const MobileFooterLink = styled.a`
  color: var(--color-gray-700);
  text-decoration: none;
  
  &:not(:last-child){
    margin-bottom: 14px;
  }
`


export default MobileMenu;
