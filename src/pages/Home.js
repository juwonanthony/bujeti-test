
import React, { useState } from 'react';
import Integerated from '../../src/image/fully-integrate-graphic.svg';
import MultiCurrence from '../../src/image/multi-currency.svg';
import FlexibleCash from '../../src/image/flexible-cash-graphic.svg';
import bujeti from '../../src/image/try-to-bujeti-graphic.png';
import bujetimobile from '../../src/image/try-to-bujeti-graphic-mobile.png';
import FooterGraphic from '../../src/image/footer-graphic.png';
import FooterLogo from '../../src/image/footer-logo.svg';
import twitter from '../../src/image/twitter.svg';
import instagram from '../../src/image/instagram-graphic.svg';
import linkdin from '../../src/image/linkdin-graphic.svg';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';
import Integearationbrand from '../../src/image/direction-brand.png';
import Integearationbrand1 from '../../src/image/direction-brand2.png';
import Integearationbrand2 from '../../src/image/direction-brand3.png';
import Integearationbrand3 from '../../src/image/direction-brand4.png';
import Integearationbrand4 from '../../src/image/direction-brand5.png';
import Integearationbrand5 from '../../src/image/direction-brand6.png';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useHistory } from 'react-router-dom';
import logo from '../../src/image/logo.svg';
// import './header.scss';
// import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addErrorMessage, addLoader, addSuccessMessage, removeLoader } from '../utils/loader';
const axios = require("axios").default;
const { API } = require('../config/API/api.config');

