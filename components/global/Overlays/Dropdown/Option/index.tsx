import React from 'react';
import { DropdownOptionStyled } from './styled';

export const DropdownOption = ({
  value,
  onChangeOption,
  label,
}: DropdownOptionProps) => {
  const handleClick = (ev: React.MouseEvent) => {
    onChangeOption && onChangeOption(value, label);
  };

  return (
    <DropdownOptionStyled onClick={handleClick}>{label}</DropdownOptionStyled>
  );
};

type DropdownOptionProps = {
  value: string;
  onChangeOption?: (value: string, label: string) => void;
  label?: string;
};
