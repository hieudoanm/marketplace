import { get } from 'lodash';
import { axiosGet } from '../../../libs/axios';
import { axiosConfigs, FOOTBALL_DATA_V2 } from '../constants';
import { Area } from '../types';

export const getAreas = async (): Promise<{
  total: number;
  data: Array<Area>;
}> => {
  const url = `${FOOTBALL_DATA_V2}/areas`;
  const response: { count: number; areas: Array<Area> } = await axiosGet<{
    count: number;
    areas: Array<Area>;
  }>(url, axiosConfigs);
  const total: number = get(response, 'count', 0);
  const data: Array<Area> = get(response, 'areas', []);
  return { total, data };
};

export const getAreaById = async (id: number): Promise<Area> => {
  const url = `${FOOTBALL_DATA_V2}/areas/${id}`;
  const area: Area = await axiosGet<Area>(url, axiosConfigs);
  return area;
};
