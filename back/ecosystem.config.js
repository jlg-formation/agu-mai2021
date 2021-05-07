module.exports = {
  apps: [
    {
      name: 'gestion-stock',
      script: 'build/src/index.js',
      env: {
        NODE_ENV: 'development',
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 7777,
      },
    },
  ],
};
