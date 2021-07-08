import React, { FC } from 'react';
import { useOutsideClick } from '@hooks/useOutsideClick';
import useDropdown from './hook';
import { Root, ListOptionsBox } from './styled';

export const Dropdown: FC<DropdownProps> = ({
  onChangeOption,
  getCustomText,
  children: childrenProp,
  text,
}) => {
  const {
    showOptions,
    selectedOption,
    handleChangeOpt,
    requestShowOptions,
  } = useDropdown({ getCustomText, onChangeOption });

  const { ref } = useOutsideClick({
    onOutsideClick: () => requestShowOptions(false),
  });

  const children = React.Children.map(childrenProp, (child) =>
    React.cloneElement(child as JSX.Element, {
      onChangeOption: handleChangeOpt,
    })
  );

  return (
    <Root ref={ref} onClick={() => requestShowOptions(!showOptions)}>
      {selectedOption || text}
      {showOptions && <ListOptionsBox>{children}</ListOptionsBox>}
    </Root>
  );
};

export type DropdownProps = {
  onChangeOption?: (value: string) => void;
  getCustomText?: (value: string, label: string) => string;
  children?: React.ReactNode;
  text?: string;
  maxHeightOptions?: number;
};

export * from './Option';
