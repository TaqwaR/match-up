
const matches = require("../data/matches.js");

module.exports = function(app) {

  app.get("/api/matches", function(request, response) {
    response.json(matches);

  });

  app.post("/api/matches", function(request, response) {

    console.log(request.body);

    let newMatch = request.body;
    let newMatchScores = newMatch.scores;

    console.log(newMatch);
    console.log(newMatchScores);

    const subtract = (a, b) => a - b;
    const add = (a, b) => a + b;

    let newScores = newMatch.scores;
    let totalNew = newScores.reduce(add);
    console.log(totalNew);

    for (var i = 0; i < matches.allMatchesData[i].scores.length; i++) {
      let oldScores = matches.allMatchesData[i].scores;
      let totalOld = oldScores.reduce(add);
      console.log(totalOld);
      let matchDiff = "";
    };

      //matches.allMatchesData.push(newMatch);

    })
  };
