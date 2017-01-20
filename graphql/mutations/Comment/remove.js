import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import commentType from '../../types/Comment/Comment';
import CommentModel from '../../../models/Comment.model';

export default {
  type: commentType,
  args: {
    _id: {
      name: '_id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  async resolve(root, params, options) {
    const removedComment = await CommentModel.findByIdAndRemove(params._id, {}).exec();

    if (!removedComment) {
      throw new Error('Error removing blog post');
    }

    return removedComment;
  }
};