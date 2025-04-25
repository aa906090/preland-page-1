import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';

import ArrowImage from '~/client/assets/images/circle-arrow.png';
import CircleClearImage from '~/client/assets/images/wheel-with-text.png';
import { getRandomInt } from '~/client/utils/get-random-int';

import styles from './circle.module.css';

const Trap = ({ rotation = 0 }: { rotation: number }) => (
  <div className={cn(`rotate-[${rotation}deg]`, styles.poligonContainer)}>
    <div className={styles.poligon}>
      <span>text</span>
    </div>
    <div className={cn(styles.border)} />
  </div>
);

const textArray = [
  'Бонус 120%',
  'Бонус 100%',
  '1 000UAH',
  '170 000UAH',
  '25 Фриспинов',
  '60UAH',
  '600 Фриспинов',
  'Бонус 110%',
];

const DEG = 360;
const ROTATIONS = 6;
const ONE_ITEM_ANGLE = DEG / textArray.length;

type Props = { openModal: (text: string) => void; testId?: string };

const Circle = ({ openModal, testId = 'circle' }: Props) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let timeout = undefined;
    if (ref?.current) {
      timeout = setTimeout(() => {
        const move = getRandomInt(ONE_ITEM_ANGLE);
        const position = getRandomInt(textArray.length);
        const rotations = DEG * ROTATIONS + move + ONE_ITEM_ANGLE * position;

        ref.current.style.transform = `rotate(${rotations}deg)`;
        ref.current.style.transition = 'transform 3s ease';
        setCurrentPosition(Math.floor((DEG - (rotations % DEG)) / ONE_ITEM_ANGLE));
      }, 1000);
    }
    return () => clearTimeout(timeout);
  }, []);

  const handleRotate = () => {
    if (!ref.current) {
      return;
    }
    const move = getRandomInt(ONE_ITEM_ANGLE);
    const position = getRandomInt(textArray.length);
    const rotations = DEG * ROTATIONS + move + ONE_ITEM_ANGLE * position;

    ref.current.style.transform = `rotate(${rotations}deg)`;
    ref.current.style.transition = 'transform 3s ease';
    setCurrentPosition(Math.floor((DEG - (rotations % DEG)) / ONE_ITEM_ANGLE));
  };

  const onRotationEnd = () => {
    openModal(textArray[currentPosition]);
  };
  return (
    <div className={styles.container} data-testid={testId}>
      <div onClick={handleRotate} />
      <div className={styles.wheelContainer}>
        <img src={ArrowImage} className={styles.arrowImage} alt='Arrow' />

        <div className={styles.circleContainer} ref={ref} onTransitionEnd={onRotationEnd}>
          <div className='absolute inset-0 rounded-full border-2 border-gray-400 invisible' />
          <img className={styles.circleImage} src={CircleClearImage} alt='Circle' />
          {/*<div className={styles.itemsContainer}>*/}
          {/*  {Array.from(Array(8).keys()).map(i => (*/}
          {/*    <Trap key={i} rotation={45 * i} />*/}
          {/*  ))}*/}
          {/*</div>*/}
        </div>
      </div>
      {/* Don't know why, but working only with this shit todo investigate*/}
      {/*<div className='relative w-[300px] h-[300px] mx-auto my-10'>*/}
      {/*  <div className='absolute inset-0 rounded-full border-2 border-gray-400' />*/}

      {/*  <div className='absolute w-full h-full'>*/}
      {/*    <div className='absolute left-1/2 top-1/2 origin-top rotate-[0deg]'>*/}
      {/*      <div className='w-10 h-20 bg-orange-500 clip-trapezoid mx-auto' />*/}
      {/*    </div>*/}
      {/*    <div className='absolute left-1/2 top-1/2 origin-top rotate-[45deg]'>*/}
      {/*      <div className='w-10 h-20 bg-orange-500 clip-trapezoid mx-auto' />*/}
      {/*    </div>*/}
      {/*    <div className='absolute left-1/2 top-1/2 origin-top rotate-[90deg]'>*/}
      {/*      <div className='w-10 h-20 bg-orange-500 clip-trapezoid mx-auto' />*/}
      {/*    </div>*/}
      {/*    <div className='absolute left-1/2 top-1/2 origin-top rotate-[135deg]'>*/}
      {/*      <div className='w-10 h-20 bg-orange-500 clip-trapezoid mx-auto' />*/}
      {/*    </div>*/}
      {/*    <div className='absolute left-1/2 top-1/2 origin-top rotate-[180deg]'>*/}
      {/*      <div className='w-10 h-20 bg-orange-500 clip-trapezoid mx-auto' />*/}
      {/*    </div>*/}
      {/*    <div className='absolute left-1/2 top-1/2 origin-top rotate-[225deg]'>*/}
      {/*      <div className='w-10 h-20 bg-orange-500 clip-trapezoid mx-auto' />*/}
      {/*    </div>*/}
      {/*    <div className='absolute left-1/2 top-1/2 origin-top rotate-[270deg]'>*/}
      {/*      <div className='w-10 h-20 bg-orange-500 clip-trapezoid mx-auto' />*/}
      {/*    </div>*/}
      {/*    <div className='absolute left-1/2 top-1/2 origin-top rotate-[315deg]'>*/}
      {/*      <div className='w-10 h-20 bg-orange-500 clip-trapezoid mx-auto' />*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};

export default Circle;
