/* eslint-disable import/no-extraneous-dependencies */
import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import Contact from './Contact'

describe('Contact', () => {
  it('Renders expected components', () => {
    render(<Contact />, { wrapper: BrowserRouter })

    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
