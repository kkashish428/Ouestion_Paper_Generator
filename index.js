// index.js
const readline = require('readline');
const questionStore = require('./questionStore');
const { calculateDistribution } = require('./utils');

function generateQuestionPaper(totalMarks, difficultyDistribution) {
  const questionPaper = [];

  const difficultyMarks = calculateDistribution(totalMarks, difficultyDistribution);

  for (const difficulty in difficultyMarks) {
    const filteredQuestions = questionStore.filter(q => q.difficulty === difficulty);
    const selectedQuestions = filteredQuestions.slice(0, difficultyMarks[difficulty]);

    questionPaper.push(...selectedQuestions);
  }

  return questionPaper;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

function getUserInput(question) {
    return new Promise(resolve => {
      rl.question(question, answer => {
        resolve(answer);
      });
    });
  }

  async function generateQuestionPaper() {
    const totalMarks = parseInt(await getUserInput('Enter total marks for the question paper: '), 10);
    const easyPercentage = parseInt(await getUserInput('Enter percentage of Easy questions: '), 10);
    const mediumPercentage = parseInt(await getUserInput('Enter percentage of Medium questions: '), 10);
    const hardPercentage = parseInt(await getUserInput('Enter percentage of Hard questions: '), 10);
  
    const difficultyDistribution = { Easy: easyPercentage, Medium: mediumPercentage, Hard: hardPercentage };
    const difficultyMarks = calculateDistribution(totalMarks, difficultyDistribution);
  
    const questionPaper = [];
  
    for (const difficulty in difficultyMarks) {
      const filteredQuestions = questionStore.filter(q => q.difficulty === difficulty);
      const totalMarksForDifficulty = difficultyMarks[difficulty];
  
      let currentMarks = 0;
      let i = 0;
  
      while (currentMarks < totalMarksForDifficulty && i < filteredQuestions.length) {
        const question = filteredQuestions[i];
        if (currentMarks + question.marks <= totalMarksForDifficulty) {
          questionPaper.push(question);
          currentMarks += question.marks;
        }
        i++;
      }
    }
  
    console.log("Generated Question Paper:");
    console.log(questionPaper);
    rl.close();
  }
  
  generateQuestionPaper();