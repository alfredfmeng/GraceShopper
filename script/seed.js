'use strict'

const db = require('../server/db')
const {User, Listings} = require('../server/db/models')

const books = [
  {
    title: 'The Last Wish',
    author: 'Andrzej Sapkowski',
    description:
      'Geralt is a Witcher, a man whose magic powers, enhanced by long training and a mysterious elixir, have made him a brilliant fighter and a merciless assassin. Yet he is no ordinary killer. His sole purpose: to destroy the monsters that plague the world.',
    genre: 'Epic Fantasy',
    price: 14.99,
    image:
      'https://kbimages1-a.akamaihd.net/5f3fd0be-e391-4540-998d-29b674c8d042/353/569/90/False/the-last-wish.jpg'
  },
  {
    title: 'It',
    author: 'Stephen King',
    description:
      'They were seven teenagers when they first stumbled upon the horror. Now they are grown-up men and women who have gone out into the big world to gain success and happiness. But the promise they made twenty-eight years ago calls them reunite in the same place where, as teenagers, they battled an evil creature that preyed on the city’s children. Now, children are being murdered again and their repressed memories of that terrifying summer return as they prepare to once again battle the monster lurking in Derry’s sewers.',
    genre: 'Horror',
    price: 19.99,
    image:
      'https://kbimages1-a.akamaihd.net/991ee2b8-3f3b-4418-a0b0-77f70dfb6051/353/569/90/False/it-22.jpg'
  },
  {
    title: 'Enders Game',
    author: 'Orson Scott Card',
    description:
      'Is Ender the general Earth needs? But Ender is not the only result of the genetic experiments. The war with the Buggers has been raging for a hundred years, and the quest for the perfect general has been underway for almost as long. Enders two older siblings are every bit as unusual as he is, but in very different ways. Between the three of them lie the abilities to remake a world. If, that is, the world survives.',
    genre: 'Science Fiction',
    price: 14.99,
    image:
      'https://kbimages1-a.akamaihd.net/0981a006-4b3e-4530-b72c-767154ca82f4/353/569/90/False/ender-s-game-1.jpg'
  },
  {
    title: 'Goodnight Punpun, Vol. 1',
    author: 'Inio Asano',
    description:
      'Meet Punpun Punyama. He’s an average kid in an average town. He wants to win a Nobel Prize and save the world. He wants the girl he has a crush on to like him back. He wants to find some porn... That’s what he wants, but what does he get…?',
    genre: 'Slice of Life',
    price: 19.99,
    image:
      'https://kbimages1-a.akamaihd.net/4da38b59-9507-4487-83c0-fc38baee5678/353/569/90/False/goodnight-punpun-vol-1.jpg'
  },
  {
    title: 'Uzumaki',
    author: 'Junji Ito',
    description:
      'Kurouzu-cho, a small fogbound town on the coast of Japan, is cursed. According to Shuichi Saito, the withdrawn boyfriend of teenager Kirie Goshima, their town is haunted not by a person or being but a pattern: UZUMAKI, the spiral—the hypnotic secret shape of the world. The bizarre masterpiece horror manga is now available all in a single volume. Fall into a whirlpool of terror!',
    genre: 'Horror',
    price: 24.99,
    image:
      'https://kbimages1-a.akamaihd.net/b45b7fd2-2846-448f-8851-29f98327277f/353/569/90/False/uzumaki-3-in-1-deluxe-edition.jpg'
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    description:
      'The Lord of the Rings tells of the great quest undertaken by Frodo and the Fellowship of the Ring: Gandalf the Wizard; the hobbits Merry, Pippin, and Sam; Gimli the Dwarf; Legolas the Elf; Boromir of Gondor; and a tall, mysterious stranger called Strider.',
    genre: 'Epic Fantasy',
    price: 9.99,
    image:
      'https://kbimages1-a.akamaihd.net/dd36e70a-9657-48c0-bcb7-6333aecb4394/353/569/90/False/the-lord-of-the-rings-1.jpg'
  },
  {
    title: 'H.P. Lovecraft: The Ultimate Collection',
    author: 'H.P. Lovecraft',
    description:
      'This collection includes 160 of H.P. Lovecrafts works. The collection is grouped by Early Writings, Fiction, Collaborative Works, Poetry and Essays. The groups are organized in chronological order by the date that each work was written.',
    genre: 'Horror',
    price: 19.99,
    image:
      'https://kbimages1-a.akamaihd.net/4724e825-0945-4d1a-a544-a5f42c75468c/353/569/90/False/h-p-lovecraft-the-ultimate-collection-160-works-including-early-writings-fiction-collaborations-poetry-essays-bonus-audiobook-links.jpg'
  },
  {
    title: 'Vinland Saga, Vol. 1',
    author: 'Makoto Yukimura',
    description:
      'As a child, Thorfinn sat at the feet of the great Leif Ericson and thrilled to wild tales of a land far to the west. But his youthful fantasies were shattered by a mercenary raid. Raised by the Vikings who murdered his family, Thorfinn became a terrifying warrior, forever seeking to kill the bands leader, Askeladd, and avenge his father.',
    genre: 'Historical Fiction',
    price: 14.99,
    image:
      'https://kbimages1-a.akamaihd.net/d2186ee1-f838-4d42-ab6d-d15deed30271/353/569/90/False/vinland-saga-1-3.jpg'
  },
  {
    title: 'House Of X/Powers Of X',
    author: 'Jonathan Hickman',
    description:
      'In HOUSE OF X, Charles Xavier reveals his master plan for mutantkind — one that will bring mutants out of humankind’s shadow and into the light once more! Meanwhile, POWERS OF X reveals mutantkind’s secret history, changing the way you will look at every X-Men story before and after.',
    genre: 'Comic Books',
    price: 9.99,
    image:
      'https://kbimages1-a.akamaihd.net/24263c8d-b377-4d80-81c6-e421a92600ac/353/569/90/False/house-of-x-powers-of-x.jpg'
  },
  {
    title: 'A Promised Land',
    author: 'Barack Obama',
    description:
      'In the stirring, highly anticipated first volume of his presidential memoirs, Barack Obama tells the story of his improbable odyssey from young man searching for his identity to leader of the free world, describing in strikingly personal detail both his political education and the landmark moments of the first term of his historic presidency—a time of dramatic transformation and turmoil.',
    genre: 'Biographies',
    price: 19.99,
    image:
      'https://kbimages1-a.akamaihd.net/4e8749d6-49ef-4d10-a101-5bc8661b9dca/353/569/90/False/a-promised-land-2.jpg'
  }
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const listings = await Promise.all([
    Listings.create(books[0]),
    Listings.create(books[1]),
    Listings.create(books[2]),
    Listings.create(books[3]),
    Listings.create(books[4]),
    Listings.create(books[5]),
    Listings.create(books[6]),
    Listings.create(books[7]),
    Listings.create(books[8]),
    Listings.create(books[9])
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${listings.length} listings`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
