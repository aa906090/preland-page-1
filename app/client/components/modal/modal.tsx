import GlowingTitle from '~/client/components/blog-page/components/glowing-title/glowing-title';
import TakePrize from '~/client/components/blog-page/components/take-prize/take-prize';

import styles from './modal.module.css';
const Modal = ({ prize = '', isOpen = true, onClose }: { prize: string; isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className={styles.container}>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <span className={styles.headerText}>Поздравляем!</span>
          <button className={styles.closeButton} onClick={onClose}>
            x
          </button>
        </div>
        <div className={styles.modalBody}>
          <GlowingTitle text={'Вы выиграли'} />
          <GlowingTitle text={prize} />

          <TakePrize />
        </div>
      </div>
    </div>
  );
};

export default Modal;
