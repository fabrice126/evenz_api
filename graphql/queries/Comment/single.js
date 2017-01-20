import {
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

import commentType from '../../types/Comment/Comment';
import CommentModel from '../../../models/Comment.model';

export default {
  type: commentType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params, ctx, options) {
    return CommentModel.findById(params.id).exec();
  }
};