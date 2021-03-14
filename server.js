const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const spotRoutes = require('./routes/spots');
const destinationRoutes = require('./routes/destinations');

// Middleware
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Test');
});

app.use('/api/spots', spotRoutes);
app.use('/api/destinations', destinationRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
