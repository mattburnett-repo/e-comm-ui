/* eslint-disable import/no-extraneous-dependencies */
import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Provider } from 'react-redux'
import { store } from './redux/store'

import App from './App'

describe('App', () => {
  it('Renders expected components', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )

    expect(
      screen.getByRole('navigation', { name: /NavBar/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('presentation', { name: /Home/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('navigation', { name: /Footer/i })
    ).toBeInTheDocument()
  })
})
