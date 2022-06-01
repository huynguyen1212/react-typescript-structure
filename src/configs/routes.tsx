import React from 'react';
import DemoComponent from 'components/DemoComponent';

export interface ItemRoute {
  name: string;
  private: boolean;
  component?: Function;
  path?: string;
  child?: ItemRoute[];
}

const ROUTES = [
  {
    name: 'trang chủ',
    private: false,
    component: () => <DemoComponent name="index" />,
    path: '/',
  },
];

export default ROUTES;
