import { Controller, Get, Path, Query, Route, Tags } from 'tsoa';
import { getAreaById, getAreas } from '../services/areas.service';
import {
  getCompetitions,
  getCompetitionById,
  getStandingsByCompetitionId,
  getScorersByCompetitionId,
} from '../services/competitions.service';
import {
  getMatches,
  getMatchById,
  getMatchesByCompetitionId,
  getMatchesByTeamId,
} from '../services/matches.service';
import {
  getPlayerById,
  getMatchesByPlayerId,
} from '../services/players.service';
import {
  getTeamById,
  getTeamsByCompetitionId,
} from '../services/teams.service';
import {
  Area,
  Competition,
  Head2Head,
  Match,
  Player,
  Scorer,
  Standing,
  StandingType,
  Status,
  Team,
} from '../types';

@Route('football')
@Tags('Football')
export class FootballController extends Controller {
  @Get('competitions')
  public async getCompetitions(): Promise<{
    total: number;
    data: Array<Competition>;
  }> {
    return getCompetitions();
  }

  @Get('competitions/:id')
  public async getCompetitionById(
    @Path('id') id: number
  ): Promise<Competition> {
    return getCompetitionById(id);
  }

  @Get('competitions/:id/teams')
  public async getTeamsByCompetitionId(
    @Path('id') id: number
  ): Promise<{ total: number; data: Array<Team> }> {
    return getTeamsByCompetitionId(id);
  }

  @Get('competitions/:id/standings')
  public async getStandingsByCompetitionId(
    @Path('id') id: number,
    @Query('id') standingType: StandingType = 'TOTAL'
  ): Promise<{ total: number; data: Array<Standing> }> {
    return getStandingsByCompetitionId(id, standingType);
  }

  @Get('competitions/:id/matches')
  public async getMatchesByCompetitionId(
    @Path('id') id: number
  ): Promise<{ total: number; data: Array<Match> }> {
    return getMatchesByCompetitionId(id);
  }

  @Get('competitions/:id/scorers')
  public async getScorersByCompetitionId(
    @Path('id') id: number,
    @Query('limit') limit = 10
  ): Promise<{ total: number; data: Array<Scorer> }> {
    return getScorersByCompetitionId(id, limit);
  }

  @Get('matches')
  public async getMatches(): Promise<{
    total: number;
    data: Array<Match>;
  }> {
    return getMatches();
  }

  @Get('matches/:id')
  public async getMatchById(
    @Path('id') id: number
  ): Promise<{ head2head: Head2Head; match: Match }> {
    return getMatchById(id);
  }

  @Get('teams/:id')
  public async getTeamById(@Path('id') id: number): Promise<Team> {
    return getTeamById(id);
  }

  @Get('teams/:id/matches')
  public async getMatchesByTeamId(
    @Path('id') id: number,
    @Query('status') status?: Status
  ): Promise<{ total: number; data: Array<Match> }> {
    return getMatchesByTeamId(id, status);
  }

  @Get('areas')
  public async getAreas(): Promise<{ total: number; data: Array<Area> }> {
    return getAreas();
  }

  @Get('areas/:id')
  public async getAreaById(@Path('id') id: number): Promise<Area> {
    return getAreaById(id);
  }

  @Get('players/:id')
  public async getPlayerById(@Path('id') id: number): Promise<Player> {
    return getPlayerById(id);
  }

  @Get('players/:id/matches')
  public async getMatchesByPlayerId(
    @Path('id') id: number
  ): Promise<{ total: number; data: Array<Match> }> {
    return getMatchesByPlayerId(id);
  }
}
