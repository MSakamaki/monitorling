import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

var app = express();
app.server = http.createServer(app);

var port = 8081;

app.use(express.static( path.join(__dirname, '..', '/client')));

app.use((req, res, next)=> {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Start server
app.server.listen(port, process.env.OPENSHIFT_NODEJS_IP || process.env.IP || undefined, () => {
  console.log('Express server listening on %d, in %s mode', port, app.get('env'));
});



// app.use(cors({
// 	exposedHeaders: ['Link']
// }));

app.use(bodyParser.json({
  limit : '100kb'
}));

app.get('/api/200', function (req, res) {
  res.status(200).json({"hello": "world"});
});

export default app;