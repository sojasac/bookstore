import { ReactComponent as VectorBurger } from '~/assets/icons/burger.svg';
import { Button } from '~/shared/ui/button/button';

import MenuButtonStyles from './MenuButtonStyle.module.scss';

export const MenuButton = ({
  isOpen,
  toggleMenu
}: {
  isOpen: boolean;
  toggleMenu: () => void;
}) => {
  return (
    <div className={MenuButtonStyles.container}>
      <Button
        style={{ display: isOpen ? 'none' : 'block' }}
        apperance="panel"
        icon={<VectorBurger />}
        onClick={toggleMenu}
      />
    </div>
  );
};
