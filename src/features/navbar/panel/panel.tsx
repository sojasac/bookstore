import { ReactComponent as VectorCart } from '~/assets/icons/cart.svg';
import { ReactComponent as VectorHeart } from '~/assets/icons/heart.svg';
import { ReactComponent as VectorUser } from '~/assets/icons/user.svg';
import { Button } from '~/shared/ui/button/button';

import PanelStyle from './panel.module.scss';
export const Panel = () => {
  return (
    <div className={PanelStyle.container}>
      <Button
        apperance="panel"
        icon={<VectorHeart />}
      />
      <Button
        apperance="panel"
        icon={<VectorCart />}
      />
      <Button
        apperance="panel"
        icon={<VectorUser />}
      />
    </div>
  );
};
