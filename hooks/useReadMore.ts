import React from 'react';

export const useReadMore = (str: string, charactersLimit = 80) => {
  const [showFullText, setShowFullText] = React.useState(false);

  const strLength = React.useMemo(() => str.length, [str]);

  const croppedText = React.useMemo(() => str.slice(0, charactersLimit), [str]);

  const showReadMore = React.useMemo(() => strLength > charactersLimit, [str]);

  const text = React.useMemo(() => (showFullText ? str : croppedText), [
    showFullText,
  ]);

  const handleToggle = React.useCallback(() => setShowFullText(!showFullText), [
    showFullText,
  ]);

  return {
    text,
    showReadMore,
    handleToggle,
    showFullText,
  };
};
