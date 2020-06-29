const graphql = require('graphql');
const bcrypt = require('bcrypt');
const { db } = require('../pgAdapter');

const {
  GraphQLObjectType, GraphQLString,
} = graphql;
const {
  MemberType,
} = require('./types');

exports.mutation = new GraphQLObjectType({
  name: 'RootMutationType',
  type: 'Mutation',
  fields: {
    signUp: {
      type: MemberType,
      args: {
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parentValue, args) {
        const query = 'INSERT INTO member(username, email, password) VALUES ($1, $2, $3) RETURNING id';
        bcrypt.hash(args.password, 8)
          .then((hash) => db.one(query, [args.username, args.email, hash]))
          .then((res) => res)
          .catch((err) => console.log(err));
      },
    },
  },
});
