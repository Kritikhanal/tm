import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.css";
import nepal1 from "../image/NEPAL/Nepal1.jpg";
import nepal2 from "../image/NEPAL/Nepal1.jpg";
import nepal3 from "../image/NEPAL/NEPAL2.jpeg";
import nepal4 from "../image/NEPAL/nepal3.webp";
import nepal5 from "../image/NEPAL/nepal4.jpg";
import nepal6 from "../image/NEPAL/nepal-flag.jpg";
import guideimage from "../image/TWus/Nepal_Social_Treks-0576.png";
import trust from "../image/TWus/G_Adventures-bde9.png";
import travel from "../image/TWus/National_Geographic_Journeys_with_G_Adventures-6e72.png";
import travelhappy from "../image/TWus/Nepal_Social_Treks-0576.png";
import sherpa from "../image/TWus/Sherpa_Expedition_Trekking_pvt_Ltd-a724.png";
import sagar from "../image/users/sagar-3.jpg";
import suman from "../image/users/prabina-1.jpg";
import jeewan from "../image/users/jwn1.jpg";
import raj from "../image/users/raj5.jpg";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
import location from "../image/location.gif";
import review from "../image/Review.gif";
import owner from "../image/owner.gif";
import { PulseLoader } from "react-spinners";
import must from "../image/places/Mustang-Nepal-.jpg"
import pasupati from "../image/places/pasupatinath.jpg"
import lumb from "../image/places/lumbini.jpg"
import bouddha from "../image/places/bouddha.jpg"



