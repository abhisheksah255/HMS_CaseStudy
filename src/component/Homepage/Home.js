import React from "react";

import Slider from "../Include/Slider";
import { Link } from "react-router-dom";
import profile1 from "../Image/A12.jpg";
import profile2 from "../Image/A13.jpg";
import profile3 from "../Image/owner.jpg";
import Footer from "../Include/Footer";
import RoomImg from './OurRooms'


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
                  Customers want to be treated like human beings. For that to
                  happen, they need to feel that they're being served by human
                  beings. When finishing your About page, describe who you are
                  as a person or a team, and what your personal values are.
                  What's your company culture like? What bigger picture in life
                  drives your business? Keep in mind a secondary audience of
                  your company's About page consists of your future employees.
                  This is another reason describing your personal values is a
                  good idea — the key to your job candidates' hearts is to show
                  them you have one too.
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

                    <p>This is Receptionist Profile</p>
                    <Link to="/receptionist" className="btn btn-link">
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
                    <div className="underline">
                      
                    </div>

                    <p>This is the Manager Profile</p>
                    <Link to="/manager" className="btn btn-link">
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

                    <p>This is owner profile</p>
                    <Link to="/owner" className="btn btn-link">
                      Go to profile
                    </Link>
                  </div>
                </div>
              </div>
              {/* ********************************************************** */}
            </div>
          </div>
        </section>
      <RoomImg/>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
