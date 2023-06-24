import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Cube3D = (props) => {
  const meshRef = useRef();
  // @ts-ignore
  useFrame((state, delta) => (meshRef.current.rotation.x += 0.01));

  return (
    <mesh scale={0.5} ref={meshRef} {...props} rotation={[90, 0, 20]}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      <meshLambertMaterial
        attach="material"
        color="#e048bf"
        wireframe={props.wireframe}
      />
    </mesh>
  );
};
export default Cube3D;
