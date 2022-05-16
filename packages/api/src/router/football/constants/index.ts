import { API_KEY_FOOTBALL_DATA } from '../../../configs';

export const FOOTBALL_DATA_V2 = 'https://api.football-data.org/v2';
export const axiosConfigs = {
  headers: { 'X-AUTH-TOKEN': API_KEY_FOOTBALL_DATA },
};
