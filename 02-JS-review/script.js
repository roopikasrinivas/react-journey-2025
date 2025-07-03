const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
      librarything: {},
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//Destructuring Objects

const books = getBooks();
books;

const book = getBook(2);
book;

// const title = book.title;
// const author = book.author;

//Destructuring Objects - use  {}
const { title, author, pages, genres, hasMovieAdaptation, publicationDate } =
  book;
console.log(title, author, genres);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

//Destructuring Arrays use []
const [primaryGenre, secondaryGenre] = genres;
console.log(primaryGenre, secondaryGenre);

// Rest operator
const [firstGenre, secondGenre, ...otherGenres] = genres;
console.log(firstGenre, secondaryGenre, otherGenres);

otherGenres;

const genresArray = genres;
genresArray;

// Spread operator
const newGenres = [...genres, "epic fantasy", "romantic comedy"];
newGenres;

const newGenres2 = ["epic fantasy", "romantic comedy", ...genres];
newGenres2;

// Update an object without using spread operator
const book1 = getBook(1);
const updatedBookWithoutSpread = {
  book1,
  moviePublicationDate: "20012-12-19",
};
updatedBookWithoutSpread;

// Update an object using spread operator;
const updatedBookWithSpreadOp = {
  ...book1,
  // Adding a new property
  moviePublicationDate: "20012-12-19",

  // Overriding an existing property
  pages: 999,
};
updatedBookWithSpreadOp;

// Template Literals
const summary = `${title} by ${author} is a ${pages}-page long book, published in the year ${
  publicationDate.split("-")[0]
}. The book has ${hasMovieAdaptation ? "" : "not"} been adapated into a movie`;

summary;

// Ternary Operator
const pagesCount = getBook(5).pages > 500 ? "over 500" : "less that 500";
pagesCount;
console.log(`The book has ${pagesCount} pages.`);

// function

function getYear(str) {
  return str.split("-")[0];
}

console.log(getYear(publicationDate));

const summary1 = `${title} by ${author} is a ${pages}-page long book, published in the year ${getYear(
  publicationDate
)}. The book has ${hasMovieAdaptation ? "" : "not"} been adapated into a movie`;

summary1;

// const getAFYear = (str) => str.split("-")[0];

// Arrow function // need function block and return if more than one line only
// const getAFYear = (str) => {
//   return str.split("-")[0];
// };

const getAFYear = (str) => str.split("-")[0];
console.log(getAFYear(publicationDate));

//short circuiting
console.log(true && "some string");
console.log(false && "some string");
console.log(getBook(1).hasMovieAdaptation && "some string");
console.log(getBook(2).hasMovieAdaptation && "some string");
// for && when true check second paramter, when false, short circuit and exit
// falsy values: 0 '' null undefined

console.log("roop" && "message after");
console.log(0 && "message after");
console.log("" && "message after");
console.log(null && "message after");

// for || when true short circut , when false check for second operand
console.log(true || "message after");
console.log("" || "message after");
console.log(0 || "message after");
console.log(false || "message after");
console.log(null || "message after");
console.log(getBook(5).translations.spanish || "okay");
console.log(getBook(5).translations.kannada || "okay");

//Knowledge coalescing operator
// returns second operand if the first operand is if and only null or undefined
// for all other values like 0, it returns the first operand
const count1 = getBook(3).reviews.librarything.reviewsCount ?? "no data";
count1;

const count2 = getBook(2).reviews.librarything.reviewsCount ?? "no data";
count2;

//Optional Chaining

function getTotalReviewCount(book) {
  const grCount = book.reviews.goodreads.reviewsCount;
  const libCount = book.reviews.librarything.reviewsCount;
  return grCount + libCount;
}

function getTotalReviewCount(book) {
  const grCount = book?.reviews?.goodreads?.reviewsCount ?? 0;
  const libCount = book?.reviews?.librarything?.reviewsCount ?? 0;
  return grCount + libCount;
}

console.log(
  `The total review count for the book is ${getTotalReviewCount(getBook(4))}`
);

// MAP FILTER REDUCE

// MAP : TRANSFORM (You want to modify every item in an array and get a new array of the same length)

// const books = getBooks();
const newArray = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(newArray);

const titles = books.map((book) => book.title);
titles;

// const essentialData = books.map((book) => {
//   return {
//     title: book.title,
//     author: book.author,
//   };
// });

function getTotalReviewCount(book) {
  const grCount = book?.reviews?.goodreads?.reviewsCount ?? 0;
  const libCount = book?.reviews?.librarything?.reviewsCount ?? 0;
  return grCount + libCount;
}

// MAP
const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewCount: getTotalReviewCount(book),
}));
essentialData;

// FILTER (You want to remove unwanted items based on a condition and get a smaller array)
const longBooks = books.filter((book) => book.pages > 500);
longBooks;

const shortBooks = books.filter((book) => book.pages < 500);
shortBooks;

// Filter chaining
const shortMovieAdaptation = books
  .filter((book) => book.pages < 500)
  .filter((book) => book.hasMovieAdaptation);
shortMovieAdaptation;

const adevntureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => ({
    title: book.title,
    author: book.author,
  }));
adevntureBooks;

// Reduce Method: You want to combine all elements into a single value (e.g., sum, object, string, etc.
// Summarise calculating sums, averages, or transforming an array into a different data
const pages1 = books.map((book) => book.pages);
pages1;

// const result = books.reduce((acc, book), 0);
const totalPages = books.reduce((sum, book) => sum + book.pages, 0);
totalPages;

/// Arrays sort
// slice prevents from changing the original array, creates copy array
const arr = [3, 7, 1, 9, 6];
// const sortedArr = arr.sort((a, b) => a - b);
const sortedArrAsc = arr.slice().sort((a, b) => a - b);
const sortedArrDesc = arr.slice().sort((a, b) => b - a);
sortedArrAsc;
sortedArrDesc;
arr;

const sortedByPagesDesc = books
  .slice()
  .sort((a, b) => b.pages - a.pages)
  .map((book) => ({
    title: book.title,
    pages: book.pages,
  }));
sortedByPagesDesc;

//Add book object to array

const myNewBook = {
  id: 6,
  title: "Rework",
  author: "David",
};

const booksAfterAdd = [...books, myNewBook];
booksAfterAdd;

// Delete Book: filter is used to remove Object from array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 2);
booksAfterDelete;

// map is used to get the array of same size with manipulation
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id == 1 ? { ...book, pages: 200 } : book
);

fetch("http://jsonplaceholder.typicode.com/todos/1")
  .then((res) => res.json())
  .then((data) => console.log(data));

console.log("Okay next");

async function getTodos() {
  const res = await fetch("http://jsonplaceholder.typicode.com/todos/10");
  const data = await res.json();
  console.log(data);
}

getTodos();

console.log("Okay next next");
