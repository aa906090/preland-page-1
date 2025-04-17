import MainBg from '~/client/assets/images/main-bg.jpg';
import ManWithLaptop from '~/client/assets/images/man-with-laptop.png';
import GlowingTitle from '~/client/components/blog-page/components/glowing-title/glowing-title';
import TakePrize from '~/client/components/blog-page/components/take-prize/take-prize';
import Circle from '~/client/components/circle/circle';
import Header from '~/client/components/header/header';

import styles from './blog-page.module.css';
const BlogPage = ({ redirectUrl }: { redirectUrl: string }) => {
  const onCLick = () => {
    // const logger = new Logger(new WinstonLogger());
    // logger.log('hello');
    window.location.replace(redirectUrl);
  };
  return (
    <main className='mx-auto font-sans'>
      <div className='relative min-h-screen bg-black'>
        <img className='absolute inset-0 w-full h-full object-cover' src={MainBg} alt='background' />
        <div className={styles.content}>
          <GlowingTitle />
          {/*<Header />*/}
          <Circle />
          <TakePrize />
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
