/* eslint-disable import/no-extraneous-dependencies */
import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'

// https://codingpr.com/test-your-react-app-with-vitest-and-react-testing-library/
import { BrowserRouter } from 'react-router-dom'

import Home from './Home'

describe('Home', () => {
  it('Renders expected components', () => {
    render(<Home />, { wrapper: BrowserRouter })

    expect(
      screen.getByRole('presentation', { name: /Slider/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('navigation', { name: /FeaturedProducts-featured/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('navigation', { name: /Categories/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('navigation', { name: /FeaturedProducts-trending/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('presentation', { name: /Contact/i })
    ).toBeInTheDocument()
  })
})
