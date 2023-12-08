import './App.styles.css';
import { useState } from 'react';

import { Navbar } from './features/navbar/navbar';

export const App = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((hasBeenOpened) => !hasBeenOpened);
  };
  return (
    <>
      <div
        className={isMenuOpen ? 'modal active' : 'modal'}
        onClick={toggleMenu}
      ></div>
      <div className="container">
        <Navbar
          isOpen={isMenuOpen}
          toggleMenu={toggleMenu}
        />
      </div>
    </>
  );
};
