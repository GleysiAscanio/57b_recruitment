import React from "react";
import figGreen from "../img/figGreen.svg";
import startDown from "../img/startDown.svg";
import { Card, CardContent, Grid, Typography } from "@mui/material/";

const OpportunityConditions = ({ kind, items }) => {
  return (
    <Card
      sx={{
        position: "static",
        width: { xs: 342, md: 390, lg: 566 },
        height: "auto",
        padding: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderTop: `6px solid ${kind === "experience" ? "#42E9AF" : "#FFCA41"}`,
        marginTop: 0,
        marginBottom: { xs: 10, md: 15 },
      }}
      m={3}
      elevation={3}
    >
      <CardContent>
        {kind === "experience" ? (
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "118",
              marginTop: { xs: 3, md: 5, lg: 7 },
              fontSize: { xs: 18, md: 24, lg: 30 },
              fontWeight: 600,
              textAlign: "center",
              color: "#000000",
            }}
            variant="h2"
            gutterBottom
          >
            We would like to talk to you if you
          </Typography>
        ) : (
          <Typography
            sx={{
              marginTop: { xs: 3, md: 5, lg: 7 },
              fontSize: { xs: 18, md: 24, lg: 30 },
              fontWeight: 600,
              textAlign: "center",
              color: "#000000",
            }}
            variant="h2"
            gutterBottom
          >
            What we like to offer you is
          </Typography>
        )}
      </CardContent>
      <CardContent
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(1,1fr)",
          gridGap: { md: 5, lg: 5 },
          margin: { xs: 1, md: 3, lg: 5 },
          justifyContent: "center",
          alignItems: "center",
          textAlign: "left",
          height: "auto",
          padding: 0,
        }}
      >
        {items.map((experienceJob) => (
          <Grid container spacing={2} margin={0} key={experienceJob[0]}>
            <Grid item>
              {kind === "experience" ? (
                <img
                  src={figGreen}
                  alt="figGreen"
                  sx={{
                    marginRight: "10px",
                    marginBottom: "3px",
                    width: "8px",
                    height: "8px",
                  }}
                />
              ) : (
                <img
                  src={startDown}
                  alt="startDown"
                  sx={{
                    marginRight: "10px",
                    marginBottom: "3px",
                    width: "8px",
                    height: "8px",
                  }}
                />
              )}
            </Grid>
            <Grid item xs>
              <Typography
                sx={{
                  margin: 0,
                  color: "#000000",
                  fontsize: { xs: 16, lg: 18 },
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "left",
                  width: { xs: 250, md: 300 },
                }}
                gutterBottom
              >
                {experienceJob}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </CardContent>
    </Card>
  );
};

export default OpportunityConditions;
