import * as summonerHelper from '../../../src/leagueoflegends/helpers/summoner';
import * as utils from '../../../src/utils';

describe('Summoner Helper', () => {
  const validSummonerName = 'qwerty';

  afterEach(() => {
    sinon.restore();
  });

  describe('#validateSummonerName', () => {
    it('should call utils#isString with the correct parameter', () => {
      const spy = sinon.spy(utils, 'isString');
      summonerHelper.validateSummonerName(validSummonerName);
      expect(spy).to.have.been.calledWith(validSummonerName);
    });

    it('should throw TypeError if utils#isString returns false', () => {
      sinon.stub(utils, 'isString').returns(false);
      expect(summonerHelper.validateSummonerName).to.throw(TypeError);
    });

    it('should not throw TypeError if utils#isString returns true', () => {
      sinon.stub(utils, 'isString').returns(true);
      expect(summonerHelper.validateSummonerName).not.to.throw(TypeError);
    });

    it('should call utils#isLengthBetween with the correct parameters', () => {
      const spy = sinon.spy(utils, 'isLengthBetween');
      summonerHelper.validateSummonerName(validSummonerName);
      expect(spy).to.have.been.calledWith(
        validSummonerName,
        summonerHelper.MIN_NAME_LENGTH,
        summonerHelper.MAX_NAME_LENGTH,
      );
    });

    it('should throw RangeError if utils#isLengthBetween returns false', () => {
      sinon.stub(utils, 'isString').returns(true);
      sinon.stub(utils, 'isLengthBetween').returns(false);
      expect(summonerHelper.validateSummonerName).to.throw(RangeError);
    });

    it('should not throw RangeError if utils#isLengthBetween returns true',
      () => {
        sinon.stub(utils, 'isLengthBetween').returns(true);
        expect(summonerHelper.validateSummonerName).not.to.throw(RangeError);
      });
  });
});
