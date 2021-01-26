export default {
  development: {
    client: 'pg',
    //if in Docker use postgres, if in local use localhost - for both modify /etc/hosts and point postgres to 127.0.0.1
    connection: 'postgres://api:development_pass@postgres:5432/books-api',
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
};
