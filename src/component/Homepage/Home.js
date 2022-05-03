import React from "react";

import Slider from "../Include/Slider";
import { Link } from "react-router-dom";
import profile1 from "../Image/A12.jpg";
import profile2 from "../Image/A13.jpg";
import profile3 from "../Image/owner.jpg";
import Footer from "../Include/Footer";



const Home = () => {
  return (
    <div>
      <Slider />
      <div className="">
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="main-heading">Our Hotel</h2>
                <div className="underline mx-auto"></div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Necessitatibus alias numquam, nam quibusdam suscipit nobis
                  aliquid quidem quod, possimus libero similique neque aperiam
                  est quas iure fugiat optio repudiandae commodi.
                </p>
                <Link to="/about" className="btn btn-warning shadow">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* this is profile section */}
        <section className="section border-top">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-4  text-center">
                <h2 className="main-heading">Profile</h2>
                <div className="underline mx-auto"></div>
              </div>

              {/* this is receptnist profile card */}

              <div className="col-md-4">
                <div className="card -shadow">
                  <img
                    src={profile1}
                    className="w-100 border-bottom"
                    alt="profile"
                  />

                  <div className="card-body">
                    <h3>Receptnist Profile</h3>
                    <div className="underline"></div>

                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Necessitatibus alias numquam, nam quibusdam suscipit nobis
                      aliquid quidem quod, possimus libero similique neque
                      aperiam est quas iure fugiat optio repudiandae commodi.
                    </p>
                    <Link to="/profile" className="btn btn-link">
                      Go to profile
                    </Link>
                  </div>
                </div>
              </div>

              {/* this is manager profile card */}

              <div className="col-md-4">
                <div className="card -shadow">
                  <img
                    src={profile2}
                    className="w-100 border-bottom"
                    alt="profile"
                  />

                  <div className="card-body">
                    <h3>Manager Profile</h3>
                    <div className="underline"></div>

                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Necessitatibus alias numquam, nam quibusdam suscipit nobis
                      aliquid quidem quod, possimus libero similique neque
                      aperiam est quas iure fugiat optio repudiandae commodi.
                    </p>
                    <Link to="/profile" className="btn btn-link">
                      Go to profile
                    </Link>
                  </div>
                </div>
              </div>

              {/* this is owner profile card */}

              <div className="col-md-4">
                <div className="card -shadow">
                  <img
                    src={profile3}
                    className="w-100 border-bottom"
                    alt="profile"
                  />

                  <div className="card-body">
                    <h3>Owner Profile</h3>
                    <div className="underline"></div>

                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Necessitatibus alias numquam, nam quibusdam suscipit nobis
                      aliquid quidem quod, possimus libero similique neque
                      aperiam est quas iure fugiat optio repudiandae commodi.
                    </p>
                    <Link to="/profile" className="btn btn-link">
                      Go to profile
                    </Link>
                  </div>
                </div>
              </div>
              {/* ********************************************************** */}
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
