import { Link } from 'react-router-dom'
import './Categories.scss'

function Categories() {
  return (
    <div className="categories" role="navigation" aria-label="Categories">
      <div className="col">
        <div className="row" role="navigation" aria-label="solar energy">
          <img
            src="https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg"
            alt=""
          />
          <button type="button">
            <Link className="link" to="products/1">
              Solar Energy
            </Link>
          </button>
        </div>
        <div
          className="row"
          role="navigation"
          aria-label="biodegradable packaging"
        >
          <img
            src="https://images.pexels.com/photos/9594145/pexels-photo-9594145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <button type="button">
            <Link className="link" to="products/4">
              Biodegradable Packaging
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-large">
        <div className="row">
          <div className="col">
            <div className="row">
              <div
                className="row"
                role="navigation"
                aria-label="electric vehicles"
              >
                <img
                  src="https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                />
                <button type="button">
                  <Link className="link" to="products/2">
                    Electric Vehicles
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row" role="navigation" aria-label="bamboo">
              <img
                src="https://images.pexels.com/photos/248812/pexels-photo-248812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <button type="button">
                <Link className="link" to="products/3">
                  Bamboo
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row" role="navigation" aria-label="personal care">
          <img
            src="https://images.pexels.com/photos/7262393/pexels-photo-7262393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <button type="button">
            <Link className="link" to="products/5">
              Personal Care
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Categories
