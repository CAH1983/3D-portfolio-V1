import React from "react";
import { Box } from "@chakra-ui/react";
import { Canvas } from "react-three-fiber";
import Cylinder3d from "./Cylinder3D";
import Cube3D from "./Cube3D";

const Scene3JS = () => {
  return (
    <Box h="100vh">
      <Canvas>
        <pointLight position={[10, 10, 10]} />
        <ambientLight />
        {/* bonbon full */}
        <Cylinder3d position={[4, -2, 0]} />
        <pointLight position={[10, 10, 10]} />
        <ambientLight color="pink" intensity={1.5} />
        <Cylinder3d position={[-3.2, 3, 0]} wireframe={true} />
        <Cylinder3d position={[3.5, 1, 0]} wireframe={true} />
        <ambientLight color="#6200ff" />
        <pointLight position={[0, 20, 10]} intensity={1.5} />
        <Cylinder3d position={[-1.2, 0, 0]} wireframe={true} />
        <Cylinder3d position={[-3.6, -1, 0]} wireframe={true} />
        {/* Barebone cube */}
        <Cube3D position={[0, -2, 0]} wireframe={true} />
      </Canvas>
    </Box>
  );
};

export default Scene3JS;
