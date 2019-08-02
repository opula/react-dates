import moment from 'moment/min/moment-with-locales.min';

import isBeforeDay from './isBeforeDay';

export default function isInclusivelyAfterDay(a, b) {
  if (!moment.isMoment(a) || !moment.isMoment(b)) return false;
  return !isBeforeDay(a, b);
}
