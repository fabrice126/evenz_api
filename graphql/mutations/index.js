import blogPost from './blog-post';
import comment from './Comment';
import user from './User';
import address from './Address';

console.log("graphql mutation index");
export default {
  ...blogPost,
  ...comment,
  ...user,
  ...address,
};
