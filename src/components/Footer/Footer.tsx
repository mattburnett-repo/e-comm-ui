import './Footer.scss'

function Footer() {
  return (
    <div className="footer" role="navigation" aria-label="Footer">
      <div className="top">
        <div className="item" role="presentation" aria-label="categories">
          <h1>Categories</h1>
          <span>Solar Energy</span>
          <span>Electric Vehicles</span>
          <span>Bamboo</span>
          <span>Biodegradable Packaging</span>
          <span>Organic and natural personal care products</span>
        </div>
        <div className="item" role="presentation" aria-label="links">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item" role="presentation" aria-label="about">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            explicabo eligendi saepe, voluptate id dignissimos odit magni.
            Asperiores debitis placeat possimus ducimus, deleniti saepe iste,
            fuga, expedita ea libero consectetur. Quas, dolorem quam?
            Exercitationem, inventore!
          </span>
        </div>
        <div className="item" role="presentation" aria-label="contact">
          <h1>Contact</h1>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi ipsa
            rem nam atque animi. Distinctio adipisci dolore qui sed blanditiis
            enim totam inventore. Asperiores odit veniam fugiat minima! Tenetur,
            sit.
          </span>
        </div>
      </div>
      <div className="bottom" role="presentation" aria-label="general info">
        <div className="left">
          <span className="logo">Green Shop</span>
          <span className="copyright">&copy; 2023 All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
