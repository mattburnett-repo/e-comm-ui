/* eslint-disable import/no-extraneous-dependencies */
import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../../redux/store'

import Product from './Product'

describe('Product', () => {
  it('Renders expected components', () => {
    render(
      <Provider store={store}>
        <Product />
      </Provider>,
      { wrapper: BrowserRouter }
    )

    expect(
      screen.getByRole('presentation', { name: /product-images/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('presentation', { name: /product-detail/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('presentation', { name: /product-quantity/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /add-to-cart-button/i })
    ).toBeInTheDocument()
  })
})
