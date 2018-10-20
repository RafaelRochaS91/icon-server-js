const express = require('express');
const fs = require('fs');

const generateImage = require('./generateImage');

const app = express();


app.get('/:identifier/:size', async (req, res) => {
  const name = req.params.identifier;
  const size = req.params.size;

  await generateImage(name, Number.parseInt(size, 10), './assets/svg');
  const file = await fs.readFile('./assets/svg');

  res.status(200).send(file);
});


app.listen(4100, () => {
  console.log('server started at port 4100');
});
