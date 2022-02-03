import React from "react";
import { Card, Box, Grid, CardContent, Typography } from "@mui/material/";

import circleBlue from "../img/circle_blue.svg";

const WhatWillYouDo = () => {
  return (
    <Card
      sx={{
        width: { xs: 342, md: 800, lg: 1200 },
        height: "auto",
        backgroundColor: "#FFFFFF",
        marginTop: { xs: 5, md: 7, lg: 10 },
      }}
      m={3}
      elevation={3}
    >
      <CardContent
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            fontSize: 20,
            position: "relative",
            display: "inline-block",
            "&::before": {
              content: `""`,
              position: "absolute",
              bottom: { xs: 9, md: 11, lg: 14 },
              width: "calc(100% + 10px)",
              height: { xs: 5, md: 6, lg: 7 },
              left: "5px",
              opacity: "0.3",
              backgroundColor: "#3CDFF5",
            },
          }}
        >
          <Typography
            sx={{
              marginTop: { xs: 3, md: 5, lg: 7 },
              fontSize: { xs: 18, md: 24, lg: 30 },
              fontWeight: 600,
              textAlign: "center",
              color: "#000000",
            }}
            color="textPrimary"
            variant="h2"
            gutterBottom
          >
            What will you do?
          </Typography>
        </Box>
      </CardContent>
      <CardContent
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
          },
          gridGap: { md: 7, lg: 10 },
          margin: { xs: 1, md: 3, lg: 5 },
          justifyContent: "center",
          alignItems: "center",
          textAlign: "left",
          height: "auto",
          padding: 0,
        }}
      >
        <Grid container wrap="nowrap" spacing={2} margin={0}>
          <Grid item>
            <img
              src={circleBlue}
              alt="circle_Blue"
              className="circle_Blue"
            ></img>
          </Grid>
          <Grid item xs>
            <Typography
              sx={{
                margin: 0,
                color: "#3E3E3E",
                fontsize: { xs: 16, lg: 18 },
                justifyContent: "center",
                alignItems: "center",
                textAlign: "left",
                width: { md: 300, lg: 463 },
              }}
              gutterBottom
            >
              Develop and maintain all server-side network components. Develop
              and maintain all server-side network components.
            </Typography>{" "}
          </Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2} margin={0}>
          <Grid item>
            <img
              src={circleBlue}
              alt="circle_Blue"
              className="circle_Blue"
            ></img>
          </Grid>
          <Grid item xs>
            <Typography
              sx={{
                margin: 0,
                color: "#3E3E3E",
                fontsize: { xs: 16, lg: 18 },
                justifyContent: "center",
                alignItems: "center",
                textAlign: "left",
                width: { md: 300, lg: 463 },
              }}
              gutterBottom
            >
              Develop and maintain all server-side network components. Develop
              and maintain all server-side network components.
            </Typography>{" "}
          </Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2} margin={0}>
          <Grid item>
            <img
              src={circleBlue}
              alt="circle_Blue"
              className="circle_Blue"
            ></img>
          </Grid>
          <Grid item xs>
            <Typography
              sx={{
                margin: 0,
                color: "#3E3E3E",
                fontsize: { xs: 16, lg: 18 },
                justifyContent: "center",
                alignItems: "center",
                textAlign: "left",
                width: { md: 300, lg: 463 },
              }}
              gutterBottom
            >
              Develop and maintain all server-side network components. Develop
              and maintain all server-side network components.
            </Typography>{" "}
          </Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2} margin={0}>
          <Grid item>
            <img
              src={circleBlue}
              alt="circle_Blue"
              className="circle_Blue"
            ></img>
          </Grid>
          <Grid item xs>
            <Typography
              sx={{
                margin: 0,
                color: "#3E3E3E",
                fontsize: { xs: 16, lg: 18 },
                justifyContent: "center",
                alignItems: "center",
                textAlign: "left",
                width: { md: 300, lg: 463 },
              }}
              gutterBottom
            >
              Develop and maintain all server-side network components.Develop
              and maintain all server-side network components.
            </Typography>{" "}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default WhatWillYouDo;
