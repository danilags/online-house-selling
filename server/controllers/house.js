const db = require('../models/house');

let createHouse = function(req, res) {
  db.findOne(function(err, data) {
    if (err) {
      res.send("Data Error !")
    } else {
      let newHouse = new db({
        title         : req.body.title,
        description   : req.body.description,
        price         : req.body.price,
        owner         : req.body.owner,
        image         : req.body.image,
        address       : req.body.address,
        location      : {
          long : req.body.long,
          lat  : req.body.lat
        }
      })
      newHouse.save(function(err, data) {
        if (err) {
          res.send(err)
        } else {
          res.send(data)
        }
      })
    }
  })
}

let getAll = function(req, res) {

  db.find({}, function(err, datas) {
    if (err) {
      res.send(err)
    } else {
      res.send(datas)
    }
  })

}

let updateHouse = function(req, res) {
  db.findByIdAndUpdate(req.params.id, {
    $set : {
      title         : req.body.title,
      description   : req.body.description,
      price         : req.body.price,
      owner         : req.body.owner,
      address       : req.body.address,
      location      : {
        long : req.body.long,
        lat  : req.body.lat
      }
    }
  }, function(err, data) {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
}

let deleteHouse = function(req, res) {
  db.findByIdAndRemove(req.params.id, function(err, data) {
    if (err) {
      res.send(err)
    } else {
      res.send("House berhasil di hapus !")
    }
  })
}

module.exports = {
  createHouse,
  getAll,
  updateHouse,
  deleteHouse
}
