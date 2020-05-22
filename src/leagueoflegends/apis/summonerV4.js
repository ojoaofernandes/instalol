import { validateSummonerName } from '../helpers/summoner';
import { get } from '../transports/http';

export const ENDPOINT_GET_SUMMONER_BY_NAME = 'summoner/v4/summoners/by-name';

/**
 * Gets the summoner data by summoner name.
 *
 * @param {String} summonerName The summoner name.
 * @returns {String} The summoner name.
 * @throws {TypeError} The summoner name must be a string.
 * @throws {RangeError} The summoner name length must be between 3 and 16.
 */
export function getSummonerByName(summonerName) {
  validateSummonerName(summonerName);
  const path = `${ENDPOINT_GET_SUMMONER_BY_NAME}/${summonerName}`;
  return get(path).then((res) => res.json());
}
