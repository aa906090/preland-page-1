import styles from './glowing-title.module.css';
const GlowingTitle = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Твоя удача уже рядом!</h1>
    </div>
  );
};

export default GlowingTitle;
