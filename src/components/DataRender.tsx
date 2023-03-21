import { faker } from '@faker-js/faker'
import VirtualList from './VirtualList'
const data = Array.from({ length: 100000 }, (_, i) => {
  return { key: i, text: faker.lorem.paragraph() }
})

const DataRender = () => {
  return <VirtualList list={data} />
}

export default DataRender
