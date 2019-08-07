import moment from 'moment';
import 'moment/locale/fr';
import 'moment/locale/it';
import 'moment/locale/es';
import 'moment/locale/pl';
import 'moment/locale/ru';
import 'moment/locale/pt';
import 'moment/locale/nl';

function getBlankDaysBeforeFirstDay(firstDayOfMonth, firstDayOfWeek) {
  const weekDayDiff = firstDayOfMonth.day() - firstDayOfWeek;
  return (weekDayDiff + 7) % 7;
}

export default function getNumberOfCalendarMonthWeeks(
  month,
  firstDayOfWeek = moment.localeData().firstDayOfWeek(),
) {
  const firstDayOfMonth = month.clone().startOf('month');
  const numBlankDays = getBlankDaysBeforeFirstDay(firstDayOfMonth, firstDayOfWeek);
  return Math.ceil((numBlankDays + month.daysInMonth()) / 7);
}
