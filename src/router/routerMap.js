import Home from '../containers/home'
import Login from '../containers/login'
import Err from '../containers/error'
import Popular from '../containers/popular'
import Recent from '../containers/recent'

const routeArr = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    auth: true,
    routes: [
      { path: '/home/popular', name: 'Popular', component: Popular },
      { path: '/home/recent', name: 'Recent', component: Recent, auth: true },
    ],
  },
  { path: '/login', name: 'Login', component: Login },
  { path: '/404', name: '404', component: Err },
]

export default routeArr;