import {
    GraphQLList
} from 'graphql';

import addressType from '../../types/Address/Address';
import AddressModel from '../../../models/Address.model';

export default {
    type: new GraphQLList(addressType),
    args: {},
    resolve(root, params, ctx, options) {
        return AddressModel.find().exec();
    }
};