import { isString, isLengthBetween } from '../../utils';

export const MIN_NAME_LENGTH = 3;
export const MAX_NAME_LENGTH = 16;

/**
 * Validates the summoner name according to Riot's requirements.
 *
 * @param {String} summonerName The summoner name.
 * @throws {TypeError} The summoner name must be a string.
 * @throws {RangeError} The summoner name length must be between 3 and 16.
 */
export function validateSummonerName(summonerName) {
  if (!isString(summonerName)) {
    throw new TypeError('The type of summonerName should be string');
  }

  if (!isLengthBetween(summonerName, MIN_NAME_LENGTH, MAX_NAME_LENGTH)) {
    throw new RangeError(`The length of summonerName should be between ${MIN_NAME_LENGTH} e ${MAX_NAME_LENGTH}`);
  }
}
