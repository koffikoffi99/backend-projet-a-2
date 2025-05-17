require("dotenv").config();

const mongoose = require("mongoose")

const DBconnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("connexion reussie")
    } catch (error) {
        console.error("erreur lors de la connexion a MongoDB:", error.message)
    }
}

module.exports = DBconnection;