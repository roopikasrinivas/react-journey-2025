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

const book = getBook(1);

// const title = book.title;
// title;

// const author = book.author;
// author;

// Destructuring objects
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
console.log(title, author, genres);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];
// Destruction arrays
// here the ...otherGenres is the rest operator
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre);
console.log(otherGenres);

//Spread operator arrays
const newGenres = [...otherGenres, "romantic comedy", "epic fantasy"];
newGenres;

//Spread operator object
const updatedBook = {
  ...book,
  moviePublicationDate: "2001-12-19", //add new property to object
  pages: 1210, //overwrite an existing property
};
updatedBook;

const getYear = (str) => {
  return str.split("-")[0];
};

// Template Literals
const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${getYear(
  publicationDate
)}`;
summary;

// function getYear(str) {
//   return str.split("-")[0];
// }

// Optional Chaining

// Truthy value is any value that is not a falsy value
// Falsy Value are 0, null, empty string and Undefined

// Truthy value && any values => gives second operand value
console.log(true && "Hello World!");
console.log("roop" && "Hello World!");
console.log(true && "");
console.log(true && false);
console.log(true && 0);
console.log(true && undefined);

// Falsy value && any values => gives falsy value
console.log(false && "Hello World!");
console.log(0 && "Hello World!");
console.log(null && "Hello World!");
console.log("" && "Hello World!");
console.log(undefined && "Hello World!");

// Truthy value || any value will give the first
console.log(true || "Hello World!");
console.log("roop" || "Hello World!");

// falsy values || any values will give you the second
console.log(false || "Hello World!");
console.log(0 || "Hello World!");
console.log(null || "Hello World!");
console.log("" || "Hello World!");

const spanishTranslation = getBook(2).translations.spanish || "Not Spanish";
spanishTranslation;

console.log(getBook(2).reviews.librarything.reviewsCount);

// falsy value || anything will return second operand
const countWrong = getBook(2).reviews.librarything.reviewsCount || "No Data";
countWrong;

// Knowledge coalescing operator returns second operand when first
// operand is null or undefined not when 0 or empty string
const count = getBook(2).reviews.librarything.reviewsCount ?? "no data";
count;

function getTotalReviewCount(book) {
  const goodreadsCount = book?.reviews?.goodreads?.reviewsCount ?? 0;
  const librarythingCount = book?.reviews?.librarything?.reviewsCount ?? 0;
  return goodreadsCount + librarythingCount;
}

console.log(getTotalReviewCount(getBook(1)));
console.log(getTotalReviewCount(getBook(2)));
console.log(getTotalReviewCount(getBook(3)));
console.log(getTotalReviewCount(getBook(4)));
console.log(getTotalReviewCount(getBook(5)));
console.log(getTotalReviewCount(getBook(6)));
console.log(getTotalReviewCount({}));

// Array map returns new map without changing the original map
const changedMap = [1, 2, 3, 4, 5].map((e) => e * 2);
console.log(changedMap);

const books = getBooks();
const titles = books.map((book) => book.title);

console.log(titles);

const essentialData = books.map((book) => {
  return {
    title: book.title,
    author: book.author,
    reviewsCount: getTotalReviewCount(book),
  };
});

console.log(essentialData);

const essentialDataNew = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));

console.log(essentialDataNew);

// Array filter : filter out the array

const evenArray = [1, 2, 3, 4, 5, 6].filter((e) => e % 2 == 0);
console.log(evenArray);

const longBooks = books
  .filter((book) => book.pages > 500)
  .map((book) => ({
    title: book.title,
    author: book.author,
    pages: book.pages,
  }));
console.log(longBooks);

const shortBooksWithMovie = books
  .filter((book) => book.pages < 500)
  .filter((book) => book.hasMovieAdaptation);

console.log(shortBooksWithMovie);

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => ({
    title: book.title,
    author: book.author,
    genres: book.genres,
  }));

console.log(adventureBooks);

// Array Reduce - sum, average etc
const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
console.log(pagesAllBooks);

const titlesOfAllBooks = books.reduce(
  (appender, book) => appender + book.title + " ",
  ""
);
console.log(titlesOfAllBooks);
