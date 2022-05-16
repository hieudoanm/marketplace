export type Area = {
  id: number;
  name: string;
  countryCode: string;
  ensignUrl: string;
  parentAreaId: number;
  parentArea: string;
  childAreas: Area[];
};

export type Competition = {
  id: number;
  area: Area;
  name: string;
  code: string;
  emblemUrl: string;
  plan: string;
  currentSeason: Season;
  numberOfAvailableSeasons: number;
  lastUpdated: string;
};

export type Head2Head = {
  numberOfMatches: number;
  totalGoals: number;
  homeTeam: Team & {
    wins: number;
    draws: number;
    losses: number;
  };
  awayTeam: Team & {
    wins: number;
    draws: number;
    losses: number;
  };
};

export type Match = {
  id: number;
  season: Season;
  utcDate: string;
  status: Status;
  matchday: number;
  stage: string;
  group: null;
  lastUpdated: string;
  odds: {
    msg: string;
  };
  score: {
    winner: string;
    duration: string;
    fullTime: Score;
    halfTime: Score;
    extraTime: Score;
    penalties: Score;
  };
  homeTeam: Team;
  awayTeam: Team;
  referees: Referee[];
};

export type Plan = 'TIER_ONE' | 'TIER_TWO' | 'TIER_THREE' | 'TIER_FOUR';

export type Player = {
  id: number;
  name: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  countryOfBirth: string;
  nationality: string;
  position: string;
  shirtNumber: number;
  lastUpdated: string;
};

export type Referee = {
  id: number;
  name: string;
  role: string;
  nationality: string;
};

export type Score = { homeTeam: number; awayTeam: number };

export type Scorer = {
  player: Player;
  team: Team;
  numberOfGoals: number;
};

export type Season = {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday: number;
  winner: {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crestUrl: string;
  };
};

export type Standing = {
  position: number;
  team: {
    id: number;
    name: string;
    crestUrl: string;
  };
  playedGames: number;
  form: null;
  won: number;
  draw: number;
  lost: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
};

export type StandingType = 'TOTAL' | 'HOME' | 'AWAY';

export type Status =
  | 'SCHEDULED'
  | 'LIVE'
  | 'IN_PLAY'
  | 'PAUSED'
  | 'FINISHED'
  | 'POSTPONED'
  | 'SUSPENDED'
  | 'CANCELED';

export type Team = {
  id: number;
  area: {
    id: number;
    name: string;
  };
  name: string;
  shortName: string;
  tla: string;
  crestUrl: string;
  address: string;
  phone: string;
  website: string;
  email: string;
  founded: number;
  clubColors: string;
  venue: string;
  lastUpdated: string;
};

export type Venue = 'HOME' | 'AWAY';
