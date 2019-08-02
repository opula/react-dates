import moment from 'moment/min/moment-with-locales.min';

const momentPool = new Map();
export default function getPooledMoment(dayString) {
  if (!momentPool.has(dayString)) {
    momentPool.set(dayString, moment(dayString));
  }

  return momentPool.get(dayString);
}
