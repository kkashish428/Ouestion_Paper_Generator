// utils.js
function calculateDistribution(totalMarks, distribution) {
    const distributionObj = {};
    let remainingMarks = totalMarks;
  
    for (const [difficulty, percentage] of Object.entries(distribution)) {
      const marks = Math.round((percentage / 100) * totalMarks);
      distributionObj[difficulty] = marks;
      remainingMarks -= marks;
    }
  
    // Distribute the remaining marks to the difficulty with the highest percentage
    const maxDifficulty = Object.keys(distributionObj).reduce((a, b) => (
      distributionObj[a] > distributionObj[b] ? a : b
    ));
  
    distributionObj[maxDifficulty] += remainingMarks;
  
    return distributionObj;
  }
  
  module.exports = { calculateDistribution };
  