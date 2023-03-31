/* eslint-disable import/no-extraneous-dependencies */
import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import Card from './Card'
import Item from './mockData'

describe('Card', () => {
  it('Renders expected components', () => {
    render(<Card item={Item} />, { wrapper: BrowserRouter })

    expect(
      screen.getByRole('presentation', { name: /images/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
    expect(
      screen.getByRole('presentation', { name: /prices/i })
    ).toBeInTheDocument()
  })
})
