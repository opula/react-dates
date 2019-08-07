import moment from 'moment';
import 'moment/locale/fr';
import 'moment/locale/it';
import 'moment/locale/es';
import 'moment/locale/pl';
import 'moment/locale/ru';
import 'moment/locale/pt';
import 'moment/locale/nl';

import isAfterDay from './isAfterDay';

export default function isInclusivelyBeforeDay(a, b) {
  if (!moment.isMoment(a) || !moment.isMoment(b)) return false;
  return !isAfterDay(a, b);
}
