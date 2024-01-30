import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";

import Island from "../models/Island";
{
  /* <div className="absolute left-0 right-0 top-28 z-10 flex items-center justify-center">
        POPUP
      </div> */
}
const Home = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <section className="relative h-screen w-full">
      <Canvas
        className="h-screen w-full bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight />
          <ambientLight />
          <pointLight />
          <hemisphereLight />

          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={[0.1, 4.7077, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
