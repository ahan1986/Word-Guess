var inquirer = require('inquirer');
var word = require('./word');

var pilesOfWord = ['chocolate', 'white chocolate', 'dark chocolate'];

var randomWordSelector = Math.floor(Math.random()* pilesOfWord.length);

var wordToTransfer = pilesOfWord[randomWordSelector];

var wordGussing = new word(wordToTransfer);
