let Books = JSON.parse(localStorage.getItem('Book_Collection')) || [];
renderBooks();

function addbook(title,author) {
    const book = {title :title,author:author}
    Books.push(book);
    localStorage.setItem('Book_Collection', JSON.stringify(Books));
    renderBooks();
}

function removebook(title,author) {
    const filteredbooks = Books.filter((book) => 
        {
            return book.title !== title || book.author !== author;
        });
        Books = filteredbooks;
        localStorage.setItem('Book_Collection', JSON.stringify(Books));
        renderBooks();
}

// show book list
function renderBooks() {
    const container = document.getElementById('books');
    const booklist = `
        ${ Books.map((book) => 
            `
            <article style="border-bottom: 1px solid #ccc">
                <h2>${book.title}</h2>
                <p>${book.author}</p>
                <button onclick = "removebook('${book.title}','${book.author}')" style="margin-bottom: 2rem">Remove</button>
            </article>`)
        .join('\n') }
`;

    container.innerHTML = booklist;

}
// add button 
const titleinput = document.getElementById('title');
console.log(titleinput);

function getdata(event){
    event.preventDefault();
    const titleinput = document.getElementById('title');
    const authorinput = document.getElementById('author');
    title = titleinput.value;
    author = authorinput.value;
    addbook(title,author);
    titleinput.value = '';
    authorinput.value = '';
    
}

document.getElementById('addbutton').addEventListener('click', getdata);