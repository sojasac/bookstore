import { ReactComponent as VectorSearch } from '~/assets/icons/search.svg';

import SearchFieldStyle from './searchField.module.scss';
import { Button } from '../button/button';
import { InputField } from '../inputField/inputField';

export const SearchField = ({
  shouldFitContainer
}: {
  shouldFitContainer?: boolean;
}) => {
  return (
    <div
      className={SearchFieldStyle.container}
      style={{ width: shouldFitContainer ? '100%' : '50%' }}
    >
      <InputField
        placeholder="Search"
        type="search"
        shouldFitContainer
      />
      <Button
        apperance="panel"
        icon={<VectorSearch />}
      />
    </div>
  );
};
