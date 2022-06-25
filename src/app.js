const express = require('express')

const flights = require("../controllers/flight");
const models = require("./models/flight");

const flightRouter = require("../routes/flight");

const app = express();

app.use(express.json());

//routes
app.use("/api/v1/flight", flghtRouter);

const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });



