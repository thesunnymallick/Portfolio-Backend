import path from 'path';

export default ({ env }) => {
  const client = env('DATABASE_CLIENT');

  if (!client) {
    throw new Error('DATABASE_CLIENT is not set! Must be postgres in production.');
  }

  const connections = {
    mysql: {
      connection: {
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
      },
      pool: { min: 2, max: 10 },
    },

    postgres: {
      connection: {
        host: env('DATABASE_HOST'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME'),
        user: env('DATABASE_USERNAME'),
        password: env('DATABASE_PASSWORD'),
        ssl: { rejectUnauthorized: false },
      },
      pool: { min: 2, max: 10 },
    },

    sqlite: {
      connection: {
        filename: path.join(__dirname, '..', '..', '.tmp/data.db'),
      },
      useNullAsDefault: true,
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
    },
  };
};
