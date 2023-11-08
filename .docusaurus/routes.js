import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/test/',
    component: ComponentCreator('/test/', 'c19'),
    routes: [
      {
        path: '/test/',
        component: ComponentCreator('/test/', 'c73'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/test/docs/pendaftaran',
        component: ComponentCreator('/test/docs/pendaftaran', '65f'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/test/docs/persiapan',
        component: ComponentCreator('/test/docs/persiapan', '3d9'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/test/docs/qr_login',
        component: ComponentCreator('/test/docs/qr_login', '126'),
        exact: true,
        sidebar: "defaultSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
