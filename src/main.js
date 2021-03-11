import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { StoreContext } from 'storeon/react'
import routes from './routes/all'
import store from './store'
import './styles/theme.less'
import './styles/global.css'
import './styles/tailwind.css'
import './styles/override.css'

ReactDOM.render(<StoreContext.Provider value={store}>
  <Router>
    <Switch>
      {
        routes.map(({ path, component }, index) => {
          return <Route exact key={index} path={path} component={component} />
        })
      }
    </Switch>
  </Router>
</StoreContext.Provider>, document.getElementById('app'))

document.getElementById('app-spin').classList.add('hidden')
