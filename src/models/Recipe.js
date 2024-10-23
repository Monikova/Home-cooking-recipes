import {Schema, model, Types} from 'mongoose';

const recipeSchema = new Schema({
    title: {
        type: String, 
        required: true,
    },
    ingredients: {
        type: String, 
        required: true,
    },
    instructions: {
        type: String, 
        required: true,
    },
    description: {
        type: String, 
        required: true,
    },
    image: {
        type: String, 
        required: true,
    },
    // voteList: [{
    recommendList: [{
        type: Types.ObjectId, 
        ref: 'User',
    }],
    owner: {
        type: Types.ObjectId,
        ref: 'User',
    },
});

const Recipe = model('Recipe', recipeSchema);

export default Recipe; 