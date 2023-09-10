import mongoose from "mongoose";
let blogsschema = mongoose.Schema({
    title: String,
    description: String,

    uid: String,
    createdAt: {
        type: Date,
        default: Date.now // Sets the default value to the current date and time
    }

})
if (mongoose.models['blogspost']) {
    delete mongoose.models['blogspost']
}
export const BLOGSMODEL = mongoose.model("blogspost", blogsschema)