import {
    GraphQLID,
    GraphQLNonNull
} from 'graphql';

import addressType from '../../types/Address/Address';
import AddressModel from '../../../models/Address.model';

export default {
    type: addressType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params, ctx, options) {
        return AddressModel.findById(params.id).exec();
    }
};