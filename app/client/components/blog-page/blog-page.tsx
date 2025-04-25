import { useState } from 'react';

import MainBg from '~/client/assets/images/main-bg.jpg';
import GlowingTitle from '~/client/components/blog-page/components/glowing-title/glowing-title';
import TakePrize from '~/client/components/blog-page/components/take-prize/take-prize';
import Circle from '~/client/components/circle/circle';
import Modal from '~/client/components/modal/modal';

import styles from './blog-page.module.css';

const BlogPage = ({ redirectUrl }: { redirectUrl: string }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [prize, setPrize] = useState('');

  const handleRedirect = () => {
    window.location.replace(redirectUrl);
  };

  const toggleModal = (state = false) => {
    setModalOpen(state);
  };

  const onRotationEnd = (prizeText: string) => {
    setPrize(prizeText);
    toggleModal(true);
  };

  return (
    <main className='mx-auto font-sans'>
      <div className='relative min-h-screen bg-black'>
        <img className='absolute inset-0 w-full h-full object-cover' src={MainBg} alt='background' />
        <div className={styles.content}>
          <GlowingTitle />
          <Circle openModal={prizeText => onRotationEnd(prizeText)} />
          <TakePrize onClick={handleRedirect} />
        </div>
      </div>
      <Modal
        isOpen={modalOpen}
        prize={prize}
        onClose={() => {
          toggleModal();
          handleRedirect();
        }}
      />
    </main>
  );
};

export default BlogPage;
