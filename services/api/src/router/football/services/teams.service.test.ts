import axios from 'axios';
import { getTeamById, getTeamsByCompetitionId } from './teams.service';

jest.mock('axios');

describe('football services', () => {
  describe('getTeamsByCompetitionId', () => {
    it('successfully', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({
        data: { count: 0, teams: [] },
      });
      const teams = await getTeamsByCompetitionId(1);
      expect(teams).toEqual({ total: 0, data: [] });
    });
  });

  describe('getTeamById', () => {
    it('successfully', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({
        data: {},
      });
      const team = await getTeamById(1);
      expect(team).toEqual({});
    });
  });
});
