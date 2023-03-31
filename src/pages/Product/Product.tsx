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

function Product() {
  const { id } = useParams()

  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(0)

  const dispatch = useDispatch()
  const { data, loading, error } = useFetch(`/product/id/${id}`)

  const images = [(data as any).image_01_url, (data as any).image_02_url]

  return error ? (
    <ErrorFallback />
  ) : (
    <div className="product">
      <div className="left" role="presentation" aria-label="product-images">
        <div className="images">
          <img
            src={(data as any).image_01_url}
            alt=""
            onClick={(e) => setSelectedImage(0)}
          />
          <img
            src={(data as any).image_02_url}
            alt=""
            onClick={(e) => setSelectedImage(1)}
          />
        </div>
        <div className="mainImage">
          <img src={images[selectedImage]} alt="" />
        </div>
      </div>
      <div className="right" role="presentation" aria-label="product-detail">
        <h1>{(data as any).name}</h1>
        <span className="price">${(data as any).price}</span>
        <p>{(data as any).description}</p>
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
        {/* FIXME: 'data as any'. This doesn't look right, but it works... */}
        <button
          type="button"
          className="add"
          aria-label="add-to-cart-button"
          onClick={() =>
            dispatch(
              addToCart({
                product_id: (data as any).id,
                name: (data as any).name,
                description: (data as any).description,
                image_01_url: (data as any).image_01_url,
                price: (data as any).price,
                productQuantity: quantity,
                lineItemTotalPrice: quantity * (data as any).price
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
