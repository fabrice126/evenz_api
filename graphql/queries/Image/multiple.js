import {
    GraphQLList
} from 'graphql';

import imageType from '../../types/Image/Image';
import ImageModel from '../../../models/Image.model';

export default {
    type: new GraphQLList(imageType),
    args: {},
    resolve(root, params, ctx, options) {
        return ImageModel.find().exec();
    }
};