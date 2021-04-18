import mongoose from "mongoose";
const { Schema } = mongoose;

const GameSchema = new Schema ({
    title:  String,
    description: String,
    image: String,
    rating: {
        type: Number,
        default: 0,
    },
})

const Game = mongoose.model("Game", GameSchema);
export default Game;