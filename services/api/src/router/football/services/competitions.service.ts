import { get } from 'lodash';
import { axiosGet } from '../../../libs/axios';
import { axiosConfigs, FOOTBALL_DATA_V2 } from '../constants';
import { Competition, Scorer, Standing, StandingType } from '../types';

export const getCompetitions = async (): Promise<{
  total: number;
  data: Array<Competition>;
}> => {
  const url = `${FOOTBALL_DATA_V2}/competitions`;
  const response: { count: number; competitions: Competition[] } =
    await axiosGet<{
      count: number;
      competitions: Competition[];
    }>(url, axiosConfigs);
  const total = get(response, 'count', 0);
  const data = get(response, 'competitions', []);
  return { total, data };
};

export const getCompetitionById = async (id: number): Promise<Competition> => {
  const url = `${FOOTBALL_DATA_V2}/competitions/${id}`;
  const competition: Competition = await axiosGet<Competition>(
    url,
    axiosConfigs
  );
  return competition;
};

export const getStandingsByCompetitionId = async (
  id: number,
  standingType: StandingType = 'TOTAL'
): Promise<{ total: number; data: Array<Standing> }> => {
  const url = `${FOOTBALL_DATA_V2}/competitions/${id}/standings?standingType=${standingType}`;
  const response: {
    count: number;
    standings: Array<{ table: Array<Standing> }>;
  } = await axiosGet(url, axiosConfigs);
  const total: number = get(response, 'count', 0);
  const data: Array<Standing> = get(response, 'standings.0.table', []);
  return { total, data };
};

export const getScorersByCompetitionId = async (
  id: number,
  limit = 10
): Promise<{ total: number; data: Array<Scorer> }> => {
  const url = `${FOOTBALL_DATA_V2}/competitions/${id}/scorers?limit=${limit}`;
  const response: { count: number; scorers: Array<Scorer> } = await axiosGet(
    url,
    axiosConfigs
  );
  const total: number = get(response, 'count', 0);
  const data: Array<Scorer> = get(response, 'scorers', []);
  return { total, data };
};
