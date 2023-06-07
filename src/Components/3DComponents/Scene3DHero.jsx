import React from "react";
import Spline from "@splinetool/react-spline";
import { Box } from "@chakra-ui/react";

const Scene3DHero = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" h="600px">
      <Spline scene="https://prod.spline.design/rjzg-KF2v-p2ZM6T/scene.splinecode" />
    </Box>
  );
};

export default Scene3DHero;
