import React from 'react';
import { Text } from '@components/DataDisplay/Text';
import { User as UserIcon } from '@components/Icon/User';
import { useAuthMethods } from '@contexts/Auth/hooks';
import { useOutsideClick } from '@hooks/useOutsideClick';
import { UserButton, MenuBox, Option } from './styled';

type UserProps = {
  username: string;
};

export const User = ({ username }: UserProps): JSX.Element => {
  const { logOut } = useAuthMethods();
  const [showMenu, setShowMenu] = React.useState(false);
  const { ref } = useOutsideClick({ onOutsideClick: () => setShowMenu(false) });

  const handleClick = () => setShowMenu(!showMenu);

  return (
    <UserButton onClick={handleClick} ref={ref}>
      <UserIcon color='#fff' xl />
      {showMenu && (
        <MenuBox>
          <Option>
            <Text size='sm' colorScheme='secondary'>
              {username}
            </Text>
          </Option>
          <Option onClick={logOut}>
            <Text size='sm' colorScheme='secondary'>
              Cerrar sesion
            </Text>
          </Option>
        </MenuBox>
      )}
    </UserButton>
  );
};
