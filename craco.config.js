/*
 * @Author: kingford
 * @Date: 2021-05-17 14:40:21
 * @LastEditTime: 2021-05-17 14:49:45
 */
const CracoAntDesignPlugin = require('craco-antd');

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
       options: {
        customizeTheme: {
          '@primary-color': '#1DA57A',
        },
      },
    },
  ],
};