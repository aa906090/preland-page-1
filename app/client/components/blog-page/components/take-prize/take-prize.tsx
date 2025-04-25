import styles from './take-prize.module.css';
const TakePrize = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className={styles.container}>
      {/*  @ts-ignore*/}
      <button className={styles.button} onClick={onClick}>
        Забрать свой приз
      </button>
    </div>
  );
};

export default TakePrize;
