import React from 'react';
import {Box, Container, Flex } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Container
    maxW="2xl"
    w="1200px"
    h="50px"
    color="#f0f3f6"
    pos="fixed"
    top={0}
    bg="#484444"
  >
    <Flex>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#project"> Projects</a>
      <a href="#contactme"> Contact Me</a>
    </Flex>
    </Container>

  )
}

export default NavBar;
