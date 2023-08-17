let myLibrary = [
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        pages: '287',
        readStatus: true
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: 'J.K. Rowling',
        pages: '307',
        readStatus: true
        },
    {
        title: 'The Martian',
        author: 'Andy Weir',
        pages: '305',
        readStatus: false
        }
];

// Global variables
const container = document.getElementById('container');
const form = document.createElement('form');

// Delete button
let exit = document.createElement('button');
exit.classList.add('delete');
form.appendChild(exit);
exit.setAttribute("onclick", "closeWindow()");
exit.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>`;

// Constructor function
function Book(title, author, pages, readStatus) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.readStatus = readStatus;
}

function buildLibrary() {
    for (let i=0; i<myLibrary.length; i++) {
        let book = document.createElement('div');
        book.classList.add('cards');
        book.setAttribute('data', i);
        container.appendChild(book);

        // Delete button
        let exit = document.createElement('button');
        exit.classList.add('delete');
        book.appendChild(exit);
        exit.setAttribute("onclick", "deleteBook(this)");
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
        pages.innerHTML = '#&nbsp;of&nbsp;pages:';
        book.appendChild(pages);
        let pagesInfo = document.createElement('p');
        pagesInfo.classList.add('value');
        pagesInfo.innerText = `${myLibrary[i].pages}`;
        book.appendChild(pagesInfo);

        // Read status
        var check = document.createElement('input');
        check.setAttribute('type', 'checkbox');
        const cls = ['key', 'checkbox']
        check.classList.add(...cls);
        book.appendChild(check);
        let status = document.createElement('p');
        status.classList.add('value');
        book.appendChild(status);
        if (myLibrary[i].readStatus == true) {
            check.setAttribute('checked', 'true');
            status.innerText = "I have read this book";
        }
        else if (myLibrary[i].readStatus == false) {
            status.innerText = "I haven't read this book yet"
        }
    }
}

function openForm() {
    form.classList.add('animate__animated', 'animate__zoomIn');
    container.appendChild(form);
    // Title
    let titleLabel = document.createElement('label');
    titleLabel.innerText = 'Title:';
    titleLabel.setAttribute('for', 'title');
    titleLabel.classList.add('one');
    form.appendChild(titleLabel);
    let titleInput = document.createElement('input');
    titleInput.setAttribute('type','text');
    titleInput.setAttribute('id', 'title');
    titleInput.setAttribute('required', 'true');
    titleInput.classList.add('two');
    form.appendChild(titleInput);
    // Author
    let authorLabel = document.createElement('label');
    authorLabel.innerText = 'Author:';
    authorLabel.setAttribute('for', 'author');
    authorLabel.classList.add('one');
    form.appendChild(authorLabel);
    let authorInput = document.createElement('input');
    authorInput.setAttribute('type','text');
    authorInput.setAttribute('id', 'author');
    authorInput.setAttribute('required', 'true');
    authorInput.classList.add('two');
    form.appendChild(authorInput);
    // Pages
    let pagesLabel = document.createElement('label');
    pagesLabel.innerHTML = '#&nbsp;of&nbsp;pages:';
    pagesLabel.setAttribute('for', 'pages');
    pagesLabel.classList.add('one');
    form.appendChild(pagesLabel);
    let pagesInput = document.createElement('input');
    pagesInput.setAttribute('type','number');
    pagesInput.setAttribute('id', 'pages');
    pagesInput.setAttribute('min', '1');
    pagesInput.setAttribute('required', 'true');
    pagesInput.classList.add('two');
    form.appendChild(pagesInput);
    // Read status
    let checkboxInput = document.createElement('input');
    checkboxInput.setAttribute('type','checkbox');
    checkboxInput.setAttribute('id', 'read');
    checkboxInput.classList.add('one');
    form.appendChild(checkboxInput);
    let checkboxLabel = document.createElement('label');
    checkboxLabel.innerHTML = 'I&nbsp;have&nbsp;read&nbsp;this&nbsp;book';
    checkboxLabel.setAttribute('for', 'read');
    checkboxLabel.classList.add('two');
    form.appendChild(checkboxLabel);
    // Button
    let submit = document.createElement('button');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('id', 'form-submit');
    submit.setAttribute('onclick', 'addBook()');
    submit.innerText = 'Add book';
    form.appendChild(submit);
    // Disable button to prevent multiple forms
    let btn = document.getElementById('add');
    btn.setAttribute('disabled', 'true');
    //btn.setAttribute("onclick", "");
}

function closeWindow() {
    // form.classList.remove('animate__zoomIn');
    // form.classList.add('animate__zoomOut');
    for (i=form.childNodes.length-1; i>0; i--) {
        form.removeChild(form.childNodes[i]);
    }
    let btn = document.getElementById('add');
    btn.removeAttribute('disabled');
    //btn.setAttribute("onclick", "openForm()");
    //form.classList.remove('animate__zoomOut', 'animate__animated');
    container.removeChild(form);
}

function deleteBook(e) {
    // Remove cards
    clearCards();
    // Remove book from myLibrary array
    const data = parseInt(e.parentElement.attributes.data.value);
    console.log(data.value);
    myLibrary.splice(data, 1);
    console.log(myLibrary);
    // Rebuild array
    buildLibrary();
}

function clearCards() {
    for (let i = 0; i<myLibrary.length; i++) {
        container.removeChild(container.lastChild);
    }
}

function addBook() {
    // Get info
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const readStatus = document.getElementById('read').checked;
    if (form.checkValidity() == true) {
        // Pass to constructor function
        const newBook = new Book(title, author, pages, readStatus);
        console.log(newBook);
        // Push book to library array
        myLibrary.push(newBook);
        // Close form window
        closeWindow();
        // Rebuild cards
        clearCards();
        buildLibrary();
    }
}