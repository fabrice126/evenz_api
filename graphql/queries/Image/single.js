import {
    GraphQLID,
    GraphQLNonNull
} from 'graphql';

import imageType from '../../types/Image/Image';
import ImageModel from '../../../models/Image.model';

export default {
    type: imageType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params, ctx, options) {
        return ImageModel.findById(params.id).exec();
    }
};