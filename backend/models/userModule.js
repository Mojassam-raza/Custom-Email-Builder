import { Schema, model } from '../connection';

const schema = new Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    city: { type: String, default: 'unknown' },
    createdAt: { type: Date, default: Date.now }
});

export default model('User', schema);