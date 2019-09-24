/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1569169453208_9492';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    mysql: {
      client: {
        host: 'localhost',
        port: '23306',
        user: 'root',
        password: '123456',
        database: 'test',
      },
      app: true,
      agent: false
    },
    security: {
      csrf: {
        enable: false,
        headerName: 'x-csrf-token'
      }
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};
