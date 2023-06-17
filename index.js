const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola a mi server Express -reynald0_sw');
})
app.get('/nueva-ruta', (req, res) => {
  res.send('Hola soy una nueva ruta -reynald0_sw');
})
app.get('/products', (req, res) => {
  res.json({
    name: 'Product 1',
    price: '100'
  })
})

app.listen(port, () => {
  console.log('Esta corriendo Mi puerto:' + port );
})

