
const matches = require("../data/matches.js");
//console.log(matches);
module.exports = function(app) {

  app.get("/api/matches", function(request, response) {
    response.json(matches);

  });

  app.post("/api/matches", function(request, response) {

    //console.log("req.body: ", request.body);

    let newMatch = request.body;
    //const scores = 'scores[]';
    // let newMatchScores = newMatch[scores];
    let newScores = newMatch.scores;

    console.log("req.body/newmatch: ");
    console.log(newMatch);
    console.log("===============================");
    //console.log("newmatchscores", newMatchScores);

    const subtract = (a, b) => parseInt(a) - parseInt(b);
    const add = (a, b) => parseInt(a) + parseInt(b);

    // const subTest = [100, 20, 5];
    // const subTestResult = subTest.reduce(add);
    // console.log("subtraction test: ", subTestResult);


    // let newScores = newMatch.scores;
    let totalNew = newScores.reduce(add);
    console.log("totalnew: ", totalNew);
    console.log("===============================");
    console.log("All Matches: ");
    console.log(matches);
    console.log("===============================");
    console.log("API match scores e.g: ");
    console.log(matches[0].scores);
    console.log("===============================");
    console.log("Matches Object Length: ", matches.length);
    console.log("===============================");
    response.json("Done.");

    //let apiScoreTotals = matches[0].scores.reduce(add);
    //let totalApiScores = apiScores.reduce(add);
    //let totalApiScores = matches[i].scores.reduce(add)

    let apiScoreOptions = [];

    for (var i = 0; i < matches.length; i++) {
      let apiScoreTotals = matches[i].scores.reduce(add);
      let matchDiff = apiScoreTotals - totalNew;
      console.log("Index ", i, "Total API scores", apiScoreTotals);
      console.log("Total Difference NEW vs API: ", Math.abs(matchDiff));
      apiScoreOptions.push(Math.abs(matchDiff));
      console.log("API Score Options: ", apiScoreOptions);
      console.log("===============================");
      console.log("                              ");
    };

      console.log("Total (?) API Score Options: ", apiScoreOptions);


    // if (matchDiff ) {
    //
    // }

      //matches.allMatchesData.push(newMatch);

    })
  };
//
///
///
//
//
//
//
///
//
//
