import { Link } from 'react-router-dom'

import './Card.scss'
import IProps from './Types'

function Card({ item }: IProps) {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card" role="presentation" aria-label={`Card-${item.id}`}>
        <div className="image" role="presentation" aria-label="images">
          <img src={item.image_01_url} alt="" className="primaryImg" />
          <img src={item.image_02_url} alt="" className="secondaryImg" />
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
