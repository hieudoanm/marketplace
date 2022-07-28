import axios from 'axios';
import { getPlayerById, getMatchesByPlayerId } from './players.service';

jest.mock('axios');

describe('football services', () => {
  describe('getMatchesByPlayerId', () => {
    it('successfully', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({
        data: { count: 0, matches: [] },
      });
      const matches = await getMatchesByPlayerId(1);
      expect(matches).toEqual({ total: 0, data: [] });
    });
  });

  describe('getPlayerById', () => {
    it('successfully', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({
        data: {},
      });
      const player = await getPlayerById(1);
      expect(player).toEqual({});
    });
  });
});
