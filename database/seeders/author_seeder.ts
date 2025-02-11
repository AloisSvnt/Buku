import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Author from '#models/author'

export default class extends BaseSeeder {
  async run() {
    await Author.truncate(true)

    const authors = [
      {
        name: 'J.K. Rowling',
        bio: 'J.K. Rowling is the author of the bestselling Harry Potter series of seven books, published between 1997 and 2007, which have sold over 500 million copies worldwide, are distributed in more than 200 territories and translated into 80 languages, and have been turned into eight blockbuster films.',
      },
      {
        name: 'George R.R. Martin',
        bio: 'George R.R. Martin is the author of the epic fantasy series A Song of Ice and Fire, which was adapted into the HBO series Game of Thrones.',
      },
      {
        name: 'J.R.R. Tolkien',
        bio: 'J.R.R. Tolkien is the author of The Hobbit and The Lord of the Rings trilogy, which are considered classics of modern fantasy literature.',
      },
      {
        name: 'Agatha Christie',
        bio: 'Agatha Christie is known for her 66 detective novels and 14 short story collections, particularly those revolving around her fictional detectives Hercule Poirot and Miss Marple.',
      },
      {
        name: 'Stephen King',
        bio: 'Stephen King is the author of more than sixty books, all of them worldwide bestsellers. His most recent work includes Fairy Tale, Billy Summers, and If It Bleeds.',
      },
    ]

    await Author.createMany(authors)
  }
}
