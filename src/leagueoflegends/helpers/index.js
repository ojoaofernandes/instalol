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

/**
 * Validates the account ID according to Riot's requirements.
 *
 * @param {String} accountId The encrypted account ID.
 * @throws {TypeError} The account ID must be a string.
 * @throws {RangeError} The account ID length must be 56.
 */
export function validateAccountId(accountId) {
  if (!isString(accountId)) {
    throw new TypeError('The type of accountId should be string');
  }

  if (accountId.length !== ACCOUNT_ID_LENGTH) {
    throw new RangeError(`The length of accountId should be ${ACCOUNT_ID_LENGTH}`);
  }
}
