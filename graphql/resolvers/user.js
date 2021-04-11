import User from "../../models/User.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export default {
    Query: {
        user: async (root, {_id}) => {
            const user = await User.findById(_id).populate("games");
            return user;
        },
        users: async () => {
            const users = await User.find({}).populate("games");
            return users;
        },
        currentUser: async (root, args, context) => {
            return context.user;
        },
    },
    Mutation: {
        createUser: async(root, args) => {
            const userData = args.data;
            userData.password = await bcryptjs.hash(userData.password, 10);   
            const newUser = new User(userData);
            await newUser.save();
            return newUser;
        },
        editUser: async(root, {_id, data}) => {
            const user = await User.findByIdAndUpdate(_id, 
                {$set: data}, 
                {
                    runValidators: true,
                    new: true,
                }).populate("games")
            return user;
        },
        deleteUser: async(root, {_id}) => {
            const user = User.findOneAndDelete(_id).populate("games");
            return user;
        },
        login: async(root, {email, password}) => {
            const matchedUser = await User.findOne({email});
            if(!matchedUser){
               throw new Error(`cannot find user with email: ${email}`)
            }

            const validPassword = await bcryptjs.compare(password, matchedUser.password);
            if(!validPassword){
                throw new Error(`password not valid for: ${email}`)
            }

            const privateKey = process.env.JSONWEBTOKEN_PRIVATE_KEY;
            const token = jwt.sign({
                _id: matchedUser._id,
                email: matchedUser.email, 
            }, privateKey, {
                expiresIn: "1d"
            });

            return token;
        },
        logout: async(root, args, context) => {
            //TODO here we can blacklist tokens in some blacklist TTL collection
            return context.user;
        }
    }


}