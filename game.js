const cards = ['hA', 'sA', 'dA', 'cA', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'hJ', 'hQ', 'hK', 'sJ', 'sQ', 'sK', 'dJ', 'dQ', 'dK', 'cJ', 'cQ', 'cK'];
let yourScore = 0;
const resultDiv = document.getElementById("result");
const hitDiv = document.getElementById("hit");
const standDiv = document.getElementById("stand");
const yourMoveDiv = document.getElementById("hit-or-stand");
const yourCardsDiv = document.getElementById("your-cards");
const firstCardDiv = document.getElementById("first-card");
const secondCardDiv = document.getElementById("second-card");
let thisRound = cards;

function dealCards(arr) {
  const randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
}

function deal() {
  const card = dealCards(thisRound);
  thisRound = thisRound.filter(noRepeat);
  function noRepeat(test) {
    return test !== card;
  }
  showCards(card);
  switch (card) {
    case "h2": case "s2": case "d2": case "c2":
      yourScore += 2;
      break;
    case "h3": case "s3": case "d3": case "c3":  
      yourScore += 3;
      break;
    case "h4": case "s4": case "d4": case "c4":
      yourScore += 4;
      break;
    case "h5": case "s5": case "d5": case "c5":
      yourScore += 5;
      break;
    case "h6": case "s6": case "d6": case "c6":
      yourScore += 6;
      break;
    case "h7": case "s7": case "d7": case "c7":
      yourScore += 7;  
      break;
    case "h8": case "s8": case "d8": case "c8":
      yourScore += 8;
      break;
    case "h9": case "s9": case "d9": case "c9":
      yourScore += 9;  
      break;
    case "h10": case "s10": case "d10": case "c10": case "hJ": case "sJ": case "dJ": case "cJ": case "hQ": case "sQ": case "dQ": case "cQ": case "hK": case "sK": case "dK": case "cK":
      yourScore += 10;
      break;
      case "hA": case "sA": case "dA": case "cA":
        if (yourScore + 11 <= 21) {
          yourScore += 11;
        }
        else {
          yourScore += 1;
        }
        break;
  }
}

function closeTab() {
  close();
  close();
}

function hit() {
  deal();
  if (yourScore > 21) {
    window.alert("Your score is " + yourScore + ". You Lose!");
    location.reload();
  } 
  else if (yourScore == 21) {
    window.alert("Your score is " + yourScore + ". You Win!");
    location.reload();
  }
  else {
    resultDiv.innerHTML = `Your score is ${yourScore}. Hit or Stand?`;
  }
}

$(document).ready(function() {
$('#deal').one('click', function() {
  deal();
  deal();
  yourCardsDiv.classList.remove('d-none');
  yourCardsDiv.classList.add('d-flex');
  if (yourScore == 21) {
    window.alert("Your score is " + yourScore + ". It's a black jack!");
    location.reload();
  }
  else {
  resultDiv.innerHTML = `Your score is ${yourScore}. Hit or Stand?`;
  yourMoveDiv.classList.remove('d-none');
  yourMoveDiv.classList.add('d-flex');
      }
    })
  })

$(document).ready(function() {
  $('#stand').on('click', function() {
    window.alert("You Lose!");
    location.reload();
    })
  })

$(document).ready(function() {
  $('#hit').on('click', function() {
    hit();
    })
  })

  function showCards(card) {
    if (card.includes('h') == true) {
      firstCardDiv.innerHTML += " ❤️" + card[1];
    }
    else if (card.includes('s') == true) {
      firstCardDiv.innerHTML += " ♠️" + card[1];
    }
    else if (card.includes('d') == true) {
      firstCardDiv.innerHTML += " ♦️" + card[1];
    }
    else if (card.includes('c') == true) {
      firstCardDiv.innerHTML += " ♣️" + card[1];
    }
    }
