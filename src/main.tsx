/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'
import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './redux/store'

import App from './App'
import './index.css'

import ErrorFallback from './components/Error/ErrorFallback'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Provider store={store}>
        <PersistGate loading="loading..." persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
)
