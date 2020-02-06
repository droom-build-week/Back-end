const jobListings = require("./jobListings-model");

function createJobListing(req, res) {
  const jobListing = req.body;

  const newJobListing = { ...jobListing };

  jobListings
    .add(newJobListing)
    .then(jobListing => {
      res.status(201).json(jobListing);
    })
    .catch(error => {
      res.status(400).json({
        message: "There was an error creating this new job listing"
      });
    });
}

module.exports = createJobListing;
