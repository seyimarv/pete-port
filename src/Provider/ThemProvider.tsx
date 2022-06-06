import React, { ReactElement } from "react";
import { ThemeProvider as BaseThemeProvider } from "styled-components";
import { theme } from '@themes/theme';
import GlobalStyle from "../GlobalStyle";

export const ThemeProvider: React.FC<{ component: ReactElement }> = ({
  component,
}) => {
  return (
    <BaseThemeProvider theme={theme}>
      <GlobalStyle />
      {component}
    </BaseThemeProvider>
  );
};
