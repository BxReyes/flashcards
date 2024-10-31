type Query = Record<string, string>;

const GET_ALL = 'SELECT * FROM users';
const GET_BY_ID = 'SELECT * FROM users WHERE id = $1';
const GET_BY_USER = 'SELECT * FROM users WHERE username = $1';
const INSERT_USER = 'INSERT INTO users (username, password_hash) VALUES ($1, $2)';

export default {
    GET_ALL,
    GET_BY_ID,
    GET_BY_USER,
    INSERT_USER
} satisfies Query;
