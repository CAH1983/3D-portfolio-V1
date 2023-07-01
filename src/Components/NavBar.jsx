// @ts-nocheck
import React from "react";
import { Box, Container, Flex } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <nav>
      <Container
        h="50px"
        color="lightgray"
        pos="fixed"
        top={0}
        px={1}
        py={2}
        display="flex"
        justifyContent="space-between"
      >
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#project"> Projects</a>
        <a href="#contactme"> Contact Me</a>
      </Container>
    </nav>
  );
};

export default NavBar;
