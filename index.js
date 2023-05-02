const express = require('express');
const app = express();
// const cors = require("cors");
// const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Welcome server');
});

const recipeData =require('./data.json');

app.get("/card", (req, res) => {
    res.send(recipeData);
  });

  app.get("/card/:id", (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id);
  
    // if (id === 0) {
    //   res.send(recipeData);
    // } else {
    //   const recipeDataAll = recipeData.filter((n) => parseInt(n.recipeData_id) === id);
    //   res.send(recipeDataAll);
    // }
});

app.listen(5000,()=>{
    console.log('server is  running on port');
})

