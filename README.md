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
Total Marks: 100
Difficulty Distribution: Easy (20%), Medium (30%), Hard (50%)
Here's a sample interaction:

```bash
Enter total marks for the question paper: 100
Enter percentage of Easy questions: 20
Enter percentage of Medium questions: 30
Enter percentage of Hard questions: 50

