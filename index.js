const express = require('express');
var bodyParser = require('body-parser')
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

function isNumber(char) {
    if (typeof char !== 'string') {
        return false;
    }

    if (char.trim() === '') {
        return false;
    }

    return !isNaN(char);
}

function charIsLetter(char) {
    if (typeof char !== 'string') {
        return false;
    }

    return /^[a-zA-Z]+$/.test(char);
}

app.post('/challenge', function(req, res) {
  let array = req.body.data;
  if(array) {

    // Get numbers
    let numbers = [];
    array.forEach(element => {
        if(isNumber(element)) numbers.push(element);
    });

    let alphabets = [];
    array.forEach(element => {
        if(charIsLetter(element)) alphabets.push(element);
    });

    let count = array.length;
    let is_success = true;
    let user_id = "sayan_sahu_05112000";
    let roll_number = "19070122150";
    let email = "sayan.sahu.btech2019@sitpune.edu.in"; 

    response = {
        count: count,
        is_success,
        user_id,
        roll_number,
        email,
        numbers,
        alphabets
    }

    res.send(response);
  } else {
    res.send(req.body);
  }
});

app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`)
});

// Export the Express API
module.exports = app;