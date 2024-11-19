function BlogDetails(){
    return(
        <>
        {/* Page Preloder */}
  {/* <div id="preloder">
    <div className="loader" />
  </div> */}
  {/* Header Section Begin */}
  <header className="header">
    <div className="container">
      <div className="row">
        <div className="col-lg-2">
          <div className="header__logo">
            <a href="./index.html">
              <img src="img/logo.png" alt="" />
            </a>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="header__nav">
            <nav className="header__menu mobile-menu">
              <ul>
                <li>
                  <a href="./index.html">Homepage</a>
                </li>
                <li>
                  <a href="./categories.html">
                    Categories <span className="arrow_carrot-down" />
                  </a>
                  <ul className="dropdown">
                    <li>
                      <a href="./categories.html">Categories</a>
                    </li>
                    <li>
                      <a href="./anime-details.html">Anime Details</a>
                    </li>
                    <li>
                      <a href="./anime-watching.html">Anime Watching</a>
                    </li>
                    <li>
                      <a href="./blog-details.html">Blog Details</a>
                    </li>
                    <li>
                      <a href="./signup.html">Sign Up</a>
                    </li>
                    <li>
                      <a href="./login.html">Login</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="./blog.html">Our Blog</a>
                </li>
                <li>
                  <a href="#">Contacts</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="header__right">
            <a href="#" className="search-switch">
              <span className="icon_search" />
            </a>
            <a href="./login.html">
              <span className="icon_profile" />
            </a>
          </div>
        </div>
      </div>
      <div id="mobile-menu-wrap" />
    </div>
  </header>
  {/* Header End */}
  {/* Normal Breadcrumb Begin */}
  <section
    className="normal-breadcrumb set-bg"
    data-setbg="img/normal-breadcrumb.jpg"
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="normal__breadcrumb__text">
            <h2>Sign Up</h2>
            <p>Welcome to the official Anime&nbsp;blog.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Normal Breadcrumb End */}
  {/* Signup Section Begin */}
  <section className="signup spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="login__form">
            <h3>Sign Up</h3>
            <form action="#">
              <div className="input__item">
                <input type="text" placeholder="Email address" />
                <span className="icon_mail" />
              </div>
              <div className="input__item">
                <input type="text" placeholder="Your Name" />
                <span className="icon_profile" />
              </div>
              <div className="input__item">
                <input type="text" placeholder="Password" />
                <span className="icon_lock" />
              </div>
              <button type="submit" className="site-btn">
                Login Now
              </button>
            </form>
            <h5>
              Already have an account? <a href="#">Log In!</a>
            </h5>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="login__social__links">
            <h3>Login With:</h3>
            <ul>
              <li>
                <a href="#" className="facebook">
                  <i className="fa fa-facebook" /> Sign in With Facebook
                </a>
              </li>
              <li>
                <a href="#" className="google">
                  <i className="fa fa-google" /> Sign in With Google
                </a>
              </li>
              <li>
                <a href="#" className="twitter">
                  <i className="fa fa-twitter" /> Sign in With Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Signup Section End */}
  {/* Footer Section Begin */}
  <footer className="footer">
    <div className="page-up">
      <a href="#" id="scrollToTopButton">
        <span className="arrow_carrot-up" />
      </a>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <div className="footer__logo">
            <a href="./index.html">
              <img src="img/logo.png" alt="" />
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="footer__nav">
            <ul>
              <li className="active">
                <a href="./index.html">Homepage</a>
              </li>
              <li>
                <a href="./categories.html">Categories</a>
              </li>
              <li>
                <a href="./blog.html">Our Blog</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3">
          <p>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            Copyright © All rights reserved | This template is made with{" "}
            <i className="fa fa-heart" aria-hidden="true" /> by{" "}
            <a href="https://colorlib.com" target="_blank">
              Colorlib
            </a>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          </p>
        </div>
      </div>
    </div>
  </footer>
  {/* Footer Section End */}
  {/* Search model Begin */}
  <div className="search-model">
    <div className="h-100 d-flex align-items-center justify-content-center">
      <div className="search-close-switch">
        <i className="icon_close" />
      </div>
      <form className="search-model-form">
        <input type="text" id="search-input" placeholder="Search here....." />
      </form>
    </div>
  </div>
  {/* Search model end */}
</>

    )
}
export default BlogDetails