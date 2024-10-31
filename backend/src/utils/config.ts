import 'dotenv/config';

type EnvironmentVariable = string | undefined;

interface DBClientConfig {
    user: EnvironmentVariable;
    password: EnvironmentVariable;
    database: EnvironmentVariable;
    host: EnvironmentVariable;
    port: number
};

interface EnvConfiguration {
    PORT: EnvironmentVariable;
    DB_CONFIG: DBClientConfig;
};

const dbConfig: DBClientConfig = {
    user: process.env.PG_USER,
    password: process.env.PG_PWD,
    database: process.env.PG_DB,
    host: process.env.PG_HOST,
    port: Number(process.env.PG_PORT)
}

export default {
    PORT: process.env.PORT,
    DB_CONFIG: dbConfig
} satisfies EnvConfiguration
