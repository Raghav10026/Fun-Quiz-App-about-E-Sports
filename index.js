const rs =require('readline-sync');
var readlineSync = require("readline-sync");
const chalk = require('chalk');

console.log(chalk.red.bold("Welcome to MY GAME\n"));

var playerName = rs.question("Tell me YOUR NAME: ");
console.log(chalk.green('WELCOME'+ " " +playerName));
//GLOBAL VARIABLE DECLARATION
var score = 0;

  function play(question,answer)
{
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toLowerCase()===answer.toLowerCase())
  {
    console.log(chalk.green('\tCORRECT'));
    score = score+1;
  }
  else
  {
    console.log(chalk.cyan('\tWRONG'));
    score= score-1;
  }
  console.log(chalk.green('Your score is  :' + score));
}
console.log('\n----------------\n');
console.log('Lets start the gameplay \nFew Instructions\n1. Type your all the answers in Capital Letters\n2. Good Luck');
console.log('\n----------------\n');
console.log('Current Score:' + score);

var questions =[
  {
    question: chalk.white(`
    In which year Dota 2 was launched?            
    a) 2010
    b) 2011
    c) 2012
    d) 2013\n`),
    answer:"d"
  },
  {
    question:chalk.red(`
    Which is the most famous Hero in Dota 2?            
    a)Juggernut
    b)Pudge
    c)Zeus
    d)Techies\n`),
    answer:"b"
  },
  {
    question:chalk.white(`
    Which is the Highest Win Rate Hero In Dota 2?
    a)Zeus
    b)Phantom Lancer
    c)Arc Warden
    d)Clinkz\n`),
    answer:"d"
  },
  {
    question:chalk.red(`
    Which player has 100% win rate in TI?
    a)Gorgc
    b)Arteezy
    c)Puppey
    d)Topson\n`),
    answer:"d"
  },
  {
    question:chalk.white(`
    What is the prize pool of TI 2021?
    a)$40 Million
    a)$50 Million
    a)$60 Million
    a)$70 Million\n`),
    answer:"a"
  }
];
//calling function
for(let i =0 ; i<questions.length;i++){
    play(questions[i].question,questions[i].answer);

}
console.log('Final score is  :' + score);  

console.log('\n----------------\n');
console.log('THANK YOU FOR PLAYING !');
console.log('YOUR SCORED : ' + score);