import moment from 'moment';
import 'moment/locale/fr';
import 'moment/locale/it';
import 'moment/locale/es';
import 'moment/locale/pl';
import 'moment/locale/ru';
import 'moment/locale/pt';
import 'moment/locale/nl';
import { expect } from 'chai';

import toLocalizedDateString from '../../src/utils/toLocalizedDateString';
import { ISO_FORMAT } from '../../src/constants';

describe('toLocalizedDateString', () => {
  it('returns null for falsy argument', () => {
    expect(toLocalizedDateString()).to.equal(null);
  });

  it('converts moment object to localized date string', () => {
    const testDate = moment('1991-07-13');
    const dateString = toLocalizedDateString(testDate);
    expect(dateString).to.equal(testDate.format('L'));
  });

  it('converts iso date string to localized date string', () => {
    const testDate = moment('1991-07-13');
    const dateString = toLocalizedDateString(testDate.format(ISO_FORMAT));
    expect(dateString).to.equal(testDate.format('L'));
  });

  it('localized date strings stay the same', () => {
    const testDate = moment('1991-07-13');
    const dateString = toLocalizedDateString(testDate.format('L'));
    expect(dateString).to.equal(testDate.format('L'));
  });

  it('converts custom format date strings with format passed in', () => {
    const testDate = moment('1991-07-13');
    const dateString = toLocalizedDateString(testDate.format('YYYY---DD/MM'), 'YYYY---DD/MM');
    expect(dateString).to.equal(testDate.format('L'));
  });
});
