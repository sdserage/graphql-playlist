require('dotenv').config()
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const PORT = 3210;
const app = express();

// allow cross-origin requests
app.use(cors());


mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
})