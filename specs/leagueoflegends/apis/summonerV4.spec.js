import * as api from '../../../src/leagueoflegends/apis/summonerV4';
import * as helpers from '../../../src/leagueoflegends/helpers';
import * as http from '../../../src/leagueoflegends/transports/http';

describe('Summoner API V4', () => {
  const validSummonerName = 'qwerty';

  afterEach(() => {
    sinon.restore();
  });

  describe('#getSummonerByName', () => {
    it('should validate the summoner name', () => {
      const spy = sinon.spy(helpers, 'validateSummonerName');
      api.getSummonerByName(validSummonerName);
      expect(spy).to.have.been.called;
    });

    it('should send the request to the api passing the summoner name', () => {
      const spy = sinon.spy(http, 'get');
      const path = `${api.ENDPOINT_GET_SUMMONER_BY_NAME}/${validSummonerName}`;
      api.getSummonerByName(validSummonerName);
      expect(spy).to.have.been.calledWith(path);
    });

    it('should resolve the promise and return the response of .json()',
      (done) => {
        const spy = sinon.spy();
        sinon.stub(http, 'get').resolves({
          json: spy,
        });
        api.getSummonerByName(validSummonerName).then(() => {
          expect(spy).to.have.been.called;
          done();
        });
      });
  });
});
