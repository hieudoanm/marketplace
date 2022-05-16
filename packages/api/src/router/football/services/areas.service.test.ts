import axios from 'axios';
import { getAreaById, getAreas } from './areas.service';

jest.mock('axios');

describe('football services', () => {
  describe('getAreas', () => {
    it('successfully', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({
        data: { count: 0, areas: [] },
      });
      const areas = await getAreas();
      expect(areas).toEqual({ total: 0, data: [] });
    });
  });

  describe('getAreaById', () => {
    it('successfully', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({
        data: {},
      });
      const area = await getAreaById(1);
      expect(area).toEqual({});
    });
  });
});
