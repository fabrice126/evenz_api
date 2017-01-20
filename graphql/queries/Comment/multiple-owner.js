import {
    GraphQLList,
    GraphQLNonNull,
    GraphQLID,
} from 'graphql';

import commentType from '../../types/Comment/Comment';
import CommentModel from '../../../models/Comment.model';

export default {
    type: new GraphQLList(commentType),
    args: {
        _Owner: {
            name: '_Owner',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params, ctx, options) {
        return CommentModel.find({
            _Owner: params._Owner
        }).exec();
    }
};