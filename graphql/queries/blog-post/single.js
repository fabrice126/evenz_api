import {
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

import blogPostType from '../../types/blog-post/blog-post';
import BlogPostModel from '../../../models/blog-post';

export default {
  type: blogPostType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params, ctx, options) {
    return BlogPostModel.findById(params.id).exec();
  }
};