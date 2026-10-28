
import {makeScene2D, Video, Rect, Img, Txt} from '@motion-canvas/2d';
import {all, createRef, waitFor, easeInOutCubic, easeOutCubic} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  const video = createRef<Video>();
  const background = createRef<Rect>();
  const logo = createRef<Img>();
  const title = createRef<Txt>();
  const descriptionStart = createRef<Txt>();
  const sakura = createRef<Txt>();
  const andTea = createRef<Txt>();
  const tea = createRef<Txt>();
  const therapeutic = createRef<Txt>();

  const green = '#83B88B';
  const pink = '#C85D83';
  const white = '#FFFFFF';

  view.add(
    <Video
      ref={video}
      src={'/pres1.mp4'}
      width={1920}
      height={1080}
      loop={false}
    />,
  );

  view.add(
    <Rect
      ref={background}
      width={1920}
      height={1080}
      fill={green}
      opacity={0}
    />,
  );

  view.add(
    <Img
      ref={logo}
      src={'/logo.png'}
      width={700}
      x={-1350}
      y={0}
      opacity={0}
    />,
  );

  view.add(
    <Txt
      ref={title}
      text={'Project 茶(Sa)kure-it-all'}
      fontFamily={'Arial'}
      fontSize={88}
      fontWeight={700}
      fill={white}
      width={1100}
      textAlign={'center'}
      x={1350}
      y={-280}
      opacity={0}
    />,
  );

  // First description line
  view.add(
    <Txt
      ref={descriptionStart}
      text={'Improving the Production of'}
      fontFamily={'Arial'}
      fontSize={43}
      fill={white}
      width={1000}
      textAlign={'center'}
      x={300}
      y={65}
      opacity={0}
    />,
  );

  // Centered second line: Sakura + and + Tea-derived
  view.add(
    <Txt
      ref={sakura}
      text={'Sakura'}
      fontFamily={'Arial'}
      fontSize={40}
      fontWeight={700}
      fill={pink}
      x={130}
      y={130}
      opacity={0}
    />,
  );

  view.add(
    <Txt
      ref={andTea}
      text={'and'}
      fontFamily={'Arial'}
      fontSize={40}
      fill={white}
      x={275}
      y={130}
      opacity={0}
    />,
  );

  view.add(
    <Txt
      ref={tea}
      text={'Tea-derived'}
      fontFamily={'Arial'}
      fontSize={40}
      fontWeight={700}
      fill={'#245C37'}
      x={450}
      y={130}
      opacity={0}
    />,
  );

  // Third description line
  view.add(
    <Txt
      ref={therapeutic}
      text={'Therapeutic Molecules.'}
      fontFamily={'Arial'}
      fontSize={40}
      fill={white}
      width={800}
      textAlign={'center'}
      x={300}
      y={190}
      opacity={0}
    />,
  );

  // Start the video and preserve its playback
  video().play();

  yield* waitFor(34);

  // Fade to the end-card background
  yield* background().opacity(1, 1.2, easeInOutCubic);

  // Reveal logo and project title
  yield* all(
    logo().x(-520, 1.2, easeOutCubic),
    logo().opacity(1, 0.8),
    title().x(300, 1.2, easeOutCubic),
    title().y(-100, 1.2, easeOutCubic),
    title().opacity(1, 0.8),
  );

  // Reveal the description
  yield* all(
    descriptionStart().opacity(1, 0.7, easeInOutCubic),
    sakura().opacity(1, 0.7, easeInOutCubic),
    andTea().opacity(1, 0.7, easeInOutCubic),
    tea().opacity(1, 0.7, easeInOutCubic),
    therapeutic().opacity(1, 0.7, easeInOutCubic),
  );

  yield* waitFor(5);
});
