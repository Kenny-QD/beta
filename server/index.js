const graphql = require('graphql');
const express = require('express');
const cors = require('cors');
const expressGraphQl = require('express-graphql');

const { GraphQLSchema } = graphql;
const { query } = require('./db/schemas/query');
const { mutation } = require('./db/schemas/mutation');

const schema = new GraphQLSchema({
  query,
  mutation,
});

const app = express();

app.use(cors());
app.use(express.static('dist'));

app.use(
  '/',
  expressGraphQl({
    schema,
    graphiql: true,
  }),
);

app.listen(process.env.S_PORT, () => console.log('GraphQL server running on localhost:8081'));
