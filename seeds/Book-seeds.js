const { Book } = require('../models');

const bookSeeds = [
  {
    title: 'Fantastic Beasts & Where to Find Them',
    author: 'J.K. Rowling',
    image_link:"https://kbimages1-a.akamaihd.net/813fb089-ab74-4039-b5ba-ee4f147bf233/1200/1200/False/fantastic-beasts-and-where-to-find-them-3.jpg",
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
    image_link:"https://www.booktopia.com.au/covers/big/9781444720686/0000/bag-of-bones.jpg",
    publication_year: 1998,
    isbn: '9780446310789',
    price: 10.99,
    quantity: 8,
    description: "Several years after his wife's death, novelist Mike Noonan still suffers writer's block. A dream inspires him to return to the couple's summer retreat in western Maine, a lakeside house called Sara Laughs. Shortly after arriving, Noonan is caught in the middle of a custody battle involving the daughter of an attractive young widow and the child's enormously wealthy grandfather. He also discovers that Sara Laughs is haunted and that his late wife, Joanna, still has something to tell him.",
    genre_id: 1,
    author_id: 2, 
  },
  {
    title: 'The Years of Rice and Salt',
    author: 'Kim Stanley Robinson',
    image_link:"https://m.media-amazon.com/images/I/51ejCDhmLdL._SY344_BO1,204,203,200_QL70_ML2_.jpg",
    publication_year: 2003,
    isbn: '99780553580075 ',
    price: 19.95,
    quantity: 3,
    description: "Hailed by The New York Times Book Review as eye-opening, this alternative history of the last 600 years begins as the Black Death kills nearly everyone in Europe, and China, India, and the nations of Islam now control the world.",
    genre_id: 2,
    author_id: 3, 
  },
  {
    title: 'The White Album',
    author: 'Joan Didion',
    image_link:"https://assets.fontsinuse.com/static/use-media-items/35/34358/upto-700xauto/56758ac3/2-1-Joan-Didion1.webp",
    publication_year: 1993,
    isbn: '9780374532079 ',
    price: 14.57,
    quantity: 1,
    description: "This collection of essays recounts what took place on the long morning after the 1960s, when everyone was coming down from their particular bad trip. Didion observes the dramas that explode as America goes eye-opening, this alternative history of the last 600 years begins as the Black Death kills nearly everyone in Europe, and China, India, and the nations of Islam now control the world.",
    genre_id: 2,
    author_id: 3, 
  },
  {
    title: 'A Murder is Announced',
    author: 'Agatha Christie',
    image_link:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348508635i/16298.jpg",
    publication_year: 2002,
    isbn: '9780008611941',
    price: 20.97,
    quantity: 1,
    description: "The villagers of Chipping Cleghorn are amazed by an advertisement in the local paper which reads, A murder is announced and will take place on Friday October 29th, at Little Paddocks at 6.30pm. Unable to resist, a crowd begins to gather at the house at the appointed time. But when a man is killed in what looks like an attempted robbery, Miss Marple becomes involved.",
    genre_id: 2,
    author_id: 3, 
  },
  {
    title: 'Gravity',
    author: 'Tess Gerritsen',
    image_link:"https://m.media-amazon.com/images/I/41OpmsBqyZS._SY344_BO1,204,203,200_QL70_ML2_.jpg",
    publication_year: 2004,
    isbn: '9780739405413',
    price: 22.30,
    quantity: 3,
    description: "Dr. Emma Watson lifelong dream of working and studying aboard the International Space Station has finally come true. But it quickly becomes a nightmare when a culture of single-celled organisms begins to regenerate out of control―and infects the crew.",
    genre_id: 2,
    author_id: 3, 
  },

];

const seedBooks = () => Book.bulkCreate(bookSeeds);

module.exports = seedBooks;
