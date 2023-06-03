/*here we write rfc in this navbar file and all function written automatically*/
import PropTypes from 'prop-types'
import React from 'react'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mystyle1} bg-${props.mystyle1}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title} </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              {props.about}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Link
            </a>
          </li>
        </ul>
        
        
          <div className={`form-check form-switch text-${props.mystyle1==='dark'?'light':'dark'}`}>
  <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label"   htmlFor="flexSwitchCheckDefault">EnableDarkmode</label>
</div>
        
      </div>
    </div>
  </nav>
  )
}

Navbar.propType={
title : PropTypes.string.isRequired,//is required produce error if title
about : PropTypes.string            //not set and defaultprops not set
}

Navbar.defaultProps={
  title:'set title here',//if title and about is not set in app.js
  about:'set about here' //so this will automatically set title,about
}