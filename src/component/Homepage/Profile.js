import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import profile1 from "../Image/A12.jpg";
import profile2 from "../Image/A13.jpg";
import profile3 from "../Image/owner.jpg";

const Profile = () => {

  let navigate=useNavigate();

  return (
    <div className="profile">

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
                <div className="card -shadow text-center">
                  <img
                    src={profile1}
                    className="w-100 border-bottom"
                    alt="profile"
                  />

                  <div className="card-body">
                    <h3>Receptnist Profile</h3>
                    <div className="underline"></div>

                    <p>
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi reiciendis quae qui.
                    </p>
                    <Link to="/receptionist" className="btn">
                      Go to profile
                    </Link>
                  </div>
                </div>
              </div>

              {/* this is manager profile card */}

              <div className="col-md-4">
                <div className="card -shadow text-center">
                  <img
                    src={profile2}
                    className="w-100 border-bottom"
                    alt="profile"
                  />

                  <div className="card-body">
                    <h3>Manager Profile</h3>
                    <div className="underline"></div>

                    <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consequatur totam veniam nemo.
                    </p>
                    <Link to="/manager" className="btn">
                      Go to profile
                    </Link>
                  </div>
                </div>
              </div>

              {/* this is owner profile card */}

              <div className="col-md-4">
                <div className="card -shadow text-center">
                  <img
                    src={profile3}
                    className="w-100 border-bottom"
                    alt="profile"
                  />

                  <div className="card-body">
                    <h3>Owner Profile</h3>
                    <div className="underline"></div>

                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim voluptates laborum eveniet!
                    </p>
                    <Link to="/owner" className="btn">
                      Go to profile
                    </Link>
                  </div>
                </div>
              </div>
              {/* ********************************************************** */}
            </div>
          </div>
        </section>

    {/* <div className="card mt-4">
      <div className='card-body'> 
      <h1>this is Profile page</h1>  
      <button className='btn btn-primary'>Owner Profile</button>
      <button className='btn btn-primary'
      onClick={()=> {
        navigate("/guest");
      }}>manager Profile</button>
      
      <button className='btn btn-primary'
      onClick={()=> {
        navigate("/reservation");
      }}>Receptnist Profile</button>
     </div>
         
         </div> */}

   </div>
  )
}

export default Profile
