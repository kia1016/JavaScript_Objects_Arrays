console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(numbers){
    var sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    return sum
}
console.log(arraySum(numbers))
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

const book = {};
book.title = "The Hunger Games";
book.pages = 374;
book.readCount = 1;
book.info = () => {
    return `${book.title}, ${book.pages} pages, Read ${book.readCount} times.`;
};
console.log(book.info());

}