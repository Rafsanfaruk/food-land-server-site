const express = require('express');
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;


app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome server');
});

const recipeData =require('./data.json');

app.get("/data", (req, res) => {
    res.send(recipeData);
  });



app.listen(port,()=>{
    console.log(`Recipe Api is running on ${port}`);
})

