import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import addressType from '../../types/Address/Address';
import AddressModel from '../../../models/Address.model';

export default {
  type: addressType,
  args: {
    _id: {
      name: '_id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  async resolve(root, params, options) {
    const removedAddress = await AddressModel.findByIdAndRemove(params._id, {}).exec();

    if (!removedAddress) {
      throw new Error('Error removing blog post');
    }

    return removedAddress;
  }
};