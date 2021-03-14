const db = require('../models');

const index = (req, res) => {
  db.Spot.find({}, (err, allSpots) => {
    if (err) return console.log(err);
    res.json(allSpots);
  });
};

const show = (req, res) => {
  db.Spot.findById(req.params.id, (err, spot) => {
    if (err) return console.log(err);
    res.json(spot);
  });
};

const create = (req, res) => {
  const destination = req.body.destination;
  const newSpot = {
    spotName: req.body.spotName,
  };
  db.Spot.create(newSpot, (err, newSpot) => {
    if (err) return console.log(err);
    
    db.Destination.findById(destination, (err, foundDestination) => {
      foundDestination.spots.push(newSpot._id);
      foundDestination.save((err) => {
          res.json(newSpot);
      });
    });
  });
};

const update = (req, res) => {
  db.Spot.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedSpot) => {
      if(err) return console.log(err);
      res.json(updatedSpot);
    }
  );
};

const destroy = (req, res) => {
  db.Spot.findByIdAndDelete(req.params.id, (err, deletedSpot) => {
    if (err) return console.log(err);
    res.json(deletedSpot);
  });
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};