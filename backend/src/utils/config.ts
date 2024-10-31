import 'dotenv/config';

type EnvironmentVariable = string | undefined;

interface EnvConfiguration {
    PORT: EnvironmentVariable;
}

export default {
    PORT: process.env.PORT
} satisfies EnvConfiguration
