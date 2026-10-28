
import {makeScene2D, Video, Rect, Txt, Layout} from "@motion-canvas/2d";
import {
  all,
  createRef,
  easeInOutCubic,
  easeOutCubic,
  waitFor,
} from "@motion-canvas/core";

import outroVideo from "../assets/pres5.mp4";

const DARK_GREEN = "#0D5A2B";
const LIGHT_GREEN = "#65A878";
const SAKURA_PINK = "#FFB0BB";
const TEXT_COLOR = "#26382C";
const WHITE = "#FFFFFF";

export default makeScene2D(function* (view) {
  const video = createRef<Video>();
  const whiteBackground = createRef<Rect>();
  const diagram = createRef<Layout>();

  const sharedModule = createRef<Layout>();
  const strainS = createRef<Layout>();
  const strainQ = createRef<Layout>();
  const strainE = createRef<Layout>();
  const strainT = createRef<Layout>();
  const summary = createRef<Layout>();

  view.fill(WHITE);

  // Main presentation video
  view.add(
    <Video
      ref={video}
      src={outroVideo}
      width={1920}
      height={1080}
      play={false}
    />,
  );

  // White screen over the video
  view.add(
    <Rect
      ref={whiteBackground}
      width={1920}
      height={1080}
      fill={WHITE}
      opacity={0}
    />,
  );

  // All pathway elements are kept together so the diagram can
  // disappear for the main-screen cut and resume where it left off.
  view.add(
    <Layout
      ref={diagram}
      layout={false}
      width={1920}
      height={1080}
      opacity={0}
      scale={1}
    >
      {/* SHARED UPSTREAM MODULE */}
      <Layout
        ref={sharedModule}
        layout={false}
        x={-500}
        y={-290}
        opacity={0}
      >
        <Txt
          text="SHARED UPSTREAM MODULE"
          x={300}
          y={-55}
          fontSize={28}
          fontFamily="Arial"
          fontWeight={700}
          fill={DARK_GREEN}
        />

        <Txt
          text="Tyrosine"
          x={0}
          y={0}
          fontSize={30}
          fontFamily="Arial"
          fill={TEXT_COLOR}
        />

        <Txt
          text="→"
          x={95}
          y={0}
          fontSize={38}
          fill={LIGHT_GREEN}
        />

        <Rect
          x={190}
          y={0}
          width={110}
          height={64}
          radius={10}
          fill={LIGHT_GREEN}
          opacity={0.2}
          stroke={LIGHT_GREEN}
          lineWidth={2}
        />
        <Txt
          text="Enzyme 1"
          x={190}
          y={0}
          fontSize={18}
          fontFamily="Arial"
          fill={DARK_GREEN}
        />

        <Txt
          text="→"
          x={265}
          y={0}
          fontSize={36}
          fill={LIGHT_GREEN}
        />

        <Rect
          x={340}
          y={0}
          width={110}
          height={64}
          radius={10}
          fill={LIGHT_GREEN}
          opacity={0.2}
          stroke={LIGHT_GREEN}
          lineWidth={2}
        />
        <Txt
          text="Enzyme 2"
          x={340}
          y={0}
          fontSize={18}
          fontFamily="Arial"
          fill={DARK_GREEN}
        />

        <Txt
          text="→"
          x={415}
          y={0}
          fontSize={36}
          fill={LIGHT_GREEN}
        />

        <Rect
          x={490}
          y={0}
          width={110}
          height={64}
          radius={10}
          fill={LIGHT_GREEN}
          opacity={0.2}
          stroke={LIGHT_GREEN}
          lineWidth={2}
        />
        <Txt
          text="Enzyme 3"
          x={490}
          y={0}
          fontSize={18}
          fontFamily="Arial"
          fill={DARK_GREEN}
        />

        <Txt
          text="→"
          x={565}
          y={0}
          fontSize={36}
          fill={LIGHT_GREEN}
        />

        <Rect
          x={640}
          y={0}
          width={110}
          height={64}
          radius={10}
          fill={LIGHT_GREEN}
          opacity={0.2}
          stroke={LIGHT_GREEN}
          lineWidth={2}
        />
        <Txt
          text="Enzyme 4"
          x={640}
          y={0}
          fontSize={18}
          fontFamily="Arial"
          fill={DARK_GREEN}
        />

        <Txt
          text="→"
          x={725}
          y={0}
          fontSize={36}
          fill={LIGHT_GREEN}
        />

        <Rect
          x={825}
          y={0}
          width={180}
          height={76}
          radius={12}
          fill={DARK_GREEN}
        />
        <Txt
          text="Naringenin"
          x={825}
          y={0}
          fontSize={26}
          fontFamily="Arial"
          fontWeight={700}
          fill={WHITE}
        />
      </Layout>

      {/* STRAIN S */}
      <Layout
        ref={strainS}
        layout={false}
        x={-380}
        y={-100}
        opacity={0}
      >
        <Txt
          text="STRAIN S"
          x={0}
          y={-50}
          fontSize={26}
          fontFamily="Arial"
          fontWeight={700}
          fill={SAKURA_PINK}
        />
        <Txt
          text="Naringenin"
          x={0}
          y={0}
          fontSize={24}
          fontFamily="Arial"
          fill={TEXT_COLOR}
        />
        <Txt
          text="→"
          x={100}
          y={0}
          fontSize={36}
          fill={SAKURA_PINK}
        />
        <Rect
          x={210}
          y={0}
          width={160}
          height={62}
          radius={10}
          fill={SAKURA_PINK}
          opacity={0.25}
          stroke={SAKURA_PINK}
          lineWidth={2}
        />
        <Txt
          text="Methylation"
          x={210}
          y={0}
          fontSize={21}
          fontFamily="Arial"
          fill={TEXT_COLOR}
        />
        <Txt
          text="→"
          x={320}
          y={0}
          fontSize={36}
          fill={SAKURA_PINK}
        />
        <Rect
          x={445}
          y={0}
          width={190}
          height={62}
          radius={10}
          fill={SAKURA_PINK}
        />
        <Txt
          text="Sakuranetin"
          x={445}
          y={0}
          fontSize={25}
          fontFamily="Arial"
          fontWeight={700}
          fill={WHITE}
        />
      </Layout>

      {/* STRAIN Q */}
      <Layout
        ref={strainQ}
        layout={false}
        x={-380}
        y={70}
        opacity={0}
      >
        <Txt
          text="STRAIN Q"
          x={0}
          y={-55}
          fontSize={26}
          fontFamily="Arial"
          fontWeight={700}
          fill={LIGHT_GREEN}
        />
        <Txt
          text="Naringenin"
          x={0}
          y={0}
          fontSize={24}
          fontFamily="Arial"
          fill={TEXT_COLOR}
        />
        <Txt
          text="→"
          x={100}
          y={0}
          fontSize={36}
          fill={LIGHT_GREEN}
        />
        <Rect
          x={205}
          y={0}
          width={150}
          height={62}
          radius={10}
          fill={LIGHT_GREEN}
          opacity={0.2}
          stroke={LIGHT_GREEN}
          lineWidth={2}
        />
        <Txt
          text="Enzyme 1"
          x={205}
          y={0}
          fontSize={20}
          fontFamily="Arial"
          fill={DARK_GREEN}
        />
        <Txt
          text="→"
          x={300}
          y={0}
          fontSize={36}
          fill={LIGHT_GREEN}
        />
        <Rect
          x={390}
          y={0}
          width={150}
          height={62}
          radius={10}
          fill={LIGHT_GREEN}
          opacity={0.2}
          stroke={LIGHT_GREEN}
          lineWidth={2}
        />
        <Txt
          text="Enzyme 2"
          x={390}
          y={0}
          fontSize={20}
          fontFamily="Arial"
          fill={DARK_GREEN}
        />
        <Txt
          text="→"
          x={485}
          y={0}
          fontSize={36}
          fill={LIGHT_GREEN}
        />
        <Rect
          x={575}
          y={0}
          width={170}
          height={62}
          radius={10}
          fill={LIGHT_GREEN}
          opacity={0.2}
          stroke={LIGHT_GREEN}
          lineWidth={2}
        />
        <Txt
          text="P450 + reductase"
          x={575}
          y={0}
          fontSize={17}
          fontFamily="Arial"
          fill={DARK_GREEN}
        />
        <Txt
          text="→"
          x={700}
          y={0}
          fontSize={36}
          fill={LIGHT_GREEN}
        />
        <Rect
          x={820}
          y={0}
          width={170}
          height={62}
          radius={10}
          fill={LIGHT_GREEN}
        />
        <Txt
          text="Quercetin"
          x={820}
          y={0}
          fontSize={25}
          fontFamily="Arial"
          fontWeight={700}
          fill={WHITE}
        />
      </Layout>

      {/* EGCG: TWO-STRAIN PATHWAY */}
      <Layout
        ref={strainE}
        layout={false}
        x={-380}
        y={245}
        opacity={0}
      >
        <Txt
          text="STRAIN E1"
          x={0}
          y={-55}
          fontSize={26}
          fontFamily="Arial"
          fontWeight={700}
          fill={DARK_GREEN}
        />
        <Txt
          text="Naringenin"
          x={0}
          y={0}
          fontSize={23}
          fontFamily="Arial"
          fill={TEXT_COLOR}
        />
        <Txt
          text="→"
          x={100}
          y={0}
          fontSize={36}
          fill={DARK_GREEN}
        />
        <Rect
          x={210}
          y={0}
          width={160}
          height={62}
          radius={10}
          fill={DARK_GREEN}
          opacity={0.15}
          stroke={DARK_GREEN}
          lineWidth={2}
        />
        <Txt
          text="E1 enzymes"
          x={210}
          y={0}
          fontSize={21}
          fontFamily="Arial"
          fill={DARK_GREEN}
        />
        <Txt
          text="→"
          x={320}
          y={0}
          fontSize={36}
          fill={DARK_GREEN}
        />
        <Rect
          x={445}
          y={0}
          width={170}
          height={62}
          radius={10}
          fill={DARK_GREEN}
        />
        <Txt
          text="Delphinidin"
          x={445}
          y={0}
          fontSize={23}
          fontFamily="Arial"
          fontWeight={700}
          fill={WHITE}
        />

        <Txt
          text="→"
          x={570}
          y={70}
          fontSize={36}
          fill={SAKURA_PINK}
        />
        <Txt
          text="STRAIN E2"
          x={690}
          y={70}
          fontSize={24}
          fontFamily="Arial"
          fontWeight={700}
          fill={SAKURA_PINK}
        />
        <Rect
          x={850}
          y={70}
          width={150}
          height={62}
          radius={10}
          fill={SAKURA_PINK}
          opacity={0.25}
          stroke={SAKURA_PINK}
          lineWidth={2}
        />
        <Txt
          text="E2 enzymes"
          x={850}
          y={70}
          fontSize={21}
          fontFamily="Arial"
          fill={TEXT_COLOR}
        />
        <Txt
          text="→"
          x={960}
          y={70}
          fontSize={36}
          fill={SAKURA_PINK}
        />
        <Rect
          x={1080}
          y={70}
          width={150}
          height={62}
          radius={10}
          fill={SAKURA_PINK}
        />
        <Txt
          text="EGCG"
          x={1080}
          y={70}
          fontSize={28}
          fontFamily="Arial"
          fontWeight={700}
          fill={WHITE}
        />
      </Layout>

      {/* SEPARATE L-THEANINE PATHWAY */}
      <Layout
        ref={strainT}
        layout={false}
        x={-370}
        y={-110}
        opacity={0}
      >
        <Rect
          x={1050}
          y={-160}
          width={380}
          height={230}
          radius={18}
          fill={SAKURA_PINK}
          opacity={0.12}
          stroke={SAKURA_PINK}
          lineWidth={3}
        />
        <Txt
          text="SEPARATE PATHWAY"
          x={1050}
          y={-235}
          fontSize={25}
          fontFamily="Arial"
          fontWeight={700}
          fill={SAKURA_PINK}
        />
        <Txt
          text="L-theanine"
          x={950}
          y={-165}
          fontSize={26}
          fontFamily="Arial"
          fill={TEXT_COLOR}
        />
        <Txt
          text="→"
          x={1050}
          y={-165}
          fontSize={38}
          fill={SAKURA_PINK}
        />
        <Rect
          x={1160}
          y={-165}
          width={170}
          height={70}
          radius={12}
          fill={SAKURA_PINK}
        />
        <Txt
          text="Theanine\nsynthetase"
          x={1160}
          y={-165}
          fontSize={21}
          fontFamily="Arial"
          fontWeight={700}
          fill={WHITE}
        />
        <Txt
          text="STRAIN T · MONOCULTURE"
          x={1050}
          y={-90}
          fontSize={20}
          fontFamily="Arial"
          fontWeight={700}
          fill={DARK_GREEN}
        />
      </Layout>

      {/* FINAL SUMMARY */}
      <Layout
        ref={summary}
        layout={false}
        x={0}
        y={420}
        opacity={0}
      >
        <Rect
          width={1050}
          height={95}
          radius={18}
          fill={DARK_GREEN}
        />
        <Txt
          text="12 PLASMIDS     ·     5 MODULES     ·     6 STRAINS"
          fontSize={32}
          fontFamily="Arial"
          fontWeight={700}
          fill={WHITE}
        />
      </Layout>
    </Layout>,
  );

  video().play();

  // -------------------------------------------------------
  // TIMELINE
  // Adjust these waits to match the exact narration timing.
  // -------------------------------------------------------

  // 1. "naringenin" — switch to white and reveal the shared module.
  yield* waitFor(2);

  yield* all(
    whiteBackground().opacity(1, 0.6, easeInOutCubic),
    diagram().opacity(1, 0.6, easeInOutCubic),
  );

  yield* sharedModule().opacity(1, 0.8, easeOutCubic);

  // Introduce the pathway branches as the narration describes them.
  yield* waitFor(1);
  yield* strainS().opacity(1, 0.6, easeOutCubic);

  yield* waitFor(1);
  yield* strainQ().opacity(1, 0.6, easeOutCubic);

  yield* waitFor(1);
  yield* strainE().opacity(1, 0.6, easeOutCubic);

  // 2. "From there, each strain follows a different route"
  // Hide the diagram and return to the original presentation video.
  yield* waitFor(2);

  yield* all(
    whiteBackground().opacity(0, 0.6, easeInOutCubic),
    diagram().opacity(0, 0.6, easeInOutCubic),
  );

  // 3. "Strain S" — resume the same diagram without rebuilding it.
  yield* waitFor(2);

  yield* all(
    whiteBackground().opacity(1, 0.6, easeInOutCubic),
    diagram().opacity(1, 0.6, easeInOutCubic),
  );

  // 4. "L-theanine" — zoom out and reveal the separate pathway.
  yield* waitFor(15);

  yield* all(
    diagram().scale(0.78, 0.9, easeInOutCubic),
    strainT().opacity(1, 0.8, easeOutCubic),
  );

  // 5. Final summary.
  yield* waitFor(5);

  yield* summary().opacity(1, 0.8, easeOutCubic);

  // Hold the finished diagram.
  yield* waitFor(5);
});
