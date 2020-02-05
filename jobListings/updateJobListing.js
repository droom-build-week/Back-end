const jobListings = require("./jobListings-model");

function updateJobListing(req, res) {
  const { jobListing_id } = req.params;
  const changes = req.body;

  jobListings
    .findById(jobListing_id)
    .then(jobListing => {
      if (jobListing) {
        jobListings.update(changes, jobListing_id).then(updatedJobListing => {
          res.json(updatedJobListing);
        });
      } else {
        res.status(404).json({
          message: "Couldn't find job listing with given id"
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "There was an error updating this job listing"
      });
    });
}

module.exports = updateJobListing