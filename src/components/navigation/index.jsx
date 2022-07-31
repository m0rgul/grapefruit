import React from 'react';
import HamburgerMenu from './hamburgerMenu';
import UserMenu from './userMenu';
import logoImg from '../../assets/img/logo.png';

const MainNavigation = () => {
  return (
    <div className="mainNavContainer">
      <HamburgerMenu />
      <a href="/">
        <img src={logoImg} alt="logo" />
      </a>
      <UserMenu />
    </div>
  );
};

export default MainNavigation;
