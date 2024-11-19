function AnimeWacthing(){
    return(
        <>
    
    <>
  {/* Page Preloder */}
  {"{"}/* {"{"}/*{" "}
  <div id="preloder">
    <div className="loader" /> */{"}"}
    {"{"}/*{" "}
  </div>
  {/* Header Section Begin */} */{"}"} */{"}"}
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
                <li className="active">
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
  {"{"}/* {/* Header End */} */{"}"}
  {"{"}/* {/* Breadcrumb Begin */} */{"}"}
  <div className="breadcrumb-option">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumb__links">
            <a href="./index.html">
              <i className="fa fa-home" /> Home
            </a>
            <a href="./categories.html">Categories</a>
            <a href="#">Romance</a>
            <span>Fate Stay Night: Unlimited Blade</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  {"{"}/* {/* Breadcrumb End */} */{"}"}
  {"{"}/* {/* Anime Section Begin */} */{"}"}
  <section className="anime-details spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="anime__video__player">
            <video
              id="player"
              playsInline=""
              controls=""
              data-poster="./videos/anime-watch.jpg"
            >
              <source src="videos/1.mp4" type="video/mp4" />
              {/* Captions are optional */}
              <track
                kind="captions"
                label="English captions"
                src="#"
                srcLang="en"
                default=""
              />
            </video>
          </div>
          <div className="anime__details__episodes">
            <div className="section-title">
              <h5>List Name</h5>
            </div>
            <a href="#">Ep 01</a>
            <a href="#">Ep 02</a>
            <a href="#">Ep 03</a>
            <a href="#">Ep 04</a>
            <a href="#">Ep 05</a>
            <a href="#">Ep 06</a>
            <a href="#">Ep 07</a>
            <a href="#">Ep 08</a>
            <a href="#">Ep 09</a>
            <a href="#">Ep 10</a>
            <a href="#">Ep 11</a>
            <a href="#">Ep 12</a>
            <a href="#">Ep 13</a>
            <a href="#">Ep 14</a>
            <a href="#">Ep 15</a>
            <a href="#">Ep 16</a>
            <a href="#">Ep 17</a>
            <a href="#">Ep 18</a>
            <a href="#">Ep 19</a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8">
          <div className="anime__details__review">
            <div className="section-title">
              <h5>Reviews</h5>
            </div>
            <div className="anime__review__item">
              <div className="anime__review__item__pic">
                <img src="img/anime/review-1.jpg" alt="" />
              </div>
              <div className="anime__review__item__text">
                <h6>
                  Chris Curry - <span>1 Hour ago</span>
                </h6>
                <p>
                  whachikan Just noticed that someone categorized this as
                  belonging to the genre "demons" LOL
                </p>
              </div>
            </div>
            <div className="anime__review__item">
              <div className="anime__review__item__pic">
                <img src="img/anime/review-2.jpg" alt="" />
              </div>
              <div className="anime__review__item__text">
                <h6>
                  Lewis Mann - <span>5 Hour ago</span>
                </h6>
                <p>Finally it came out ages ago</p>
              </div>
            </div>
            <div className="anime__review__item">
              <div className="anime__review__item__pic">
                <img src="img/anime/review-3.jpg" alt="" />
              </div>
              <div className="anime__review__item__text">
                <h6>
                  Louis Tyler - <span>20 Hour ago</span>
                </h6>
                <p>Where is the episode 15 ? Slow update! Tch</p>
              </div>
            </div>
            <div className="anime__review__item">
              <div className="anime__review__item__pic">
                <img src="img/anime/review-4.jpg" alt="" />
              </div>
              <div className="anime__review__item__text">
                <h6>
                  Chris Curry - <span>1 Hour ago</span>
                </h6>
                <p>
                  whachikan Just noticed that someone categorized this as
                  belonging to the genre "demons" LOL
                </p>
              </div>
            </div>
            <div className="anime__review__item">
              <div className="anime__review__item__pic">
                <img src="img/anime/review-5.jpg" alt="" />
              </div>
              <div className="anime__review__item__text">
                <h6>
                  Lewis Mann - <span>5 Hour ago</span>
                </h6>
                <p>Finally it came out ages ago</p>
              </div>
            </div>
            <div className="anime__review__item">
              <div className="anime__review__item__pic">
                <img src="img/anime/review-6.jpg" alt="" />
              </div>
              <div className="anime__review__item__text">
                <h6>
                  Louis Tyler - <span>20 Hour ago</span>
                </h6>
                <p>Where is the episode 15 ? Slow update! Tch</p>
              </div>
            </div>
          </div>
          <div className="anime__details__form">
            <div className="section-title">
              <h5>Your Comment</h5>
            </div>
            <form action="#">
              <textarea placeholder="Your Comment" defaultValue={""} />
              <button type="submit">
                <i className="fa fa-location-arrow" /> Review
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {"{"}/* {/* Anime Section End */} */{"}"}
  {"{"}/* {/* Footer Section Begin */} */{"}"}
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
  {"{"}/* {/* Footer Section End */} */{"}"}
  {"{"}/* {/* Search model Begin */} */{"}"}
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
  {"{"}/* {/* Search model end */} */{"}"}
</>

        </>
    )
}
export default AnimeWacthing