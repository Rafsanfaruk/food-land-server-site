const express = require('express');
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;


app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome server');
});

const recipeData =require('./data.json');
// const data =require('./data.json');

app.get("/data", (req, res) => {
    res.send(recipeData);
  });

  app.get("/data/:id", (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id);
  
    if (id === 0) {
      res.send(recipeData);
    } else {
      const allData = recipeData.filter((n) => parseInt(n.id) === id);
      res.send(allData);
    }
});
  



app.listen(port,()=>{
    console.log(`Recipe Api is running on ${port}`);
})

