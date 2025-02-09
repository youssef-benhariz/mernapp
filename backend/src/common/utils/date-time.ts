import { add } from 'date-fns';
export const ONE_DAY_IN_MS = 24*60*60*1000;
export const thirtyDaysFromNow = ():Date => new Date(Date.now() + 30*24*60*60*1000);