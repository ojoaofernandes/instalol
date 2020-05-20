import * as utils from '../../src/utils';

describe('Utils', () => {
  describe('#isString(str)', () => {
    context('should return false if', () => {
      it('the type of the parameter is undefined', () => {
        expect(utils.isString(undefined)).to.be.false;
      });

      it('the type of the parameter is null', () => {
        expect(utils.isString(null)).to.be.false;
      });

      it('the type of the parameter is boolean', () => {
        expect(utils.isString(false)).to.be.false;
      });

      it('the type of the parameter is object', () => {
        expect(utils.isString({})).to.be.false;
      });
    });

    it('should return true if the type of the parameter is string', () => {
      expect(utils.isString('')).to.be.true;
    });
  });

  describe('#isLengthBetween(str, min, max)', () => {
    context('should return false if', () => {
      it('the type of the parameter is not string', () => {
        expect(utils.isLengthBetween(undefined, 0, 1)).to.be.false;
      });

      it('the length of the parameter is less than min', () => {
        expect(utils.isLengthBetween('', 3, 6)).to.be.false;
      });

      it('the length of the parameter is greater than max', () => {
        expect(utils.isLengthBetween('qwertyu', 3, 6)).to.be.false;
      });
    });

    context('should return true if', () => {
      it('the length of the parameter is equal to min', () => {
        expect(utils.isLengthBetween('qwe', 3, 6)).to.be.true;
      });

      it('the length of the parameter is equal to max', () => {
        expect(utils.isLengthBetween('qwerty', 3, 6)).to.be.true;
      });

      it('the length of the parameter is between min and max', () => {
        expect(utils.isLengthBetween('qwer', 3, 6)).to.be.true;
      });
    });
  });
});
