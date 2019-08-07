import moment from 'moment';
import 'moment/locale/fr';
import 'moment/locale/it';
import 'moment/locale/es';
import 'moment/locale/pl';
import 'moment/locale/ru';
import 'moment/locale/pt';
import 'moment/locale/nl';

import { DISPLAY_FORMAT, ISO_FORMAT } from '../constants';

export default function toMomentObject(dateString, customFormat) {
  const dateFormats = customFormat
    ? [customFormat, DISPLAY_FORMAT, ISO_FORMAT]
    : [DISPLAY_FORMAT, ISO_FORMAT];

  const date = moment(dateString, dateFormats, true);
  return date.isValid() ? date.hour(12) : null;
}