const Home = () => {
  // loading
  const [loaderStatus, setLoaderStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoaderStatus(false);
    }, 2000);
  }, []);

  // card  convert to background image
  const activate = (e) => {
    const sliderss = document.querySelector(".sliderss");
    const item1s = document.querySelectorAll(".item1");
    if (e.target.matches(".next")) sliderss.append(item1s[0]);
    if (e.target.matches(".prev")) sliderss.prepend(item1s[item1s.length - 1]);
  };

  //

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  // card slider

  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div>
      {loaderStatus ? (
        <div className="loader-container">
          <PulseLoader loading={loaderStatus} size={50} color="#fde02f" />
        </div>
      ) : (
        <>
          {/* <LoginModal/> */}
          <>
            <button
              className={showButton ? "show" : ""}
              onClick={scrollToTop}
              id="button"
            ></button>
            {/* <section className="banner">
          <div className="banner-text-item">
            <div className="banner-heading">
              <h1>Explore The Beauty Of Odisha</h1>
            </div>
            <form className="form">
              <input
                type="text"
                list="mylist"
                placeholder="Where would you like to go?"
              />
              <datalist id="mylist">
                <option>London</option>
                <option>Canada</option>
                <option>Monaco</option>
                <option>France</option>
                <option>Japan</option>
                <option>Switzerland</option>
                <option>Seoul</option>
              </datalist>
              <input type="date" className="date" />
              <Link to="#" className="book">
                book
              </Link>
            </form>
          </div>
        </section> */}

            <div>
              <section id="carousel1">
                <div
                  id="carouselExampleFade"
                  className="carousel slide carousel-fade"
                  data-bs-ride="carousel"
                  data-bs-interval={3000}
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src={nepal1}
                        className="d-block w-100"
                        style={{ height: "85vh", opacity: "999" }}
                        alt="First slide"
                      />
                      <div
                        className="nivo-caption"
                        style={{
                          display: "block",
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          textAlign: "center",
                        }}
                      >
                        <div className="display-table">
                          <div className="table-cell">
                            <div className="container">
                              <div className="slider-text ">
                                <section className="banner">
                                  <div className="banner-text-item">
                                    <Slide direction="down">
                                      <div className="banner-heading ">
                                        <h1>Explore The Beauty Of NEPAL</h1>
                                      </div>
                                    </Slide>
                                    <Slide direction="up">
                                      <Link to="/Package" className="book ">
                                        Visit With Us
                                      </Link>
                                    </Slide>
                                  </div>
                                </section>
                                {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                                {/* <a href="#" class="default-btn lineUp" style="color: white;">Donate Now</a> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item ">
                      <img
                        src={nepal2}
                        className="d-block w-100"
                        style={{ height: "85vh" }}
                        alt="First slide"
                      />
                      <div
                        className="nivo-caption"
                        style={{
                          display: "block",
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          textAlign: "center",
                        }}
                      >
                        <div className="display-table">
                          <div className="table-cell">
                            <div className="container">
                              <div className="slider-text ">
                                <section className="banner">
                                  <div className="banner-text-item">
                                    <Slide direction="down">
                                      <div className="banner-heading ">
                                        <h1>Explore The Beauty Of NEPAL</h1>
                                      </div>
                                    </Slide>
                                    <Slide direction="up">
                                      <Link to="/Package" className="book ">
                                        Visit With Us
                                      </Link>
                                    </Slide>
                                  </div>
                                </section>
                                {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                                {/* <a href="#" class="default-btn lineUp" style="color: white;">Donate Now</a> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item ">
                      <img
                        src={nepal3}
                        className="d-block w-100"
                        style={{ height: "85vh" }}
                        alt="First slide"
                      />
                      <div
                        className="nivo-caption"
                        style={{
                          display: "block",
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          textAlign: "center",
                        }}
                      >
                        <div className="display-table">
                          <div className="table-cell">
                            <div className="container">
                              <div className="slider-text ">
                                <section className="banner">
                                  <div className="banner-text-item">
                                    <Slide direction="down">
                                      <div className="banner-heading ">
                                        <h1>Explore The Beauty Of NEPAL</h1>
                                      </div>
                                    </Slide>
                                    <Slide direction="up">
                                      <Link to="/Package" className="book ">
                                        Visit With Us
                                      </Link>
                                    </Slide>
                                  </div>
                                </section>
                                {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                                {/* <a href="#" class="default-btn lineUp" style="color: white;">Donate Now</a> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item ">
                      <img
                        src={nepal4}
                        className="d-block w-100"
                        style={{ height: "85vh" }}
                        alt="First slide"
                      />
                      <div
                        className="nivo-caption"
                        style={{
                          display: "block",
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          textAlign: "center",
                        }}
                      >
                        <div className="display-table">
                          <div className="table-cell">
                            <div className="container">
                              <div className="slider-text ">
                                <section className="banner">
                                  <div className="banner-text-item">
                                    <Slide direction="down">
                                      <div className="banner-heading ">
                                        <h1>Explore The Beauty Of NEPAL</h1>
                                      </div>
                                    </Slide>
                                    <Slide direction="up">
                                      <Link to="/Package" className="book ">
                                        Visit With Us
                                      </Link>
                                    </Slide>
                                  </div>
                                </section>
                                {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                                {/* <a href="#" class="default-btn lineUp" style=" color: white;">Donate Now</a> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item ">
                      <img
                        src={nepal5}
                        className="d-block w-100"
                        style={{ height: "85vh" }}
                        alt="First slide"
                      />
                      <div
                        className="nivo-caption"
                        style={{
                          display: "block",
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          textAlign: "center",
                        }}
                      >
                        <div className="display-table">
                          <div className="table-cell">
                            <div className="container">
                              <div className="slider-text ">
                                <section className="banner">
                                  <div className="banner-text-item">
                                    <Slide direction="down">
                                      <div className="banner-heading ">
                                        <h1>Explore The Beauty Of NEPAL</h1>
                                      </div>
                                    </Slide>
                                    <Slide direction="up">
                                      <Link to="/Package" className="book ">
                                        Visit With Us
                                      </Link>
                                    </Slide>
                                  </div>
                                </section>
                                {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                                {/* <a href="#" class="default-btn lineUp" style=" color: white;">Donate Now</a> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item ">
                      <img
                        src={nepal6}
                        className="d-block w-100"
                        style={{ height: "85vh" }}
                        alt="First slide"
                      />
                      <div
                        className="nivo-caption"
                        style={{
                          display: "block",
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          textAlign: "center",
                        }}
                      >
                        <div className="display-table">
                          <div className="table-cell">
                            <div className="container">
                              <div className="slider-text ">
                                <section className="banner">
                                  <div className="banner-text-item">
                                    <Slide direction="down">
                                      <div className="banner-heading ">
                                        <h1>Explore The Beauty Of NEPAL</h1>
                                      </div>
                                    </Slide>
                                    <Slide direction="up">
                                      <Link to="/Package" className="book ">
                                        Visit With Us
                                      </Link>
                                    </Slide>
                                  </div>
                                </section>
                                {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                                {/* <a href="#" class="default-btn lineUp" style=" color: white;">Donate Now</a> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleFade"
                    role="button"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleFade"
                    role="button"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Next</span>
                  </a>
                </div>
              </section>
            </div>

            <section id="carousel2" style={{ paddingTop: "40px" }}>
              <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
                data-bs-interval={3000}
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={nepal1}
                      className="d-block w-100"
                      alt="First slide"
                    />
                    <div
                      className="nivo-caption"
                      style={{
                        display: "block",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                      }}
                    >
                      <div className="display-table">
                        <div className="table-cell">
                          <div className="container">
                            <div className="slider-text ">
                              <section className="">
                                <div className="banner-text-item1">
                                  <Slide direction="down">
                                    <div className="banner-heading1 ">
                                      <h1>Explore The Beauty Of NEPAL</h1>
                                    </div>
                                  </Slide>
                                  <Slide direction="up">
                                    <Link to="/Package" className="book ">
                                      Visit With Us
                                    </Link>
                                  </Slide>
                                </div>
                              </section>
                              {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                              {/* <a href="#" class="default-btn lineUp" style="color: white;">Donate Now</a> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <img
                      src={nepal2}
                      className="d-block w-100"
                      alt="First slide"
                    />
                    <div
                      className="nivo-caption"
                      style={{
                        display: "block",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                      }}
                    >
                      <div className="display-table">
                        <div className="table-cell">
                          <div className="container">
                            <div className="slider-text ">
                              <section className="">
                                <div className="banner-text-item1">
                                  <Slide direction="down">
                                    <div className="banner-heading1 ">
                                      <h1>Explore The Beauty Of NEPAL</h1>
                                    </div>
                                  </Slide>
                                  <Slide direction="up">
                                    <Link to="/Package" className="book ">
                                      Visit With Us
                                    </Link>
                                  </Slide>
                                </div>
                              </section>
                              {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                              {/* <a href="#" class="default-btn lineUp" style="color: white;">Donate Now</a> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <img
                      src={nepal3}
                      className="d-block w-100"
                      style={{ height: "28vh" }}
                      alt="First slide"
                    />
                    <div
                      className="nivo-caption"
                      style={{
                        display: "block",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                      }}
                    >
                      <div className="display-table">
                        <div className="table-cell">
                          <div className="container">
                            <div className="slider-text ">
                              <section className="">
                                <div className="banner-text-item1">
                                  <Slide direction="down">
                                    <div className="banner-heading1 ">
                                      <h1>Explore The Beauty Of NEPAL</h1>
                                    </div>
                                  </Slide>
                                  <Slide direction="up">
                                    <Link to="/Package" className="book ">
                                      Visit With Us
                                    </Link>
                                  </Slide>
                                </div>
                              </section>
                              {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                              {/* <a href="#" class="default-btn lineUp" style="color: white;">Donate Now</a> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <img
                      src={nepal4}
                      className="d-block w-100"
                      alt="First slide"
                    />
                    <div
                      className="nivo-caption"
                      style={{
                        display: "block",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                      }}
                    >
                      <div className="display-table">
                        <div className="table-cell">
                          <div className="container">
                            <div className="slider-text ">
                              <section className="">
                                <div className="banner-text-item1">
                                  <Slide direction="down">
                                    <div className="banner-heading1 ">
                                      <h1>Explore The Beauty Of NEAPAL</h1>
                                    </div>
                                  </Slide>
                                  <Slide direction="up">
                                    <Link to="/Package" className="book ">
                                      Visit With Us
                                    </Link>
                                  </Slide>
                                </div>
                              </section>
                              {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                              {/* <a href="#" class="default-btn lineUp" style=" color: white;">Donate Now</a> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <img
                      src={nepal5}
                      className="d-block w-100"
                      alt="First slide"
                    />
                    <div
                      className="nivo-caption"
                      style={{
                        display: "block",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                      }}
                    >
                      <div className="display-table">
                        <div className="table-cell">
                          <div className="container">
                            <div className="slider-text ">
                              <section className="">
                                <div className="banner-text-item1">
                                  <Slide direction="down">
                                    <div className="banner-heading1 ">
                                      <h1>Explore The Beauty Of NEPAL</h1>
                                    </div>
                                  </Slide>
                                  <Slide direction="up">
                                    <Link to="/Package" className="book ">
                                      Visit With Us
                                    </Link>
                                  </Slide>
                                </div>
                              </section>
                              {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                              {/* <a href="#" class="default-btn lineUp" style=" color: white;">Donate Now</a> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <img
                      src={nepal5}
                      className="d-block w-100"
                      alt="First slide"
                    />
                    <div
                      className="nivo-caption"
                      style={{
                        display: "block",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                      }}
                    >
                      <div className="display-table">
                        <div className="table-cell">
                          <div className="container">
                            <div className="slider-text ">
                              <section className="">
                                <div className="banner-text-item1">
                                  <Slide direction="down">
                                    <div className="banner-heading1 ">
                                      <h1>Explore The Beauty Of NEPAL</h1>
                                    </div>
                                  </Slide>
                                  <Slide direction="up">
                                    <Link to="/Package" className="book ">
                                      Visit With Us
                                    </Link>
                                  </Slide>
                                </div>
                              </section>
                              {/* <a href="#" className="default-btn lineUp" style={{color: 'white'}}>Join With Us</a> */}
                              {/* <a href="#" class="default-btn lineUp" style=" color: white;">Donate Now</a> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleFade"
                  role="button"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleFade"
                  role="button"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </a>
              </div>
            </section>
          </>

          <>
            <div className="section-head text-center p-t80">
              <h3 className="h3style" data-title="Travel With Us">
                Travel With Us
              </h3>
              <div className="wt-separator bg-primarys"></div>
              <div className="wt-separator2 bg-primarys"></div>
              {/* <p>Connecting with entrepreneurs online, is just a few clicks away.</p> */}
            </div>
            <div
              className="container responiveheading"
              style={{ backgroundColor: "#fff" }}
            >
              <h3 class="head3 spacing secondary-color text-center text-uppercase p-t80">
                Travel With Us
              </h3>
              {/* <h2 class=" head2 spacing secondary-color text-center text-uppercase" style={{top:'150px', position:'relative' }} >
            Visit The Best Places Ever
          </h2> */}
            </div>
            <section
              className="py-4 services"
              style={{ backgroundColor: "#fff" }}
            >
              <div className="container">
                {/* <h1>Tourism</h1> */}
                <div className="">
                  <Slider {...settings1}>
                    <div className="m-1">
                      <div className="service-item">
                        <img src={guideimage} alt="section2" />
                        {/* <h2>8000+ Our Local Guides</h2> */}
                      </div>
                    </div>
                    <div className="m-1">
                      <div className="service-item">
                        <img
                          src={trust}
                          style={{ width: "120px" }}
                          alt="section2"
                        />
                        {/* <h2>100% Trusted Tour Agency</h2> */}
                      </div>
                    </div>
                    <div className="m-1">
                      <div className="service-item">
                        <img
                          src={travel}
                          style={{ width: "140px" }}
                          alt="section2"
                        />
                        {/* <h2>28+ Years of Travel Experience</h2> */}
                      </div>
                    </div>
                    <div className="m-1">
                      <div className="service-item">
                        <img src={travelhappy} alt="section2" />
                        {/* <h2>98% Our Travelers are Happy</h2> */}
                      </div>
                    </div>
                    <div className="m-1">
                      <div className="service-item">
                        <img src={sherpa} alt="section2" />
                        {/* <h2>98% Our Travelers are Happy</h2> */}
                      </div>
                    </div>
                    {/* <div className="m-1">
                  <div className="partner-list">
                    <img
                      src={homePage?.imagepath + items.image}
                      className="img-fluid"
                    />
                  </div>
                </div> */}
                  </Slider>
                </div>
              </div>
            </section>
          </>

          {/* card section */}

          <>
            <div className="section-head text-center p-t80">
              <h3 className="h3style" data-title=" Tourist Places">
                Top 8 City
              </h3>
              <div className="wt-separator bg-primarys"></div>
              <div className="wt-separator2 bg-primarys"></div>
              {/* <p>Connecting with entrepreneurs online, is just a few clicks away.</p> */}
            </div>
            <div className="container-fluid responiveheading">
              <h3 class="head3 spacing secondary-color text-center text-uppercase">
                Top 8 City
              </h3>
              <h2 class=" head2 spacing secondary-color text-center text-uppercase">
                Tourist Places
              </h2>
            </div>

            <main className="page-contents">
              <div className="cards">
                <div className="contentt">
                  <h2 className="title">KATHMANDU</h2>
                  <p className="copy">CITIES OF TEMPLE</p>
                  <p className="copy"></p>
                  <button className="btn">View Trips</button>
                </div>
              </div>
              <div className="cards">
                <div className="contentt">
                  <h2 className="title">POKHARA</h2>
                  <p className="copy">Admire the Rich Architecture</p>
                  <button className="btn">View Trips</button>
                </div>
              </div>
              <div className="cards">
                <div className="contentt">
                  <h2 className="title">CHITWAM</h2>
                  <p className="copy">Seaside Serenity</p>
                  <button className="btn">Trip Now</button>
                </div>
              </div>
              <div className="cards">
                <div className="contentt">
                  <h2 className="title">BUTWAL</h2>
                  <p className="copy">fastest-growing cities in Nepal</p>
                  <button className="btn">Trip Now</button>
                </div>
              </div>
              <div className="cards">
                <div className="contentt">
                  <h2 className="title">JANAKPUR</h2>
                  <p className="copy">wedding Place of Ram and Sita</p>
                  <button className="btn">Trip Now</button>
                </div>
              </div>
              <div className="cards">
                <div className="contentt">
                  <h2 className="title">DHARAN</h2>
                  <p className="copy">
                    Gateway to the Mahabharat hills and is one of the biggest
                    pilgrimage locations in Nepal.
                  </p>
                  <button className="btn">Trip Now</button>
                </div>
              </div>
              <div className="cards">
                <div className="contentt">
                  <h2 className="title">HETAUDA</h2>
                  <p className="copy">
                    Hetauda is one of the largest cities in Nepal.
                  </p>
                  <button className="btn">Trip Now</button>
                </div>
              </div>
              <div className="cards">
                <div className="contentt">
                  <h2 className="title">BHARATPUR</h2>
                  <p className="copy">
                    City in the central-southern part of Nepal.
                  </p>
                  <button className="btn">Trip Now</button>
                </div>
              </div>
            </main>
          </>
          <>
            <section className="team-section1 bg-grey bd-bottom circle5 p-t80 shape padding">
              <div className="container">
                <Slide direction="down">
                  <div className="section-heading text-center mb-40">
                    <h2>Meet Our Volunteers</h2>
                    <span className="heading-border" />
                    <p>
                      Help today because tomorrow you may be the one who <br />{" "}
                      needs more helping!
                    </p>
                  </div>
                </Slide>
                <div className="team-wrapper row">
                  <div className="col-lg-6 sm-padding">
                    <Slide direction="left">
                      <div className="team-wrap row">
                        <div className="col-md-6">
                          <div className="team-details">
                            <img className="sideimg1" src={sagar} alt="team" />
                            <div className="hover">
                              <h3>
                                Sagar Kunwar <span>Communicator</span>
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="team-details">
                            <img className="sideimg2" src={suman} alt="team" />
                            <div className="hover">
                              <h3>
                                Suman Aryal <span>Tourist Helper</span>
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="team-details">
                            <img className="sideimg3" src={jeewan} alt="team" />
                            <div className="hover">
                              <h3>
                                Jeewan Kunwar Chaudary{" "}
                                <span>Event Creator</span>
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="team-details">
                            <img className="sideimg4" src={raj} alt="team" />
                            <div className="hover">
                              <h3>
                                Raj Timalsena <span>Internet Specialist</span>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Slide>
                  </div>
                  <div className="col-lg-6 sm-padding">
                    <Slide direction="right">
                      <div className="team-content">
                        <h2>Become a Volunteer?</h2>
                        <h3 className="section5h3">
                          Join your hand with us for a better life and beautiful
                          future.
                        </h3>
                        <p>The secret to happiness is with the nature.</p>
                        <ul className="check-list">
                          <li>
                            <i className="fa fa-check" />
                            We are friendly to each other.
                          </li>
                          <li>
                            <i className="fa fa-check" />
                            If you join with us,We will give you free training.
                          </li>
                          <li>
                            <i className="fa fa-check" />
                            Its an opportunity to see the nature
                          </li>
                          <li>
                            <i className="fa fa-check" />
                            No goal requirements.
                          </li>
                          <li>
                            <i className="fa fa-check" />
                            Joining is tottaly free. We dont need any money from
                            you.
                          </li>
                        </ul>
                        <Link to="#" className="custom-btn btn-9 default-btn">
                          Join With Us
                        </Link>
                      </div>
                    </Slide>
                  </div>
                </div>
              </div>
            </section>
          </>
          <>
            <div
              className="section-head text-center p-t80"
              style={{ paddingBottom: "30px" }}
            >
              <h3 className="h3style" data-title=" Most Demanded Places">
                Have A Glance
              </h3>
              <div className="wt-separator bg-primarys"></div>
              <div className="wt-separator2 bg-primarys"></div>
              {/* <p>Connecting with entrepreneurs online, is just a few clicks away.</p> */}
            </div>
            <div className="container p-t80 responiveheading">
              <h3 class="head3 spacing secondary-color text-center text-uppercase">
                Most Demanded Places
              </h3>
              <h2 class=" head2 spacing secondary-color text-center text-uppercase">
                Have A Glance
              </h2>
            </div>
            <div className="container first-section">
              <main className="section1">
                <ul className="sliderss">
                  <li className="item1 firstimg">
                    <div className="content1">
                      <h2 className="title"> LUMBINI:</h2>
                      <p className="description">
                        {" "}
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Tenetur excepturi quia dolor nostrum ipsum
                        voluptatem fugiat incidunt ullam necessitatibus?
                        Voluptatibus ullam consectetur asperiores animi
                        consequuntur quis deleniti, hic qui possimus.{" "}
                      </p>
                      {/* <Link to="">
                    <button class="custom-btn btn-9">Read More...</button>
                  </Link> */}
                    </div>
                  </li>
                  {/* Repeat the rest of the list items similarly */}
                  <li className="item1 fourthimg">
                    <div className="content1">
                      <h2 className="title"> KATHMANDU </h2>
                      <p className="description">
                        {" "}
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Reprehenderit asperiores porro, similique sit
                          modi maiores sunt eveniet saepe magni minima
                          recusandae, animi omnis, beatae maxime ullam. Fuga
                          doloremque molestias quaerat?
                        </p>
                      </p>
                      {/* <Link to="">
                    <button class="custom-btn btn-9">Read More...</button>
                  </Link> */}
                    </div>
                  </li>
                  <li className="item1 thirdimg">
                    <div className="content1">
                      <h2 className="title"> Pokhara</h2>
                      <p className="description">
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ratione exercitationem ex facere ipsum architecto quia
                        sequi distinctio! Id, quia. Expedita fugit mollitia est
                        repellat amet ad velit quidem quis eveniet?
                      </p>
                      {/* <Link to="">
                    <button class="custom-btn btn-9">Read More...</button>
                  </Link> */}
                    </div>
                  </li>
                  <li className="item1 secondimg">
                    <div className="content1">
                      <h2 className="title">chitwan</h2>
                      <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Perspiciatis placeat sint assumenda exercitationem
                        recusandae ipsum adipisci nesciunt quod optio
                        reiciendis? Quos nisi necessitatibus, delectus
                        dignissimos unde quasi ad at labore?
                      </p>
                      {/* <Link to="">
                    <button class="custom-btn btn-9">Read More...</button>
                  </Link> */}
                    </div>
                  </li>
                  <li className="item1 fivthimg">
                    <div className="content1">
                      <h2 className="title">Mustang</h2>
                      <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sunt, quas quia accusamus ipsa maxime repellendus
                        aut officiis vel modi dicta eaque sint fuga ad quasi
                        sequi assumenda, quibusdam est. Deleniti!
                      </p>
                      {/* <Link to="">
                    <button class="custom-btn btn-9">Read More...</button>
                  </Link> */}
                    </div>
                  </li>
                  <li className="item1 sixthimg">
                    <div className="content1">
                      <h2 className="title">janakpur</h2>
                      <p className="description">
                        {" "}
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Non reprehenderit saepe aliquam, nobis
                        voluptatibus laborum, voluptatum esse quisquam
                        voluptatem alias voluptate repellendus quae ipsam
                        doloremque nesciunt culpa in minus quis?
                      </p>
                      {/* <Link to="">
                    <button class="custom-btn btn-9">Read More...</button>
                  </Link> */}
                    </div>
                  </li>
                </ul>
                <nav className="navstyle">
                  <button className="custom-btn1 prev" onClick={activate}>
                    &#8249;
                  </button>
                  <button className="custom-btn1 next" onClick={activate}>
                    &#8250;
                  </button>
                </nav>
              </main>
            </div>
          </>

          <>
            {/* <section id="slideshow" >
                <div class="entire-content">
                    <div class="content-carrousel">
                        <figure class="shadow">
                          <img src={Balasore} /></figure>
                        <figure class="shadow">
                          <img src={Chandipur} /></figure>
                        <figure class="shadow">
                          <img src={Boudh} /></figure>
                        <figure class="shadow">
                          <img src={sambalpur} /></figure>
                        <figure class="shadow">
                          <img src={puri} />
                          </figure>
                        <figure class="shadow">
                          <img src={Balangir} /></figure>
                        <figure class="shadow">
                          <img src={ANUGUL} /></figure>
                        <figure class="shadow">
                          <img src={konark} /></figure>
                        <figure class="shadow">
                          <img src={bbsr} /></figure>
                    </div>
                </div>
                
            </section> */}

            <div
              className="section-head text-center p-t80 "
              style={{ paddingBottom: "30px" }}
            >
              <h3 className="h3style" data-title=" Our Customer in Odisha">
                {" "}
                Our Customer in NEPAL
              </h3>
              <div className="wt-separator bg-primarys"></div>
              <div className="wt-separator2 bg-primarys"></div>
              {/* <p>Connecting with entrepreneurs online, is just a few clicks away.</p> */}
            </div>

            <div
              className="container p-t80 responiveheading"
              style={{ paddingTop: "100px", paddingBottom: "30px" }}
            >
              {/* <h3 class="head3 spacing secondary-color text-center text-uppercase">
                Art& Architectures of
              </h3> */}
              <h2 class=" head2 spacing secondary-color text-center text-uppercase">
                Our Customer in NEPAL
              </h2>
            </div>
            <div
              className="container gap-5 "
              style={{
                display: "flex",
                position: "absolute",
                zIndex: "5",
                height: "78vh",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <div className="section-content doodle">
                <div className="newsletter-section text-center text-white">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "60px",
                      width: "95vw",
                      flexWrap: "wrap",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "white",
                        borderRadius: "20px",
                        width: "25%",
                      }}
                    >
                      <Slide direction="left">
                        <div className="counter-box">
                          <img
                            src={location}
                            className="img-fluid"
                            style={{
                              width: 100,
                              marginBottom: 9,
                              marginTop: 10,
                              height: "80px",
                            }}
                            alt="section2"
                          />
                          <div
                            className="counting counter text-black fs-1 fw-bold  "
                            data-count={30}
                          >
                            30
                          </div>
                          <p className="text-black fs-5">Locations</p>
                        </div>
                      </Slide>
                    </div>
                    <div
                      style={{
                        backgroundColor: "white",
                        borderRadius: "20px",
                        width: "25%",
                      }}
                    >
                      <Slide direction="down">
                        <div className="counter-box">
                          <img
                            src={review}
                            className="img-fluid"
                            style={{
                              width: 100,
                              marginBottom: 9,
                              marginTop: 10,
                              height: "80px",
                            }}
                            alt="section2"
                          />
                          <div
                            className="counting counter text-black fs-1 fw-bold"
                            data-count={1400}
                          >
                            14000
                          </div>
                          <h5 className="text-black">Reviews</h5>
                        </div>
                      </Slide>
                    </div>

                    <div
                      style={{
                        backgroundColor: "white",
                        borderRadius: "20px",
                        width: "25%",
                      }}
                    >
                      <Slide direction="right">
                        <div className="counter-box">
                          <img
                            src={owner}
                            className="img-fluid"
                            style={{
                              width: 100,
                              marginBottom: 9,
                              marginTop: 10,
                              height: "80px",
                            }}
                            alt="section2"
                          />
                          <div
                            className="counting counter text-black fs-1 fw-bold"
                            data-count={40000}
                          >
                            40,000
                          </div>
                          <h5 className="text-black">Visiters</h5>
                        </div>
                      </Slide>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="doodle">
              <css-doodle
                style={{
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n  --color: #51eaea, #fffde1, #ff9d76, #FB3569;\n\n  @grid: 30x1 / 100% 78vh / #270f34; \n  \n  :container {\n    perspective: 30vmin;\n    --deg: @p(-180deg, 180deg);\n  }\n  \n  :after, :before {\n    content: '';\n    background: @p(--color); \n    @place: @r(100%) @r(100%);\n    @size: @r(6px);\n    @shape: heart;\n  }\n\n  @place: center;\n  @size: 18vmin; \n\n  box-shadow: @m2(0 0 50px @p(--color));\n  background: @m100(\n    radial-gradient(@p(--color) 50%, transparent 0) \n    @r(-20%, 120%) @r(-20%, 100%) / 1px 1px\n    no-repeat\n  );\n\n  will-change: transform, opacity;\n  animation: scale-up 26s linear infinite;\n  animation-delay: calc(-12s / @I * @i);\n\n  @keyframes scale-up {\n    0%, 95.01%, 100% {\n      transform: translateZ(0) rotate(0);\n      opacity: 0;\n    }\n    10% { \n      opacity: 1; \n    }\n    95% {\n      transform: \n        translateZ(35vmin) rotateZ(var(--deg));\n    }\n  }\n",
                  }}
                />
              </css-doodle>
            </div>

            <div className="doodleimage">
              {/* <div class="row" >
                <div class="col-md-4" style={{ display: 'flex', justifyContent: 'center' }}>


          
                  <div className="card  counter-box1">
                    <Slide direction='left'>
                      <img src={location} className="card-img-top" style={{ width: 100, marginBottom: 9, marginTop: 10, height: '80px' }} alt="..." />
                      <div className="card-body">
                        <div className="counting counter text-black fs-1 fw-bold  " data-count={180}>180</div>
                        <p className='text-black fs-5'>Locations</p>
                      </div>
                    </Slide>
                  </div>


                </div>
                <div class="col-md-4" style={{ display: 'flex', justifyContent: 'center' }}>


                  <div className="card  counter-box1">
                    <Slide direction='down'>
                      <img src={review} className="card-img-top" style={{ width: 100, marginBottom: 9, marginTop: 10, height: '80px' }} alt="..." />
                      <div className="card-body">
                        <div className="counting counter text-black fs-1 fw-bold" data-count={1400}>14000</div>
                        <h5 className='text-black'>Reviews</h5>
                      </div>
                    </Slide>
                  </div>


                </div>

                <div class="col-md-4" style={{ display: 'flex', justifyContent: 'center' }}>


                 
                  <div className="card  counter-box1">
                    <Slide direction='right'>
                      <img src={owner} className="card-img-top" style={{ width: 100, marginBottom: 9, marginTop: 10, height: '80px' }} alt="..." />
                      <div className="card-body">
                        <div className="counting counter text-black fs-1 fw-bold" data-count={40000}>40,000</div>
                        <h5 className='text-black'>Visiters</h5>
                      </div>
                    </Slide>
                  </div>


                </div>
              </div> */}

              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div
                    className="card h-90 "
                    style={{ margin: "20px", borderRadius: "15px" }}
                  >
                    <Slide direction="left">
                      <img
                        src={location}
                        className="card-img-top"
                        style={{
                          height: "150px",
                          width: "150px",
                          position: "relative",
                          left: "30%",
                        }}
                        alt="..."
                      />
                    </Slide>
                    <div className="card-body">
                      <Slide direction="right">
                        <div
                          className="counting counter text-black fs-1 fw-bold  text-center "
                          data-count={30}
                        >
                          30
                        </div>
                        <p className="text-black fs-5  text-center">
                          Locations
                        </p>
                      </Slide>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="card h-90 "
                    style={{ margin: "20px", borderRadius: "15px" }}
                  >
                    <Slide direction="right">
                      <img
                        src={review}
                        className="card-img-top"
                        style={{
                          height: "150px",
                          width: "150px",
                          position: "relative",
                          left: "30%",
                        }}
                        alt="..."
                      />
                    </Slide>
                    <div className="card-body">
                      <Slide direction="left">
                        <div
                          className="counting counter text-black  text-center fs-1 fw-bold"
                          data-count={1400}
                        >
                          14000
                        </div>
                        <h5 className="text-black  text-center">Reviews</h5>
                      </Slide>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="card h-90"
                    style={{ margin: "20px", borderRadius: "15px" }}
                  >
                    <Slide direction="left">
                      <img
                        src={owner}
                        className="card-img-top"
                        style={{
                          height: "150px",
                          width: "150px",
                          position: "relative",
                          left: "30%",
                        }}
                        alt="..."
                      />
                    </Slide>
                    <div className="card-body">
                      <Slide direction="right">
                        <div
                          className="counting counter text-black  text-center fs-1 fw-bold"
                          data-count={40000}
                        >
                          40,000
                        </div>
                        <h5 className="text-black text-center">Visiters</h5>
                      </Slide>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
          <>
            <div className="section-head text-center  paddingchange">
              <h1
                className="h3style"
                data-title="Most Loveble Places In Odisha"
              >
                Most Loveble Places In Nepal
              </h1>
              <div className="wt-separator bg-primarys"></div>
              <div className="wt-separator2 bg-primarys"></div>
              {/* <p>Connecting with entrepreneurs online, is just a few clicks away.</p> */}
            </div>

            <div className="container responiveheading  paddingchange">
              <h2
                class=" head2 spacing secondary-color text-center text-uppercase "
                style={{ paddingTop: "50px" }}
              >
                Most Loveble Places In Nepal
              </h2>
            </div>
            <div className="container">
              <ul className="tabitem" id="tabitm">
                <li
                  className={activeTab === 0 ? "actives" : ""}
                  onClick={() => handleTabClick(0)}
                  data-id="0"
                >
                  Mustang
                </li>
                <li
                  className={activeTab === 1 ? "actives" : ""}
                  onClick={() => handleTabClick(1)}
                  data-id="1"
                >
                  PASUPATINATH
                </li>
                <li
                  className={activeTab === 2 ? "actives" : ""}
                  onClick={() => handleTabClick(2)}
                  data-id="2"
                >
                  LUMBINI
                </li>
                <li
                  className={activeTab === 3 ? "actives" : ""}
                  onClick={() => handleTabClick(3)}
                  data-id="3"
                >
                  Boudhanath Stupa
                </li>
              </ul>
              <ul className="tabitemresponsive" id="tabitmresponsive">
                <Slide direction="left">
                  <li
                    className={activeTab === 0 ? "actives" : ""}
                    onClick={() => handleTabClick(0)}
                    data-id="0"
                  >
                    MUSTANG
                  </li>
                  <li
                    className={activeTab === 1 ? "actives" : ""}
                    onClick={() => handleTabClick(1)}
                    data-id="1"
                  >
                    PASUPATINATH
                  </li>
                </Slide>
                <Slide direction="right">
                  <li
                    className={activeTab === 2 ? "actives" : ""}
                    onClick={() => handleTabClick(2)}
                    data-id="2"
                  >
                    LUMBINI
                  </li>
                  <li
                    className={activeTab === 3 ? "actives" : ""}
                    onClick={() => handleTabClick(3)}
                    data-id="3"
                  >
                    Boudhanath Stupa
                  </li>
                </Slide>
              </ul>
            </div>
            <div className="container">
              <div className="contentstyle">
                <div
                  className={`box ${activeTab === 0 ? "show" : "hide"}`}
                  data-content="0"
                >
                  <div class="row">
                    <div class="col-md-6">
                      <img src={must} alt="" />
                    </div>
                    <div class="col-md-6">
                      {" "}
                      <div>
                        <h3>MUSTANG</h3>
                        <p>
                          Mustang is a remote district in northern Nepal, known
                          for its stunning landscapes, rich Tibetan culture, and
                          historical significance as the former Kingdom of Lo.
                          Divided into Upper and Lower Mustang, it features arid
                          desert-like terrain in the north and greener valleys
                          in the south.
                        </p>
                        <h3>HISTORY</h3>
                        <p>
                          {" "}
                          Mustang was part of the independent Kingdom of Lo,
                          established by Ame Pal in 1380 AD. Positioned on a
                          crucial trade route between Nepal and Tibet, it
                          thrived as a hub for salt and other goods. In the late
                          18th century, Mustang was annexed by Nepal, though the
                          royal family retained some autonomy, and the region
                          remained culturally distinct. Mustang's remote
                          location kept it closed to outsiders until 1992, when
                          the Nepalese government opened it to limited tourism.
                          Despite modern influences, the region has preserved
                          much of its Tibetan Buddhist heritage and traditional
                          way of life.
                        </p>
                        <Link href="#">
                          <button class="custom-btn btn-8 btnstyle">
                            <span>Explore More...</span>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`box ${activeTab === 1 ? "show" : "hide"}`}
                  data-content="1"
                >
                  <div class="row">
                    <div class="col-md-6">
                      {" "}
                      <img className="lin" src={pasupati} alt="" />
                    </div>
                    <div class="col-md-6">
                      <div className="ll">
                        <h3>PASUPATINATH</h3>
                        <p>
                          Pashupatinath Temple, located in Kathmandu, Nepal, is
                          one of the holiest Hindu temples dedicated to Lord
                          Shiva. It is known for its beautiful pagoda-style
                          architecture and is a UNESCO World Heritage Site.
                          Situated on the banks of the sacred Bagmati River, the
                          temple is a major pilgrimage site, especially during
                          festivals like Maha Shivaratri.
                        </p>
                        <h3>HISTORY</h3>
                        <p>
                          Historically, Pashupatinath dates back to ancient
                          times, with the current structure believed to have
                          been built in the 5th century by King Prachanda Dev.
                          The temple has been a central religious site for
                          Hindus for centuries and remains an important cultural
                          and spiritual landmark.{" "}
                        </p>
                        <Link href="#">
                          <button class="custom-btn btn-8 btnstyle">
                            <span>Explore More...</span>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`box ${activeTab === 2 ? "show" : "hide"}`}
                  data-content="2"
                >
                  <div class="row">
                    <div class="col-md-6">
                      <img src={lumb} alt="" />
                    </div>
                    <div class="col-md-6">
                      {" "}
                      <div>
                        <h3>LUMBINI</h3>
                        <p>
                          Lumbini, located in the Rupandehi District of Nepal,
                          is a UNESCO World Heritage Site and the birthplace of
                          Siddhartha Gautama, who later became Gautama Buddha,
                          the founder of Buddhism. It is one of the most
                          important pilgrimage sites for Buddhists worldwide.
                          The site is home to the sacred Maya Devi Temple, which
                          marks the exact spot of Buddha's birth, and the Ashoka
                          Pillar, erected by Emperor Ashoka in the 3rd century
                          BC to commemorate his visit. Lumbini is surrounded by
                          peaceful monastic zones, meditation centers, and
                          gardens, attracting spiritual seekers and tourists
                          from around the globe.
                        </p>
                        <h3>HISTORY</h3>
                        <p>
                          Lumbini's history dates back to around 563 BC when
                          Queen Maya Devi gave birth to Siddhartha Gautama in a
                          garden while traveling to her parental home. Over
                          time, the site became a focal point of Buddhist
                          devotion, and numerous stupas and monasteries were
                          constructed. Emperor Ashoka's visit in the 3rd century
                          BC further enhanced its significance when he inscribed
                          his visit on the famous Ashoka Pillar. Rediscovered in
                          the 19th century, Lumbini has since been restored and
                          developed into an international pilgrimage and
                          heritage site.
                        </p>

                        <Link href="#">
                          <button class="custom-btn btn-8 btnstyle">
                            <span>Explore More...</span>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`box ${activeTab === 3 ? "show" : "hide"}`}
                  data-content="3"
                >
                  <div class="row">
                    <div class="col-md-6">
                      <img src={bouddha} alt="" />
                    </div>
                    <div class="col-md-6">
                      {" "}
                      <div>
                        <h3>Boudhanath Stupa</h3>
                        <p>
                          Boudhanath Stupa, located in Kathmandu, Nepal, is one
                          of the largest and most significant stupas in the
                          world, revered by Buddhists and a UNESCO World
                          Heritage Site. The massive, dome-shaped structure,
                          topped with a golden spire and the all-seeing eyes of
                          Buddha, symbolizes peace and enlightenment. The stupa
                          is an important pilgrimage site, especially for
                          Tibetan Buddhists, and is surrounded by monasteries,
                          shops, and prayer wheels, creating a spiritual
                          ambiance for devotees and visitors alike. It is a
                          major center of Tibetan culture in Nepal and attracts
                          spiritual seekers from around the world.
                        </p>
                        <h3>HISTORY</h3>
                        <p>
                          The origins of Boudhanath Stupa date back to the 5th
                          century AD, during the reign of the Licchavi dynasty.
                          According to legend, it was built by King Manadeva as
                          an act of devotion to Lord Buddha. The stupa became an
                          important center for Tibetan Buddhism, especially
                          after the influx of Tibetan refugees following the
                          1959 Chinese invasion of Tibet. Over centuries, it has
                          undergone several restorations, including significant
                          repairs after the 2015 earthquake, and continues to be
                          a major religious, cultural, and architectural
                          landmark in Nepal.
                        </p>
                        <Link href="#">
                          <button class="custom-btn btn-8 btnstyle">
                            <span>Explore More...</span>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </>
      )}
    </div>
  );
};

export default Home;
