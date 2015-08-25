import express from 'express';
import hbs from 'express-handlebars';
import React from 'react/addons';
import serveStatic from 'serve-static';
import Router from 'react-router';
import App from './components/app';
import routes from './routes';

var app = express();
app.engine('html', hbs({ extname: 'html' }));
app.set('view engine', 'html');
app.locals.settings['x-powered-by'] = false;
app.use(serveStatic('public'));
app.use(router);

function router(req, res, next) {
  var context = {
    routes: routes,
    location: req.url
  };
  Router.create(context).run(function ran(Handler, state) {
    res.render('layout', {
      reactHtml: React.renderToString(<Handler />)
    });
  });
}

app.listen(process.env.PORT || 3000);
