
import {makeScene2D, Video, Rect, Txt, Circle} from "@motion-canvas/2d";
import {
  all,
  createRef,
  easeInOutCubic,
  easeOutBack,
  easeOutCubic,
  spawn,
  waitFor,
} from "@motion-canvas/core";

import outroVideo from "../assets/pres4.mp4";

const DARK_GREEN = "#0D5A2B";
const LIGHT_GREEN = "#65A878";
const SAKURA_PINK = "#FFB0BB";

export default makeScene2D(function* (view) {
  const video = createRef<Video>();
  const whiteBackground = createRef<Rect>();

  const project = createRef<Txt>();
  const titleTea = createRef<Txt>();
  const titleSa = createRef<Txt>();
  const titleSuffix = createRef<Txt>();

  const scaffoldTiles: {
    ref: ReturnType<typeof createRef<Rect>>;
    x: number;
    y: number;
  }[] = [];

  const petals: {
    ref: ReturnType<typeof createRef<Circle>>;
    index: number;
  }[] = [];

  view.fill(DARK_GREEN);

  // Background video
  view.add(
    <Video
      ref={video}
      src={outroVideo}
      width={1920}
      height={1080}
      play={false}
    />,
  );

  // Scaffold tiles
  const columns = 8;
  const rows = 5;
  const tileWidth = 240;
  const tileHeight = 216;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      const ref = createRef<Rect>();

      const x = -840 + col * tileWidth;
      const y = -432 + row * tileHeight;

      // Start completely outside the screen
      const startX = col < columns / 2 ? x - 1400 : x + 1400;
      const startY = row < rows / 2 ? y - 900 : y + 900;

      scaffoldTiles.push({ref, x, y});

      view.add(
        <Rect
          ref={ref}
          x={startX}
          y={startY}
          width={tileWidth + 2}
          height={tileHeight + 2}
          fill={(row + col) % 3 === 0 ? SAKURA_PINK : DARK_GREEN}
          opacity={0}
        />,
      );
    }
  }

  // White transition screen
  view.add(
    <Rect
      ref={whiteBackground}
      width={1920}
      height={1080}
      fill="#FFFFFF"
      opacity={0}
    />,
  );

  // Sakura petals behind the project name
  const petalCount = 18;

  for (let i = 0; i < petalCount; i++) {
    const ref = createRef<Circle>();

    petals.push({ref, index: i});

    view.add(
      <Circle
        ref={ref}
        x={0}
        y={-700}
        size={10 + (i % 4) * 3}
        scaleX={1.5}
        fill={SAKURA_PINK}
        opacity={0}
        rotation={i * 29}
      />,
    );
  }

  // Project name: one continuous line with slightly wider spacing
  view.add(
    <Txt
      ref={project}
      text={"Project"}
      fontFamily={"Arial"}
      fontSize={112}
      fill={DARK_GREEN}
      x={-455}
      y={40}
      opacity={0}
    />,
  );

  // Kanji in lighter green
  view.add(
    <Txt
      ref={titleTea}
      text={"茶"}
      fontFamily={"Arial"}
      fontSize={132}
      fontWeight={700}
      fill={LIGHT_GREEN}
      x={-175}
      y={40}
      scale={1}
      opacity={0}
    />,
  );

  // (Sa)kure in pink
  view.add(
    <Txt
      ref={titleSa}
      text={"(Sa)kure"}
      fontFamily={"Arial"}
      fontSize={112}
      fontWeight={700}
      fill={SAKURA_PINK}
      x={130}
      y={40}
      scale={1}
      opacity={0}
    />,
  );

  // -it-all in dark green
  view.add(
    <Txt
      ref={titleSuffix}
      text={"-it-all"}
      fontFamily={"Arial"}
      fontSize={112}
      fill={DARK_GREEN}
      x={490}
      y={40}
      opacity={0}
    />,
  );

  // Slow, flowing petal animation
  function* animatePetal(
    petal: ReturnType<typeof createRef<Circle>>,
    index: number,
  ) {
    const startX = -900 + ((index * 173) % 1800);
    const duration = 9 + (index % 4) * 1.5;
    const drift = index % 2 === 0 ? 350 : -350;

    yield* waitFor((index % 6) * 0.5);

    while (true) {
      petal().position([startX, -700 - (index % 4) * 80]);
      petal().rotation(index * 47);
      petal().opacity(0);

      yield* all(
        petal().opacity(0.5, 1.2, easeInOutCubic),
        petal().position(
          [startX + drift, 700],
          duration,
          easeInOutCubic,
        ),
        petal().rotation(
          index * 47 + (index % 2 === 0 ? 240 : -240),
          duration,
          easeInOutCubic,
        ),
      );

      yield* petal().opacity(0, 1, easeInOutCubic);
    }
  }

  // Start video
  video().play();

  // Scaffold starts at 18 seconds
  yield* waitFor(18);

  // Start petals after the title appears
  for (const petal of petals) {
    spawn(animatePetal(petal.ref, petal.index));
  }

  // Faster scaffold entrance
  yield* all(
    ...scaffoldTiles.map((tile) =>
      all(
        tile.ref().position([tile.x, tile.y], 0.45, easeOutCubic),
        tile.ref().opacity(1, 0.45, easeInOutCubic),
      ),
    ),
  );

  // Transition to white
  yield* whiteBackground().opacity(1, 0.7, easeInOutCubic);

  // Fade away scaffold
  yield* all(
    ...scaffoldTiles.map((tile) =>
      tile.ref().opacity(0, 0.45, easeInOutCubic),
    ),
  );


  // Reveal the project name
  yield* all(
    project().opacity(1, 0.6, easeOutCubic),
    titleTea().opacity(1, 0.6, easeOutCubic),
    titleSa().opacity(1, 0.6, easeOutCubic),
    titleSuffix().opacity(1, 0.6, easeOutCubic),
  );


  // Enlarge the kanji, then restore its original size
  yield* waitFor(3.55);

  yield* titleTea().scale(1.45, 0.35, easeOutBack);
  yield* titleTea().scale(1, 0.35, easeInOutCubic);

  // Emphasize (Sa)kure, then restore its original size
  yield* waitFor(0.8);

  yield* titleSa().scale(1.2, 0.35, easeOutBack);
  yield* titleSa().scale(1, 0.35, easeInOutCubic);

  // Keep the scene running while petals flow
  yield* waitFor(3);
});
