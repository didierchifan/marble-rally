import Lights from "./Lights.jsx";
import { Level } from "./Level.jsx";
import { Physics } from "@react-three/rapier";
import Player from "./Player.jsx";
import useGame from "./store/useGame.jsx";

export default function Experience() {
  const blocksCount = useGame((state) => state.blocksCount);

  return (
    <>
      <Physics debug={false}>
        <Lights />
        <Level count={blocksCount} />
        <Player />
      </Physics>
    </>
  );
}
