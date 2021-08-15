import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { StyledDMText, StyledIBMText } from "./StyledComponents";

interface SummaryProps {
  uniqueBridgeUsers: number;
  totalTXsWithoutIOTXE: number;
  totalIOTXTXs: number;
  totalAssetsBridged: number;
  totalBridgeApprovals: number;
  currency: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: "center",
    minHeight: "10rem",
    maxWidth: "12.25rem",
    display: "grid",
    placeItems: "center",
    padding: "0 1.4rem",
  },
  constrainedText: {
    maxWidth: 7,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export const Summary: React.FC<SummaryProps> = ({
  uniqueBridgeUsers = 2345,
  totalTXsWithoutIOTXE = 12345,
  totalIOTXTXs = 10123,
  totalAssetsBridged = 12345678,
  totalBridgeApprovals = 704,
  currency = "USD",
}: SummaryProps) => {
  const classes = useStyles();

  const data = [
    { "Unique Bridge Users": uniqueBridgeUsers },
    {
      "Total Transactions (TXs) without IOTX-E": totalTXsWithoutIOTXE,
      units: "TXs",
    },
    { "Total IOTX-E Transactions (TXs)": totalIOTXTXs, units: "TXs" },
    { "Total Assets Bridged": totalAssetsBridged, units: currency },
    { "Total Bridge Approvals": totalBridgeApprovals },
  ];

  return (
    <Grid container justifyContent="space-between" spacing={2}>
      {data.map((pair) => (
        <Grid item xs={6} sm={2}>
          <Paper className={classes.paper}>
            <Grid container direction="column">
              <Grid item>
                <StyledIBMText>{`${Object.keys(pair)[0]}`}</StyledIBMText>
              </Grid>
              <Grid item>
                <StyledDMText variant="h6">{`${Object.values(
                  pair
                )[0].toLocaleString()}${
                  Object.values(pair)[1] ? " " + Object.values(pair)[1] : ""
                }`}</StyledDMText>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};
