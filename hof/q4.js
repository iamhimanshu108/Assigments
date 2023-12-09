const books = [
    {
        title: "Our Missing Hearts",
        author: "Celeste Ng",
        year: 2017,
    },
    {
        title: "The Guide",
        author: "R.K. NARAYAN",
        year: 1958,
    },
    {
        title: "UNTOUCHABLE",
        author: "MULK RAJ ANAND",
        year: 1993,
    },
    {
        title: "Nightcrawling",
        author: "Leila Mottley",
        year: 2015,
    },
    {
        title: "The Passenge",
        author: "Cormac McCarthy",
        year: 2022,
    },
];

const filteredBooks = books.filter((book) => {
    return book.year >= 2010;
})

const result = filteredBooks.map((book) => {
    return {
        ...book,
        author: book.author.toUpperCase(),
    };
});

console.log(result);