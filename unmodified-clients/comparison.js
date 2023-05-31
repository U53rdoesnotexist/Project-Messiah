const fs = require('fs');
const stringSimilarity = require('string-similarity');

// Function to parse JavaScript files into separate function/statement groups
function parseFile(filename) {
  const code = fs.readFileSync(filename, 'utf8');
  const functions = code.split(/(?<=})\s*/);

  return functions.map((func) => func.trim());
}

// Function to calculate similarity index between two function groups
function calculateSimilarity(func1, func2) {
  const similarity = stringSimilarity.compareTwoStrings(func1, func2);
  return Math.floor(similarity * 100);
}

// Function to find pairs with the highest similarity index
function findPairs(newFile, oldFile) {
  const pairs = [];

  for (const newFunc of newFile) {
    let highestSimilarity = 0;
    let mostSimilarFunc = '';

    for (const oldFunc of oldFile) {
      const similarity = calculateSimilarity(newFunc, oldFunc);

      if (similarity > highestSimilarity) {
        highestSimilarity = similarity;
        mostSimilarFunc = oldFunc;
      }
    }

    pairs.push({
      newFunc,
      oldFunc: mostSimilarFunc,
      similarity: highestSimilarity,
    });
  }

  return pairs;
}

// Function to log the pairs with the lowest similarity index
function logLowestSimilarityPairs(pairs, count) {
  const sortedPairs = pairs.sort((a, b) => a.similarity - b.similarity).slice(0, count);

  console.log(`Lowest similarity pairs (${count}):`);
  sortedPairs.forEach((pair, index) => {
    console.log(`Pair ${index + 1}:`);
    console.log(`New Function/Statement: ${pair.newFunc}`);
    console.log(`Old Function/Statement: ${pair.oldFunc}`);
    console.log(`Similarity Index: ${pair.similarity}`);
    console.log('------------------------');
  });
}

// Main script
const newFilename = '1.84.2.js';
const oldFilename = '1.84.1.js';

const newFile = parseFile(newFilename);
const oldFile = parseFile(oldFilename);

const pairs = findPairs(newFile, oldFile);
logLowestSimilarityPairs(pairs, 5);
