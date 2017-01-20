import {
    GraphQLList
} from 'graphql';

import eventType from '../../types/Event/Event';
import EventModel from '../../../models/Event.model';

export default {
    type: new GraphQLList(eventType),
    args: {},
    resolve(root, params, ctx, options) {
        return EventModel.find().exec();
    }
};