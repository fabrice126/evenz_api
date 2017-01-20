import {
    GraphQLBoolean
} from 'graphql';

import Address from '../../../models/Address.model';

export default {
    type: GraphQLBoolean,
    resolve(root, params, options) {
        return Address.remove({}).exec();
    }
};