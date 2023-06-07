import { Container, Box } from "@chakra-ui/react";

// components
import NavBar from "./Components/NavBar";
// import Scene3DHero from "./Components/3DComponents/Scene3DHero";
import Scene3JS from "./Components/3DComponents/Scene3JS";
import "./App.css";
import React from "react";

function App() {
  return (
    <Box pos="relative" bg="black">
      <NavBar />
      {/* <Scene3DHero /> */}
      <Box>
        <Scene3JS />
      </Box>
    </Box>
  );
}

export default App;
