

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
  const handleShow = () => setShow(true);
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
  errors["company"] = "Company is required";
}
if (!info.companySize) {
  
  formIsValid = false;
  errors["companySize"] = "Company Size is required";
}
    setError(errors);
    return formIsValid;
}
  const handleOnChange = (e) => {
    console.log(e.target)
    let { name, value } = e.target;
    setinfo((prevState) => ({
        ...prevState,
        [name]: value,
    }));
}

const save = () => {
  // 
  console.log("aaaa")
  if (validateForm()) {
    console.log("bbb")
      addLoader()
      var accountData1 = { firstName: info.firstName, lastName: info.lastName, email: info.email, company: info.company, companySize:info.companySize}
      axios
      .post("https://api-dev.bujeti.com/demo/request", accountData1, { headers: {
        authorization: "Bearer demo_f4924c56016b3bcbd680fc97a87d6cbb"
    }})
      .then((responseJson) => {
        console.log(responseJson)
        
        removeLoader()
        addSuccessMessage("Request Send successfully")
        handleClose()
       
        // resolve(responseJson);
      })
      .catch((error) => {
        console.log(error)
        addErrorMessage(error.message)
        removeLoader()
      });
      // ApiPost("accountandstatutory/addaccount_and_statutory", accountData1)
      //     .then(async (res) => {
      //         console.log("res", res);
      //         if (res.status == 200) {
      //             uploaddoc(res.data.data[0].id)
      //         }
      //     }).catch((err) => {
      //         console.log(err)
      //         removeLoader();
      //     });
  }
  // 
}
  return <div className='home w-100' >
    <section className="header-main ">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">

          <a className="navbar-brand">
            <img src={logo} className='img-fluid logo-icon'></img>
          </a>
          <div className='d-flex-main'> <span ><a className="header-title d-none d-md-block"  >Sign In</a></span><span><button className='btn-main' onClick={handleShow}>
            Try it today
          </button></span> </div>



        </div>
      </nav>
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
              <label  class="form-label">First Name</label>
              <input type="email" class="form-control" name="firstName"
                                value={info?.firstName} onChange={handleOnChange}  aria-describedby="emailHelp" placeholder='First Name'></input>
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
              <label  class="form-label">Last Name</label>
              <input type="email" class="form-control"  name="lastName"
                                value={info?.lastName} onChange={handleOnChange} aria-describedby="emailHelp" placeholder='Last Name'></input>
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
              <label  class="form-label">Work email</label>
              <input type="email" class="form-control"  name="email"
                                value={info?.email} onChange={handleOnChange} aria-describedby="emailHelp" placeholder='Enter work email address'></input>
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
              <label  class="form-label">Company</label>
              <input type="email" class="form-control"  name="company"
                                value={info?.company} onChange={handleOnChange} aria-describedby="emailHelp" placeholder='Enter company name'></input>
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
                                value={info?.companySize} onChange={handleOnChange}>
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
  </div>;
};

export default Header;


