
const matches = require("../data/matches");

module.exports = function(app) {

  app.get("/api/matches", function(request, response) {
    response.json(matches);
  });

  app.post("/api/matches", function(request, response) {
    response.json();
    console.log(response.json);
    matches.push(request.body);

    // if (newMatch) {
    //   allMatchesData.push(request.body);
    //   response.json(true);
    // }

    //compatibility logic also goes here
  });
}
