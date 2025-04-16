import { LOG_LEVEL } from '~/common/constants/logging';

export type LOG_LEVEL_T = (typeof LOG_LEVEL)[keyof typeof LOG_LEVEL];
