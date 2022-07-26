import React, { useState } from "react";
import Integerated from "../../src/image/fully-integrate-graphic.svg";
import MultiCurrence from "../../src/image/multi-currency.svg";
import FlexibleCash from "../../src/image/flexible-cash-graphic.svg";
import bujeti from "../../src/image/try-to-bujeti-graphic.svg";
import bujetimobile from "../../src/image/try-to-bujeti-graphic-mobile.svg";
import FooterGraphic from "../../src/image/footer-graphic.png";
import FooterLogo from "../../src/image/footer-logo.svg";
import twitter from "../../src/image/twitter.svg";
import instagram from "../../src/image/instagram-graphic.svg";
import linkedin from "../../src/image/linkedin-graphic.svg";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import TinySlider from "tiny-slider-react";
import "tiny-slider/dist/tiny-slider.css";
import Integearationbrand from "../../src/image/direction-brand.png";
import Integearationbrand1 from "../../src/image/direction-brand2.png";
import Integearationbrand2 from "../../src/image/direction-brand3.png";
import Integearationbrand3 from "../../src/image/direction-brand4.png";
import Integearationbrand4 from "../../src/image/direction-brand5.png";
import Integearationbrand5 from "../../src/image/direction-brand6.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useHistory } from "react-router-dom";
import logo from "../../src/image/logo.svg";
// import './header.scss';
// import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import { addErrorMessage, addLoader, addSuccessMessage, removeLoader } from "../utils/loader";
import { API } from "../config/API/api.config";
import useAnalyticsEventTracker from "../analyticsTracker";
const axios = require("axios").default;

