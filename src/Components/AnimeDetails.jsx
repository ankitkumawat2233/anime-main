function AnimeDetails() {
  return (
    <>
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
        {/* Header End */}
        {/* Breadcrumb Begin */}
        <div className="breadcrumb-option">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb__links">
                  <a href="./index.html">
                    <i className="fa fa-home" /> Home
                  </a>
                  <a href="./categories.html">Categories</a>
                  <span>Romance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Breadcrumb End */}
        {/* Anime Section Begin */}
        <section className="anime-details spad">
          <div className="container">
            <div className="anime__details__content">
              <div className="row">
                <div className="col-lg-3">
                  <div
                    className="anime__details__pic set-bg"
                    data-setbg="img/anime/details-pic.jpg"
                  >
                    <div className="comment">
                      <i className="fa fa-comments" /> 11
                    </div>
                    <div className="view">
                      <i className="fa fa-eye" /> 9141
                    </div>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="anime__details__text">
                    <div className="anime__details__title">
                      <h3>Fate Stay Night: Unlimited Blade</h3>
                      <span>フェイト／ステイナイト, Feito／sutei naito</span>
                    </div>
                    <div className="anime__details__rating">
                      <div className="rating">
                        <a href="#">
                          <i className="fa fa-star" />
                        </a>
                        <a href="#">
                          <i className="fa fa-star" />
                        </a>
                        <a href="#">
                          <i className="fa fa-star" />
                        </a>
                        <a href="#">
                          <i className="fa fa-star" />
                        </a>
                        <a href="#">
                          <i className="fa fa-star-half-o" />
                        </a>
                      </div>
                      <span>1.029 Votes</span>
                    </div>
                    <p>
                      Every human inhabiting the world of Alcia is branded by a
                      “Count” or a number written on their body. For Hina’s mother,
                      her total drops to 0 and she’s pulled into the Abyss, never to
                      be seen again. But her mother’s last words send Hina on a quest
                      to find a legendary hero from the Waste War - the fabled Ace!
                    </p>
                    <div className="anime__details__widget">
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <ul>
                            <li>
                              <span>Type:</span> TV Series
                            </li>
                            <li>
                              <span>Studios:</span> Lerche
                            </li>
                            <li>
                              <span>Date aired:</span> Oct 02, 2019 to ?
                            </li>
                            <li>
                              <span>Status:</span> Airing
                            </li>
                            <li>
                              <span>Genre:</span> Action, Adventure, Fantasy, Magic
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <ul>
                            <li>
                              <span>Scores:</span> 7.31 / 1,515
                            </li>
                            <li>
                              <span>Rating:</span> 8.5 / 161 times
                            </li>
                            <li>
                              <span>Duration:</span> 24 min/ep
                            </li>
                            <li>
                              <span>Quality:</span> HD
                            </li>
                            <li>
                              <span>Views:</span> 131,541
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="anime__details__btn">
                      <a href="#" className="follow-btn">
                        <i className="fa fa-heart-o" /> Follow
                      </a>
                      <a href="#" className="watch-btn">
                        <span>Watch Now</span> <i className="fa fa-angle-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 col-md-8">
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
              <div className="col-lg-4 col-md-4">
                <div className="anime__details__sidebar">
                  <div className="section-title">
                    <h5>you might like...</h5>
                  </div>
                  <div
                    className="product__sidebar__view__item set-bg"
                    data-setbg="img/sidebar/tv-1.jpg"
                  >
                    <div className="ep">18 / ?</div>
                    <div className="view">
                      <i className="fa fa-eye" /> 9141
                    </div>
                    <h5>
                      <a href="#">Boruto: Naruto next generations</a>
                    </h5>
                  </div>
                  <div
                    className="product__sidebar__view__item set-bg"
                    data-setbg="img/sidebar/tv-2.jpg"
                  >
                    <div className="ep">18 / ?</div>
                    <div className="view">
                      <i className="fa fa-eye" /> 9141
                    </div>
                    <h5>
                      <a href="#">The Seven Deadly Sins: Wrath of the Gods</a>
                    </h5>
                  </div>
                  <div
                    className="product__sidebar__view__item set-bg"
                    data-setbg="img/sidebar/tv-3.jpg"
                  >
                    <div className="ep">18 / ?</div>
                    <div className="view">
                      <i className="fa fa-eye" /> 9141
                    </div>
                    <h5>
                      <a href="#">Sword art online alicization war of underworld</a>
                    </h5>
                  </div>
                  <div
                    className="product__sidebar__view__item set-bg"
                    data-setbg="img/sidebar/tv-4.jpg"
                  >
                    <div className="ep">18 / ?</div>
                    <div className="view">
                      <i className="fa fa-eye" /> 9141
                    </div>
                    <h5>
                      <a href="#">Fate/stay night: Heaven's Feel I. presage flower</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Anime Section End */}
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

    </>
  )



}
export default AnimeDetails