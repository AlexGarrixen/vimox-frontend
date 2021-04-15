const hourInSeconds = 3600;

const secondsToMinutes = (seconds: number) => Math.ceil(seconds / 60);

const secondsToHours = (seconds: number) => {
  const value = (seconds / hourInSeconds).toFixed(2);
  const [hours, minutes] = value.toString().split('.');

  return [
    parseInt(hours),
    minutes.startsWith('0') ? parseInt(minutes.charAt(1)) : parseInt(minutes),
  ];
};

export const convertToHoursAndMinutes = (seconds: number): number[] => {
  if (seconds >= hourInSeconds) return secondsToHours(seconds);
  return [0, secondsToMinutes(seconds)];
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
