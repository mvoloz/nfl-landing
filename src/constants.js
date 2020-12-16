export const IS_PRODUCTION = process.env.NODE_ENV !== 'development';
export const LEAGUE_ID = '4391';
export const TEAM_NAME = 'New York Jets';
export const TEAM_NAME_SLUG = 'new_york_jets';
export const TEAM_ID = '134921';
export const BASE_URL = 'https://thesportsdb.com/api/v1/json';
export const API_KEY = process.env.REACT_APP_ENHANCED_API_ENABLED
  ? process.env.REACT_APP_SPORTSDB_API_KEY
  : process.env.REACT_APP_SPORTSDB_DEFAULT_API_KEY;

export const CACHE_KEY_SEPARATOR = '-';
export const NA_STRING = 'N/A';
