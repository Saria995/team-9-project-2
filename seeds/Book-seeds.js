const Book = require('../models/Book');

const bookSeeds = [
  {
    title: 'Fantastic Beasts & Where to Find Them',
    author: 'J.K. Rowling',
    publication_year: 2016,
    isbn: '9781338216790',
    price: 12.99,
    quantity: 5,
    description: 'An accredited textbook at Hogwarts School of Witchcraft and Wizardry since publication, the masterpiece by Newt Scamander has thrilled wizarding families through the generations. Fantastic Beasts & Where to Find Them offers a thorough introductory insight into the mystical creatures of the wizarding world.',
    genre_id: 1, 
    author_id: 1, 
  },
  {
    title: 'Bag of Bones',
    author: 'Stephen King',
    publication_year: 1998,
    isbn: '9780446310789',
    price: 10.99,
    quantity: 8,
    description: "Several years after his wife's death, novelist Mike Noonan still suffers writer's block. A dream inspires him to return to the couple's summer retreat in western Maine, a lakeside house called Sara Laughs. Shortly after arriving, Noonan is caught in the middle of a custody battle involving the daughter of an attractive young widow and the child's enormously wealthy grandfather. He also discovers that Sara Laughs is haunted and that his late wife, Joanna, still has something to tell him.",
    genre_id: 1,
    author_id: 2, 
  },

];

const seedBooks = () => Book.bulkCreate(bookSeeds);

module.exports = seedBooks;
