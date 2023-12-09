const books = [
    {
        title: "THE GUIDE",
        author: "R.K NARAYAN",
        year: 1958,
    },
    {
        title: "The Private Life of an Indian Prince ",
        author: "Mulk Raj Anand",
        year: 1953,
    },
    {
        title: "Train To Pakistan",
        author: "Khushwat Singh",
        year: 1947,
    },
    {
        title: "THE ROOM ON THE ROOF",
        author: "RUSKIN BOND",
        year: 1999,
    },
    {
        title: "THE COMPLETE ADVENTURES OF FELUDA",
        author: "SATYAJIT RAY",
        year: 1992,
    },
]

function logTitles(titles){
    titles.sort()
    console.log(titles.join(", "));
}

function extractTitles(books, callback){
    const titles = books.map((book) => book.title);
    callback(titles)
}

extractTitles(books, logTitles)