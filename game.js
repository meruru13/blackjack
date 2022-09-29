const cards = ['hA', 'sA', 'dA', 'cA', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'hJ', 'hQ', 'hK', 'sJ', 'sQ', 'sK', 'dJ', 'dQ', 'dK', 'cJ', 'cQ', 'cK'];
let yourScore = 0;
const dealDiv = document.getElementById("deal");
const resultDiv = document.getElementById("result");


function dealCards() {
  const randomNumber = Math.floor(Math.random() * 52);
  return cards[randomNumber];
}

function deal() {
  const card = dealCards();
  console.log(card);
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

function main() {
  dealDiv.addEventListener('click', function() {
    console.log("you clicked");
  })
} 
//cant get the DEAL button to work. 
//when it works (deals twice on click) --> show result in the result div, ask to hold/hit, deal once more if hit, calculate yourScore
//add you lose/you win alerts. simple ver done

console.log(yourScore);
main()