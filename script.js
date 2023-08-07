let myLibrary = [
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        pages: '287',
        readStatus: 'yes'
    },
    {
        title: "Harry Potter & the Sorcerer's Stone",
        author: 'J.K. Rowling',
        pages: '307',
        readStatus: 'yes'
        },
    {
        title: 'The Martian',
        author: 'Andy Weir',
        pages: '305',
        readStatus: 'yes'
        }
];
function Book(title, author, pages, readStatus) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.readStatus = readStatus;
}

function addBookToLibrary() {
    
}

function openForm() {
    let form = document.createElement('form');
    document.body.appendChild(form);
}