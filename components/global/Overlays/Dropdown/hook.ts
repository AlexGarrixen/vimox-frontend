import { useCallback, useState } from 'react';
import { DropdownProps } from '.';

const useDropdown = ({
  getCustomText,
  onChangeOption,
}: Pick<DropdownProps, 'getCustomText' | 'onChangeOption'>) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>(null);

  const handleChangeOpt = (value: string, label: string) => {
    const choosedOption = getCustomText ? getCustomText(value, label) : value;
    onChangeOption && onChangeOption(value);
    setSelectedOption(choosedOption);
  };

  const requestShowOptions = useCallback(
    (show: boolean) => setShowOptions(show),
    [showOptions]
  );

  return {
    showOptions,
    selectedOption,
    handleChangeOpt,
    requestShowOptions,
  };
};

export default useDropdown;
