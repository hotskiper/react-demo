const routes = [
  {
    path: '/home',
    name: 'Home',
    component: 'containers/home',
    auth: true,
    routes: [
      { path: '/home/popular', name: 'Popular', component: 'containers/popular' },
      { path: '/home/recent', name: 'Recent', component: 'containers/recent', auth: true },
    ],
  },
  { path: '/login', name: 'Login', component: 'containers/login' },
  { path: '/404', name: '404', component: 'containers/error' },
];

export default routes;