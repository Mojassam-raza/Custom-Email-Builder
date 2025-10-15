import { Schema, model } from '../connection';

const emailschema = new Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

export default model('Email', emailschema);