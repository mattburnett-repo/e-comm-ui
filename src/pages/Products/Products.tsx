// FIXME: ->
/* eslint-disable jsx-a11y/label-has-associated-control */

import { useState } from 'react'
import { useParams } from 'react-router-dom'

import List from '../../components/List/List'

import categories from '../../components/Slider/mockData'
import useFetch from '../../hooks/useFetch'

import './Products.scss'

function Products() {
  const [maxPrice, setMaxPrice] = useState(700)
  const [sort, setSort] = useState('')

  const { id = 1 } = useParams()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, loading, error } = useFetch(`/product-category/id/${id}`)

  return (
    <div className="products">
      <div className="left" role="presentation" aria-label="controls">
        <div className="filterItem">
          <h2>Filter By Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={700}
              aria-label="filter range"
              onChange={(e) => setMaxPrice(+e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort By</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              aria-label="price-asc"
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              onChange={(e) => setSort('asc')}
            />
            <label htmlFor="asc">Price (lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              aria-label="price-desc"
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              onChange={(e) => setSort('desc')}
            />
            <label htmlFor="desc">Price (highest first)</label>
          </div>
        </div>
      </div>
      <div className="right" role="presentation" aria-label="display">
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <div className="category-header">{(data as any).name}</div>
        <img className="categoryImage" src={categories[+id - 1]} alt="" />
        <List id={+id} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  )
}

export default Products
