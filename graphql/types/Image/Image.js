import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID
} from 'graphql';

export default new GraphQLObjectType({
    name: 'Image',
    fields: {
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        title: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        },
        shotDate: {
            type: GraphQLString
        },
        createdAt: {
            type: GraphQLString
        },
        _Owner: {
            type: GraphQLID
        }
    }
});