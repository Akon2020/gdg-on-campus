/* "use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import * as THREE from "three";

export const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[0, 255, 255]],
  containerClassName,
  dotSize,
  showGradient = true,
}: {
  animationSpeed?: number;
  opacities?: number[];
  colors?: number[][];
  containerClassName?: string;
  dotSize?: number;
  showGradient?: boolean;
}) => {
  return (
    <div className={`h-full relative bg-white w-full ${containerClassName}`}>
      <div className="h-full w-full">
        <DotMatrix
          colors={colors ?? [[0, 255, 255]]}
          dotSize={dotSize ?? 3}
          opacities={opacities}
          animationSpeed={animationSpeed}
          center={["x", "y"]}
        />
      </div>
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-[84%]" />
      )}
    </div>
  );
};

interface DotMatrixProps {
  colors?: number[][];
  opacities?: number[];
  totalSize?: number;
  dotSize?: number;
  animationSpeed?: number;
  center?: ("x" | "y")[];
}

const DotMatrix: React.FC<DotMatrixProps> = ({
  colors = [[0, 0, 0]],
  opacities = [0.04, 0.04, 0.04, 0.04, 0.04, 0.08, 0.08, 0.08, 0.08, 0.14],
  totalSize = 4,
  dotSize = 2,
  animationSpeed = 0.4,
  center = ["x", "y"],
}) => {
  const uniforms = useMemo(() => {
    // Flatten colors array to be compatible with `number[]` type
    const flattenedColors = colors.flat().map((c) => c / 255);
    return {
      u_time: { value: 0.0 },
      u_colors: { value: flattenedColors, type: "1fv" },
      u_opacities: { value: opacities, type: "1fv" },
      u_total_size: { value: totalSize },
      u_dot_size: { value: dotSize },
      u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    };
  }, [colors, opacities, totalSize, dotSize]);

  return (
    <Canvas>
      <ShaderMaterial source={shaderSource} uniforms={uniforms} animationSpeed={animationSpeed} />
    </Canvas>
  );
};

const shaderSource = `
precision mediump float;
uniform float u_time;
uniform float u_opacities[10];
uniform float u_colors[18]; // Adjust size based on the flattened colors array length
uniform float u_total_size;
uniform float u_dot_size;
uniform vec2 u_resolution;
out vec4 fragColor;
float PHI = 1.61803398874989484820459;
float random(vec2 xy) {
    return fract(tan(distance(xy * PHI, xy) * 0.5) * xy.x);
}
void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
    float opacity = 1.0;
    vec3 color = vec3(u_colors[int(mod(u_time, 6.0)) * 3], u_colors[int(mod(u_time, 6.0)) * 3 + 1], u_colors[int(mod(u_time, 6.0)) * 3 + 2]);
    fragColor = vec4(color, opacity);
}
`;

type Uniforms = {
  [key: string]: {
    value: number | number[] | THREE.Vector2;
  };
};

const ShaderMaterial = ({
  source,
  uniforms,
  animationSpeed,
}: {
  source: string;
  uniforms: Uniforms;
  animationSpeed: number;
}) => {
  const { size } = useThree();
  const ref = useRef<THREE.ShaderMaterial>();

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.uniforms.u_time.value = clock.getElapsedTime() * animationSpeed;
    }
  });

  return (
    <mesh>
      <planeGeometry args={[size.width, size.height]} />
      <shaderMaterial
        ref={ref}
        uniforms={uniforms}
        vertexShader={`void main() { gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`}
        fragmentShader={source}
      />
    </mesh>
  );
};
 */