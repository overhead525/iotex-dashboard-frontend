import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { dashboardTheme } from "../theme";
import { StyledDMText } from "./StyledComponents";

interface AcronymsGuideProps {}

export const AcronymsGuide: React.FC<AcronymsGuideProps> = ({}) => (
  <ThemeProvider theme={dashboardTheme}>
    <StyledDMText variant="h6">Acronyms Guide</StyledDMText>
  </ThemeProvider>
);
