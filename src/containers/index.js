import { Switch, Route, Redirect } from 'react-router-dom'
// import FrontendAuth from '@/router/frontendAuth'
import routerMap from '@/router/routerMap'
import { ProvideAuth, PrivateRoute } from '@/config/use-auth'

function App(){
  return (
    // <Switch>
    //   <FrontendAuth routerConfig={routerMap} />
    // </Switch>
    <ProvideAuth>
      <Switch>
        {routerMap.map((route, i) => (
          route.auth ?
          (<PrivateRoute key={i} {...route} />) : (<Route key={i} {...route}/>)
        ))}
        <Redirect to="/home" />
      </Switch>
    </ProvideAuth>
  )
}

export default App;