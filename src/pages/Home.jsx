import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";

{
  /* <div className="absolute left-0 right-0 top-28 z-10 flex items-center justify-center">
        POPUP
      </div> */
}
const Home = () => {
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
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
