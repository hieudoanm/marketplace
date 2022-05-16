import axios from 'axios';
import { FootballController } from './index.controller';

jest.mock('axios');

describe('football controller', () => {
  const footballController = new FootballController();

  describe('areas', () => {
    describe('getAreas', () => {
      it('successfully', async () => {
        jest.spyOn(axios, 'get').mockResolvedValueOnce({
          data: { count: 0, areas: [] },
        });
        const areas = await footballController.getAreas();
        expect(areas).toEqual({ total: 0, data: [] });
      });
    });

    describe('getAreaById', () => {
      it('successfully', async () => {
        jest.spyOn(axios, 'get').mockResolvedValueOnce({
          data: {},
        });
        const area = await footballController.getAreaById(1);
        expect(area).toEqual({});
      });
    });
  });

  describe('competitions', () => {
    describe('getCompetitions', () => {
      it('successfully', async () => {
        jest.spyOn(axios, 'get').mockResolvedValueOnce({
          data: { count: 0, areas: [] },
        });
        const competitions = await footballController.getCompetitions();
        expect(competitions).toEqual({ total: 0, data: [] });
      });
    });

    describe('getCompetitionById', () => {
      it('successfully', async () => {
        jest.spyOn(axios, 'get').mockResolvedValueOnce({
          data: {},
        });
        const competition = await footballController.getCompetitionById(1);
        expect(competition).toEqual({});
      });
    });

    describe('getStandingsByCompetitionId', () => {
      it('getScorersByCompetitionId', async () => {
        jest.spyOn(axios, 'get').mockResolvedValueOnce({
          data: { count: 0, scorers: [] },
        });
        const standings = await footballController.getScorersByCompetitionId(1);
        expect(standings).toEqual({ total: 0, data: [] });
      });
    });

    describe('getStandingsByCompetitionId', () => {
      it('successfully', async () => {
        jest.spyOn(axios, 'get').mockResolvedValueOnce({
          data: { count: 0, standings: [] },
        });
        const standings = await footballController.getStandingsByCompetitionId(
          1
        );
        expect(standings).toEqual({ total: 0, data: [] });
      });
    });
  });

  describe('matches', () => {
    describe('getMatches', () => {
      it('successfully', async () => {
        jest.spyOn(axios, 'get').mockResolvedValueOnce({
          data: { count: 0, matches: [] },
        });
        const matches = await footballController.getMatches();
        expect(matches).toEqual({ total: 0, data: [] });
      });
    });

    describe('getMatchesByCompetitionId', () => {
      it('successfully', async () => {
        jest.spyOn(axios, 'get').mockResolvedValueOnce({
          data: { count: 0, matches: [] },
        });
        const matches = await footballController.getMatchesByCompetitionId(1);
        expect(matches).toEqual({ total: 0, data: [] });
      });
    });

    describe('getMatchById', () => {
      it('successfully', async () => {
        jest.spyOn(axios, 'get').mockResolvedValueOnce({
          data: { match: {}, head2head: [] },
        });
        const { match, head2head } = await footballController.getMatchById(1);
        expect(match).toEqual({});
        expect(head2head).toEqual([]);
      });
    });

    describe('getMatchesByTeamId', () => {
      it('successfully', async () => {
        jest.spyOn(axios, 'get').mockResolvedValueOnce({
          data: { count: 0, matches: [] },
        });
        const matches = await footballController.getMatchesByTeamId(1);
        expect(matches).toEqual({ total: 0, data: [] });
      });
    });
  });

  describe('players', () => {
    describe('getMatchesByPlayerId', () => {
      it('successfully', async () => {
        jest.spyOn(axios, 'get').mockResolvedValueOnce({
          data: { count: 0, matches: [] },
        });
        const matches = await footballController.getMatchesByPlayerId(1);
        expect(matches).toEqual({ total: 0, data: [] });
      });
    });

    describe('getPlayerById', () => {
      it('successfully', async () => {
        jest.spyOn(axios, 'get').mockResolvedValueOnce({
          data: {},
        });
        const player = await footballController.getPlayerById(1);
        expect(player).toEqual({});
      });
    });
  });

  describe('teams', () => {
    describe('getTeamsByCompetitionId', () => {
      it('successfully', async () => {
        jest.spyOn(axios, 'get').mockResolvedValueOnce({
          data: { count: 0, teams: [] },
        });
        const teams = await footballController.getTeamsByCompetitionId(1);
        expect(teams).toEqual({ total: 0, data: [] });
      });
    });

    describe('getTeamById', () => {
      it('successfully', async () => {
        jest.spyOn(axios, 'get').mockResolvedValueOnce({
          data: {},
        });
        const team = await footballController.getTeamById(1);
        expect(team).toEqual({});
      });
    });
  });
});
