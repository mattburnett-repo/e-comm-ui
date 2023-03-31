import './List.scss'

import Card from '../Card/Card'
import IProps from './Types'
import { Product } from '../../pages/Product/Types'

import useFetch from '../../hooks/useFetch'
import ErrorFallback from '../Error/ErrorFallback'

function List({ id, maxPrice, sort }: IProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, loading, error } = useFetch(`/product/category/id/${id}`)

  // TODO:
  // get max price for category...
  // const max = Math.max(...data.map((o: Product) => o.price), 0)
  // console.log('max: ', max)
  // ... and send it back to Products maxPrice

  const filteredData = data.filter(
    (item) => (item as Product).price <= maxPrice
  )

  const sortedData = filteredData.sort(
    sort === 'asc'
      ? (a, b) => (a as Product).price - (b as Product).price
      : (a, b) => (b as Product).price - (a as Product).price
  )

  return error ? (
    <ErrorFallback />
  ) : (
    <div className="list" role="presentation" aria-label="products-list">
      {sortedData.length > 0 ? (
        sortedData?.map((item: Product) => <Card key={item.id} item={item} />)
      ) : (
        <div className="no-products">
          No products in this price range available.
        </div>
      )}
    </div>
  )
}

export default List
