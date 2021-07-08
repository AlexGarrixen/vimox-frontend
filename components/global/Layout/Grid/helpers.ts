import { DefaultTheme } from 'styled-components';

export const setCols = (cols: number) =>
  `grid-template-columns: repeat(${cols}, minmax(0, 1fr));`;

export const setBreakpointsCols = (
  breakpoints: Partial<Record<keyof DefaultTheme['screens'], number>>,
  theme: DefaultTheme
) => {
  const screens = theme.screens;
  const rules: string[] = [];

  for (const breakpoint of Object.keys(breakpoints)) {
    const screen = screens[breakpoint];
    const cols = breakpoints[breakpoint];

    if (screen) {
      const rule = `
        @media screen and (min-width: ${screen}) {
          grid-template-columns: repeat(${cols}, minmax(0, 1fr));
        }
      `;

      rules.push(rule);
    }
  }

  return rules.join(' ');
};
