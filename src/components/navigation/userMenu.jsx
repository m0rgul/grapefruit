import React from 'react';
import profilePic from '../../assets/img/IM.jpg';
import searchIcon from '../../assets/img/search.png';
import bookmarksIcon from '../../assets/img/bookmarks.png';

const Search = () => (
  <div className="searchMenu">
    <button className="navIconBtn">
      <img src={searchIcon} alt="search" />
    </button>
  </div>
);

const User = () => (
  <div className="userMenu">
    <button className="navIconBtn">
      <img src={profilePic} alt="John Doe" />
    </button>
  </div>
);

const Bookmarks = () => (
  <div className="bookmarksMenu">
    <button className="navIconBtn">
      <img src={bookmarksIcon} alt="bookmarks" />
    </button>
  </div>
);

const UserMenu = () => {
  return (
    <div className="userMenuContainer">
      <Search />
      <User />
      <Bookmarks />
    </div>
  );
};

export default UserMenu;
