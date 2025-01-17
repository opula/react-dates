import moment from 'moment';
import 'moment/locale/fr';
import 'moment/locale/it';
import 'moment/locale/es';
import 'moment/locale/pl';
import 'moment/locale/ru';
import 'moment/locale/pt';
import 'moment/locale/nl';

import isBeforeDay from './isBeforeDay';
import isAfterDay from './isAfterDay';
import toISOMonthString from './toISOMonthString';

const startCacheOutsideDays = new Map();
const endCacheOutsideDays = new Map();

const startCacheInsideDays = new Map();
const endCacheInsideDays = new Map();

export default function isDayVisible(day, month, numberOfMonths, enableOutsideDays) {
  if (!moment.isMoment(day)) return false;

  // Cloning is a little expensive, so we want to do it as little as possible.

  const startKey = toISOMonthString(month);
  // eslint-disable-next-line prefer-template
  const endKey = startKey + '+' + numberOfMonths;

  if (enableOutsideDays) {
    if (!startCacheOutsideDays.has(startKey)) {
      startCacheOutsideDays.set(startKey, month.clone().startOf('month').startOf('week'));
    }

    if (isBeforeDay(day, startCacheOutsideDays.get(startKey))) return false;

    if (!endCacheOutsideDays.has(endKey)) {
      endCacheOutsideDays.set(
        endKey,
        month.clone().endOf('week').add(numberOfMonths - 1, 'months').endOf('month')
          .endOf('week'),
      );
    }

    return !isAfterDay(day, endCacheOutsideDays.get(endKey));
  }

  // !enableOutsideDays

  if (!startCacheInsideDays.has(startKey)) {
    startCacheInsideDays.set(startKey, month.clone().startOf('month'));
  }

  if (isBeforeDay(day, startCacheInsideDays.get(startKey))) return false;

  if (!endCacheInsideDays.has(endKey)) {
    endCacheInsideDays.set(
      endKey,
      month.clone().add(numberOfMonths - 1, 'months').endOf('month'),
    );
  }

  return !isAfterDay(day, endCacheInsideDays.get(endKey));
}
