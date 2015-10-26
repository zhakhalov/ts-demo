import express = require('express');
import fs = require('fs');
import _ =  require('lodash');

var router: express.Router = express.Router()

.get('/', function(req: express.Request, res: express.Response, next: Function) {
  var tsconfig: string = fs.readFileSync('tsconfig.json', 'utf-8');
  res.render('index', { data: JSON.parse(tsconfig) });
})

export = router;
