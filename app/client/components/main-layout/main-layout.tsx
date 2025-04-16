import { PropsWithChildren } from 'react';

import styles from './main-layout.module.css';
const MainLayout = ({ children, testId = 'main-layout' }: PropsWithChildren<{ testId?: string }>) => {
  return (
    <div className={styles.container} data-testid={testId}>
      {children}
    </div>
  );
};

export default MainLayout;
