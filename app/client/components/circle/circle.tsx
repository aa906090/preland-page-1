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
    <span className={cn(styles.poligon, 'text-4xl text-green-100 rotate-[65deg]')}>text</span>
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
    </div>
  );
};

export default Circle;
