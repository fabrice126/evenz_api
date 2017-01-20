import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLBoolean,
    GraphQLList,
    GraphQLEnumType
} from 'graphql';
import _status from './CustomTypes/_status';

export default new GraphQLObjectType({
    name: 'User',
    description: "This represent a User",
    fields: {
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        username: {
            type: new GraphQLNonNull(GraphQLID)
        },
        firstname: {
            type: new GraphQLNonNull(GraphQLString)
        },
        lastname: {
            type: new GraphQLNonNull(GraphQLString)
        },
        email: {
            type: new GraphQLNonNull(GraphQLString)
        },
        password: {
            type: new GraphQLNonNull(GraphQLString)
        },
        sex: {
            type: new GraphQLNonNull(GraphQLString)
        },
        hometown: {
            type: GraphQLString
        },
        birthday: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        },
        status: {
            type: _status
        },
        securityQuestion: {
            type: GraphQLString
        },
        securityAnswer: {
            type: GraphQLString
        },
        image: {
            type: GraphQLString
        },
        admin: {
            type: GraphQLBoolean
        },
        createdAt: {
            type: GraphQLString
        },
        updatedAt: {
            type: GraphQLString
        },
        phoneNumbers: {
            type: new GraphQLList(GraphQLString)
        },
        websites: {
            type: new GraphQLList(GraphQLString)
        },
        interests: {
            type: new GraphQLList(GraphQLString)
        },
        hobbies: {
            type: new GraphQLList(GraphQLString)
        },
        favoriteQuotes: {
            type: new GraphQLList(GraphQLString)
        },
        favoriteBooks: {
            type: new GraphQLList(GraphQLString)
        },
        favoriteMovies: {
            type: new GraphQLList(GraphQLString)
        },
        favoriteTVShows: {
            type: new GraphQLList(GraphQLString)
        },
        favoriteMusics: {
            type: new GraphQLList(GraphQLString)
        },
        activities: {
            type: new GraphQLList(GraphQLString)
        },
        _Friends: {
            type: new GraphQLList(GraphQLID)
        },
        _Favourites: {
            type: new GraphQLList(GraphQLID)
        },
        _ParticipateAtEvents: {
            type: new GraphQLList(GraphQLID)
        }
    }
});