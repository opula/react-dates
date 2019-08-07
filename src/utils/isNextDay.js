import moment from 'moment';
import 'moment/locale/fr';
import 'moment/locale/it';
import 'moment/locale/es';
import 'moment/locale/pl';
import 'moment/locale/ru';
import 'moment/locale/pt';
import 'moment/locale/nl';

import isSameDay from './isSameDay';

export default function isNextDay(a, b) {
  if (!moment.isMoment(a) || !moment.isMoment(b)) return false;
  const nextDay = moment(a).add(1, 'day');
  return isSameDay(nextDay, b);
}
