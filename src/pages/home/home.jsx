import React from "react";
import { Banner } from "../../components/Banner";
import { Box, Container } from "@mui/material";
import { theme } from "../../config/mui-config";

export const Home = () => {
  return (
    <>
      <Box bgcolor={theme.palette.primary.main}>
        <Container maxWidth={"xs"}>
          <Banner />
        </Container>
      </Box>
    </>
  );
};
