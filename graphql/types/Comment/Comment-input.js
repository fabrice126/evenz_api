import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'CommentInput',
  fields: {
    title: {
      type: new GraphQLNonNull(GraphQLString)
    },
    message: {
      type: new GraphQLNonNull(GraphQLString)
    },
    _Owner: {
      type: new GraphQLNonNull(GraphQLID)
    }
  }
});