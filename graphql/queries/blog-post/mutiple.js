import {
  GraphQLList
} from 'graphql';

import blogPostType from '../../types/blog-post/blog-post';
import BlogPostModel from '../../../models/blog-post';

export default {
  type: new GraphQLList(blogPostType),
  args: {},
  resolve(root, params, ctx, options) {
    return BlogPostModel.find().exec();
  }
};