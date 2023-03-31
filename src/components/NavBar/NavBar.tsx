// FIXME: ->
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import SearchIcon from '@mui/icons-material/Search'
import PersonOutlinedOutlineIcon from '@mui/icons-material/PersonOutlineOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import ShopppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

import { Link } from 'react-router-dom'

import './NavBar.scss'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Cart from '../Cart/Cart'
import { RootState } from '../../redux/store'

function NavBar() {
  const [open, setOpen] = useState(false)

  const data = useSelector((state: RootState) => state.cart.cartItems)

  return (
    <div className="navbar" role="navigation" aria-label="NavBar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Solar
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              EV
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Bamboo
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/4">
              Packaging
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/5">
              Personal Care
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            Green Shop
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Homepage
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Stores
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlinedOutlineIcon />
            <FavoriteBorderOutlinedIcon />
            <div
              className="cartIcon"
              onClick={() => setOpen(!open)}
              role="navigation"
              aria-label="cart-icon"
            >
              <ShopppingCartOutlinedIcon />
              <span>{data.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open ? <Cart /> : null}
    </div>
  )
}

export default NavBar
