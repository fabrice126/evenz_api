import blogPost from './blog-post';
import user from './User';
import comment from './Comment';
import event from './Event';
import address from './Address';
import image from './Image';

export default {
  ...blogPost,
  ...user,
  ...comment,
  ...event,
  ...address,
  ...image
};
