import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

import StripeConfirmationModal from '../../components/Stripe/StripeConfirmationModal'
import Slider from '../../components/Slider/Slider'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'

import './Home.scss'

function Home() {
  const [showModal, setShowModal] = useState(false)
  // check if ?success=xxx is defined in the url, meaning that we returned from a stripe order session. if isDefined and eq true, then show success modal
  const success = new URLSearchParams(useLocation().search).get('success')

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    success === 'true' ? setShowModal(true) : setShowModal(false)
  }, [success])

  return (
    <div className="home" role="presentation" aria-label="Home">
      {showModal ? <StripeConfirmationModal /> : null}
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
      <Contact />
    </div>
  )
}

export default Home
