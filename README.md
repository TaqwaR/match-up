# Match Up
A compatibility-based friend finder application. Match Up takes in results from a users' surveys, then compares their answers with potential matches, and matches them with the best overall option. 

Once you answer all questions and submit, you will be Matched Up with another user. This project uses a few simple but effective algorithms to calculate the lowest variance between the users. 



## Technologies Used

- Node.js
- Express.js
- JavaScript
- jQuery
- Bootstrap
- Body-Parser (node package)
- Path (node package)
- AJAX & JSON and a custom API.

## Code Example

This project uses a few simple but effective algorithms to calculate the lowest variance between the users. Snippet below.

```javascript
const matches = require("../data/matches.js"); 
const add = (a, b) => parseInt(a) + parseInt(b);

let apiScoreOptions = [];
let apiScoreTotals = matches[i].scores.reduce(add);
let matchDiff = apiScoreTotals - totalNew;
let matchDiffAbs = Math.abs(matchDiff);
apiScoreOptions.push(matchDiffAbs);

let lowestVariance = Math.min(... apiScoreOptions);
let matchUp;
let matchUpPhoto;

for (var i = 0; i < matches.length; i++) {

   let apiScoreTotals = matches[i].scores.reduce(add);
   let matchDiff = apiScoreTotals - totalNew;
   let matchDiffAbs = Math.abs(matchDiff);

      if (matchDiffAbs <= lowestVariance)  {
        matchUp = matches[i].name;
        matchUpPhoto = matches[i].photo;
      }
}
```


## How to use

- Step 1: Fork this repository and clone it to your local environment.
- Step 2: Navigate to the cloned repo/folder and run `npm init`. Once the repo is initialized, run `npm install`. This will download all of the necessary dependencies. 
- Step 3: run node server.js, navigate to localhost:8080 on yur favorite web browser, and the application should ne up and running.
- Step 4 (bonus): Open the files in your favorite text editor and customize the application even more!