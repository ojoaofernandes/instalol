import { validateAccountId, validateMatchId } from '../helpers';
import { get } from '../transports/http';

export const ENDPOINT_GET_MATCH_LIST_BY_ACCOUNT_ID = 'match/v4/matchlists/by-account';
export const ENDPOINT_GET_MATCH_BY_MATCH_ID = 'match/v4/matches';

/**
 * Get match list for games played on given account ID.
 *
 * @param {String} accountId The encrypted account ID.
 * @returns {Object} The match list object entity.
 * @throws {TypeError} The account ID must be a string.
 * @throws {RangeError} The account ID length must be 56.
 */
export function getMatchListByAccountId(accountId) {
  validateAccountId(accountId);
  const path = `${ENDPOINT_GET_MATCH_LIST_BY_ACCOUNT_ID}/${accountId}`;
  return get(path).then((res) => res.json());
}

/**
 * Get match by match ID.
 *
 * @param {number} matchId The match ID.
 * @returns {Object} The match object entity.
 * @throws {TypeError} The match ID must be a number.
 * @throws {RangeError} The match ID must be a positive number.
 */
export function getMatchByMatchId(matchId) {
  validateMatchId(matchId);
  const path = `${ENDPOINT_GET_MATCH_BY_MATCH_ID}/${matchId}`;
  return get(path).then((res) => res.json());
}
