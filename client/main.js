import React from 'react'
import Router from 'react-router'
import routes from '../routes'

var main = document.getElementsByTagName('main')[0]

Router.run(routes, Router.HistoryLocation, function ran(Handler, state) {
  React.render(<Handler />, main)
})
