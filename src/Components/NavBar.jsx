// @ts-nocheck
import React from "react";
import { Box, Flex } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Box
      h="50px"
      color="#d9317a"
      pos="fixed"
      top={0}
      bgColor="rgba(255,255,255,0.1);"
      px={1}
      py={2}
    >
      <Flex px={2}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#project"> Projects</a>
        <a href="#contactme"> Contact Me</a>
      </Flex>
    </Box>
  );
};

export default NavBar;
