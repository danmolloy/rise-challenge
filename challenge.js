const sampleQuestions = [
  "What is 25 + 63?",
  "What is 10 + 10?",
  "What is 14 + 14?",
  "What is 45 + 88?",
  "What is 98 + 99?",
  "What is 67 + 63?",
  "What is 44 + 44?",
  "What is 32 + 86?",
  "What is 32 + 21?",
  "What is 62 + 91?",
];

function getAnswer(questionNumber) {
  const equationRegex = /\d{2}\s[+]\s\d{2}/;
  const equationStr = sampleQuestions[questionNumber].match(equationRegex)[0];
  let [num1, num2] = equationStr.split(" + ");
  
  return Number(num1) + Number(num2)
  
}


function logQuestions() {
  for (let i = 0; i < sampleQuestions.length; i++) {
    let answer = getAnswer(i);
    console.log(`${sampleQuestions[i]}; ${answer}`);
  }
}


logQuestions(); 
