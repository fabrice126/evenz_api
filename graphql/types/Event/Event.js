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

export default new GraphQLObjectType({
    name: 'Event',
    description: "This represent an Event",
    fields: {
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        title: {
            type: GraphQLString
        },
        imageCover: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        },
        createdAt: {
            type: GraphQLString
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
            type: GraphQLFloat
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
            type: new GraphQLList(GraphQLID)
        },
        _EventType: {
            type: new GraphQLList(GraphQLID)
        },
        _Participants: {
            type: new GraphQLList(GraphQLID)
        }
    }
});