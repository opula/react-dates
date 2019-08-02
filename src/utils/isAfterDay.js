import moment from 'moment/min/moment-with-locales.min';

import isBeforeDay from './isBeforeDay';
import isSameDay from './isSameDay';

export default function isAfterDay(a, b) {
  if (!moment.isMoment(a) || !moment.isMoment(b)) return false;
  return !isBeforeDay(a, b) && !isSameDay(a, b);
}
