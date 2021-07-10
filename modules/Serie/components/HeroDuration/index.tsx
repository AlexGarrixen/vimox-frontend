import React from 'react';
import { Text } from '@components/DataDisplay/Text';
import {
  convertToHoursAndMinutes,
  formatHoursAndMinutes,
} from '@utils/convertTime';

const Duration = ({ duration }: { duration: number }) => {
  const [hours, minutes] = convertToHoursAndMinutes(duration);
  const formatedDuration = formatHoursAndMinutes(hours, minutes);

  return <Text colorScheme='white'>{formatedDuration}</Text>;
};

export default Duration;
