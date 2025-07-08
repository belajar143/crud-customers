const express = require('express');
const bodyParser = require('body-parser');
const customerRoutes = require('./routes/customerRoutes');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', customerRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
