import {
  GraphQLList
} from 'graphql';

import commentType from '../../types/Comment/Comment';
import CommentModel from '../../../models/Comment.model';

export default {
  type: new GraphQLList(commentType),
  args: {},
  resolve(root, params, ctx, options) {
    return CommentModel.find().exec();
  }
};