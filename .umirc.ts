import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '../layout/index',
      routes: [
        {
          key: '/',
          path: '/',
          component: './articles/index',
        },
      ],
    },
  ],
});
