import React from 'react';
import { useOutsideClick } from '@hooks/useOutsideClick';
import { SelectBox, OptionsBox, Option } from './styled';

type Option = {
  text: string;
  value: any;
};

export type SelectProps = {
  options?: Option[];
  onChange?: (value: Option, name: string) => void;
  name?: string;
  placeholder?: string;
};

export const Select = ({
  onChange,
  name,
  options = [],
  placeholder,
}: SelectProps) => {
  const [showOptions, setShowOptions] = React.useState(false);

  const [selectedOpt, setOption] = React.useState<string>(null);

  const { ref } = useOutsideClick({
    onOutsideClick: () => setShowOptions(false),
  });

  const handleToggleOptions = React.useCallback(
    () => setShowOptions(!showOptions),
    [showOptions]
  );

  const handleClickOption = React.useCallback(
    (value) => () => {
      onChange && onChange(value, name);
      setOption(value);
    },
    [options]
  );

  return (
    <SelectBox onClick={handleToggleOptions} ref={ref}>
      <span>{selectedOpt || placeholder}</span>
      {showOptions && (
        <OptionsBox>
          {options.map(({ text, value }) => (
            <Option key={`${value}-${text}`} onClick={handleClickOption(value)}>
              {text}
            </Option>
          ))}
        </OptionsBox>
      )}
    </SelectBox>
  );
};
