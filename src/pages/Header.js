

import { Col, Row, Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, Dropdown, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faEnvelope, faSearch, faMessages, faComment } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import logo from '../../src/image/logo.svg';
import './header.scss';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import Home from './Home';
import { addErrorMessage, addLoader, addSuccessMessage, removeLoader } from '../utils/loader';
import {API} from "../config/API/api.config";
import useAnalyticsEventTracker from "../analyticsTracker";
const axios = require("axios").default;
const Header = () => {
  const [show, setShow] = useState(false);
  const [info, setinfo] = useState({})
  const [errors, setError] = useState({});
  let phonenoReg = /^[0-9]/;
  const emailReg =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const handleClose = () =>{ setError({})
  setinfo({})
  setShow(false)
}
  const handleShow = () => {
      setShow(true);
      useAnalyticsEventTracker('Header')('try-out');
  }
  const History = useHistory();
  const handleLogout = () => {
    localStorage.clear()
    History.push("/home");
    window.location.reload()
  }
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
    if (!info.website) {
      formIsValid = false;
      errors["website"] = "Please enter your company website";
    }
    if (!info.companySize) {
      formIsValid = false;
      errors["companySize"] = "Please enter your company size";
    }
      if (!info.position) {
          formIsValid = false;
          errors["position"] = "Kindly tell us your position at the company";
      }
    setError(errors);
    return formIsValid;
}
  const handleOnChange = (e) => {
    let { name, value } = e.target;
    setinfo((prevState) => ({
        ...prevState,
        [name]: value,
    }));
}

const save = () => {
  //
    useAnalyticsEventTracker('Header')('submit-form');
  if (validateForm()) {
      addLoader()
      const payload = {
          firstName: info.firstName,
          lastName: info.lastName,
          email: info.email,
          company: info.company,
          website: info.website,
          companySize: info.companySize,
          ...(info.position && { position: info.position })
      };
      axios
      .post(API.apiUrl, payload, { headers: {
        authorization: `Bearer ${API.token}`
    }})
      .then((responseJson) => {
        removeLoader()
        addSuccessMessage("Request sent successfully")
        handleClose();
        useAnalyticsEventTracker('Header')('successful-submission');
      })
      .catch((error) => {
        addErrorMessage(error.message)
        removeLoader();
          useAnalyticsEventTracker('Header')('failed-submission');
      });
  }
}
  return <div className='home w-100' >
    <section className="header-main ">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">

          <a className="navbar-brand">
            <img src={logo} className='img-fluid logo-icon'/>
          </a>
          <div className='d-flex-main'>
{/*              <span ><a className="header-title d-md-block" href={API.dashboardUrl} >Sign In</a>
              </span>*/}
              <span className="try-it-btn"><button className='btn-main' onClick={handleShow}>
            Try it today
          </button></span> </div>



        </div>
      </nav>
    </section>
      <Modal show={show} onHide={handleClose} dialogClassName='b-rad-dot-8'>
          <Modal.Header >
              <Modal.Title><span>{"Want to try it today?"} <br /></span>
                  {"tell us about yourself"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div className='row'>
                  <div className='col-6 mb-2'>
                      <div className="mb-1">
                          <label className="form-label">First Name</label>
                          <input type="email" className="form-control" name="firstName"
                                 value={info?.firstName} onChange={handleOnChange} aria-describedby="emailHelp" placeholder='Your first name' />
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
                      <div className="mb-1">
                          <label className="form-label">Last Name</label>
                          <input type="email" className="form-control" name="lastName"
                                 value={info?.lastName} onChange={handleOnChange} aria-describedby="emailHelp" placeholder='Your last name' />
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
                      <div className="mb-1">
                          <label className="form-label">Work email</label>
                          <input type="email" className="form-control" name="email"
                                 value={info?.email} onChange={handleOnChange} aria-describedby="emailHelp" placeholder='Enter your work email' />
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
                      <div className="mb-1">
                          <label className="form-label">Company</label>
                          <input type="email" className="form-control" name="company"
                                 value={info?.company} onChange={handleOnChange} aria-describedby="emailHelp" placeholder="Enter your company's name" />
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
                      <div className="mb-1">
                          <label className="form-label">Company website</label>
                          <input type="email" className="form-control" name="website"
                                 value={info?.website} onChange={handleOnChange} aria-describedby="emailHelp" placeholder="Enter your company's website" />
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
                      <div className="row">

                          <div className='col-6'>
                              <div className="mb-1">
                                  <label htmlFor="position" className="form-label">Your position</label>
                                  <select id="position" className="form-select form-control" name="position"
                                          value={info?.position} onChange={handleOnChange}>
                                      <option >Choose your position at the company</option>
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
                  {errors["companySize"]}
                </span>
                          </div>
                          <div className={"col-6"}>
                              <div className="mb-1">
                                  <label htmlFor="Select" className="form-label">Company size</label>
                                  <select id="Select" className="form-select form-control" name="companySize"
                                          value={info?.companySize} onChange={handleOnChange}>
                                      <option >Choose your company size</option>
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
                  <div className='col-12 mb-2'>
                      <button className='btn-main w-100 mt-3' onClick={save} >
                          {"Request access"}
                      </button>
                  </div>
              </div>
          </Modal.Body>
      </Modal>

   {/* <Modal show={show} onHide={handleClose}>
      <Modal.Header >
        <Modal.Title><span>Schedule a demo  <br/></span>
          with our team today</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='row'>
          <div className='col-6 mb-2'>
            <div className="mb-1">
              <label  className="form-label">First Name</label>
              <input type="email" className="form-control" name="firstName"
                                value={info?.firstName}
                     onChange={handleOnChange}  aria-describedby="emailHelp"
                     placeholder='Your first Name'/>
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
            <div className="mb-1">
              <label  className="form-label">Last Name</label>
              <input type="email"
                     className="form-control"
                     name="lastName"
                     value={info?.lastName}
                     onChange={handleOnChange} aria-describedby="emailHelp"
                     placeholder='Your last Name'/>
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
            <div className="mb-1">
              <label  className="form-label">Work email</label>
              <input type="email" className="form-control"  name="email"
                                value={info?.email}
                     onChange={handleOnChange} aria-describedby="emailHelp"
                     placeholder='Enter your work email'/>
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
            <div className="mb-1">
              <label  className="form-label">Company</label>
              <input type="email" className="form-control"  name="company"
    value={info?.company} onChange={handleOnChange} aria-describedby="emailHelp" placeholder='Enter your company name'/>
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
                <div className="mb-1">
                    <label className="form-label">Company website</label>
                    <input type="email" className="form-control" name="website"
                           value={info?.website} onChange={handleOnChange} aria-describedby="emailHelp" placeholder="Enter your company's website"/>
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
                <div className="mb-1">
                    <label htmlFor="position" className="form-label">Your position</label>
                    <select id="position" className="form-select form-control" name="position"
                            value={info?.position} onChange={handleOnChange}>
                        <option selected>Choose your position at the company</option>
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
              {errors["companySize"]}
            </span>
            </div>
            <div className='col-12 mb-2'>
            <div className="mb-1">
              <label for="Select" className="form-label">Company size</label>
              <select id="Select" className="form-select form-control" name="companySize"
                                value={info?.companySize} onChange={handleOnChange}>
                                  <option selected>Select your company size</option>
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
                Request access
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>*/}
  </div>;
};

export default Header;


