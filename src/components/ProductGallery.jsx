import React from 'react'
import { Link } from 'react-router-dom'

const ProductGallery = () => {
  return (
    <section className='p-[20px]'>
        <div className="categories">
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/3769010/pexels-photo-3769010.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <button>
                <Link className="link" to="/products/1">
                  Sale
                </Link>
              </button>
            </div>
            <div className="row">
              <img
                src="https://images.pexels.com/photos/6348047/pexels-photo-6348047.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Women
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  New Season
                </Link>
              </button>
            </div>
          </div>
          <div className="col col-l">
            <div className="row">
              <div className="col">
                <div className="row">
                  <img
                    src="https://images.pexels.com/photos/4913391/pexels-photo-4913391.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                  />
                  <button>
                    <Link to="/products/1" className="link">
                      Men
                    </Link>
                  </button>
                </div>
              </div>
              <div className="col">
                <div className="row">
                  {" "}
                  <img
                    src="https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                  <button>
                    <Link to="/products/1" className="link">
                      Accessories
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <img
                src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Shoes
                </Link>
              </button>
            </div>
          </div>
        </div>
    </section>
  )
}

export default ProductGallery