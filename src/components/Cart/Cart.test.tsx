/* eslint-disable import/no-extraneous-dependencies */

import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../../redux/store'

import Cart from './Cart'

describe('Cart', () => {
  beforeEach(() =>
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  )

  it('Renders expected components for empty cart', () => {
    expect(
      screen.getByRole('link', { name: /reset-cart-link/i })
    ).toBeInTheDocument()
  })

  // FIXME: figure out how to add test cart item. useDispatch is not available here.
  it.skip('Renders expected components when an item is added to the cart', () => {
    expect(
      screen.getByRole('presentation', { name: /subtotal-display/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /proceed-to-checkout-button/i })
    ).not.toBeInTheDocument()
    // expect one item to be in the cart. check its values.
    expect(
      screen.getByRole('link', { name: /reset-cart-link/i })
    ).toBeInTheDocument()
  })
})
