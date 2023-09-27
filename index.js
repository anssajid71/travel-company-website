const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const http = require('http');
const crypto = require('crypto');
const { Client } = require('pg');
const routes = require('./routes/index');
const sequelize = require('./database/database');
const jwtAuthMiddleware = require('./middlewares/jwtAuthMiddleware');

// Generate a random secret key
const secretKey = crypto.randomBytes(32).toString('hex');

console.log('Generated Secret Key:', secretKey);
const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan('combined'));
app.use('/protected', jwtAuthMiddleware); // Add this line

app.use('/', routes);

const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
