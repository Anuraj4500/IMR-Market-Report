import React, { useState } from "react";
import logo from "../assets/Images/IMRLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="page-header row position-fixed">
       
        <div className="page-main-header col">
          <div className="header-left">
            <form className="form-inline search-full col" action="#" method="get">
              <div className="form-group w-100">
                <div className="Typeahead Typeahead--twitterUsers">
                  <div className="u-posRelative">
                    <input
                      className="demo-input Typeahead-input form-control-plaintext w-100"
                      type="text"
                      placeholder="Search Admiro .."
                      name="q"
                      title=""
                      autoFocus
                    />
                    <div className="spinner-border Typeahead-spinner" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                    <i className="close-search" data-feather="x"></i>
                  </div>
                  <div className="Typeahead-menu"></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </header>
      <aside className="page-sidebar">
      <div className="logo-wrapper d-flex align-items-center col-auto">
      <a href="index.html">
            <img
              className="light-logo"
              src={logo}
              alt="logo"
            />
          </a>
          
          {/* <a className="close-btn toggle-sidebar" href="#">
            <i className="fas fa-th-large"></i>
          </a> */}
         </div>
        <div className="left-arrow" id="left-arrow">
          <i data-feather="arrow-left"></i>
        </div>
        <div className="main-sidebar" id="main-sidebar">
          <ul className="sidebar-menu" id="simple-bar">
            <li className="sidebar-list">
              <a className="sidebar-link" href="#">
                <i className="fas fa-tachometer-alt"></i>
                <h6>Dashboards</h6>
                <span className="badge">3</span>
              </a>
            </li>
            <li className={`sidebar-list dropdown ${isOpen ? "show" : ""}`}>
              <a
                className="sidebar-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                onClick={toggleDropdown}
                aria-haspopup="true"
                aria-expanded={isOpen}
              >
                <i className="fas fa-blog"></i>
                <h6>Blog</h6>
              </a>
              <ul className={`sidebar-submenu dropdown-menu ${isOpen ? "show" : ""}`}
                aria-labelledby="navbarDropdown">
                <li><a href="blog.html">Blog Details</a></li>
                <li><a href="blog-single.html">Blog Single</a></li>
                <li><a href="add_post.html">Add Post</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="right-arrow" id="right-arrow">
          <i data-feather="arrow-right"></i>
        </div>
      </aside>
    </div>
  );
};

export default Navbar;
