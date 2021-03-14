const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  destinationName: { type: String, required: true },
  spots: [{ type: Schema.Types.ObjectId, ref: 'Spot' }]
});


const Destination = mongoose.model('Destination', destinationSchema);
module.exports = Destination;