const express = require('express');
const graphqlHTTP = require('express-graphql');

const PORT = 3210;
const app = express();

app.use('/graphql', graphqlHTTP({

}));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
})