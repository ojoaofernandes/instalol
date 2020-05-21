import fetch from 'node-fetch';

export const API_URL = 'https://br1.api.riotgames.com/lol';

/**
 * Sends a GET request to the RIOT API.
 *
 * @param {String} path The path to the requested endpoint.
 * @returns The response from the server.
 */
export function get(path) {
  return fetch(`${API_URL}/${path}`, {
    method: 'GET',
    headers: {
      'X-Riot-Token': process.env.RIOT_TOKEN,
    },
  });
}
