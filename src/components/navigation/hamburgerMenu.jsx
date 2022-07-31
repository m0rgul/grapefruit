import React, { useState } from 'react';

const HamburgerMenu = () => {
  const [isMainMenuDisplayed, setIsMainMenuDisplayed] = useState(false);

  return (
    <>
      <button
        className={`hamburgerMenuButton ${isMainMenuDisplayed ? 'hidden' : ''}`}
        onClick={() => setIsMainMenuDisplayed(!isMainMenuDisplayed)}
      >
        <span className="hamburgerMenuLine" />
        <span className="hamburgerMenuLine" />
        <span className="hamburgerMenuLine" />
      </button>

      <nav
        className={`mainNavBar ${isMainMenuDisplayed ? 'show' : 'hide'}`}
        onClick={() => setIsMainMenuDisplayed(false)}
      >
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
};

export default HamburgerMenu;
