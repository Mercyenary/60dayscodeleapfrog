//shows only prime number
function prime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;
    let i = 5;
    while (i * i <= number) {
      if (number % i === 0 || number % (i + 2) === 0) return false;
      i += 6;
    }
    return true;
  }
  
  //shows specific book according to year
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const primeNumber = numbers.filter(prime);
  console.log(primeNumber); 

  const books = [
    { title: 'The fault in our stars', author: 'John Green', year: 2012 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { title: '1984', author: 'George Orwell', year: 1949 },
    { title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 }
  ];
  
  const book = books.filter(book => book.year >= 1950 && book.year < 2000);
  console.log(book);
 
  
  