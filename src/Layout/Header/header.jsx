import { Box, Container, Stack, Typography } from "@mui/material";
import { Search } from "./components/search";
import { HeaderButton } from "./components/header-button";
import React from "react";
import { NavbarLinks } from "../../Data/Navber";
import { Link } from "react-router-dom";
import { Colors } from "../../config/colors";
import { Navbar } from "../../components/Navber/navbar";

export const Header = () => {
  return (
    <>
      <Container maxWidth="xs">
        <Stack py={"31px"} direction="row" alignItems={"center"} gap={"61px"}>
          <Search />
          <HeaderButton />
        </Stack>
      </Container>
      <Box bgcolor={Colors.backgroundNavbar}>
        <Container maxWidth="xs">
          <Stack direction={"row"} justifyContent={"space-between"} py={"30px"}>
            {NavbarLinks.map((item) => (
              <Link
                style={{ textDecoration: "none" }}
                to={item.path}
                key={item.id}
              >
               <Navbar text={item.name}/>
              </Link>
            ))}
          </Stack>
        </Container>
      </Box>
    </>
  );
};
