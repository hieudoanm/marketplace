import { get } from 'lodash';
import { axiosGet } from '../../../libs/axios';
import { FOOTBALL_DATA_V2, axiosConfigs } from '../constants';
import { Team } from '../types';

export const getTeamById = async (id: number): Promise<Team> => {
  const url = `${FOOTBALL_DATA_V2}/teams/${id}`;
  const team: Team = await axiosGet<Team>(url, axiosConfigs);
  return team;
};

export const getTeamsByCompetitionId = async (
  id: number
): Promise<{ total: number; data: Array<Team> }> => {
  const url = `${FOOTBALL_DATA_V2}/competitions/${id}/teams`;
  const response = await axiosGet(url, axiosConfigs);
  const total = get(response, 'count', 0);
  const data = get(response, 'teams', []);
  return { total, data };
};
