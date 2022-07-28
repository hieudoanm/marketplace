import axios from 'axios';
import {
  getCompetitionById,
  getCompetitions,
  getScorersByCompetitionId,
  getStandingsByCompetitionId,
} from './competitions.service';

jest.mock('axios');

describe('football services', () => {
  describe('getCompetitions', () => {
    it('successfully', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({
        data: { count: 0, areas: [] },
      });
      const competitions = await getCompetitions();
      expect(competitions).toEqual({ total: 0, data: [] });
    });
  });

  describe('getCompetitionById', () => {
    it('successfully', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({
        data: {},
      });
      const competition = await getCompetitionById(1);
      expect(competition).toEqual({});
    });
  });

  describe('getStandingsByCompetitionId', () => {
    it('getScorersByCompetitionId', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({
        data: { count: 0, scorers: [] },
      });
      const standings = await getScorersByCompetitionId(1);
      expect(standings).toEqual({ total: 0, data: [] });
    });
  });

  describe('getStandingsByCompetitionId', () => {
    it('successfully', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({
        data: { count: 0, standings: [] },
      });
      const standings = await getStandingsByCompetitionId(1);
      expect(standings).toEqual({ total: 0, data: [] });
    });
  });
});
