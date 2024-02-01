// Write your code below this line.

function luckyNumbers(n) {
    const uniqueNumbers = [];
    while (uniqueNumbers.length < n) {
      const randomNumber = Math.floor(Math.random() * 10) + 1;
      if (!uniqueNumbers.includes(randomNumber)) {
        uniqueNumbers.push(randomNumber);
      }
    }
    return uniqueNumbers;
  }
  

  console.log(luckyNumbers(2));
  console.log(luckyNumbers(6));