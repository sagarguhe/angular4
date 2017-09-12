import * as express from 'express';
import * as path from 'path';

const app = express();

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 8080);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/src/index.html'));
})

console.log('Server listening on port no. 8080');
