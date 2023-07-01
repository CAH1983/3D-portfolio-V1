import { Container, Box, position } from "@chakra-ui/react";

// components
import NavBar from "./Components/NavBar";
// import Scene3DHero from "./Components/3DComponents/Scene3DHero";
import Scene3JS from "./Components/3DComponents/Scene3JS";
import "./App.css";
import React from "react";
import Triangle1 from "./Components/2DShapes/Triangle1";
import ContactForm from "./Components/Form/ContactForm";

function App() {
  return (
    <Box pos="relative" bg="black" color="lightgray">
      <NavBar />
      <Triangle1 bgColor="#22aed5" />

      {/* <Scene3DHero /> */}
      <Box>
        <Scene3JS />
      </Box>
      <ContactForm />
    </Box>
  );
}

export default App;
