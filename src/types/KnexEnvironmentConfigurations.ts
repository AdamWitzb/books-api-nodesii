import Knex from 'knex';

export type KnexEnvironmentConfigurations = {
  [index: string]: Knex.Config;
};
