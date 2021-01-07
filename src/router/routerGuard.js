import loadable from '@loadable/component';
import React from 'react';

export default function RouterGuard(props){
  let {component, auth} = props;
  const user = localStorage.getItem('username');
  if(auth && !user){
    component = 'containers/login'
  }
  // const LoadableComponent = Loadable({
  //   loader: () => import(`@/${component}`),
  //   loading: () => <span>loading</span>,
  // })
  // return <LoadableComponent />
  // const Component = React.lazy(() => import(`@/${component}`));
  // return <Component />
  const LoadableComponent = loadable(() => import(`@/${component}`), {
    fallback: <div>loadingloadingloading...</div>,
  })
  return <LoadableComponent />
}