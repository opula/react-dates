import moment from 'moment';
import 'moment/locale/fr';
import 'moment/locale/it';
import 'moment/locale/es';
import 'moment/locale/pl';
import 'moment/locale/ru';
import 'moment/locale/pt';
import 'moment/locale/nl';
import { expect } from 'chai';

import isInclusivelyAfterDay from '../../src/utils/isInclusivelyAfterDay';

const today = moment();
const tomorrow = moment().add(1, 'days');

describe('isInclusivelyAfterDay', () => {
  it('returns true if first argument is after the second', () => {
    expect(isInclusivelyAfterDay(tomorrow, today)).to.equal(true);
  });

  it('returns true for same day arguments', () => {
    expect(isInclusivelyAfterDay(today, today)).to.equal(true);
  });

  it('returns false if first argument is before the second', () => {
    expect(isInclusivelyAfterDay(today, tomorrow)).to.equal(false);
  });

  describe('non-moment object arguments', () => {
    it('is false if first argument is not a moment object', () => {
      expect(isInclusivelyAfterDay(null, today)).to.equal(false);
    });

    it('is false if second argument is not a moment object', () => {
      expect(isInclusivelyAfterDay(today, 'foo')).to.equal(false);
    });
  });
});
