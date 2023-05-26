
document.getElementById("suggestBtn").addEventListener("click", () => {
  const books = prompt("What are some books you like? Seperate by comma");
  if (books) {
    document.getElementById("loading-indicator").style.display = "block";
    fetch("/api/suggester", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        books: books.split(",").map((book) => book.trim()),
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Something went wrong - status code: ' + res.status + ' - ' + res.statusText);
      })
      .then((data) => {
        console.log(data);
        // alternate white and grey rows

        // style="background-color: ${index % 2 === 0 ? 'white' : '#f2f2f2'}"
        document.getElementById("suggestions").innerHTML = data.recommendations
          .map((book, index) => {
            [bookname, author] = book.split(" by ");
            return `<li style="padding-top: 3px; padding-bottom: 6px ">
                    <span style="font-weight: 600">${bookname}</span> <br>  <span >${author}</span>
                    </li>`;
          })
          .join("");
        document.getElementById("loading-indicator").style.display = "none";
        // alert(data.recommendations.join('\n'));
      }).catch((error) => {
        console.log(error)
        document.getElementById("loading-indicator").style.display = "none";
        alert(error);
      });;
  }
});
