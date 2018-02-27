
module.exports = function(app) {

  const jquery = require('jquery');

  const quesOne = $('#q1');
  const quesTwo = $('#q2');
  const quesThree = $('#q3');
  const quesFour = $('#q4');
  const quesFive = $('#q5');
  const quesSix = $('#q6');
  const quesSeven = $('#q7');
  const quesEight = $('#q8');
  const quesNine = $('#q9');
  const quesTen = $('#q10');

  const questions = [
    {question: quesOne},
    {question: quesTwo},
    {question: quesThree},
    {question: quesFour},
    {question: quesFive},
    {question: quesSix},
    {question: quesSeven},
    {question: quesEight},
    {question: quesNine},
    {question: quesTen}
  ];


  const submitBtn = $('#submit');

  submitBtn.on('click', function(event) {
    console.log(questions.length);
    console.log(questions);
    console.log(questions[0].question[0].selectedIndex);
    console.log(questions[0].question[0].value);
    console.log(parseInt($("#q1 option:selected").text()));

    for (var i = 0; i < questions.length; i++) {
      let newMatchAnswers = questions[i].question[0].selectedIndex;
      console.log(newMatchAnswers);
      newMatch.scores.push(newMatchAnswers)
    }
    newMatch.name = $('#new-name').val().trim();
    newMatch.photo = $('#new-photo').val().trim();
    console.log(newMatch);

  });

  //
  //
  // function totalMatchScores() {
  //   for (var i = 0; i < allMatchesData.length; i++) {
  //     allMatchesData[i].scores
  //
  //     if (allMatchesData[i].scores[i] === newMatch.scores[i]) {
  //       console.log("match");
  //     } else {
  //       console.log(newMatch.scores[i]);
  //     }
  //   }
  // }
  //
  // totalMatchScores();
}

let newMatch = {
  name: [],
  photo: [],
  scores: []
};

module.exports = newMatch;

let allMatchesData = [
  {
    "name":"Marie Laveau",
    "photo": "https://pa1.narvii.com/6353/4f8a9ec0e9caea8fbe1cab4ed1a9c35c2d3cd8c8_hq.gif",
    "scores": [5, 2, 2, 1, 1, 2, 1, 5, 2, 3]
  },
  {
    "name":"Nakia",
    "photo": "https://78.media.tumblr.com/240da432ebc3614c80eba57fec1bcca2/tumblr_ord96xT8m11ufe918o2_r1_250.gif",
    "scores": [1, 4, 4, 5, 5, 4, 5, 4, 3, 4]
  },
  {
    "name":"Frank Ocean",
    "photo": "https://media.giphy.com/media/gyw1NaoKXLPA4/giphy.gif",
    "scores": [5, 1, 2, 1, 2, 2, 2, 2, 5, 4]
  },
  {
    "name":"Desus Nice",
    "photo": "https://media.giphy.com/media/3ohs4i7VjPefGzoQlG/giphy.gif",
    "scores": [4, 4, 4, 4, 4, 4, 4, 1, 4, 4]
  }
];

module.exports = allMatchesData;
