import Game from "../../models/Game.js";

export default {
    Query: {
        game: async (root, {_id}) => {
            const game = await Game.findById(_id);
            return game;
        },
        games: async () => {
            const games = await User.find({});
            return games;
        }
    },
    Mutation: {
        createGame: async(root, args) => {
            const newGame = new Game(args.data)
            await newGame.save();
            return newGame;
        },
        editGame: async(root, {_id, data}) => {
            const game = await Game.findByIdAndUpdate(_id, 
                {$set: data}, 
                {
                    runValidators: true,
                    new: true,
                })
            return game;
        },
        deleteGame: async(root, {_id}) => {
            const game = Game.findOneAndDelete(_id);
            return game;
        },
    }


}