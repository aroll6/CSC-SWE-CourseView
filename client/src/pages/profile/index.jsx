import React from 'react';
import './profile.css';


export const Profile = () => {
    return(
    <div className='profile'>
      {/* Sidenav */}
      <div className="sidenav">
        <div className="profile">
          <img
            src="https://imdezcode.files.wordpress.com/2020/02/imdezcode-logo.png"
            alt=""
            width={100}
            height={100}
          />
          <div className="name">ImDezCode</div>
          <div className="job">Web Developer</div>
        </div>
        <div className="sidenav-url">
          <div className="url">
            <a href="#profile" className="active">
              Profile
            </a>
            <hr align="center" />
          </div>
          <div className="url">
            <a href="#settings">Settings</a>
            <hr align="center" />
          </div>
        </div>
      </div>
      {/* End */}
      {/* Main */}
      <div className="main">
        <h2>IDENTITY</h2>
        <div className="card">
          <div className="card-body">
            <i className="fa fa-pen fa-xs edit" />
            <table>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>:</td>
                  <td>ImDezCode</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>:</td>
                  <td>imdezcode@gmail.com</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>:</td>
                  <td>Bali, Indonesia</td>
                </tr>
                <tr>
                  <td>Hobbies</td>
                  <td>:</td>
                  <td>Diving, Reading Book</td>
                </tr>
                <tr>
                  <td>Job</td>
                  <td>:</td>
                  <td>Web Developer</td>
                </tr>
                <tr>
                  <td>Skill</td>
                  <td>:</td>
                  <td>PHP, HTML, CSS, Java</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* End */}
    </div>
    );
}
