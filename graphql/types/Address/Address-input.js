import {
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLList,
    GraphQLFloat
} from 'graphql';

export default new GraphQLInputObjectType({
    name: 'AddressInput',
    fields: {
        updatedAt: {
            type: GraphQLString
        },
        streetNumber: {
            type: new GraphQLNonNull(GraphQLString)
        },
        streetName: {
            type: new GraphQLNonNull(GraphQLString)
        },
        city: {
            type: new GraphQLNonNull(GraphQLString)
        },
        state: {
            type: GraphQLString
        },
        zipcode: {
            type: new GraphQLNonNull(GraphQLString)
        },
        country: {
            type: new GraphQLNonNull(GraphQLString)
        },
        location: {
            type: new GraphQLList(GraphQLFloat)
        }
    }
});