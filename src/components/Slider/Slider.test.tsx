/* eslint-disable import/no-extraneous-dependencies */
import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import Slider from './Slider'

describe('Slider', () => {
  it('Renders the expected elements', () => {
    render(<Slider />, { wrapper: BrowserRouter })

    expect(
      screen.getByRole('presentation', { name: /image-display/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('navigation', { name: /nav-buttons/i })
    ).toBeInTheDocument()
  })
})
