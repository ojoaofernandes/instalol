import { isString, isLengthBetween } from '../../utils';

export const NAME_MIN_LENGTH = 3;
export const NAME_MAX_LENGTH = 16;
export const ACCOUNT_ID_LENGTH = 56;

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

  if (!isLengthBetween(summonerName, NAME_MIN_LENGTH, NAME_MAX_LENGTH)) {
    throw new RangeError(`The length of summonerName should be between ${NAME_MIN_LENGTH} e ${NAME_MAX_LENGTH}`);
  }
}
