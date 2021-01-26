import knex from 'knex';
import knexfile from '../../knexfile';

const configOptions = knexfile['development'];

export const db = knex(configOptions);
