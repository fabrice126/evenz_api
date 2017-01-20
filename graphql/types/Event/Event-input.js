import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLBoolean,
    GraphQLList,
    GraphQLInt,
    GraphQLFloat
} from 'graphql';

import comment from '../Comment/Comment';

export default new GraphQLInputObjectType({
    name: 'EventInput',
    description: "This represent an Event",
    fields: {
        title: {
            type: new GraphQLNonNull(GraphQLString)
        },
        imageCover: {
            type: GraphQLString
        },
        description: {
            type: new GraphQLNonNull(GraphQLString)
        },
        dateStart: {
            type: GraphQLString
        },
        dateEnd: {
            type: GraphQLString
        },
        minUser: {
            type: GraphQLInt
        },
        maxUser: {
            type: GraphQLInt
        },
        price: {
            type: new GraphQLNonNull(GraphQLFloat)
        },
        isShown: {
            type: GraphQLBoolean
        },
        websites: {
            type: new GraphQLList(GraphQLString)
        },
        phoneNumbers: {
            type: new GraphQLList(GraphQLString)
        },
        photosEnabled: {
            type: GraphQLBoolean
        },
        vote: {
            type: new GraphQLObjectType({
                name: 'Vote',
                description: "This represent a vote",
                fields: {
                    plus: {
                        type: GraphQLInt
                    },
                    minus: {
                        type: GraphQLInt
                    }
                }
            })
        },
        _Address: {
            type: GraphQLID
        },
        _Comments: {
            type: new GraphQLList(comment)
        },
        _Owner: {
            type: new GraphQLNonNull(new GraphQLList(GraphQLID))
        },
        _EventType: {
            type: new GraphQLList(GraphQLID)
        },
        _Participants: {
            type: new GraphQLList(GraphQLID)
        }
    }
});