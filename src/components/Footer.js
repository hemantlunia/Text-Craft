import React from 'react'

export default function Footer() {
  return (
   <>
   
   <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Contact Me :-</h3>
            <p>Email: hk3910190@gmail.com</p>
            <p>Mobile No : +91-8769884353</p>
          </div>
          <div className="col-md-4">
            <h3>Links</h3>
            <ul className="list-unstyled">
              <li>
              <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              
            </ul>
          </div>
          <div className="col-md-4">
            <h3>🔗 Follow Me On </h3>
            <a href="https://x.com/Hemant21690502?t=kBvtN-F6c1jJbt99JtjQ8A&s=09" className="text-white me-2">
              <i className="fab fa-twitter">Twitter</i>
            </a>
            <a href="https://www.facebook.com/kumarhemant.hfhff" className="text-white me-2">
              <i className="fab fa-facebook">Facebook</i>
            </a>
            <a href="https://www.linkedin.com/in/hemant-kumar-7794a11aa" className="text-white">
              <i className="fab fa-linkedin">Linkedin</i>
            </a>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-center">
          <p className="mb-0">📅  © 2024 textCraft . All rights reserved.</p>
          <p>
            <small>
            🌐 Web Designed by <a href="https://www.linkedin.com/in/hemant-kumar-7794a11aa">Hemant Kumar</a>
            </small>
          </p>
        </div>
      </div>
    </footer>
   
   </>
  )
}
