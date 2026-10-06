import snakePlant from '../assets/plants/snake-plant.jpg'
import spiderPlant from '../assets/plants/spider-plant.jpg'
import peaceLily from '../assets/plants/peace-lily.svg'
import bostonFern from '../assets/plants/boston-fern.svg'
import rubberPlant from '../assets/plants/rubber-plant.jpg'
import aloeVera from '../assets/plants/aloe-vera.jpg'
import lavender from '../assets/plants/lavender.jpg'
import jasmine from '../assets/plants/jasmine.svg'
import rosemary from '../assets/plants/rosemary.jpg'
import mint from '../assets/plants/mint.svg'
import lemonBalm from '../assets/plants/lemon-balm.jpg'
import hyacinth from '../assets/plants/hyacinth.jpg'
import fiddleLeaf from '../assets/plants/fiddle-leaf.svg'
import monstera from '../assets/plants/monstera.jpg'
import pothos from '../assets/plants/pothos.svg'
import zzPlant from '../assets/plants/zz-plant.svg'
import orchid from '../assets/plants/orchid.jpg'
import africanViolet from '../assets/plants/african-violet.svg'
import begonia from '../assets/plants/begonia.jpg'
import anthurium from '../assets/plants/anthurium.jpg'

export const categories = [
  {
    id: 'air-purifying',
    title: 'Air Purifying Plants',
    description:
      'Plants that clean the air in your home and produce fresh oxygen.',
    plants: [
      {
        name: 'Snake Plant',
        image: snakePlant,
        cost: 15,
        description: 'Produces oxygen at night, improving air quality.',
      },
      {
        name: 'Spider Plant',
        image: spiderPlant,
        cost: 12,
        description: 'Filters formaldehyde and xylene from the air.',
      },
      {
        name: 'Peace Lily',
        image: peaceLily,
        cost: 18,
        description: 'Removes mold spores and purifies the air.',
      },
      {
        name: 'Boston Fern',
        image: bostonFern,
        cost: 14,
        description: 'Removes formaldehyde and adds humidity to the room.',
      },
      {
        name: 'Rubber Plant',
        image: rubberPlant,
        cost: 22,
        description: 'Effectively removes airborne toxins and is easy to grow.',
      },
      {
        name: 'Aloe Vera',
        image: aloeVera,
        cost: 14,
        description: 'Releases oxygen at night and is great for skin care.',
      },
    ],
  },
  {
    id: 'aromatic',
    title: 'Aromatic Fragrant Plants',
    description:
      'Aromatic plants that fill your home with relaxing natural scents.',
    plants: [
      {
        name: 'Lavender',
        image: lavender,
        cost: 20,
        description: 'Calming scent, used in aromatherapy.',
      },
      {
        name: 'Jasmine',
        image: jasmine,
        cost: 18,
        description: 'Sweet fragrance, promotes relaxation.',
      },
      {
        name: 'Rosemary',
        image: rosemary,
        cost: 15,
        description: 'Invigorating scent, often used in cooking.',
      },
      {
        name: 'Mint',
        image: mint,
        cost: 12,
        description: 'Fresh scent, great for cooking and teas.',
      },
      {
        name: 'Lemon Balm',
        image: lemonBalm,
        cost: 14,
        description: 'Citrus scent, relieves stress and promotes calm.',
      },
      {
        name: 'Hyacinth',
        image: hyacinth,
        cost: 22,
        description: 'A beautiful flowering plant known for its rich perfume.',
      },
    ],
  },
  {
    id: 'decorative',
    title: 'Decorative House Plants',
    description:
      'Stunning plants that bring color, texture and tropical vibes into your home.',
    plants: [
      {
        name: 'Fiddle Leaf Fig',
        image: fiddleLeaf,
        cost: 32,
        description: 'A bold statement plant with large, glossy leaves.',
      },
      {
        name: 'Monstera',
        image: monstera,
        cost: 28,
        description: 'Iconic split leaves, brings a tropical feel indoors.',
      },
      {
        name: 'Pothos',
        image: pothos,
        cost: 16,
        description: 'A low-maintenance trailing vine, perfect for shelves.',
      },
      {
        name: 'ZZ Plant',
        image: zzPlant,
        cost: 24,
        description: 'Almost indestructible, with shiny dark green leaves.',
      },
      {
        name: 'Orchid',
        image: orchid,
        cost: 26,
        description: 'Elegant blooms that last for weeks.',
      },
      {
        name: 'African Violet',
        image: africanViolet,
        cost: 13,
        description: 'Compact plant with year-round colorful flowers.',
      },
      {
        name: 'Begonia',
        image: begonia,
        cost: 17,
        description: 'Beautiful leaves and delicate flowers in many colors.',
      },
      {
        name: 'Anthurium',
        image: anthurium,
        cost: 25,
        description: 'Glossy heart-shaped flowers that bloom almost year-round.',
      },
    ],
  },
]

export const allPlants = categories.flatMap((c) => c.plants)