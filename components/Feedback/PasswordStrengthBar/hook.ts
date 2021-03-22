import React from 'react';

const withUpperCaseAndLowerCase = /^(?=.*[a-z])(?=.*[A-Z])/;
const minimumLength = /(?=.{8,}$)/;
const withSpecialCharacters = /(?=.*\W)/;
const withNumbers = /[0-9]/;

const regexs = [
  withUpperCaseAndLowerCase,
  minimumLength,
  withNumbers,
  withSpecialCharacters,
];

const totalScore = regexs.length;

export const usePasswordStrength = (password = '') => {
  const score = React.useMemo(
    () =>
      regexs.reduce(
        (count, regex) => (regex.test(password) ? count + 1 : count),
        0
      ),
    [password]
  );

  const value = React.useMemo(() => (score / totalScore) * 100, [score]);

  const isSuccess = React.useMemo(() => value === 100, [value]);

  const isWarning = React.useMemo(() => value < 100 && value > 50, [value]);

  const isDanger = React.useMemo(() => value <= 50, [value]);

  return {
    value,
    isSuccess,
    isDanger,
    isWarning,
  };
};
