const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const spotSchema = new Schema({
  spotName: { type: String, required: true },
  destination: { type: Schema.Types.ObjectId, ref: 'Destination' }
});

const Spot = mongoose.model('Spot', spotSchema);
module.exports = Spot;