import cn from 'classnames';

import HeaderLogo from '~/client/assets/images/header-logo.png';

import styles from './header.module.css';
const Header = () => {
  return (
    <header className='flex items-center  max-h-40 text-green-100'>
      <div className={styles.headerItem}>
        <div className='max-w-32'>
          <img className='w-full object-cover' src={HeaderLogo} alt='logo' />
        </div>
      </div>
      <div className={cn(styles.headerItem, styles.centerItem)}>
        <div className='py-6'>
          <span className='px-6'>YouTube</span>
        </div>
        <div className='py-6'>
          <span className='border-l border-amber-100 px-6'>YouTube</span>
        </div>
        <div className='py-6'>
          <span className='border-l border-amber-100 px-6'>YouTube</span>
        </div>
        <div className='py-6'>
          <span className='border-l border-amber-100 px-6'>YouTube</span>
        </div>
      </div>
      <div className={styles.headerItem}>some logic</div>
    </header>
  );
};

export default Header;
