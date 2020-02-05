function validateJobListing(req, res, next) {
  const jobListing = req.body;

  if (Object.keys(jobListing).length === 0) {
    res.status(400).json({
      message: "No content to post"
    });
  } else if (
    jobListing.title === "" ||
    jobListing.description === "" ||
    jobListing.salary === ""
  ) {
    res.status(400).json({
      message: "Please fill out all needed fields!"
    });
  } else {
    next();
  }
}

module.exports = validateJobListing;
