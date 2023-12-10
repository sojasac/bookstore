import classNames from 'classnames';

import { ReactComponent as VectorCancel } from '~/assets/icons/cancel.svg';
import { Button } from '~/shared/ui/button/button';
import { SearchField } from '~/shared/ui/searchField/searchField';

import { MenuSchema } from './Menu.schema';
import MenuStyles from './MenuStyle.module.scss';
// import { NavLink } from 'react-router-dom';

export const Menu = ({
  isOpen,
  toggleMenu
}: {
  isOpen: boolean;
  toggleMenu: () => void;
}) => {
  return (
    <div
      className={classNames({
        [MenuStyles.menu]: true,
        [MenuStyles.active]: isOpen
      })}
    >
      <div className={MenuStyles.container}>
        <div className={MenuStyles.header}>
          <h2>BOOKSTORE</h2>
          <Button
            apperance="panel"
            onClick={toggleMenu}
            icon={<VectorCancel />}
          />
        </div>
        <div className={MenuStyles.content}>
          <SearchField shouldFitContainer />
          {MenuSchema.map((link) => (
            <h2 key={link.path}>
              <a href={link.path}>{link.name.toUpperCase()}</a>
            </h2>
          ))}
        </div>
      </div>
    </div>
  );
};
