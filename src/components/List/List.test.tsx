/* eslint-disable import/no-extraneous-dependencies */
import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import List from './List'

describe('List', () => {
  // beforeEach(() => render(<List />, { wrapper: BrowserRouter }))
  const id = 1
  const maxPrice = 1000
  const sort = 'asc'

  it('Renders expected components', () => {
    render(<List id={id} maxPrice={maxPrice} sort={sort} />, {
      wrapper: BrowserRouter
    })

    expect(
      screen.getByRole('presentation', { name: /products-list/i })
    ).toBeInTheDocument()
    // expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
    // expect(
    //   screen.getByRole('presentation', { name: /prices/i })
    // ).toBeInTheDocument()
  })
})
