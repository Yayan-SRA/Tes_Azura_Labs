const produkService = require("../../../services/produkService");

module.exports = {
  list(req, res) {
    produkService
      .list() 
      .then(({ data }) => {
        res.status(200).json(data)
      })
      .catch((err) => {
        res.status(400).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  list2(req, res) {
    produkService
      .list2() 
      .then(({ data, count }) => {
        res.status(200).json(data)
      })
      .catch((err) => {
        res.status(400).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  create(req, res) {
    console.log("nama",req.body.nama)
    produkService
      .create({
        nama: req.body.nama,
        harga: req.body.harga,
        rating: req.body.rating,
        likes: req.body.likes,
      })
      .then((post) => {
        res.status(201).json({
          status: "OK",
          data: post,
        });
      })
      .catch((err) => {
        res.status(422).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  update(req, res) {
    const id = req.params.id
    console.log("coba", id, req.body.nama)
    produkService
      .update({id},
        {
          nama: req.body.nama,
          harga: req.body.harga,
          rating: req.body.rating,
          likes: req.body.likes,
        })
      .then(() => {
        res.status(200).json({
          status: "OK",
        });
      })
      .catch((err) => {
        res.status(422).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  detail(req, res) {
    produkService
      .get(req.params.id)
      .then((post) => {
        res.status(200).json({
          status: "OK",
          data: post,
        });
      })
      .catch((err) => {
        res.status(422).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  hapus(req, res) {
    const id = req.params.id;
    produkService
      .delete({id})
      .then(() => {
        res.status(204).end();
      })
      .catch((err) => {
        res.status(422).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },
};
