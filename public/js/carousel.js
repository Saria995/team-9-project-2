const bookCards = document.querySelectorAll('.book-card');
const noResultsMessage = document.getElementById('noResultsMessage');

document.getElementById('searchButton').addEventListener('click', () => {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  let hasResults = false;

  bookCards.forEach(card => {
    const title = card.querySelector('h4').innerText.toLowerCase();
    const description = card.querySelector('p').innerText.toLowerCase();

    if (title.includes(searchTerm) || description.includes(searchTerm)) {
      card.style.display = 'block';
      hasResults = true;
    } else {
      card.style.display = 'none';
    }
  });

  if (!hasResults) {
    noResultsMessage.style.display = 'block';
  } else {
    noResultsMessage.style.display = 'none';
  }
});

