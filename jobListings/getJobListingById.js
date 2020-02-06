const jobListings = require("./jobListings-model");

function getJobListingById(req, res) {
  const { id } = req.params;
  jobListings
    .findById(id)
    .then(jobListing => {
      if (jobListing) {
        res.status(200).json(jobListing);
      } else {
        res.status(404).json({
          message: "There was an error retrieving this job listing"
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "There was an error retrieving this job listing"
      });
    });
}

module.exports = getJobListingById;