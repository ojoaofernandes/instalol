import * as fetch from 'node-fetch';
import { API_URL, get } from '../../../src/leagueoflegends/transports/http';

describe('HTTP Transport', () => {
  const path = 'path/to/resource';
  let spy;

  beforeEach(() => {
    spy = sinon.spy(fetch, 'default');
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('#get', () => {
    it('should call node-fetch', () => {
      get(path);
      expect(spy).to.have.been.called;
    });

    it('should send the request to the correct endpoint', () => {
      get(path);
      const firstParameter = spy.getCall(0).args[0];
      expect(firstParameter).to.be.equal(`${API_URL}/${path}`);
    });

    it('should send the request with GET method', () => {
      get(path);
      const secondParameter = spy.getCall(0).args[1];
      expect(secondParameter.method).to.be.equal('GET');
    });

    it('should send the request with X-Riot-Token header', () => {
      get(path);
      const secondParameter = spy.getCall(0).args[1];
      expect(secondParameter.headers).to.have.keys('X-Riot-Token');
    });
  });
});
