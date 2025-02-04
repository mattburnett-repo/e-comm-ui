// FIXME: ->
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

import useFetch from '../../hooks/useFetch'
import ErrorFallback from '../../components/Error/ErrorFallback'
import { addToCart } from '../../redux/cartReducer'

import './Product.scss'

// Use the same default image as Card component
const DEFAULT_IMAGE = '/img/green.svg'

function Product() {
  const { id } = useParams()

  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(0)

  const dispatch = useDispatch()
  const { data, loading, error } = useFetch(`/product/id/${id}`)

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    // Only set default image if it's not already trying to load it
    if (!e.currentTarget.src.includes('green.svg')) {
      e.currentTarget.src = DEFAULT_IMAGE
    } else {
      // If default image also fails, prevent further attempts
      e.currentTarget.onerror = null
    }
  }

  // Make sure we have data before trying to use it
  const image1 = data
    ? (data as any).image_01_url || DEFAULT_IMAGE
    : DEFAULT_IMAGE
  const image2 = data
    ? (data as any).image_02_url || DEFAULT_IMAGE
    : DEFAULT_IMAGE
  const images = [image1, image2]

  return error ? (
    <ErrorFallback />
  ) : (
    <div className="product">
      <div className="left" role="presentation" aria-label="product-images">
        <div className="images">
          <img
            src={image1}
            onError={handleImageError}
            alt={(data as any)?.name || 'Product image'}
            onClick={() => setSelectedImage(0)}
          />
          <img
            src={image2}
            onError={handleImageError}
            alt={(data as any)?.name || 'Product image'}
            onClick={() => setSelectedImage(1)}
          />
        </div>
        <div className="mainImage">
          <img
            src={images[selectedImage]}
            onError={handleImageError}
            alt={(data as any)?.name || 'Product image'}
          />
        </div>
      </div>
      <div className="right" role="presentation" aria-label="product-detail">
        <h1>{(data as any)?.name}</h1>
        <span className="price">${(data as any)?.price}</span>
        <p>{(data as any)?.description}</p>
        <div
          className="quantity"
          role="presentation"
          aria-label="product-quantity"
        >
          <button
            type="button"
            onClick={() => setQuantity((prev) => (prev <= 0 ? 0 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button type="button" onClick={() => setQuantity((prev) => prev + 1)}>
            +
          </button>
        </div>
        <button
          type="button"
          className="add"
          aria-label="add-to-cart-button"
          onClick={() =>
            dispatch(
              addToCart({
                product_id: (data as any)?.id,
                name: (data as any)?.name,
                description: (data as any)?.description,
                image_01_url: image1, // Use the fallback-enabled image URL
                price: (data as any)?.price,
                productQuantity: quantity,
                lineItemTotalPrice: quantity * (data as any)?.price
              })
            )
          }
        >
          <AddShoppingCartIcon /> ADD TO CART
        </button>
      </div>
    </div>
  )
}

export default Product
