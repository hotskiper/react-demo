import { Switch, Route, Redirect } from 'react-router-dom'
import React from 'react';
import routes from '@/router/routerConfig'
import RouterGuard from '@/router/routerGuard'

function App(){
  return (
      <Switch>
        {routes.map((route, i) => (
          <Route
            key={i}
            path={route.path}
            render={() => {
              return <RouterGuard {...route} />
            }}
          />
        ))}
        {/* <Redirect to="/home" /> */}
      </Switch>
  )
}

export default App;