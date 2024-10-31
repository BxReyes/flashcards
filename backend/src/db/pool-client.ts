import pg, { Pool } from 'pg';
import config from '../utils/config';

const client: Pool = new pg.Pool(config.DB_CONFIG);

export default client;
