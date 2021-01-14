'use strict'

const db = require('../server/db')
const {User, Books} = require('../server/db/models')

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
  },
  {
    title: 'No Longer Human',
    author: 'Junji Ito',
    description:
      'Plagued by a maddening anxiety, the terrible disconnect between his own concept of happiness and the joy of the rest of the world, Yozo Oba plays the clown in his dissolute life, holding up a mask for those around him as he spirals ever downward, locked arm-in-arm with death.',
    genre: 'Horror',
    price: 19.99,
    image:
      'https://kbimages1-a.akamaihd.net/2781d416-1190-43df-83be-c31d607e62f9/353/569/90/False/no-longer-human-2.jpg'
  },
  {
    title: 'Harry Potter: The Complete Collection',
    author: 'J.K. Rowling',
    description:
      'All seven eBooks in the multi-award winning, internationally bestselling Harry Potter series, available as one download with stunning cover art by Olly Moss. Enjoy the stories that have captured the imagination of millions worldwide.',
    genre: 'Epic Fantasy',
    price: 59.99,
    image:
      'https://kbimages1-a.akamaihd.net/5ec2fc24-c5b3-4b92-910a-3c0d1bfc7747/353/569/90/False/harry-potter-the-complete-collection-1-7-2.jpg'
  },
  {
    title: 'The Way of Kings',
    author: 'Brandon Sanderson',
    description:
      'Brightlord Dalinar Kholin commands one of those other armies. Like his brother, the late king, he is fascinated by an ancient text called The Way of Kings. Troubled by over-powering visions of ancient times and the Knights Radiant, he has begun to doubt his own sanity. Across the ocean, an untried young woman named Shallan seeks to train under an eminent scholar and notorious heretic, Dalinars niece, Jasnah. Though she genuinely loves learning, Shallans motives are less than pure. As she plans a daring theft, her research for Jasnah hints at secrets of the Knights Radiant and the true cause of the war.',
    genre: 'Epic Fantasy',
    price: 9.99,
    image:
      'https://kbimages1-a.akamaihd.net/0f5c7b58-0511-4b37-ba81-99d19a57c7c4/353/569/90/False/the-way-of-kings-1.jpg'
  },
  {
    title: 'Eloquent JavaScript, 3rd Edition',
    author: 'Marijn Haverbeke',
    description:
      'This much anticipated and thoroughly revised third edition of Eloquent JavaScript dives deep into the JavaScript language to show you how to write beautiful, effective code. It has been updated to reflect the current state of Java¬Script and web browsers and includes brand-new material on features like class notation, arrow functions, iterators, async functions, template strings, and block scope. A host of new exercises have also been added to test your skills and keep you on track.',
    genre: 'Programming',
    price: 19.99,
    image:
      'https://kbimages1-a.akamaihd.net/2434786f-8e20-46c2-a6ec-7f1fd3197dcb/353/569/90/False/eloquent-javascript-3rd-edition.jpg'
  },
  {
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    description:
      'Guy Montag is a fireman. His job is to destroy the most illegal of commodities, the printed book, along with the houses in which they are hidden. Montag never questions the destruction and ruin his actions produce, returning each day to his bland life and wife, Mildred, who spends all day with her television “family.” But when he meets an eccentric young neighbor, Clarisse, who introduces him to a past where people didn’t live in fear and to a present where one sees the world through the ideas in books instead of the mindless chatter of television, Montag begins to question everything he has ever known.',
    genre: 'Classics',
    price: 9.99,
    image:
      'https://kbimages1-a.akamaihd.net/475b960b-9d49-4858-9804-2b1341b63f88/353/569/90/False/fahrenheit-451-3.jpg'
  },
  {
    title: 'Berserk Vol. 1',
    author: 'Kentaro Miura',
    description:
      'His name is Guts, the Black Swordsman, a feared warrior spoken of only in whispers. Bearer of a gigantic sword, an iron hand, and the scars of countless battles and tortures, his flesh is also indelibly marked with The Brand, an unholy symbol that draws the forces of darkness to him and dooms him as their sacrifice. But Guts wont take his fate lying down; hell cut a crimson swath of carnage through the ranks of the damned - and anyone else foolish enough to oppose him! Accompanied by Puck the Elf, more an annoyance than a companion, Guts relentlessly follows a dark, bloodstained path that leads only to death...or vengeance.',
    genre: 'Horror',
    price: 9.99,
    image:
      'https://kbimages1-a.akamaihd.net/b7ccda5d-c44e-4041-a1d4-382e69c641a1/353/569/90/False/berserk-volume-1.jpg'
  },
  {
    title: 'The Subtle Art of Not Giving a F*ck',
    author: 'Mark Manson',
    description:
      'Manson makes the argument, backed both by academic research and well-timed poop jokes, that improving our lives hinges not on our ability to turn lemons into lemonade, but on learning to stomach lemons better. Human beings are flawed and limited—"not everybody can be extraordinary, there are winners and losers in society, and some of it is not fair or your fault." Manson advises us to get to know our limitations and accept them. Once we embrace our fears, faults, and uncertainties, once we stop running and avoiding and start confronting painful truths, we can begin to find the courage, perseverance, honesty, responsibility, curiosity, and forgiveness we seek.',
    genre: 'Self Help',
    price: 19.99,
    image:
      'https://kbimages1-a.akamaihd.net/f68de379-e763-441c-8159-a949ea575237/353/569/90/False/the-subtle-art-of-not-giving-a-f-ck.jpg'
  },
  {
    title: 'The City of Ember Deluxe Edition',
    author: 'Jeanne DuPrau',
    description:
      'Since 2003, readers of all ages have been captivated by Jeanne DuPraus bestselling dystopian story about a doomed city and the two children determined to escape it. Now new and old fans alike can celebrate The City of Ember with this deluxe edition, which includes an introduction by the author and a brand-new story!',
    genre: 'Teens',
    price: 19.99,
    image:
      'https://kbimages1-a.akamaihd.net/2c557bfd-1077-47da-b3b4-4f63bf951dd0/353/569/90/False/the-city-of-ember-deluxe-edition.jpg'
  },
  {
    title: 'Billion Dollar Loser',
    author: 'Reeves Wiedeman',
    description:
      'In its earliest days, WeWork promised the impossible: to make the American work place cool. Adam Neumann, an immigrant determined to make his fortune in the United States, landed on the idea of repurposing surplus New York office space for the burgeoning freelance class. Over the course of ten years, WeWork attracted billions of dollars from some of the most sought-after investors in the world, while spending it to build a global real estate empire that he insisted was much more than that: an organization that aspired to nothing less than elevating the worlds consciousness."',
    genre: 'Finance',
    price: 9.99,
    image:
      'https://kbimages1-a.akamaihd.net/0dd2665f-e447-4b18-8ba9-ffbac08f6592/353/569/90/False/billion-dollar-loser-1.jpg'
  },
  {
    title: 'Tokyo Ghoul: re Vol. 1',
    author: 'Sui Ishida',
    description:
      'Haise Sasaki has been tasked with teaching Qs Squad how to be outstanding investigators, but his assignment is complicated by the troublesome personalities of his students and his own uncertain grasp of his Ghoul powers. Can he pull them together as a team, or will Qs Squad first assignment be their last?',
    genre: 'Horror',
    price: 9.99,
    image:
      'https://kbimages1-a.akamaihd.net/aef3c52d-6fe7-443d-ab2b-a88c6e443c3f/353/569/90/False/tokyo-ghoul-re-vol-1.jpg'
  }
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    // User.create({email: 'cody@email.com', password: '123'}),
    // User.create({email: 'murphy@email.com', password: '123'})
  ])

  const seedBooks = await Promise.all([
    Books.create(books[0]),
    Books.create(books[1]),
    Books.create(books[2]),
    Books.create(books[3]),
    Books.create(books[4]),
    Books.create(books[5]),
    Books.create(books[6]),
    Books.create(books[7]),
    Books.create(books[8]),
    Books.create(books[9]),
    Books.create(books[10]),
    Books.create(books[11]),
    Books.create(books[12]),
    Books.create(books[13]),
    Books.create(books[14]),
    Books.create(books[15]),
    Books.create(books[16]),
    Books.create(books[17]),
    Books.create(books[18]),
    Books.create(books[19])
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${seedBooks.length} books`)
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
