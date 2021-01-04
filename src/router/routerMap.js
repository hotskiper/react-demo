import Home from '../containers/home'
import Login from '../containers/login'
import Err from '../containers/error'

const routeArr = [
  { path: '/home', name: 'Home', component: Home},
  { path: '/login', name: 'Login', component: Login },
  { path: '/404', name: '404', component: Err },
  
]

export default routeArr;