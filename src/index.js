const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const config = require('./config');
const apiRouter = require('./routers/api');

//landing page (at the root)
app.use('/', express.static('./src/static'));
app.use('/api', apiRouter);
//
// app.use('/api', bodyParser.json({}), apiRouter);

const server = app.listen(config.port, () => {
		console.log(`Listening on port ${config.port}`);
	}
);