const Home = () => {
  const [show, setShow] = useState(false);
  const [ask, setAsk] = useState(2);
  const [info, setInfo] = useState({});
  const [errors, setError] = useState({});
  let phonenoReg = /^[0-9]/;
  const emailReg =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const handleClose = () => {
    setError({});
    setInfo({});
    setShow(false);
  };
  const handleShow = (ask) => {
    setAsk(ask);
    setShow(true);
  };
  const History = useHistory();
  const [index, setIndex] = useState(0);
  const top20Settings = {
    autoWith: true,
    lazyload: true,
    nav: true,
    mouseDrag: true,
    loop: true,
    items: 1,
    gutter: 20,
    responsive: {
      0: {
        items: 1.2,
      },
      300: {
        items: 1.2,
      },
      600: {
        items: 2,
      },
      900: {
        items: 3.5,
      },
    },
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
      errors["company"] = "Please enter your company name";
    }
    if (!info.companySize) {
      formIsValid = false;
      errors["companySize"] = "Please enter your company size";
    }
    if (!info.website) {
      formIsValid = false;
      errors["website"] = "Please enter your website URL";
    }
    if (ask === 1 && !info.position) {
      formIsValid = false;
      errors["position"] = "Kindly tell us your position at the company";
    }
    setError(errors);
    return formIsValid;
  };
  const handleOnChange = (e) => {
    let { name, value } = e.target;
    setInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const save = () => {
    addLoader();
    const payload = {
      firstName: info.firstName,
      lastName: info.lastName,
      email: info.email,
      company: info.company,
      website: info.website,
      companySize: info.companySize,
      ...(info.position && { position: info.position }),
    };
    axios
      .post(API.apiUrl, payload, {
        headers: {
          authorization: `Bearer ${API.token}`,
        },
      })
      .then((responseJson) => {
        removeLoader();
        addSuccessMessage("Request Send successfully");
        handleClose();
      })
      .catch((error) => {
        addErrorMessage(error.message);
        removeLoader();
      });
  };

  const tracker = useAnalyticsEventTracker("Hero");

  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-12">
              <div className="sec-title">
                Take control of your
                <br />
                finances today.
              </div>
              <div className="sec-description">
                We save you time and money on expenses, reimbursements, bank payments, invoices, budgeting and so much
                more.
              </div>
              <div className="row mt-30">
                <div className="col-auto">
                  <button
                    className="btn-main"
                    onClick={() => {
                      tracker("try-out");
                      handleShow(1);
                    }}
                  >
                    Try it today
                  </button>
                </div>
                <div className="col-auto">
                  <button
                    className="btn-main btn-white"
                    onClick={() => {
                      tracker("demo");
                      handleShow(2);
                    }}
                  >
                    Schedule demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="banner-graphic"></section>
      <section className="sec-our-product">
        <div className="container">
          <div className="sec-our-product-box">
            <div className="sec-title">
              Why your business{" "}
              <p>
                needs <span className="orange">Bujeti</span>
              </p>
            </div>
            <div className="carousel-main">
              <TinySlider settings={top20Settings}>
                <div key={0} style={{ position: "relative" }}>
                  <div className="row">
                    <div className="col-12">
                      <div className="carousel-card">
                        <h3 className="card-sub-title">No more cumbersome expenses tracking</h3>
                        <div>
                          Automated and streamline your expenses management processes. Cut out redundant administrative
                          tasks that distract your employees from their core business.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div key={1} style={{ position: "relative" }}>
                  <div className="row">
                    <div className="col-12">
                      <div className="carousel-card">
                        {/*<p className='card-title'>capital</p>*/}
                        <h3 className="card-sub-title">Easy-to-use and transparent reimbursement processes</h3>
                        <div>
                          Stop filling out spreadsheets, Google forms and chasing receipts. Receive and approve
                          reimbursement online or from your mobile phone.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div key={3} style={{ position: "relative" }}>
                  <div className="row">
                    <div className="col-12">
                      <div className="carousel-card">
                        {/*<p className='card-title'>Invoicing</p>*/}
                        <h3 className="card-sub-title">Say goodbye to accounting errors and fraud</h3>
                        <div>
                          Define your spending policy and enforce it with automated spending limits and expense
                          validation processes. Nothing will fall through the cracks.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div key={4} style={{ position: "relative" }}>
                  <div className="row">
                    <div className="col-12">
                      <div className="carousel-card">
                        <h3 className="card-sub-title">Forget hazardous and risky cash management</h3>
                        <div>
                          Leverage accurate, real-time data on the state of your expenses. Make informed decisions based
                          on a sharp vision of your finances.
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
      <section className="sec-finance-platform">
        <div className="container">
          <div className="row">
            <div className="col-12 col-xl-8">
              <div className="sec-title">
                Your finances at your fingertips
                <br />
                everywhere you go
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-6">
              <div className="finance-platform-card">
                <div className="card-title">Quick & Efficient</div>
                <div className="card-sub-tittle">Reimbursement Request</div>
                <div className="card-pera">
                  Reimburse out of pocket spending in a few clicks. Employees snap their receipt and submit the request.
                  You simply approve or decline.
                </div>
                <div className="reimbursement-graphic" />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="finance-platform-card">
                <div className="card-title">Expense Management</div>
                <div className="card-sub-tittle">Strategic Budgeting</div>
                <div className="card-pera">
                  Streamline your cash management with budget forecasts. Allocate funds to your different departments
                  and projects and track how they are spent in real time.
                </div>
                <div className="card-graphic" />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="finance-platform-card">
                <div className="card-title">Unified payments</div>
                <div className="card-sub-tittle">Bank Transfer Payment</div>
                <div className="card-pera">
                  Pay instantly by bank transfer directly from your dashboard. Categorize your payments by budget and
                  industry.
                </div>
                <div className="payment-graphic" />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="finance-platform-card">
                <div className="card-title">Smart spending</div>
                <div className="card-sub-tittle">Corporate Cards</div>
                <div className="card-pera">
                  Empower your teams by giving a safe and secure access to company funds through virtual and physical
                  cards. Generate as many virtual cards as your teams need.
                </div>
                <div className="card-graphic card-graphic-card"></div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="finance-platform-card">
                <div className="card-title">On the go</div>
                <div className="card-sub-tittle">Team mobile app</div>
                <div className="card-pera">
                  Manage your budgets and track your transactions directly from your smartphone. Pay and manage your
                  teams and expenses on-the-go.
                </div>
                <div className="card-graphic card-graphic-over-view" />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="finance-platform-card">
                <div className="card-title">Business Intelligence</div>
                <div className="card-sub-tittle">Reporting & Insights</div>
                <div className="card-pera">
                  Leverage a powerful decision support tool. Keep an eye on all your expenses in real time and generate
                  periodic reports to take the pulse of your business.
                </div>
                <div className="card-graphics" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="next-level-finance">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-xl-8">
              <div className="sec-title">Next level finance, tailored for African businesses.</div>
            </div>
          </div>
          <div className="row justify-content-center justify-content-md-between">
            <div className="col-10 col-md-4">
              <div className="row justify-content-center">
                <div className="col-auto">
                  <img src={Integerated} className="img-fluid logo-icon" />
                </div>
              </div>
              <div className="sec-sub-title">Fully integrated suites of expense management tools</div>
            </div>
            <div className="col-10 col-md-4">
              <div className="row justify-content-center">
                <div className="col-auto">
                  <img src={MultiCurrence} className="img-fluid logo-icon" />
                </div>
              </div>
              <div className="sec-sub-title">Multi-currency payment cards usable anywhere in the world.</div>
            </div>
            <div className="col-10 col-md-4">
              <div className="row justify-content-center">
                <div className="col-auto">
                  <img src={FlexibleCash} className="img-fluid logo-icon" />
                </div>
              </div>
              <div className="sec-sub-title">Flexible cash advance to keep your business going.</div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-try-to-bujeti">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="sec-title">Want to try Bujeti?</div>
              <div className="sec-main">Easy to use solution for your business expenses.</div>
              <div className="sec-description">
                Join our exclusive first users or schedule a demo and find out how we can help your business.
              </div>
              <div className="row ">
                <div className="col-auto">
                  <button className="btn-main" onClick={handleShow}>
                    Try it today
                  </button>
                </div>
                <div className="col-auto">
                  <button className="btn-main btn-white" onClick={handleShow}>
                    Schedule demo
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="sec-graphic">
            <img src={bujeti} className="img-fluid d-none d-md-block" />
            <img src={bujetimobile} className="img-fluid d-block d-md-none" />
          </div>
        </div>
      </section>
      <section className="footer">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-auto">
              <img src={FooterLogo} className="img-fluid" />
              <div className="copyright">
                <span>© Bujeti Ltd. 2022,</span> All Rights Reserved
              </div>
            </div>
            <div className="col-auto">
              <div className="icon d-block d-md-none ">
                <a>
                  <span className="ml-18">
                    <img src={twitter} className="img-fluid" />
                  </span>
                </a>
                <a>
                  {" "}
                  <span className="ml-18">
                    <img src={linkedin} className="img-fluid" />
                  </span>
                </a>
                <a>
                  <span className="ml-18">
                    <img src={instagram} className="img-fluid" />
                  </span>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-auto">
              <div className="contact">
                <span onClick={() => tracker("contact-us")}>
                  <a href="mailto:support@bujeti.com" target="_blank" rel="noreferrer">
                    Contact us &nbsp; &nbsp; •
                  </a>
                </span>
                <div className="icon d-none d-md-block" onClick={() => tracker("social-media")}>
                  <a href="https://www.linkedin.com/company/bujeti">
                    <span className="ml-18">
                      <img src={linkedin} className="img-fluid" alt={"Linkedin"} />
                    </span>
                  </a>
                  <a href="https://twitter.com/bujetiHQ">
                    <span className="ml-18">
                      <img src={twitter} className="img-fluid" alt={"Twitter"} />
                    </span>
                  </a>
                  <a href="https://instagram.com/bujetihq" target="_blank" rel="noreferrer">
                    <span className="ml-18">
                      <img src={instagram} className="img-fluid" alt={"Instagram"} />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sec-graphic">
          <img src={FooterGraphic} className="img-fluid" />
        </div>
      </section>

      <Modal show={show} onHide={handleClose} dialogClassName="b-rad-dot-8 ">
        <Modal.Header>
          <Modal.Title>
            <span>
              {ask === 2 ? "Schedule a demo" : "Want to try it today?"} <br />
            </span>
            {ask === 2 ? "with our team today" : "tell us about yourself"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-6 mb-2">
              <div className="mb-1">
                <label className="form-label">First Name</label>
                <input
                  type="email"
                  className="form-control"
                  name="firstName"
                  value={info?.firstName}
                  onChange={handleOnChange}
                  aria-describedby="emailHelp"
                  placeholder="Your first name"
                />
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
            <div className="col-6 mb-2">
              <div className="mb-1">
                <label className="form-label">Last Name</label>
                <input
                  type="email"
                  className="form-control"
                  name="lastName"
                  value={info?.lastName}
                  onChange={handleOnChange}
                  aria-describedby="emailHelp"
                  placeholder="Your last name"
                />
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
            <div className="col-12 mb-2">
              <div className="mb-1">
                <label className="form-label">Work email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={info?.email}
                  onChange={handleOnChange}
                  aria-describedby="emailHelp"
                  placeholder="Enter your work email"
                />
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
            <div className="col-12 mb-2">
              <div className="mb-1">
                <label className="form-label">Company</label>
                <input
                  type="email"
                  className="form-control"
                  name="company"
                  value={info?.company}
                  onChange={handleOnChange}
                  aria-describedby="emailHelp"
                  placeholder="Enter your company's name"
                />
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
            <div className="col-12 mb-2">
              <div className="mb-1">
                <label className="form-label">Company website</label>
                <input
                  type="email"
                  className="form-control"
                  name="website"
                  value={info?.website}
                  onChange={handleOnChange}
                  aria-describedby="emailHelp"
                  placeholder="Enter your company's website"
                />
              </div>
              <span
                style={{
                  color: "red",

                  top: "2px",
                  fontSize: "10px",
                }}
              >
                {errors["website"]}
              </span>
            </div>
            <div className="col-12 mb-2">
              <div className="row">
                {ask === 1 ? (
                  <div className="col-6">
                    <div className="mb-1">
                      <label htmlFor="position" className="form-label">
                        Your position
                      </label>
                      <select
                        id="position"
                        className="form-select form-control"
                        name="position"
                        value={info?.position}
                        onChange={handleOnChange}
                      >
                        <option>Choose your position at the company</option>
                        <option value="ceo-coo">CEO/COO</option>
                        <option value="cfo-finance-team">CFO/Finance team</option>
                        <option value="hr">HR</option>
                        <option value="management">Upper management</option>
                        <option value="employee">Employee</option>
                      </select>
                    </div>
                    <span
                      style={{
                        color: "red",

                        top: "2px",
                        fontSize: "10px",
                      }}
                    >
                      {errors["position"]}
                    </span>
                  </div>
                ) : null}
                <div className={ask === 1 ? "col-6" : "col-12"}>
                  <div className="mb-1">
                    <label htmlFor="Select" className="form-label">
                      Company size
                    </label>
                    <select
                      id="Select"
                      className="form-select form-control"
                      name="companySize"
                      value={info?.companySize}
                      onChange={handleOnChange}
                    >
                      <option>Choose your company size</option>
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
              </div>
            </div>
            <div className="col-12 mb-2">
              <button
                className="btn-main w-100 mt-3"
                onClick={() => {
                  if (validateForm()) {
                    save();
                    tracker("submit-form");
                  }
                }}
              >
                {ask === 2 ? "Book my demo" : "Request access"}
              </button>
              <button
                className="close-btn w-100 mt-3 d-sm-block d-md-none"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default Home;
