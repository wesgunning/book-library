let myLibrary = [
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        pages: '287',
        readStatus: 'yes'
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
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
const container = document.getElementById('container');
function Book(title, author, pages, readStatus) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.readStatus = readStatus;
}

function addBookToLibrary() {
    for (let i=0; i<myLibrary.length; i++) {
        let book = document.createElement('div');
        book.classList.add('cards');
        container.appendChild(book);

        // Delete button
        let exit = document.createElement('button');
        exit.classList.add('delete');
        book.appendChild(exit);
        exit.setAttribute("onclick", "deleteBook()");
        exit.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>`;

        // Title info
        let title = document.createElement('p');
        title.classList.add('key');
        title.innerText = 'Title:';
        book.appendChild(title);
        let titleInfo = document.createElement('p');
        titleInfo.classList.add('value');
        titleInfo.innerText = `${myLibrary[i].title}`;
        book.appendChild(titleInfo);

        // Author info
        let author = document.createElement('p');
        author.classList.add('key');
        author.innerText = 'Author:';
        book.appendChild(author);
        let authorInfo = document.createElement('p');
        authorInfo.classList.add('value');
        authorInfo.innerText = `${myLibrary[i].author}`;
        book.appendChild(authorInfo);

        // Pages info
        let pages = document.createElement('p');
        pages.classList.add('key');
        pages.innerText = '# of pages:';
        book.appendChild(pages);
        let pagesInfo = document.createElement('p');
        pagesInfo.classList.add('value');
        pagesInfo.innerText = `${myLibrary[i].pages}`;
        book.appendChild(pagesInfo);
    }
}

function openForm() {
    let form = document.createElement('form');
    document.body.appendChild(form);

    // Delete button
    let exit = document.createElement('button');
    exit.classList.add('delete');
    form.appendChild(exit);
    exit.setAttribute("onclick", "closeWindow()");
    exit.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>`;

    // Disable button to prevent multiple forms
    let btn = document.getElementById('add');
    btn.setAttribute("onclick", "");
}

function closeWindow() {
    document.removeChild(form);
    let btn = document.getElementById('add');
    btn.setAttribute("onclick", "openForm()");
}