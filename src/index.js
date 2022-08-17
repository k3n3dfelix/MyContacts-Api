const express = require('express');

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use((request, response,  next) =>{
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
  response.setHeader('Access-Control-Allow-Headers', '*');
  next();
})
app.use(routes);

app.listen(3000, () => console.log('server started'));
