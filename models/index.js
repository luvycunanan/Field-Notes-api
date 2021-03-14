const mongoose = require('mongoose')
const connectionString = 'mongodb://localhost:27017/field-notes';

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.log(err));

module.exports = {
  Destination: require('./Destination'),
  Spot: require('./Spot')
};

