
const matches = require("../data/matches.js");

module.exports = function(app) {

  app.get("/api/matches", function(request, response) {
    response.json(matches);

  });

  app.post("/api/matches", function(request, response) {

    let chosenMatch {
      name: "",
      phots: "",
      scoreDifference: "",
    };

    console.log(request.body);

    let newMatch = request.body;
    let newMatchScores = newMatch.scores;

    console.log(newMatchScores);


  });
}
