/* eslint-disable import/no-extraneous-dependencies */
import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import Footer from './Footer'

describe('Footer', () => {
  it('Renders expected components', () => {
    render(<Footer />, { wrapper: BrowserRouter })

    expect(
      screen.getByRole('presentation', { name: /categories/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('presentation', { name: /links/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('presentation', { name: /about/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('presentation', { name: /contact/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('presentation', { name: /general info/i })
    ).toBeInTheDocument()
  })
})
