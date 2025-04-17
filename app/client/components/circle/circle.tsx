import { useEffect, useRef } from 'react';
import cn from 'classnames';

import ArrowImage from '~/client/assets/images/circle-arrow.png';
import CircleClearImage from '~/client/assets/images/clear wheel 2-p.png';

import styles from './circle.module.css';

function getRandomInt(max = 8) {
  return Math.floor(Math.random() * max);
}

const Trap = ({ rotation = 0 }: { rotation: number }) => (
  <div className={cn(`rotate-[${rotation}deg]`, styles.poligonContainer)}>
    <div className={styles.poligon}>
      <span>text</span>
    </div>
    <div className={cn(styles.border)} />
  </div>
);

const Circle = () => {
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let timeout = undefined;
    if (ref?.current) {
      timeout = setTimeout(() => {
        ref.current.style.transform = `rotate(${2100 + getRandomInt(45) + 45 * getRandomInt(8)}deg)`;
        ref.current.style.transition = 'transform 3s ease';
      }, 1000);
    }
    return () => clearTimeout(timeout);
  }, []);
  const handleRotata = () => {
    console.log('ref.current');
  };
  return (
    <div className={styles.container}>
      <div className={styles.wheelContainer}>
        <img src={ArrowImage} className={styles.arrowImage} alt='Arrow' />

        <div className={styles.circleContainer} ref={ref} onTransitionEnd={handleRotata}>
          <div className='absolute inset-0 rounded-full border-2 border-gray-400 invisible' />
          <img className={styles.circleImage} src={CircleClearImage} alt='Circle' />
          <div className={styles.itemsContainer}>
            {Array.from(Array(8).keys()).map(i => (
              <Trap key={i} rotation={45 * i} />
            ))}
          </div>
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
