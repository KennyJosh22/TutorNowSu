import * as mongoose from "mongoose";

const Schema= mongoose.Schema;

export const UserSchema = new Schema ({
    ggID:Number,
    isTutor:Boolean
    
}, {collection: 'users'});