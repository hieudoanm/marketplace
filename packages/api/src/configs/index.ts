import dotenv from 'dotenv';

export const NODE_ENV: string = process.env.NODE_ENV || 'development';

if (NODE_ENV === 'development') {
  dotenv.config();
}

export const PORT: string = process.env.PORT || '8080';

export const API_KEY_COIN_RANKING: string =
  process.env.API_KEY_COIN_RANKING || '';
export const API_KEY_FOOTBALL_DATA: string =
  process.env.API_KEY_FOOTBALL_DATA || '';
export const API_KEY_NEWS_V2: string = process.env.API_KEY_NEWS_V2 || '';
export const API_KEY_OPEN_WEATHER_MAP: string =
  process.env.API_KEY_OPEN_WEATHER_MAP || '';
export const API_KEY_TELEGRAM: string = process.env.API_KEY_TELEGRAM || '';
export const API_KEY_YOUTUBE_V3: string = process.env.API_KEY_YOUTUBE_V3 || '';

export const POSTGRE_REPO: string = process.env.POSTGRE_REPO || 'repository';
export const POSTGRE_HOST: string = process.env.POSTGRE_HOST || 'localhost';
export const POSTGRE_PORT: string = process.env.POSTGRE_PORT || '5432';
export const POSTGRE_USERNAME: string =
  process.env.POSTGRE_USERNAME || 'username';
export const POSTGRE_PASSWORD: string =
  process.env.POSTGRE_PASSWORD || 'password';
export const POSTGRE_DATABASE: string =
  process.env.POSTGRE_DATABASE || 'database';

export const TELEGRAM_CHAT_ID: number =
  parseInt(process.env.TELEGRAM_CHAT_ID || '0', 10) || 0;
