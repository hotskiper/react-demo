import { Switch } from 'react-router-dom'
import FrontendAuth from '@/router/frontendAuth'
import routerMap from '@/router/routerMap'


function App(){
  return (
    <Switch>
      <FrontendAuth routerConfig={routerMap} />
    </Switch>
  )
}

export default App;