import React from "react";
import { Title } from "./style";
import { Box, Stack } from "@mui/material";
import { SecondaryButton } from "../secondary-button";
import Carpet from "../../assets/img/carpet.png";

export const Banner = () => {
  return (
    <>
      <Stack
        justifyContent={"space-between"}
        py={"98px"}
        direction={"row"}
        alignItems={"center"}
      >
        <Box>
          <Title>Новая коллекция ковров Venetta</Title>
          <SecondaryButton>Смотреть все</SecondaryButton>
        </Box>
        <Stack gap={"30px"} direction={"row"}>
          <Box>
            <img src={Carpet} alt="#" />
          </Box>
          <Box>
            <img src={Carpet} alt="#" />
          </Box>
        </Stack>
      </Stack>
    </>
  );
};
