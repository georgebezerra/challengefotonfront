import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Search from '../pages/Search/index'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/search" component={Search} />
    </Switch>
  )
}
