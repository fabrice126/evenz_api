import {
  GraphQLBoolean
} from 'graphql';

import CommentModel from '../../../models/Comment.model';

export default {
  type: GraphQLBoolean,
  resolve(root, params, options) {
    return CommentModel.remove().exec();
  }
};