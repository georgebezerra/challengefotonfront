import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import List from '../pages/List'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/list" component={List} />
    </Switch>
  )
}
