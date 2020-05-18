import test from '../src/index';

describe('Index', () => {
  describe('#test()', () => {
    it('should return 1', () => {
      expect(test()).to.equal(1);
    });
  });
});
