import React from 'react';
import { Text } from '@components/DataDisplay/Text';
import {
  convertToHoursAndMinutes,
  formatHoursAndMinutes,
} from '@utils/convertTime';

export const Duration = ({ duration }: { duration: number }) => {
  const [hours, minutes] = convertToHoursAndMinutes(duration);
  const formatedDur = formatHoursAndMinutes(hours, minutes);

  return <Text colorScheme='white'>{formatedDur}</Text>;
};
