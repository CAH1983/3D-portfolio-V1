import React from "react";
import { Box } from "@chakra-ui/react";
import { Canvas } from "react-three-fiber";
import Cylinder3d from "./Cylinder3D";
import Cube3D from "./Cube3D";

const Scene3JS = () => {
  return (
    <>
      {/* canvas 1 */}
      <Canvas>
        <pointLight position={[10, 10, 10]} />
        <ambientLight />
        <Cylinder3d position={[-1.2, 0, 0]} />
        <Cylinder3d position={[2.2, 0, 0]} />
      </Canvas>

      {/* canvas 2 */}
      <Canvas>
        <pointLight position={[10, 10, 10]} />
        <ambientLight intensity={0.5} />
        <Cylinder3d position={[-1.2, 0, 0]} wireframe={true} />
        <Cylinder3d position={[2.2, 0, 0]} wireframe={true} />
      </Canvas>

      {/* canvas 3 */}
      <Canvas>
        <pointLight position={[10, 10, 10]} />
        <ambientLight color="red" />
        <Cylinder3d position={[-1.2, 0, 0]} wireframe={true} />
        <Cylinder3d position={[2.2, 0, 0]} wireframe={true} />
        <Cube3D position={[-10, 0, 0]} wireframe={true} />
      </Canvas>
    </>
  );
};

export default Scene3JS;
