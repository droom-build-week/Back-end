const Matches = require("./matches-model");

function getAllMatches(req, res) {
  Matches.findAll()
    .then(matches => {
      if (matches) {
        res.status(200).json(matches);
      } else {
        res.status(404).json({
          message: "There was an error retrieving the matches"
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "There was an error retrieving the matches"
      });
    });
}

module.exports = getAllMatches;