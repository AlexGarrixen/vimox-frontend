import React from 'react';
import { Typography } from '@components/DataDisplay/Typography';
import {
  convertToHoursAndMinutes,
  formatHoursAndMinutes,
} from '@utils/convertTime';

export const Duration = ({ duration }: { duration: number }) => {
  const [hours, minutes] = convertToHoursAndMinutes(duration);
  const formatedDur = formatHoursAndMinutes(hours, minutes);

  return <Typography white>{formatedDur}</Typography>;
};
