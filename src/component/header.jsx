import React from 'react'
import './header.scss';


const Header = () => {
    return (
        <section className="header-main ">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <a className="navbar-brand" href="Index.html">
                        <img src={logo} className='img-fluid logo-icon'></img>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul id="myDIV" className="navbar-nav mx-auto custom-navbar">

                            <li className="mega-drop-down nav-item d-block d-md-none"><a className="nav-link active" >Home
                            </a>
                                <div className="animated fadeIn mega-menu">
                                    <div className="container">
                                        <div className="mega-menu-wrap  ">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="services-title-menu">
                                                        <h6 className=" pt-4">The Financial Times Names ScienceSoft USA
                                                            corporation among Americas’ Fastest Growing Companies 2022</h6>
                                                        <div className="orange"></div>
                                                        <p className="pb-3 pt-3">
                                                            In their rating, the Financial Times has celebrated 500
                                                            companies with the strongest revenue growth.</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="row">
                                                        <div className="col-12 col-md-3">
                                                            <ul className="stander">
                                                                <h6>Company</h6>
                                                                <div className="mb-3 orange"></div>
                                                                <li><a >Home</a></li>
                                                                <li><a >About Company</a></li>
                                                                <li><a >Meet Our Team</a></li>
                                                                <li><a >Clients</a></li>
                                                                <li><a >Terms of Use</a></li>
                                                                <li><a >Prviacy Policy</a></li>
                                                                <li><a >Locations</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-12 col-md-3">
                                                            <ul className="stander">
                                                                <h6>Recognition</h6>
                                                                <div className="mb-3 orange"></div>
                                                                <li><a >Testimonials</a></li>
                                                                <li><a >Awards</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-12 col-md-3">
                                                            <ul className="stander">
                                                                <h6>Join US</h6>
                                                                <div className="mb-3 orange"></div>
                                                                <li><a >Careers</a></li>
                                                                <li><a >Become Affilicate</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="mega-drop-down nav-item d-none d-md-block active"><a className="nav-link "
                            >Home
                            </a>
                                <div className="animated fadeIn mega-menu">
                                    <div className="container">
                                        <div className="mega-menu-wrap  ">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="services-title-menu">
                                                        <h6 className=" pt-4">The Financial Times Names ScienceSoft USA
                                                            corporation among Americas’ Fastest Growing Companies 2022</h6>
                                                        <div className="orange"></div>
                                                        <p className="pb-3 pt-3">
                                                            In their rating, the Financial Times has celebrated 500
                                                            companies with the strongest revenue growth.</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="row">
                                                        <div className="col-3">
                                                            <ul className="stander">
                                                                <h6>Company</h6>
                                                                <div className="mb-3 orange"></div>
                                                                <li><a href="">About Company</a></li>
                                                                <li><a href="">Meet Our Team</a></li>
                                                                <li><a >Clients</a></li>
                                                                <li><a >Terms of Use</a></li>
                                                                <li><a >Prviacy Policy</a></li>
                                                                <li><a >Locations</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-3">
                                                            <ul className="stander">
                                                                <h6>Recognition</h6>
                                                                <div className="mb-3 orange"></div>
                                                                <li><a >Testimonials</a></li>
                                                                <li><a >Awards</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-3">
                                                            <ul className="stander">
                                                                <h6>Join US</h6>
                                                                <div className="mb-3 orange"></div>
                                                                <li><a >Careers</a></li>
                                                                <li><a >Become Affilicate</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="mega-drop-down nav-item "><a className="nav-link" >Service </a>
                                <div className="animated fadeIn mega-menu">
                                    <div className="container">
                                        <div className="mega-menu-wrap  ">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="services-title-menu">
                                                        <h6>Service</h6>
                                                        <div className="orange"></div>
                                                        <p className=" pt-4">Our service portfolio covers an entire software
                                                            development life cycle and meets varied business needs.</p>
                                                        <h4 className="pb-3">Can't find what you need?</h4>
                                                        <button type="button" className="btn btn-service ">ASK UK</button>
                                                    </div>
                                                </div>
                                                <div className="col-md-8">

                                                    <div className="row">
                                                        <div className="col-12 col-md-3">
                                                            <ul className="stander">
                                                                <li><a >Software
                                                                    development</a>
                                                                </li>
                                                                <li><a >Testing & QA</a>
                                                                </li>
                                                                <li><a >Application
                                                                    Services</a></li>
                                                                <li><a >Ui / Ux Service</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-12 col-md-3">
                                                            <ul className="stander">
                                                                <li><a >IT Infrastructure
                                                                    Services</a></li>
                                                                <li><a >Managed IT
                                                                    Services</a></li>
                                                                <li><a >IT Outsourcing
                                                                    Services</a></li>
                                                                <li><a >IT Support Services</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="mega-drop-down nav-item"><a className="nav-link" >Technology</a>
                                <div className="animated fadeIn mega-menu">
                                    <div className="container">
                                        <div className="mega-menu-wrap  ">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="services-title-menu">
                                                        <h6>Technologies</h6>
                                                        <div className="orange"></div>
                                                        <p className=" pt-4">Our expertise spans all major technologies and
                                                            platforms, and advances to innovative technology trends.</p>
                                                        <h4 className="pb-3">Can't find what you need?</h4>
                                                        <button type="button" className="btn btn-service ">ASK UK</button>
                                                    </div>
                                                </div>
                                                <div className="col-md-8">

                                                    <div className="row">
                                                        <div className="col-12 col-md-3">
                                                            <ul className="stander">
                                                                <h6>Programming</h6>
                                                                <div className="mb-3 orange"></div>
                                                                <li><a >Java</a></li>
                                                                <li><a >.NET</a></li>
                                                                <li><a >PHP</a></li>
                                                                <li><a >C++</a></li>
                                                                <li><a >Node.js</a></li>
                                                                <li><a >JavaScript</a></li>
                                                                <li><a >React Native</a></li>

                                                            </ul>
                                                        </div>
                                                        <div className="col-12 col-md-3">
                                                            <ul className="stander">
                                                                <h6>Trending</h6>
                                                                <div className="mb-3 orange"></div>
                                                                <li><a >Internet of Things</a></li>
                                                                <li><a >Big Data</a></li>
                                                                <li><a >Data Science</a></li>
                                                                <li><a >Computer Vision</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-12 col-md-3">
                                                            <ul className="stander">
                                                                <h6>Platforms</h6>
                                                                <div className="mb-3 orange"></div>
                                                                <li><a >Magento</a></li>
                                                                <li><a >ServiceNow</a></li>
                                                                <li><a >Salesforce</a></li>
                                                                <li><a >Pimcore</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >Career</a>
                            </li>

                        </ul>
                        <a className="contact-btn" >Contact Us</a>
                    </div>
                </div>
            </nav>
        </section>

    )
}

export default Header