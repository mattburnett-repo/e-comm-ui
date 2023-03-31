import './FeaturedProducts.scss'

import Card from '../Card/Card'
import { Product } from '../../pages/Product/Types'
import useFetch from '../../hooks/useFetch'
import ErrorFallback from '../Error/ErrorFallback'

interface IProps {
  type: 'featured' | 'trending'
}

function FeaturedProducts({ type }: IProps) {
  // FIXME: this could also just use useQuery()
  const { data, loading, error } = useFetch(
    `/product/sub-category/code/${type}`
  )

  return error ? (
    <ErrorFallback />
  ) : (
    <div
      className="featuredProducts"
      role="navigation"
      aria-label={`FeaturedProducts-${type}`}
    >
      <div className="top">
        <h1>{type} products</h1>
        <p role="presentation" aria-label="description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta ab
          voluptate harum rerum alias perferendis animi non veritatis labore!
          Quae atque sint quidem numquam iure?
        </p>
      </div>
      <div className="bottom" role="presentation" aria-label="cards">
        {loading
          ? 'loading...'
          : data.map((item: Product) => <Card key={item.id} item={item} />)}
      </div>
    </div>
  )
}

export default FeaturedProducts
