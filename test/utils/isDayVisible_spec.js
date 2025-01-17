import moment from 'moment';
import 'moment/locale/fr';
import 'moment/locale/it';
import 'moment/locale/es';
import 'moment/locale/pl';
import 'moment/locale/ru';
import 'moment/locale/pt';
import 'moment/locale/nl';
import { expect } from 'chai';

import isDayVisible from '../../src/utils/isDayVisible';

describe('#isDayVisible', () => {
  it('returns true if arg is in visible months', () => {
    const test = moment().add(3, 'months');
    const currentMonth = moment().add(2, 'months');
    expect(isDayVisible(test, currentMonth, 2)).to.equal(true);
  });

  it('returns false if arg is before first month', () => {
    const test = moment().add(1, 'months');
    const currentMonth = moment().add(2, 'months');
    expect(isDayVisible(test, currentMonth, 2)).to.equal(false);
  });

  it('returns false if arg is after last month', () => {
    const test = moment().add(4, 'months');
    const currentMonth = moment().add(2, 'months');
    expect(isDayVisible(test, currentMonth, 2)).to.equal(false);
  });

  describe('enableOutsideDays', () => {
    it('returns true if arg is in partial week before visible months', () => {
      const test = moment('2019-04-30');
      const currentMonth = moment('2019-05-01');
      expect(isDayVisible(test, currentMonth, 1, false)).to.equal(false);
      expect(isDayVisible(test, currentMonth, 1, true)).to.equal(true);
    });

    it('returns true if arg is in partial week after visible months', () => {
      const test = moment('2019-06-01');
      const currentMonth = moment('2019-05-01');
      expect(isDayVisible(test, currentMonth, 1, false)).to.equal(false);
      expect(isDayVisible(test, currentMonth, 1, true)).to.equal(true);
    });

    it('returns false if arg is before partial week before visible months', () => {
      const test = moment('2019-04-27');
      const currentMonth = moment('2019-05-01');
      expect(isDayVisible(test, currentMonth, 1, true)).to.equal(false);
    });

    it('returns false if arg is after partial week after visible months', () => {
      const test = moment('2019-06-03');
      const currentMonth = moment('2019-05-01');
      expect(isDayVisible(test, currentMonth, 1, true)).to.equal(false);
    });
  });
});
