import {
    GraphQLEnumType
} from 'graphql';

export default new GraphQLEnumType({
    name: "status",
    values: {
        Online: {
            value: "Online"
        },
        Offline: {
            value: "Offline"
        },
        Busy: {
            value: "Busy"
        }
    }
});