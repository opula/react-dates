import moment from 'moment';
import 'moment/locale/fr';
import 'moment/locale/it';
import 'moment/locale/es';
import 'moment/locale/pl';
import 'moment/locale/ru';
import 'moment/locale/pt';
import 'moment/locale/nl';

const momentPool = new Map();
export default function getPooledMoment(dayString) {
  if (!momentPool.has(dayString)) {
    momentPool.set(dayString, moment(dayString));
  }

  return momentPool.get(dayString);
}
