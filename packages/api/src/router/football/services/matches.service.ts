import { get } from 'lodash';
import { axiosGet } from '../../../libs/axios';
import { FOOTBALL_DATA_V2, axiosConfigs } from '../constants';
import { Match, Head2Head, Status } from '../types';

export const getMatches = async (): Promise<{
  total: number;
  data: Array<Match>;
}> => {
  const url = `${FOOTBALL_DATA_V2}/matches`;
  const response: { count: number; matches: Array<Match> } = await axiosGet(
    url,
    axiosConfigs
  );
  const total: number = get(response, 'count', 0);
  const data: Array<Match> = get(response, 'matches', []);
  return { total, data };
};

export const getMatchesByCompetitionId = async (
  id: number
): Promise<{ total: number; data: Array<Match> }> => {
  const url = `${FOOTBALL_DATA_V2}/competitions/${id}/matches`;
  const response: { count: number; matches: Array<Match> } = await axiosGet(
    url,
    axiosConfigs
  );
  const total: number = get(response, 'count', 0);
  const data: Array<Match> = get(response, 'matches', []);
  return { total, data };
};

export const getMatchById = async (
  id: number
): Promise<{ head2head: Head2Head; match: Match }> => {
  const url = `${FOOTBALL_DATA_V2}/matches/${id}`;
  const response: { head2head: Head2Head; match: Match } = await axiosGet<{
    head2head: Head2Head;
    match: Match;
  }>(url, axiosConfigs);
  return response;
};

export const getMatchesByTeamId = async (
  id: number,
  status?: Status
): Promise<{ total: number; data: Array<Match> }> => {
  const url = `${FOOTBALL_DATA_V2}/teams/${id}/matches?status=${status || ''}`;
  const response: { count: number; matches: Array<Match> } = await axiosGet<{
    count: number;
    matches: Array<Match>;
  }>(url, axiosConfigs);
  const total: number = get(response, 'count', 0);
  const data: Array<Match> = get(response, 'matches', []);
  return { total, data };
};
