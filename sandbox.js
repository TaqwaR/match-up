const quesOne = document.getElementById('q1');
const quesTwo = document.getElementById('q2');
const quesThree = document.getElementById('q3');
const quesFour = document.getElementById('q4');
const quesFive = document.getElementById('q4');
const quesSix = document.getElementById('q6');
const quesSeven = document.getElementById('q7');
const quesEight = document.getElementById('q8');
const quesNine = document.getElementById('q9');
const quesTen = document.getElementById('q10');

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

// console.log(questions.length);
// console.log(questions);
// console.log(questions[0]);
// console.log(questions[0].question[0]);
// console.log(questions[0].question[0].selectedIndex);

function getAnswers() {

  console.log(questions.length);
  console.log(questions);
  console.log(questions[0].question[0].selectedIndex);
  console.log(questions[0].question[0].value);

  for (var i = 0; i < questions.length; i++) {
    let newMatchAnswers = questions[i].question[0].selectedIndex;
    console.log(newMatchAnswers);
    newMatch.scores.push(newMatchAnswers)
  }

  newMatch.name = document.getElementById('new-name').value;
  newMatch.photo = document.getElementById('new-photo').value;
  console.log(newMatch);

};

const submitBtn = document.getElementById('submit');

submitBtn.onclick = function() {
  getAnswers();
}
