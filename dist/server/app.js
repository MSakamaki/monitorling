/// <reference path="../../typings/express-serve-static-core/express-serve-static-core.d.ts" />
/// <reference path="../../typings/express/express.d.ts" />
/// <reference path="../../typings/mime/mime.d.ts" />
/// <reference path="../../typings/serve-static/serve-static.d.ts" />
/// <reference path="../../typings/body-parser/body-parser.d.ts" />
"use strict";
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 9000;
app.server = http.createServer(app);
app.use(express.static(path.join(__dirname, '..', '/client')));
app.use(express.static(path.join(__dirname, '../..', 'node_modules')));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// Start server
app.server.listen(port, process.env.OPENSHIFT_NODEJS_IP || process.env.IP || undefined, () => {
    console.log('Express server listening on %d, in %s mode', port, app.get('env'));
});
app.use(bodyParser.json({
    limit: '100kb'
}));
app.get('/api/200', function (req, res) {
    res.status(200).json({ "hello": "world" });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = app;
