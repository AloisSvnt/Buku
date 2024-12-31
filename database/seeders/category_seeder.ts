import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Category from '#models/category'

export default class extends BaseSeeder {
  public async run() {
    const categories = [
      { name: 'Fantasy', description: 'Explore magical worlds filled with mythical creatures, epic quests, and heroic adventures.' },
      { name: 'Science Fiction', description: 'Discover futuristic worlds, advanced technologies, and thought-provoking explorations of the unknown.' },
      { name: 'Mystery', description: 'Unravel thrilling whodunits, solve crimes, and unveil secrets buried in shadows.' },
      { name: 'Romance', description: 'Dive into tales of love, passion, and heartwarming connections that transcend time and space.' },
      { name: 'Horror', description: 'Experience spine-chilling stories that delve into fear, the supernatural, and the macabre.' },
      { name: 'Historical Fiction', description: 'Step back in time with stories set in richly detailed historical settings.' },
      { name: 'Thriller', description: 'Embark on fast-paced adventures filled with suspense, danger, and unexpected twists.' },
      { name: 'Young Adult', description: 'Relatable stories of growth, friendship, and self-discovery for teens and young adults.' },
      { name: 'Biography', description: 'Learn about the lives, achievements, and challenges of remarkable individuals.' },
      { name: 'Self-Help', description: 'Gain practical advice and inspiration for personal growth and success.' },
      { name: 'Science', description: 'Explore the wonders of the natural world, groundbreaking research, and scientific discoveries.' },
      { name: 'History', description: 'Discover the events, cultures, and figures that shaped our world.' },
      { name: 'Travel', description: 'Embark on journeys to explore new cultures, places, and adventures.' },
      { name: 'Cooking', description: 'Uncover culinary delights, recipes, and techniques from around the world.' },
      { name: 'Art & Photography', description: 'Immerse yourself in visual masterpieces and the stories behind creative works.' },
      { name: 'Health & Fitness', description: 'Discover tips, routines, and strategies for a healthier and more active lifestyle.' },
      { name: 'Picture Books', description: 'Colorful, engaging stories designed for young readers and their imaginations.' },
      { name: 'Middle Grade', description: 'Adventurous and heartfelt stories for readers aged 8-12.' },
      { name: 'Fairy Tales & Folklore', description: 'Classic tales of magic, moral lessons, and enchanting worlds.' },
    ]

    await Category.createMany(categories)
  }
}