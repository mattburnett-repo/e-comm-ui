// FIXME:
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { resetCart } from '../../redux/cartReducer'

import './StripeConfirmationModal.scss'

// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal

function StripeConfirmationModal() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleContinueClick = () => {
    dispatch(resetCart())
    navigate('/')
  }

  return (
    <div id="theModal" className="modal">
      <div className="modal-content">
        <div className="confirmation-message">
          <p>Your order was successful.</p>
          <p>Thank you for shopping with us!</p>
        </div>
        <button
          id="continue-button"
          className="continue-button"
          type="button"
          onClick={handleContinueClick}
          aria-label="modal-continue-button"
        >
          Click here to continue
        </button>
      </div>
    </div>
  )
}

export default StripeConfirmationModal
