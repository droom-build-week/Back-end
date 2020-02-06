const jobListings = require("./jobListings-model");

function getAllJobListings(req, res) {
  jobListings
    .findAll()
    .then(jobListings => {
      res.status(200).json(jobListings);
    })
    .catch(error => {
      res.status(404).json({
        errorMessage: "Could not get joblistings!"
      });
    });
}

module.exports = getAllJobListings;
