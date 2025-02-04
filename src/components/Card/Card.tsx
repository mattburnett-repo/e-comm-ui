import { Link } from 'react-router-dom'

import './Card.scss'
import IProps from './Types'

// Update the default image path to use the correct file
const DEFAULT_IMAGE = '/img/green.svg'

function Card({ item }: IProps) {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.log('Image failed to load:', e.currentTarget.src) // Debug log
    e.currentTarget.src = DEFAULT_IMAGE

    // If the default image also fails, prevent infinite loop
    if (e.currentTarget.src.includes('default.jpg')) {
      e.currentTarget.onerror = null
    }
  }

  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card" role="presentation" aria-label={`Card-${item.id}`}>
        <div className="image" role="presentation" aria-label="images">
          <img
            src={item.image_01_url || DEFAULT_IMAGE}
            onError={handleImageError}
            alt={item.name || 'Product image'}
            className="primaryImg"
            loading="lazy"
          />
          <img
            src={item.image_02_url || DEFAULT_IMAGE}
            onError={handleImageError}
            alt={item.name || 'Product image'}
            className="secondaryImg"
            loading="lazy"
          />
        </div>
        <h2>{item.name}</h2>
        <p>{item.description.substring(0, 35)}...</p>
        <div className="prices" role="presentation" aria-label="prices">
          <h3>${item.price}</h3>
        </div>
      </div>
    </Link>
  )
}

export default Card
