import React from 'react';
import { Text } from '@components/DataDisplay/Text';
import { Avatar } from '@components/Media/Avatar';
import { useAuthMethods } from '@contexts/Auth/hooks';
import { useOutsideClick } from '@hooks/useOutsideClick';
import { UserButton, HeaderInfoBox, MenuBox, Option } from './styled';

type UserProps = {
  username: string;
};

export const AvatarDropdown = ({ username }: UserProps) => {
  const { logOut } = useAuthMethods();
  const [showMenu, setShowMenu] = React.useState(false);
  const { ref } = useOutsideClick({ onOutsideClick: () => setShowMenu(false) });
  const handleClick = () => setShowMenu(!showMenu);

  return (
    <UserButton onClick={handleClick} ref={ref}>
      <Avatar size={30}>{username}</Avatar>
      {showMenu && (
        <MenuBox>
          <HeaderInfoBox>
            <Avatar>{username}</Avatar>
            <Text colorScheme='white'>{username}</Text>
          </HeaderInfoBox>
          <ul>
            <Option onClick={logOut}>
              <Text size='sm' colorScheme='secondary'>
                Cerrar sesion
              </Text>
            </Option>
          </ul>
        </MenuBox>
      )}
    </UserButton>
  );
};
