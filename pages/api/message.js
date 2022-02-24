import dbConnect from "./dbConnect";
import messageModel from "./messageModel";

const handler = async (req, res) => {
    await dbConnect();
    if (req.method === "POST") {
        const { name, email, message } = req.body;
        console.log(name, email, message);
        try {
            var newMsg= new messageModel({
                name: name,
                email: email,
                message: message
            });
            const usersMsgs = await newMsg.save();
            res.status(200).json({ "message": usersMsgs });

        }catch(err){
            console.log(err);
            res.status(500).json({ "message": err });
        }                
    }
}

export default handler;