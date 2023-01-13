import React from 'react'
import { Link } from "react-router-dom";
function Footer() {
  return (
<footer className="bg-dark-gradient footer">
        <div className="footer-top">
          <div className="container">
            <div className="footer-border-bottom pb-6 mb-5">
            </div>
            <div className="row">
              <div className="col-sm-6 col-lg-3 my-4">
                <div className="mb-4">
                  <img src="static/img/logo-light.svg" title alt="" />
                </div>
                <div className="text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>
                <div className="nav footer-socila-icon">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-lg-2 my-4">
                <h5 className="text-white h6 mb-4">Company</h5>
                <ul className="list-unstyled white-link footer-links">
                  <li>
                    <Link to={'/blog'}>Blog</Link>
                  </li>
                  <li>
                    <Link to={'/Contact'}>Contact</Link>
                  </li>
                  <li>
                    <Link to={'/About'}>About</Link>
                  </li>
                  <li>
                    <Link to={'/Return'}>Return</Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-lg-2 my-4">
                <h5 className="text-white h6 mb-4">Product</h5>
                <ul className="list-unstyled white-link footer-links">
                  <li>
                    <a href="#">Smartphones</a>
                  </li>
                  <li>
                    <a href="#">Tablets</a>
                  </li>
                  <li>
                    <a href="#">Laptops
</a>
                  </li>
                  <li>
                    <a href="#">Audio</a>
                  </li>
                  <li>
                    <a href="#">Cameras</a>
                  </li>
                  <li>
                    <a href="#">Smart Watches</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-lg-2 my-4">
                <h5 className="text-white h6 mb-4">Company</h5>
                <ul className="list-unstyled white-link footer-links">
                  <li>
                    <a href="#">Policy</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Legal &amp; Security</a>
                  </li>
                  <li>
                    <a href="#">Terms of use</a>
                  </li>
                  <li>
                    <a href="#">We're hiring!</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-lg-3 my-4">
                <h5 className="text-white h6 mb-4">Company</h5>
                <div className="white-link">
                  <div className="d-flex pb-3">
                    <div className="avatar avatar-lg rounded">
                      <img src="https://bootdey.com/img/Content/avatar/avatar1.png" title alt="" />
                    </div>
                    <div className="col ps-3">
                      <small className="text-white">29 March 2021</small>
                      <h6 className="font-w-500 h6 m-0"><a className="text-white" href="#">Markdown Language Sample Blog Post Styling</a></h6>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="avatar avatar-lg rounded">
                      <img src="https://bootdey.com/img/Content/avatar/avatar2.png" title alt="" />
                    </div>
                    <div className="col ps-3">
                      <small className="text-white">29 March 2021</small>
                      <h6 className="font-w-500 h6 m-0"><a className="text-white" href="#">Markdown Language Sample Blog Post Styling</a></h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom footer-border-top light py-3">
          <div className="container text-center">
            <p className="m-0">© 2021 copyright <a href="#" className="text-reset">pxdraft</a></p>
          </div>
        </div>
      </footer>
  )
}

export default Footer