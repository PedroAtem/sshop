function buildConfig(env = {env: 'dev'}) {
  return require('./config/webpack.' + env.env + '.js')(env);
}

module.exports = buildConfig;
