require("dotenv").config();
const express = require("express")
const cors = require("cors")
const DBconnection = require("./db/database")
const userRoutes = require("./Routes/user.routes");

const PORT = process.env.PORT
const app = express()

app.use(cors())
app.use(express.json())

DBconnection();

app.use("/api/users", userRoutes);


app.listen(PORT, () => console.log(`serveur demarré sur le port ${PORT}`))