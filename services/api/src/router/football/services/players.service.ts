import { get } from 'lodash';
import { axiosGet } from '../../../libs/axios';
import { FOOTBALL_DATA_V2, axiosConfigs } from '../constants';
import { Player, Match } from '../types';

export const getPlayerById = async (id: number): Promise<Player> => {
  const url = `${FOOTBALL_DATA_V2}/players/${id}`;
  const player: Player = await axiosGet<Player>(url, axiosConfigs);
  return player;
};

export const getMatchesByPlayerId = async (
  id: number
): Promise<{ total: number; data: Match[] }> => {
  const url = `${FOOTBALL_DATA_V2}/players/${id}/matches`;
  const response: { count: number; matches: Match[] } = await axiosGet<{
    count: number;
    matches: Match[];
  }>(url, axiosConfigs);
  const total: number = get(response, 'count', 0);
  const data: Match[] = get(response, 'matches', []);
  return { total, data };
};
