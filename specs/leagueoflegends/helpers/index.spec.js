import * as helpers from '../../../src/leagueoflegends/helpers';
import * as utils from '../../../src/utils';

describe('LOL - Helper Functions', () => {
  const validSummonerName = 'qwerty';
  const validAccountId = 'zMZ45BJ1o_acCFqVSnG-vzh1ZDe53uweNAD4JriPyy-TQkr1PfJr51-1';

  afterEach(() => {
    sinon.restore();
  });

  describe('#validateSummonerName', () => {
    it('should call utils#isString with the correct parameter', () => {
      const spy = sinon.spy(utils, 'isString');
      helpers.validateSummonerName(validSummonerName);
      expect(spy).to.have.been.calledWith(validSummonerName);
    });

    it('should throw TypeError if utils#isString returns false', () => {
      sinon.stub(utils, 'isString').returns(false);
      expect(helpers.validateSummonerName).to.throw(TypeError);
    });

    it('should not throw TypeError if utils#isString returns true', () => {
      sinon.stub(utils, 'isString').returns(true);
      expect(helpers.validateSummonerName).not.to.throw(TypeError);
    });

    it('should call utils#isLengthBetween with the correct parameters', () => {
      const spy = sinon.spy(utils, 'isLengthBetween');
      helpers.validateSummonerName(validSummonerName);
      expect(spy).to.have.been.calledWith(
        validSummonerName,
        helpers.NAME_MIN_LENGTH,
        helpers.NAME_MAX_LENGTH,
      );
    });

    it('should throw RangeError if utils#isLengthBetween returns false', () => {
      sinon.stub(utils, 'isString').returns(true);
      sinon.stub(utils, 'isLengthBetween').returns(false);
      expect(helpers.validateSummonerName).to.throw(RangeError);
    });

    it('should not throw RangeError if utils#isLengthBetween returns true',
      () => {
        sinon.stub(utils, 'isLengthBetween').returns(true);
        expect(helpers.validateSummonerName).not.to.throw(RangeError);
      });
  });

  describe('#validateAccountId', () => {
    it('should call utils#isString with the correct parameter', () => {
      const spy = sinon.spy(utils, 'isString');
      helpers.validateAccountId(validAccountId);
      expect(spy).to.have.been.calledWith(validAccountId);
    });

    it('should throw TypeError if utils#isString returns false', () => {
      sinon.stub(utils, 'isString').returns(false);
      expect(helpers.validateAccountId).to.throw(TypeError);
    });

    it('should not throw TypeError if utils#isString returns true', () => {
      sinon.stub(utils, 'isString').returns(true);
      expect(helpers.validateAccountId.bind(null, validAccountId))
        .not.to.throw(TypeError);
    });

    it('should throw RangeError if the account ID length is not 56', () => {
      sinon.stub(utils, 'isString').returns(true);
      expect(helpers.validateAccountId.bind(null, '')).to.throw(RangeError);
    });

    it('should not throw RangeError if the account ID length is 56', () => {
      sinon.stub(utils, 'isLengthBetween').returns(true);
      expect(helpers.validateAccountId.bind(null, validAccountId))
        .not.to.throw(RangeError);
    });
  });
});
