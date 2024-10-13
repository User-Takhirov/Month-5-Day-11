import React from "react";
import { Banner } from "../../components/Banner";
import { Box, Container, Grid2, Stack, Typography } from "@mui/material";
import { theme } from "../../config/mui-config";
import { Data } from "../../Data/data";
import { Card } from "../../components/Cards";
import { Link } from "react-router-dom";

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
          <Stack gap={"32px"} alignItems={"center"} direction={"row"}>
            <Typography mb={"29px"} variant="h2">
              Новинки
            </Typography>
            <Link style={{ color: "#618C78" }}>Все новинки</Link>
          </Stack>

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
      <Box mt={"100px"} mb={"100px"}>
        <Container maxWidth={"xs"}>
          <Stack gap={"32px"} alignItems={"center"} direction={"row"}>
            <Typography mb={"29px"} variant="h2">
              Скидки
            </Typography>
            <Link style={{ color: "#618C78" }}>Все Скидки</Link>
          </Stack>

          <Grid2 container justifyContent={"space-between"} spacing={"40px"}>
            {Data.slice(4, 8).map((item) => (
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
