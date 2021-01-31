import knex from 'knex';

import knexfile from '../../knexfile';
import { NODE_ENV } from '../consts';

const configOptions = knexfile[NODE_ENV];

export const db = knex(configOptions);
