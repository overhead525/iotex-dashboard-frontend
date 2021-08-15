import React from "react";

import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import "./header.css";
import { ThemeProvider } from "@material-ui/core";
import { dashboardTheme } from "../theme";
import { StyledDMText } from "./StyledComponents";
import { AcronymsGuide } from "./AcronymsGuide";

interface HeaderProps {
  user?: {};
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

const Title = styled(StyledDMText)`
  margin-bottom: 1.6rem;
`;

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: HeaderProps) => (
  <ThemeProvider theme={dashboardTheme}>
    <header>
      <Title variant="h4">Welcome to ioTube's Bridge Analytics Dashboard</Title>
      <AcronymsGuide />
    </header>
  </ThemeProvider>
);
