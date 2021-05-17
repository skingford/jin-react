/*
 * @Author: kingford
 * @Date: 2021-05-17 14:40:21
 * @LastEditTime: 2021-05-17 15:36:23
 */
const CracoAntDesignPlugin = require('craco-antd');
const path = require("path");
const pathResolve = (pathUrl) => path.join(__dirname, pathUrl);

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
  // 配置路劲别名
  webpack: {
    alias: {
      "@": pathResolve("src"),
      "@assets": pathResolve("src/assets"),
      "@common": pathResolve("src/common"),
      "@components": pathResolve("src/components"),
      "@hooks": pathResolve("src/hooks"),
      "@pages": pathResolve("src/pages"),
      "@store": pathResolve("src/store"),
      "@utils": pathResolve("src/utils"),
    },
  },
};