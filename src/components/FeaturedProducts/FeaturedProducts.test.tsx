/* eslint-disable import/no-extraneous-dependencies */
import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import FeaturedProducts from './FeaturedProducts'

describe('FeaturedProducts', () => {
  it('Renders the component as featured', () => {
    render(<FeaturedProducts type="featured" />, { wrapper: BrowserRouter })
  })
  it('Renders the component as trending', () => {
    render(<FeaturedProducts type="trending" />, { wrapper: BrowserRouter })
  })

  it('Renders expected components', () => {
    render(<FeaturedProducts type="featured" />, { wrapper: BrowserRouter })

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(
      screen.getByRole('presentation', { name: /description/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('presentation', { name: /cards/i })
    ).toBeInTheDocument()
  })
})
