import React from "react";
import logo from "../../../assets/img/logo.svg";
import { IconButton, Stack, Typography } from "@mui/material";
import { LocationIcon } from "../../../assets/icon/location-icon";
import { LogoLink } from "./style";
import { SearchInput } from "../../../components/search-input/serarch-input";

export const Search = () => {
  const changeInput = (e) => {
    console.log(e.target.value);
  };
  return (
    <Stack direction={"row"} gap={"60px"} flexGrow={1}>
      <LogoLink to={"/"}>
        <img style={{ verticalAlign: "bottom" }} src={logo} alt="logo" />
      </LogoLink>
      <Stack direction={"row"} gap="8px" alignItems={"center"}>
        <IconButton>
          <LocationIcon />
        </IconButton>
        <Typography variant="body1">Алматы</Typography>
      </Stack>
      <SearchInput onChange={changeInput} />
    </Stack>
  );
};
