/* eslint-disable import/no-extraneous-dependencies */
import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import Categories from './Categories'

describe('Categories', () => {
  it('Renders expected components', () => {
    render(<Categories />, { wrapper: BrowserRouter })

    expect(
      screen.getByRole('navigation', { name: /solar energy/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('navigation', { name: /electric vehicles/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('navigation', { name: /bamboo/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('navigation', { name: /biodegradable packaging/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('navigation', { name: /personal care/i })
    ).toBeInTheDocument()
  })
})
