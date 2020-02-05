const Matches = require("./matches-model");

function getMatchesByCompanyId(req, res) {
    const { id } = req.params;
    Matches.findByCompanyId(id)
    .then(matches => {
        if (matches) {
          res.status(200).json(matches);
        } else {
          res.status(404).json({
            message: "There was an error retrieving your matches"
          });
        }
      })
      .catch(err => {
        res.status(500).json({
          message: "There was an error retrieving your matches"
        });
      });
}

module.exports = getMatchesByCompanyId;