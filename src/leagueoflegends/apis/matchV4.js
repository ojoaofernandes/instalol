import { validateAccountId } from '../helpers';
import { get } from '../transports/http';

export const ENDPOINT_GET_MATCH_LIST_BY_ACCOUNT = 'match/v4/matchlists/by-account';

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
  const path = `${ENDPOINT_GET_MATCH_LIST_BY_ACCOUNT}/${accountId}`;
  return get(path).then((res) => res.json());
}
