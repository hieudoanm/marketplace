import axios from 'axios';
import {
  getMatches,
  getMatchesByCompetitionId,
  getMatchById,
  getMatchesByTeamId,
} from './matches.service';

jest.mock('axios');

describe('football services', () => {
  describe('getMatches', () => {
    it('successfully', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({
        data: { count: 0, matches: [] },
      });
      const matches = await getMatches();
      expect(matches).toEqual({ total: 0, data: [] });
    });
  });

  describe('getMatchesByCompetitionId', () => {
    it('successfully', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({
        data: { count: 0, matches: [] },
      });
      const matches = await getMatchesByCompetitionId(1);
      expect(matches).toEqual({ total: 0, data: [] });
    });
  });

  describe('getMatchById', () => {
    it('successfully', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({
        data: { match: {}, head2head: [] },
      });
      const { match, head2head } = await getMatchById(1);
      expect(match).toEqual({});
      expect(head2head).toEqual([]);
    });
  });

  describe('getMatchesByTeamId', () => {
    it('successfully', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({
        data: { count: 0, matches: [] },
      });
      const matches = await getMatchesByTeamId(1);
      expect(matches).toEqual({ total: 0, data: [] });
    });
  });
});
