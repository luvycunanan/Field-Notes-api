const db = require('../models');

const index = (req, res) => {
  db.Destination.find({}, (err, allDestinations) => {
    if (err) return console.log(err);
    res.json(allDestinations);
  })
};

const show = (req, res) => {
  db.Destination.findById(req.params.id).populate('spots').exec((err, destination) => {
    if (err) return console.log(err);
    res.json(destination)
  })
}

// const show = (req, res) => {
//   db.Destination.findById(req.params.id, (err, destination) => {
//     if (err) return console.log(err);
//     res.json(destination);
//   })
// };

const create = (req, res)  => {
  const newDestination = {
    destinationName: req.body.destinationName,
  }
  db.Destination.create(newDestination, (err, newDestination) => {
    if (err) return console.log(err);
    res.json(newDestination);
  });
};

const update = (req, res) => {
  db.Destination.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedDestination) => {
      if(err) return console.log(err);
      res.json(updatedDestination);
    }
  );
};

const destroy = (req, res) => {
  db.Destination.findByIdAndDelete(req.params.id, (err, deletedDestination) => {
    if (err) return console.log(err);
    res.json(deletedDestination);
  });
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};