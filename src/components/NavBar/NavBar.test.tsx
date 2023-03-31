/* eslint-disable import/no-extraneous-dependencies */
import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../../redux/store'

import NavBar from './NavBar'

describe('NavBar', () => {
  beforeEach(() =>
    render(
      <Provider store={store}>
        <NavBar />
      </Provider>,
      { wrapper: BrowserRouter }
    )
  )

  it('Renders the expected elements', () => {
    const links: HTMLAnchorElement[] = screen.getAllByRole('link')

    expect(links[0].textContent).toEqual('Solar')
    expect(links[0].href).toContain('/products/1')

    expect(links[1].textContent).toEqual('EV')
    expect(links[1].href).toContain('/products/2')

    expect(links[2].textContent).toEqual('Bamboo')
    expect(links[2].href).toContain('/products/3')

    expect(links[3].textContent).toEqual('Packaging')
    expect(links[3].href).toContain('/products/4')

    expect(links[4].textContent).toEqual('Personal Care')
    expect(links[4].href).toContain('/products/5')

    expect(links[5].textContent).toEqual('Green Shop')
    expect(links[5].href).toContain('/')

    expect(links[6].textContent).toEqual('Homepage')
    expect(links[6].href).toContain('/')

    expect(links[7].textContent).toEqual('About')
    expect(links[7].href).toContain('/')

    expect(links[8].textContent).toEqual('Contact')
    expect(links[8].href).toContain('/')

    expect(links[9].textContent).toEqual('Stores')
    expect(links[9].href).toContain('/')
  })

  it('Has cart functionality', () => {
    expect(
      screen.getByRole('navigation', { name: /cart-icon/i })
    ).toBeInTheDocument()
  })
})
