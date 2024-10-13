import React from "react";
import { Banner } from "../../components/Banner";
import { Box, Container, Grid2, Typography } from "@mui/material";
import { theme } from "../../config/mui-config";
import { Data } from "../../Data/data";

import { Card } from "../../components/Cards";

export const Home = () => {
  return (
    <>
      <Box bgcolor={theme.palette.primary.main}>
        <Container maxWidth={"xs"}>
          <Banner />
        </Container>
      </Box>
      <Box mt={"100px"}>
        <Container maxWidth={"xs"}>
          <Typography mb={"29px"} variant="h2">
            Новинки
          </Typography>
          <Grid2 container justifyContent={"space-between"} spacing={"40px"}>
            {Data.slice(0, 4).map((item) => (
              <Box key={item.id}>
                <Card
                  new={item.new}
                  img={item.img}
                  title={item.title}
                  size={item.size}
                  location={item.location}
                  rating={item.raiting}
                  price={item.price}
                  instalment={item.instalment}
                />
              </Box>
            ))}
          </Grid2>
        </Container>
      </Box>
    </>
  );
};
