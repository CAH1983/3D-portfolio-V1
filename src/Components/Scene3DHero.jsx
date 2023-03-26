import React from 'react';
import Spline from '@splinetool/react-spline';
import { Box } from '@chakra-ui/react';

const Scene3DHero = () => {
  return (
    <Box h='650px' pos='relative' top={0} left={0} >
    <Spline scene="https://prod.spline.design/rjzg-KF2v-p2ZM6T/scene.splinecode" />
    </Box>
  )
}

export default Scene3DHero;