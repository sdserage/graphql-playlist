require('dotenv').config()
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const PORT = 3210;
const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
})