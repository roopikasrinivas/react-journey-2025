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

// Update an object using spread operator;
const updatedBookWithSpreadOp = {
  ...book1,
  // Adding a new property
  moviePublicationDate: "20012-12-19",

  // Overriding an existing property
  pages: 1400,
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

// arrow function // need fucntion block and return if more than one line only
const getAFYear = (str) => {
  return str.split("-")[0];
};
console.log(getAFYear(publicationDate));

//short circuiting
console.log(true && "some string");
console.log(false && "soem string");
console.log(getBook(1).hasMovieAdaptation && "some string");
console.log(getBook(2).hasMovieAdaptation && "some string");
// for && when true check second paramter, when false, short circuit and exit
// falsy values: 0 '' null undefined

console.log("roop" && "message after");
console.log(0 && "message after");
const falsyEmpty = "";
console.log(falsyEmpty && "message after");

// for || when true short circut , when false check for second operand
console.log(true || "message after");
console.log("" || "message after");
console.log(0 || "message after");
console.log(false || "message after");
console.log(null || "message after");
console.log(getBook(5).translations.spanish || "okay");
console.log(getBook(5).translations.kannada || "okay");
