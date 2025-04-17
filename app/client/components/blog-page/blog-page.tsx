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
      <h1 className='text-3xl font-bold mb-4'>Как я выиграл 320€ за 10 минут</h1>
      <img src={ManWithLaptop} alt='man-with-laptop' className='rounded-lg mb-4' />
      <p className='mb-4 text-gray-700'>
        Сейчас сложно найти способ, как можно действительно заработать в интернете. Но недавно я случайно наткнулся на
        платформу, которая действительно выплачивает. Как раз с ее помощью мне удалось выиграть 320 евро за 10 минут.
      </p>
      <p className='mb-6 text-gray-700'>
        Я зарегистрировался, и мне дали несколько бесплатных попыток. Воспользовался ними просто из любопытства и не
        поверил своим глазам, когда увидел сумму выигрыша. После этого я продолжил, и с удивительным постоянством, доход
        повторялся снова и снова...
      </p>
      <div className='bg-blue-100 p-4 rounded-lg text-center mb-4'>
        <p className='text-sm font-medium text-gray-700'>Бонус для новых пользователей</p>
        <p className='text-3xl font-bold my-2'>120 бесплатных вращений</p>
        <button className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition' onClick={onCLick}>
          Попробуй сейчас
        </button>
      </div>
    </main>
  );
};

export default BlogPage;
