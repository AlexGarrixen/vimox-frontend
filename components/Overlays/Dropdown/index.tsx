import React from 'react';
import { useOutsideClick } from '@hooks/useOutsideClick';
import { Root, ListOptionsBox, DropdownOptionStyled } from './styled';

type DropdownProps = {
  onChange?: (value: string) => void;
  getCustomText?: (value: string, label: string) => string;
  children?: React.ReactNode;
  text?: string;
  maxHeightOptions?: number;
};

type DropdownOptionProps = {
  value: string;
  onChange?: (value: string, label: string) => void;
  label?: string;
};

export const DropdownOption = ({
  value,
  onChange,
  label,
}: DropdownOptionProps) => {
  const handleClick = (ev: React.MouseEvent) => {
    onChange && onChange(value, label);
  };

  return (
    <DropdownOptionStyled onClick={handleClick}>{label}</DropdownOptionStyled>
  );
};

export const Dropdown = ({
  onChange,
  getCustomText,
  children: childrenProp,
  text,
}: DropdownProps) => {
  const [showItems, setShowItems] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState<string>(null);
  const { ref } = useOutsideClick({
    onOutsideClick: () => setShowItems(false),
  });

  const handleChange = (value: string, label: string) => {
    const choosedOption = getCustomText ? getCustomText(value, label) : value;
    onChange && onChange(value);
    setSelectedOption(choosedOption);
  };

  const children = React.Children.map(childrenProp, (child) =>
    React.cloneElement(child as JSX.Element, { onChange: handleChange })
  );

  return (
    <Root ref={ref} onClick={() => setShowItems(!showItems)}>
      {selectedOption || text}
      {showItems && <ListOptionsBox>{children}</ListOptionsBox>}
    </Root>
  );
};
