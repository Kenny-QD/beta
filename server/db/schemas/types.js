const {
  GraphQLObjectType, GraphQLString, GraphQLID, GraphQLBoolean,
} = require('graphql');

exports.MemberType = new GraphQLObjectType({
  name: 'Member',
  type: 'Query',
  fields: {
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    url_avatar: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    auth: { type: GraphQLBoolean },
    token: { type: GraphQLString },
  },
});
