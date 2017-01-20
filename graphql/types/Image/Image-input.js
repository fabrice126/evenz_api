import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID
} from 'graphql';

export default new GraphQLInputObjectType({
    name: 'ImageInput',
    fields: {
        title: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        },
        shotDate: {
            type: GraphQLString
        },
        _Owner: {
            type: new GraphQLNonNull(GraphQLID)
        }
    }
});