/* eslint-disable import/no-extraneous-dependencies */
import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import Products from './Products'

describe('Products', () => {
  beforeEach(() => render(<Products />, { wrapper: BrowserRouter }))

  it('Renders expected components', () => {
    expect(
      screen.getByRole('presentation', { name: /controls/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('presentation', { name: /display/i })
    ).toBeInTheDocument()
  })

  it('Renders filter range', () => {
    expect(
      screen.getByRole('slider', { name: /filter range/i })
    ).toBeInTheDocument()
  })

  it('Renders sort options', () => {
    expect(
      screen.getByRole('radio', { name: /price-asc/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('radio', { name: /price-desc/i })
    ).toBeInTheDocument()
  })
})
