import React from "react";
import {Link} from 'react-router-dom';
function Footer() {
  return (
    <div>
      <section className="section footer bg-dark text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4>Hotel Information</h4>
              <hr />
              <p className="text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
                quas, deleniti aliquam corporis optio qui doloribus recusandae
                quisquam quo facilis ut tempore animi molestias fugit, delectus
                doloremque quasi nesciunt enim.
              </p>
            </div>
            <div className="col-md-4">
                <h4>Quick Link</h4>
                <hr />
                <dir><Link to="/">Home</Link></dir>
                <dir><Link to="/profile">Profile</Link></dir>
                <dir> <Link to="/login">Login</Link></dir>
                <dir> <Link to="/about">About</Link></dir>
                <dir><Link to="/contact">Contact</Link></dir>
                
                
               
               
                
                
            </div>
            
            <div className="col-md-4">
                <h4>Contact Info</h4>
                <hr />
                <p className="text-white mb-1">AdarshNagar Nilmatha Cantt ,Lucknow India</p>
                <p className="text-white mb-1"> +91 8989*****82</p>
                <p className="text-white mb-1"> +91 8989*****83</p>
                <p className="text-white mb-1"> email@gmail.com</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
export default Footer;
