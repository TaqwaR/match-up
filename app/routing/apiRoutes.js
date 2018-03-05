
const matches = require("../data/matches.js");

module.exports = function(app) {

  app.get("/api/matches", function(request, response) {
    response.json(matches);

  });

  app.post("/api/matches", function(request, response) {

    //console.log("request.body: ", request.body);

    let newMatch = request.body;
    let newScores = newMatch.scores;
    let matchUp;
    let matchUpPhoto;


    console.log("request.body/newmatch: ");
    console.log(newMatch);
    console.log("===============================");

    const subtract = (a, b) => parseInt(a) - parseInt(b);
    const add = (a, b) => parseInt(a) + parseInt(b);

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
      let matchDiffAbs = Math.abs(matchDiff);
      console.log("Index ", i, "Total API scores", apiScoreTotals);
      console.log("Total Difference NEW vs API: ", matchDiffAbs);
      apiScoreOptions.push(matchDiffAbs);
      console.log("API Score Options: ", apiScoreOptions);
      console.log("===============================");
      console.log("                              ");
    };

      console.log("Total API Score Options: ", apiScoreOptions);
      let lowestVariance = Math.min(... apiScoreOptions);
      console.log("Lowest Variance: ", lowestVariance);
      console.log("=============================");

    for (var i = 0; i < matches.length; i++) {

      let apiScoreTotals = matches[i].scores.reduce(add);
      let matchDiff = apiScoreTotals - totalNew;
      let matchDiffAbs = Math.abs(matchDiff);

      if (matchDiffAbs <= lowestVariance)  {
        matchUp = matches[i].name;
        matchUpPhoto = matches[i].photo;
        console.log("Your Best Match is: ");
        console.log(matchUp);
        console.log(matchUpPhoto);
      }

    }


      //matches.allMatchesData.push(newMatch);

    })
  };
