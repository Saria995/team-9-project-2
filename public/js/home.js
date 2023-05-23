document.getElementById('suggestBtn').addEventListener('click', () => {
    const books = prompt('What 2 books do you like?');
    if (books) {
        fetch('/api/suggester', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "books": books.split(',').map(book => book.trim())
            })
        }).then(res => res.json())
        .then(data => {
            console.log(data);
            alert(data);
        });
    }
});