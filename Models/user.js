const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    profile: {
        type: String
    },
    nom: {
        type: String,
        required: [true, "Le nom est obligatoire"]
    },
    email: {
        type: String,
        required: [true, "L'email est obligatoire"],
        unique: true,
        match: [/.+\@.+\..+/, "Email invalide"]
    },
    telephone: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: true
    }
    ,
    genre: {
        type: String
    },
    adresse: {
        type: String
    }
}, {
    timestamps: true
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
