// const express = require('express');
// const app = express();
// const path = require('path');
// app.use(express.static(_dirname + '/dist'));
// app.listen(process.env.PORT || 8080);

// //path location strategy

// app.get('/*', function(req, res) {
//     res.sendFile(path.join(_dirname + '/dist/index.html'));
// })

// console.log('console listening');
//Install express server

const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/possibillion'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/possibillion/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);