import { LabelDetail } from 'semantic-ui-react'

const agriImg = require('../../assets/agricultural.png')
const forestImg = require('../../assets/lumbering.png')

export default [
  {
    key: `content-0`,
    category: 'agricultural',
    image: agriImg,
    titleIntlId: 'agricultural.title1',
    messages: [
      { messageIntlId: 'agricultural.title1.item1' },
      { messageIntlId: 'agricultural.title1.item2' }
    ]
  },
  {
    key: `content-1`,
    category: 'agricultural',
    image: agriImg,
    titleIntlId: 'agricultural.title2',
    messages: [
      { messageIntlId: 'agricultural.title2.item1' },
      { messageIntlId: 'agricultural.title2.item2' },
      { messageIntlId: 'agricultural.title2.item3' },
      { messageIntlId: 'agricultural.title2.item4' }
    ]
  },
  {
    key: `content-2`,
    category: 'agricultural',
    image: agriImg,
    titleIntlId: 'agricultural.title3',
    messages: [
      { messageIntlId: 'agricultural.title3.item1' },
      { messageIntlId: 'agricultural.title3.item2' }
    ]
  },
  {
    key: `content-3`,
    category: 'agricultural',
    image: agriImg,
    titleIntlId: 'agricultural.title4',
    messages: [
      { messageIntlId: 'agricultural.title4.item1' },
      { messageIntlId: 'agricultural.title4.item2' }
    ]
  },
  {
    key: `content-4`,
    category: 'agricultural',
    image: agriImg,
    titleIntlId: 'agricultural.title5',
    messages: [{ messageIntlId: 'agricultural.title5.item1' }]
  },
  {
    key: `content-5`,
    category: 'agricultural',
    image: agriImg,
    titleIntlId: 'agricultural.title6',
    messages: [{ messageIntlId: 'agricultural.title6.item1' }]
  },
  {
    key: `content-6`,
    category: 'lumbering',
    image: forestImg,
    titleIntlId: 'lumbering.title1',
    messages: [{ messageIntlId: 'lumbering.title1.item1' }]
  },
  {
    key: `content-7`,
    category: 'lumbering',
    image: forestImg,
    titleIntlId: 'lumbering.title2',
    messages: []
  },
  {
    key: `content-8`,
    category: 'lumbering',
    image: forestImg,
    titleIntlId: 'lumbering.title3',
    messages: [{ messageIntlId: 'lumbering.title3.item1' }]
  },
  {
    key: `content-9`,
    category: 'lumbering',
    image: forestImg,
    titleIntlId: 'lumbering.title4',
    messages: [{ messageIntlId: 'lumbering.title4.item1' }]
  },
  {
    key: `content-10`,
    category: 'lumbering',
    image: forestImg,
    titleIntlId: 'lumbering.title5',
    messages: [{ messageIntlId: 'lumbering.title5.item1' }]
  }
]
