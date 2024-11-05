const path = require('path');
const config = require('./config.js');

const {HttpServer} = require('@aliceo2/web-ui');

const { informationController} = require('.lib/controllers/Information.controller')
const { informationService} = require('.lib/controllers/Information.service')

const http = new HttpServer(config.http, config.jwt, config.oAuth);
http.addStaticPath(path.join(__dirname, 'public'));

const informationService = new informationService();
const informationController = new informationController(informationService);

// http.get('/info/:name', informationController.getInformation.bind(informationController))
http.get('/info/:name', (req,res) => informationController.getInformation());