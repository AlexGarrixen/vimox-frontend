const hourInSeconds = 3600;

export const convertToHoursAndMinutes = (seconds: number): number[] => {
  const hours = Math.floor(seconds / hourInSeconds);
  const minutes = Math.floor(seconds / 60) % 60;

  return [hours, minutes];
};

export const formatHoursAndMinutes = (
  hours: number,
  minutes: number
): string => {
  const dur = [];

  if (hours > 0) dur[0] = `${hours} ${hours > 1 ? 'horas' : 'hora'}`;
  if (minutes > 0) dur[1] = `${minutes} ${minutes > 1 ? 'minutos' : 'minuto'}`;

  return dur.join(' ');
};
