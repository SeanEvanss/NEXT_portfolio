import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
},
{
    collation:"messages"
});

var messageModel= mongoose.model("Message", messageSchema);
export default mongoose.models.Message || messageModel;