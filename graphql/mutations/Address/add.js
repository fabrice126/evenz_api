import {
    GraphQLNonNull,
    GraphQLBoolean
} from 'graphql';

import addressInputType from '../../types/Address/Address-input';
import AddressModel from '../../../models/Address.model';

export default {
    type: GraphQLBoolean,
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(addressInputType)
        }
    },
    async resolve(root, params, options) {
        const addressModel = new AddressModel(params.data);
        const newAddress = await addressModel.save();

        if (!newAddress) {
            throw new Error('Error adding new blog post');
        }
        return true;
    }
};