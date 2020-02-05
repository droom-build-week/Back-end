const jobListings = require("./jobListings-model");

function deleteJobListing(req, res) {
  const { jobListing_id } = req.params;

  jobListings
    .remove(jobListing_id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({
          message: "Couldn't find job listing with given id"
        });
      }
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "There was an error deleting this job listing" });
    });
}

module.exports = deleteJobListing;
