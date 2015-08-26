import React from 'react';
import Router from 'react-router';
import routes from './routes';

export default function router(req, res, next) {
  var context = {
    routes: routes,
    location: req.url
  };
  Router.create(context).run(function ran(Handler, state) {
    reactHtml: React.renderToString(<Handler />)
  });
}
