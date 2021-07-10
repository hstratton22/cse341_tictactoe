const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    play: {
        type: Boolean,
        required: true,
    },
    player1Turn: {
        type: Boolean,
        required: true
    },
    player1: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    player2: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    
    //clickCount: String,
    gameWinner: String, // Options: player1, player2, tie
    gameGrid: { 
        type: String,
        required: false
    }
});

module.exports = mongoose.model('GamePlay', gameSchema);


