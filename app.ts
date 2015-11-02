import * as express from 'express';
import * as _ from 'lodash';
import * as indexRouter from './routes/index-route';

var app:express.Express = express();

app.use(express.static('public'));
app.use(indexRouter);
app.set('view engine', 'jade');
app.set('views', './views');
app.locals.pretty = true;
app.listen(1337, '0.0.0.0', function () {
  console.log('Started');
});