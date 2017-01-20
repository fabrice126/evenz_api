import {
    GraphQLID,
    GraphQLNonNull
} from 'graphql';

import eventType from '../../types/Event/Event';
import EventModel from '../../../models/Event.model';

export default {
    type: eventType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params, ctx, options) {
        return EventModel.findById(params.id).exec();
    }
};