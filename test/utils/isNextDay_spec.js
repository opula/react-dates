import moment from 'moment';
import 'moment/locale/fr';
import 'moment/locale/it';
import 'moment/locale/es';
import 'moment/locale/pl';
import 'moment/locale/ru';
import 'moment/locale/pt';
import 'moment/locale/nl';
import { expect } from 'chai';

import isNextDay from '../../src/utils/isNextDay';

const today = moment();
const tomorrow = moment().add(1, 'days');

describe('isNextDay', () => {
  it('returns true if second argument is the next day after the first', () => {
    expect(isNextDay(today, tomorrow)).to.equal(true);
  });

  it('returns false if the second arg is not the next day after the first', () => {
    expect(isNextDay(tomorrow, today)).to.equal(false);
  });

  describe('non-moment arguments', () => {
    it('is false if first argument is not a moment object', () => {
      expect(isNextDay(null, today)).to.equal(false);
    });

    it('is false if second argument is not a moment object', () => {
      expect(isNextDay(today, 'foo')).to.equal(false);
    });
  });
});
