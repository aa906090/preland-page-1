import styles from './glowing-title.module.css';
const GlowingTitle = ({ text = 'Твоя удача уже рядом!' }: { text?: string }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{text}</h1>
    </div>
  );
};

export default GlowingTitle;
