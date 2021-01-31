import { DATABASE_URL } from './src/consts';

import type { KnexEnvironmentConfigurations } from './src/types/KnexEnvironmentConfigurations';

const knexEnvironmentConfigurations: KnexEnvironmentConfigurations = {
  development: {
    client: 'pg',
    connection: DATABASE_URL,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
  testing: {
    client: 'pg',
    connection: DATABASE_URL,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: DATABASE_URL,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
};

export default knexEnvironmentConfigurations;
