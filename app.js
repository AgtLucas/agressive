import express from 'express';
import hbs from 'express-handlebars';
import React from 'react/addons';
import App from './components/app';

var app = express();
app.engine('html', hbs({ extname: 'html' }));
app.set('view engine', 'html');
app.locals.settings['x-powered-by'] = false;

app.get('/', function home(req, res, next) {
  res.render('layout', {
    reactHtml: React.renderToString(<App />)
  });
});

app.listen(process.env.PORT || 3000);
