import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLList,
    GraphQLFloat
} from 'graphql';

export default new GraphQLObjectType({
    name: 'Address',
    fields: {
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        streetNumber: {
            type: GraphQLString
        },
        streetName: {
            type: GraphQLString
        },
        city: {
            type: GraphQLString
        },
        state: {
            type: GraphQLString
        },
        zipcode: {
            type: GraphQLString
        },
        country: {
            type: GraphQLString
        },
        location: {
            type: new GraphQLList(GraphQLFloat)
        }
    }
});