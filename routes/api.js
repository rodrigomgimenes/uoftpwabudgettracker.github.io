// const router = require("express").Router();
// const Transaction = require("../models/transaction.js");
const db = require("../models");

module.exports = function(app) {
  // router.post("/api/transaction", ({body}, res) => {
  app.post("/api/transaction", ({body}, res) => {
    // Transaction.create(body)
    db.Transaction.create(body)
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(404).json(err);
      });
  });

  // router.post("/api/transaction/bulk", ({body}, res) => {
  app.post("/api/transaction/bulk", ({body}, res) => {
    // Transaction.insertMany(body)
    db.Transaction.insertMany(body)
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(404).json(err);
      });
  });

  // router.get("/api/transaction", (req, res) => {
  app.get("/api/transaction", (req, res) => {
    // Transaction.find({}).sort({date: -1})
    db.Transaction.find({}).sort({date: -1})
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(404).json(err);
      });
  });
};

// module.exports = router;