import User from "../../models/User.js";

export default {
    Query: {
        user: async (root, {_id}) => {
            const user = await User.findById(_id);
            return user;
        },
        users: async () => {
            const users = await User.find({});
            return users;
        }
    },
    Mutation: {
        createUser: async(root, args) => {
            const newUser = new User(args.data);
            await newUser.save();
            return newUser;
        },
        editUser: async(root, {_id, data}) => {
            const user = await User.findByIdAndUpdate(_id, 
                {$set: data}, 
                {
                    runValidators: true,
                    new: true,
                })
            return user;
        },
        deleteUser: async(root, {_id}) => {
            const user = User.findOneAndDelete(_id);
            return user;
        },
    }


}