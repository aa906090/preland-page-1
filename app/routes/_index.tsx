import { useLoaderData } from 'react-router';
import type { LoaderFunction, MetaFunction } from '@remix-run/node';
import { isbot } from 'isbot';

import BlogPage from '~/client/components/blog-page/blog-page';
import logger from '~/server/logger/default-logger';
export const meta: MetaFunction = () => {
  return [{ title: 'Template init' }, { name: 'description', content: 'Welcome to Our Nice Landing!' }];
};

type LoaderResponse = {
  isCloaked: boolean;
  redirectUrl: string;
};

function isBot(ua: string) {
  return /bot|crawl|slurp|spider|facebook|discord|google/i.test(ua) || isbot(ua);
}

export const loader: LoaderFunction = async ({ request }): Promise<LoaderResponse> => {
  const userAgent = request.headers.get('user-agent') || '';
  const referer = request.headers.get('referer') || '';
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('cf-connecting-ip') || 'unknown';

  logger.info('Request Log', { userAgent, ip, referer });

  const isCloaked = isBot(userAgent);
  if (isCloaked) {
    logger.error('Bot Came In Log', { userAgent, ip, referer });
  }

  return { isCloaked, redirectUrl: process.env.REDIRECT_HOST as string };
};

export default function Index() {
  const { isCloaked, redirectUrl } = useLoaderData() as LoaderResponse;
  console.log(isCloaked, redirectUrl);
  if (isCloaked) {
    return <div>hello bot</div>;
  }
  return <BlogPage redirectUrl={redirectUrl} />;
}
