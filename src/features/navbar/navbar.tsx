import { SearchField } from '~/shared/ui/searchField/searchField';

import { Menu } from './menu/Menu';
// import { useState } from 'react';
import { MenuButton } from './menu/MenuButton';
import { Panel } from './panel/panel';

export const Navbar = ({
  isOpen,
  toggleMenu
}: {
  isOpen: boolean;
  toggleMenu: () => void;
}) => {
  // const [menuOpen, setMenuOpen] = useState(false);
  // const toggleMenu = () => {
  //     setMenuOpen((hasBeenOpened) => !hasBeenOpened)
  // }
  return (
    <div
      style={{
        display: 'flex',
        // width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '104px'
      }}
    >
      <div>
        <h1 style={{ fontSize: '40px' }}>BOOKSTORE</h1>
      </div>
      <SearchField />
      <Panel />
      <Menu
        isOpen={isOpen}
        toggleMenu={toggleMenu}
      />
      <MenuButton
        isOpen={isOpen}
        toggleMenu={toggleMenu}
      />
    </div>
  );
};
