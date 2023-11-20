# Question Paper Generator

This is a simple Question Paper Generator application built in Node.js. The application stores a set of questions in a Question Store and generates a question paper based on user input for total marks and the distribution of marks across difficulty levels.

## Files

- **index.js:** The main script that takes user input and generates a question paper.
- **questionStore.js:** Contains a sample set of questions with attributes such as question, subject, topic, difficulty, and marks.
- **utils.js:** Utility functions, including one to calculate the distribution of marks based on percentages.

## How to Run

1. Ensure you have Node.js installed on your machine.

2. Open a terminal and navigate to the directory containing the application files.

3. Run the command:
   ```bash
   node index.js

## Example
Let's say you want to generate a question paper with the following requirements:

- **Example 1**
Total Marks: 100<br>
Difficulty Distribution: Easy (20%), Medium (30%), Hard (50%)<br>
Here's a sample interaction:<br>

Enter total marks for the question paper: 100<br>
Enter percentage of Easy questions: 20<br>
Enter percentage of Medium questions: 30<br>
Enter percentage of Hard questions: 50<br>

Generated Question Paper:
[
  {
    question: 'What is the speed of light?',
    subject: 'Physics',
    topic: 'Waves',
    difficulty: 'Easy',
    marks: 5
  },
  {
    question: 'Do atoms ever actually touch each other?',
    subject: 'Physics',
    topic: 'Electromagnetism',
    difficulty: 'Easy',
    marks: 5
  },
  {
    question: 'what is the radius of the second Bohr orbit for the hydrogen atom?',
    subject: 'Chemistry',
    topic: 'Atomic Structure',
    difficulty: 'Easy',
    marks: 5
  },
  {
    question: 'What is the conjugate base of OH(negative)?',
    subject: 'Chemistry',
    topic: 'Equilibrium',
    difficulty: 'Easy',
    marks: 5
  },
  {
    question: 'Can sound waves generate heat?',
    subject: 'Physics',
    topic: 'Heat',
    difficulty: 'Medium',
    marks: 10
  },
  {
    question: 'Do flames contain plasma?',
    subject: 'Physics',
    topic: 'Ionization',
    difficulty: 'Medium',
    marks: 10
  },
  {
    question: 'The compound of Xenon with zero dipole moment is?',
    subject: 'Chemistry',
    topic: 'Chemical Bonding',
    difficulty: 'Medium',
    marks: 10
  },
  {
    question: 'Why are sound waves invisible?',
    subject: 'Physics',
    topic: 'Sound',
    difficulty: 'Hard',
    marks: 25
  },
  {
    question: 'Why does a rainbow exist only in a narrow band?',
    subject: 'Physics',
    topic: 'Refraction',
    difficulty: 'Hard',
    marks: 25
  }
]

- **Example 2**
Total Marks: 50
Difficulty Distribution: Easy (20%), Medium (30%), Hard (50%)
Here's a sample interaction:

Enter total marks for the question paper: 50
Enter percentage of Easy questions: 20
Enter percentage of Medium questions: 30
Enter percentage of Hard questions: 50

Generated Question Paper:
[
  {
    question: 'What is the speed of light?',
    subject: 'Physics',
    topic: 'Waves',
    difficulty: 'Easy',
    marks: 5
  },
  {
    question: 'Do atoms ever actually touch each other?',
    subject: 'Physics',
    topic: 'Electromagnetism',
    difficulty: 'Easy',
    marks: 5
  },
  {
    question: 'Can sound waves generate heat?',
    subject: 'Physics',
    topic: 'Heat',
    difficulty: 'Medium',
    marks: 10
  },
  {
    question: 'Why are sound waves invisible?',
    subject: 'Physics',
    topic: 'Sound',
    difficulty: 'Hard',
    marks: 25
  }
]