const Home = () => {
  const [show, setShow] = useState(false);
  const [info, setinfo] = useState({})
  const [errors, setError] = useState({});
  let phonenoReg = /^[0-9]/;
  const emailReg =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const handleClose = () => {
    setError({})
    setinfo({})
    setShow(false)
  }
  const handleShow = () => setShow(true);
  const History = useHistory();
  const [index, setIndex] = useState(0);
  const top20Settings = {
    // controlsContainer: '#controls',
    // prevButton: '.previous',
    // nextButton: '.next',
    // autoplayButton: '.auto',
    // controls: false,
    // items: 1,
    // loop: false,
    // nav: false,
    // mouseDrag: true,
    // gutter: 10,
    // responsiveClass: true,
    // preventScrollOnTouch: "force",
    // nested: "inner",
    // responsive: {
    //   0: {
    //     items: 1.1,
    //     nav: false,
    //   },
    //   600: {
    //     items: 2,
    //     nav: false,
    //   },
    //   1000: {
    //     items: 2.5,
    //     nav: false,
    //     loop: false,
    //   },
    // },
    lazyload: true,
    nav: true,
    mouseDrag: true,
    loop: true,
    items: 1,
    gutter: 5,
    responsive: {

      0: {
        items: 1.1,

      },
      600: {
        items: 2,

      },
      1000: {
        items: 2.5,
      }
    }

  };
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const validateForm = () => {
    let errors = {};
    let formIsValid = true;
    if (!info.firstName) {

      formIsValid = false;
      errors["firstName"] = "First Name is required";
    }
    if (!info.lastName) {

      formIsValid = false;
      errors["lastName"] = "Last Name is required";
    }
    if (!info.email) {

      formIsValid = false;
      errors["email"] = "Email is required";
    }
    if (!emailReg.test(info.email)) {
      formIsValid = false;
      errors["email"] = "Invalid Email";
    }
    if (!info.company) {

      formIsValid = false;
      errors["company"] = "Company is required";
    }
    if (!info.companySize) {

      formIsValid = false;
      errors["companySize"] = "Company Size is required";
    }
    setError(errors);
    return formIsValid;
  }
  const handleonChange = (e) => {
    console.log(e.target)
    let { name, value } = e.target;
    setinfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const save = () => {
    //
    if (validateForm()) {
      addLoader()
      const payload = { firstName: info.firstName, lastName: info.lastName, email: info.email, company: info.company, companySize: info.companySize }
      axios
        .post(`${API.apiUrl}/${API.endpoint}`, payload, {
          headers: {
            authorization: `Bearer ${API.token}`
          }
        })
        .then((responseJson) => {
          removeLoader()
          addSuccessMessage("Request set successfully");
          handleClose()
        })
        .catch((error) => {
          addErrorMessage(error.message)
          removeLoader()
        });
    }
    //
  }


  return <>

    <section className='banner'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-10'>
            <div className='sec-title'>
              Complete solution for your business expenses.
            </div>
            <div className='sec-pera'>
              Take control and supercharge your finance, empower your teams and track the pulse of your business with an end-to-end expense management platform tailored for African SMBs.
            </div>
            <div className='row mt-30'>
              <div className='col-auto'>
                <button className='btn-main' onClick={handleShow}>
                  Try it today
                </button>
              </div>
              <div className='col-auto'>
                <button className='btn-main btn-white' onClick={handleShow}>
                  Schedule demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='banner-graphic'>
    </section>
    <section className='sec-finance-platform'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-xl-8'>
            <div className='sec-title'>
              Finance platform built for every side of your business
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <div className='finance-platform-card'>
              <div className='card-title'>
                Budgeting
              </div>
              <div className='card-sub-tittle'>
                Expense Management
              </div>
              <div className='card-pera'>
                Total control over all business expenses. Boost finance teams by providing a powerful decision support tool.
              </div>
              <div className='card-graphic'></div>
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <div className='finance-platform-card'>
              <div className='card-title'>
                Smart spending
              </div>
              <div className='card-sub-tittle'>
                Corporate Cards
              </div>
              <div className='card-pera'>
                Empower your teams by giving a safe and secure access to company funds through virtual and physical cards.
              </div>
              <div className='card-graphic card-graphic-card'>

              </div>
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <div className='finance-platform-card'>
              <div className='card-title'>
                On the go
              </div>
              <div className='card-sub-tittle'>
                Team mobile app
              </div>
              <div className='card-pera'>
                Manage your budgets and track your transactions directly from your smatphone.
              </div>
              <div className='card-graphic card-graphic-over-view'></div>
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <div className='finance-platform-card'>
              <div className='card-title'>
                Budgeting
              </div>
              <div className='card-sub-tittle'>
                Expense Management
              </div>
              <div className='card-pera'>
                Total control over all business expenses. Boost finance teams by providing a powerful decision support tool.
              </div>
              <div className='card-graphics'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='sec-our-product'>
      <div className='container'>
        <div className='sec-our-product-box'>
          <div className='card-title text-center'>
            Coming soon
          </div>
          <div className='sec-sub-title text-center'>
            Our product roadmap
          </div>
          <div className='carousel-main'>
            <TinySlider settings={top20Settings} >

              <div key={0} style={{ position: "relative" }}>
                <div class="row">
                  <div class="col-12">
                    <div className="carousel-card">
                      <p className='card-title'>Integrations</p>
                      <h3 className="card-sub-title">Direct connection to your favourite accounting tools.
                      </h3>
                      <div className='row justify-content-between'>
                        <div className='col-auto'>
                          <img src={Integearationbrand} className='img-fluid card-icon'></img>
                        </div>
                        <div className='col-auto'>
                          <img src={Integearationbrand1} className='img-fluid card-icon'></img>
                        </div>
                        <div className='col-auto'>
                          <img src={Integearationbrand2} className='img-fluid card-icon'></img>
                        </div>
                      </div>
                      <div className='row justify-content-between mt-20'>
                        <div className='col-auto'>
                          <img src={Integearationbrand3} className='img-fluid card-icon'></img>
                        </div>
                        <div className='col-auto'>
                          <img src={Integearationbrand4} className='img-fluid card-icon'></img>
                        </div>
                        <div className='col-auto'>
                          <img src={Integearationbrand5} className='img-fluid card-icon'></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div key={0} style={{ position: "relative" }}>
                <div class="row">
                  <div class="col-12">
                    <div className="carousel-card">
                      <p className='card-title'>capital</p>
                      <h3 className="card-sub-title">Instant cash advance, better than any loan or overdraft.
                      </h3>
                      <div className='row justify-content-center'>
                        <div className='col-12'>
                          <div className='integeration-highlight'>
                            <div className='row align-items-end'>
                              <div className='col-auto'>
                                <div className='sec-title'> <span className='text-line'>N</span>824,380.00 </div>
                              </div>
                              <div className='col-auto'>
                                <div className='sec-pera'>Credit available </div>
                              </div>
                            </div>
                            <ProgressBar variant="success" now={40} />
                            <div className='sec-sub-pera'>
                              <span className='text-line'>N</span>675,620 of <span className='text-line'>1,500,000 spent</span>
                            </div>


                          </div>

                        </div>
                        <div className='col-11'>
                          <div className='monthly-repayment'>
                            <div className='row justify-content-between'>
                              <div className='col-auto'>
                                <div className='sec-sub-title'>
                                  Monthly Payment
                                </div>
                              </div>
                              <div className='col-auto'>
                                <div className='sec-sub-title sec-highlight'>
                                  Monthly Payment
                                </div>
                              </div>
                            </div>
                            <div className='sec-title'>
                              <span className='text-line'>N</span>175,220.00
                            </div>
                            <div className='due-date'>
                              Due on 13 July, 2022
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div key={0} style={{ position: "relative" }}>
                <div class="row">
                  <div class="col-12">
                    <div className="carousel-card">
                      <p className='card-title'>Invoicing</p>
                      <h3 className="card-sub-title">Digitise your invoices and pay them directly with Bujeti
                      </h3>
                      <div className='row justify-content-center'>
                        <div className='col-12'>
                          <div className='integeration-highlight'>
                            <div className='row align-items-center justify-content-between'>
                              <div className='col-8 col-md-8'>
                                <div className='row'>
                                  <div className='col-12'>
                                    <div className='sec-pera'>Invoice from Robotlabz</div>
                                  </div>
                                  <div className='col-auto'>
                                    <div className='sec-title mt-2 mb-2'> <span className='text-line'>N</span>24,380.00 </div>
                                  </div>
                                  <div className='sec-pera'>Due on 21 May 2022</div>
                                </div>
                              </div>
                              <div className='col-auto'>
                                <button className='btn-green'>
                                  Pay Now
                                </button>
                              </div>
                            </div>
                            <div className='line'></div>
                            <div className='row justify-content-between'>
                              <div className='col-auto'>
                                <div className='sec-pera'>Robert Server box</div>
                              </div>
                              <div className='col-auto'>
                                <div className='sec-pera'> <span className='text-line'>N</span>24,000.00</div>
                              </div>
                            </div>
                            <div className='row justify-content-between mt-10'>
                              <div className='col-auto'>
                                <div className='sec-pera'>Vat</div>
                              </div>
                              <div className='col-auto'>
                                <div className='sec-pera'> <span className='text-line'>N</span>500.00</div>
                              </div>
                            </div>
                            <div className='line'></div>
                            <div className='row justify-content-between'>
                              <div className='col-auto'>
                                <div className='sec-pera'>Total Due</div>
                              </div>
                              <div className='col-auto'>
                                <div className='sec-pera'> <span className='text-line'>N</span>24,500</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TinySlider>
          </div>
        </div>
      </div>
    </section>
    <section className='next-level-finance'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-xl-8'>
            <div className='sec-title'>
              Next level finance, tailored for African businesses.
            </div>
          </div>
        </div>
        <div className='row justify-content-center justify-content-md-between'>
          <div className='col-10 col-md-4'>
            <div className='row justify-content-center'>
              <div className='col-auto'>
                <img src={Integerated} className='img-fluid logo-icon'></img>
              </div>
            </div>
            <div className='sec-sub-title'>Fully integrated suites of  expense management tools</div>
          </div>
          <div className='col-10 col-md-4'>
            <div className='row justify-content-center'>
              <div className='col-auto'>
                <img src={MultiCurrence} className='img-fluid logo-icon'></img>
              </div>
            </div>
            <div className='sec-sub-title'>Multi-currency payment cards usable anywhere in the world.</div>
          </div>
          <div className='col-10 col-md-4'>
            <div className='row justify-content-center'>
              <div className='col-auto'>
                <img src={FlexibleCash} className='img-fluid logo-icon'></img>
              </div>
            </div>
            <div className='sec-sub-title'>Flexible cash advance to keep your business going.</div>
          </div>
        </div>
      </div>
    </section>
    <section className='sec-try-to-bujeti'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <div className='sec-title'>Want to try Bujeti?</div>
            <div className='sec-main'>
              Take control of your
              finances today.
            </div>
            <div className='sec-pera'>
              Join our exclusive first users or schedule a demo
              and find out how we can help your business.
            </div>
            <div className='row '>
              <div className='col-auto'>
                <button className='btn-main' onClick={handleShow}>
                  Try it today
                </button>
              </div>
              <div className='col-auto'>
                <button className='btn-main btn-white' onClick={handleShow}>
                  Schedule demo
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='sec-graphic'>
          <img src={bujeti} className='img-fluid d-none d-md-block'></img>
          <img src={bujetimobile} className='img-fluid d-block d-md-none'></img>
        </div>
      </div>
    </section>
    <section className='footer'>
      <div className='container'>
        <div className='row justify-content-between'>
          <div className='col-auto'>
            <img src={FooterLogo} className='img-fluid'></img>
          </div>
          <div className='col-auto'>
            <div className='icon d-block d-md-none '>
              <a><span className='ml-18'><img src={twitter} className='img-fluid'></img></span></a>
              <a> <span className='ml-18'><img src={linkdin} className='img-fluid'></img></span></a>
              <a><span className='ml-18'><img src={instagram} className='img-fluid'></img></span></a>
            </div>
          </div>
          <div className='col-12 col-md-auto'>
            <div className='copyright'>
              <span>© Bujeti Ltd. 2022,</span>  All Rights Reserved
              <div className='icon d-none d-md-block'>
                <a><span className='ml-18'><img src={twitter} className='img-fluid'></img></span></a>
                <a> <span className='ml-18'><img src={linkdin} className='img-fluid'></img></span></a>
                <a><span className='ml-18'><img src={instagram} className='img-fluid'></img></span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='sec-graphic'>
        <img src={FooterGraphic} className='img-fluid'></img>
      </div>
    </section>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header >
        <Modal.Title><span>Schedule a demo  <br></br></span>
          with our team today</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='row'>
          <div className='col-6 mb-2'>
            <div class="mb-1">
              <label class="form-label">First Name</label>
              <input type="email" class="form-control" name="firstName"
                value={info?.firstName} onChange={handleonChange} aria-describedby="emailHelp" placeholder='First Name'></input>
            </div>
            <span
              style={{
                color: "red",

                top: "2px",
                fontSize: "10px",
              }}
            >
              {errors["firstName"]}
            </span>
          </div>
          <div className='col-6 mb-2'>
            <div class="mb-1">
              <label class="form-label">Last Name</label>
              <input type="email" class="form-control" name="lastName"
                value={info?.lastName} onChange={handleonChange} aria-describedby="emailHelp" placeholder='Last Name'></input>
            </div>
            <span
              style={{
                color: "red",

                top: "2px",
                fontSize: "10px",
              }}
            >
              {errors["lastName"]}
            </span>
          </div>
          <div className='col-12 mb-2'>
            <div class="mb-1">
              <label class="form-label">Work email</label>
              <input type="email" class="form-control" name="email"
                value={info?.email} onChange={handleonChange} aria-describedby="emailHelp" placeholder='Enter work email address'></input>
            </div>
            <span
              style={{
                color: "red",

                top: "2px",
                fontSize: "10px",
              }}
            >
              {errors["email"]}
            </span>
          </div>
          <div className='col-12 mb-2'>
            <div class="mb-1">
              <label class="form-label">Company</label>
              <input type="email" class="form-control" name="company"
                value={info?.company} onChange={handleonChange} aria-describedby="emailHelp" placeholder='Enter company name'></input>
            </div>
            <span
              style={{
                color: "red",

                top: "2px",
                fontSize: "10px",
              }}
            >
              {errors["company"]}
            </span>
          </div>
          <div className='col-12 mb-2'>
            <div class="mb-1">
              <label for="Select" class="form-label">Disabled select menu</label>
              <select id="Select" class="form-select form-control" name="companySize"
                value={info?.companySize} onChange={handleonChange}>
                <option selected>Select Company Size</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="200+">200+</option>
              </select>
            </div>
            <span
              style={{
                color: "red",

                top: "2px",
                fontSize: "10px",
              }}
            >
              {errors["companySize"]}
            </span>
          </div>
          <div className='col-12 mb-2'>
            <button className='btn-main w-100 mt-3' onClick={save} >
              Book my demo
            </button>
          </div>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer> */}
    </Modal>

  </>;
};
export default Home;
