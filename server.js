const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv').config();

const spotRoutes = require('./routes/spots');
const destinationRoutes = require('./routes/destinations');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');

// Middleware
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Test');
});

app.use('/api/spots', spotRoutes);
app.use('/api/destinations', destinationRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
