import angular from 'angular';
import 'angular-ui-router';
import config from './config';
import ListController from './controllers/list.controller';
import AddController from './controllers/add.controller';
import SingleController from './controllers/single.controller';
import BookService from './services/book.service';
import EditController from './controllers/edit.controller';


angular
.module('app', ['ui.router'])
.constant('PARSE', {
  URL: 'https://api.parse.com/1/',
  CONFIG: {
    headers: {
      'X-Parse-Application-Id': 'BEiMkzBDX2b2c8gWI3HLh3XLpMxC5gE6JEctldvx',
      'X-Parse-REST-API-Key': 'sv0xgwXCZKf8x7EtTKJ0vYNwYC1c7d3Oyls2tTvU'
    }
  }
})
.config(config)
.controller('AddController', AddController)
.controller('ListController', ListController)
.controller('SingleController', SingleController)
.service('BookService', BookService)
.controller('EditController', EditController)
;