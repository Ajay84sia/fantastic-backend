const express = require("express");
const cors = require("cors");
const db = require("./config/db");
const mensRoutes = require("./routes/mensRoutes");

const port = 8080;

const app = express();
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.status(200).json({ msg: "Welcome to Fantastic Backend API" })
})

app.use("/mens", mensRoutes);



app.listen(port, async () => {
    try {
        db.connect((error) => {
            if (error) {
                console.log(error)
            } else {
                console.log("connected to the database")
            }
        })
    } catch (err) {
        console.log(err)
    }
    console.log(`server is running on port ${port}`);
});