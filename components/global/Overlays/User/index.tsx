import React from 'react';
import { Text } from '@components/DataDisplay/Text';
import { UserOutlined } from '@components/Icon/UserOutlined';
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
      <UserOutlined colorScheme='white' size={24} />
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
