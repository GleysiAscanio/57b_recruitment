import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Button } from "@material-ui/core";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import HeaderView from "../ComponentsCandidate/HeaderViews.jsx";
import WhatWillYouDo from "../ComponentsCandidate/ComponentsSecondView/WhatWillYouDo.jsx";
import OpportunityConditions from "../ComponentsCandidate/ComponentsSecondView/OpportunityConditions.jsx";
import UserButtons from "../ComponentsCandidate/UserButtons.jsx";
import ShareOffer from "../ComponentsCandidate/ShareOffer.jsx";
import "../ComponentsCandidate/componentsCandidate.css";
import arrowReturn from "../ComponentsCandidate/img/arrow_return.svg";

const experienceItems = [
  "Have at least four years of experience with React.js",
  "Possess extensive knowledge of JavaScript and web stacks, libraries, and frameworks.",
  "Offer interpersonal, communication, and collaboration skills.",
];
const perkItems = [
  "Personalized salary.",
  "100% Health insurance.",
  "Be treated like a Talent, not a number.",
  "Excellent teamwork and work environment.",
  "Personalized career path.",
];
const SecondViewCandidate = () => {
  const { id } = useParams();
  const [job, setJob] = useState([]);

  const conection = () => {
    axios
      .get(`https://stormy-river-28303.herokuapp.com/api/v1/jobs/${id}`)
      .then(
        (result) => {
          console.log("data", result.data);
          setJob(result.data);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  useEffect(() => {
    conection();
  }, []);

  return (
    <>
      <HeaderView />
      <Box
        position="static"
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          height: { xs: 50, md: 77, lg: 88 },
          bgcolor: "#FAFAFA",
          paddingRight: "0",
          paddingLeft: "0",
        }}
      >
        <Button
          sx={{
            textTransform: "capitalize",
          }}
          component={Link}
          to={"/"}
        >
          <img
            src={arrowReturn}
            alt="arrow_return"
            className="img_button_return"
          ></img>
        </Button>
        <h3 className="h3_job_name">{job && job.name}</h3>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#FFFFFF",
        }}
      >
        <WhatWillYouDo />
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
          },
          gridGap: { md: 5, lg: 10 },
          width: { xs: 342, md: 800, lg: 1200 },
          height: "auto",
          marginLeft: { xs: 2, md: 16, lg: 47 },
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
        }}
      >
        <OpportunityConditions kind="experience" items={experienceItems} />
        <OpportunityConditions kind="perk" items={perkItems} />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", marginX: 5 }}>
        <UserButtons textContent="Apply" component={Link} to={"/apply"} />
        <UserButtons textContent="Refer" component={Link} to={"/apply"} />
      </Box>
      <Box
        sx={{
          width: {
            xs: 342,
            md: 800,
            lg: 1200,
          },
          marginLeft: { xs: 2, md: 16, lg: 47 },
        }}
      >
        <ShareOffer linkJob={`opportunity-detail/${job.id}`} />
      </Box>
    </>
  );
};

export default SecondViewCandidate;
