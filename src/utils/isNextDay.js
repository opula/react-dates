import moment from 'moment/min/moment-with-locales.min';

import isSameDay from './isSameDay';

export default function isNextDay(a, b) {
  if (!moment.isMoment(a) || !moment.isMoment(b)) return false;
  const nextDay = moment(a).add(1, 'day');
  return isSameDay(nextDay, b);
}
