import * as api from '../../../src/leagueoflegends/apis/matchV4';
import * as helpers from '../../../src/leagueoflegends/helpers';
import * as http from '../../../src/leagueoflegends/transports/http';

describe('LOL - Match API V4', () => {
  const validAccountId = 'zMZ45BJ1o_acCFqVSnG-vzh1ZDe53uweNAD4JriPyy-TQkr1PfJr51-1';

  afterEach(() => {
    sinon.restore();
  });

  describe('#getMatchListByAccountId', () => {
    it('should validate the account ID', () => {
      const spy = sinon.spy(helpers, 'validateAccountId');
      api.getMatchListByAccountId(validAccountId);
      expect(spy).to.have.been.called;
    });

    it('should send the request to the api passing the account ID', () => {
      const spy = sinon.spy(http, 'get');
      const path = `${api.ENDPOINT_GET_MATCH_LIST_BY_ACCOUNT}/${validAccountId}`;
      api.getMatchListByAccountId(validAccountId);
      expect(spy).to.have.been.calledWith(path);
    });

    it('should resolve the promise and return the response of .json()',
      (done) => {
        const spy = sinon.spy();
        sinon.stub(http, 'get').resolves({
          json: spy,
        });
        api.getMatchListByAccountId(validAccountId).then(() => {
          expect(spy).to.have.been.called;
          done();
        });
      });
  });
});
