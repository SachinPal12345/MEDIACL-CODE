// import React from 'react'
// import Nav from '../HomePage/Nav'
// import poly from "../PDF/Approval/2024-25/Poly_Eng.PDF"
// import SHM from "../PDF/Approval/2024-25/SHM.PDF"
// import SOD from "../PDF/Approval/2024-25/SOD.PDF"
// import SOMS from "../PDF/Approval/2024-25/SOMS.PDF"
// import SOCA from "../PDF/Approval/2024-25/SOCA.PDF"
// import Footerpage from '../HomePage/Footerpage'

// function Approval() {
//     return (
//         <div>
//             <Nav />
//             <>
//                 <p>
//                     <a href={poly} target='_blank'>
//                         <b>POLYTECHNIC (ENGINEERING)</b>
//                     </a>
//                 </p>
//                 <p>
//                     <a href={SHM} target='_blank'>
//                         <b>SCHOOL OF HOTEL
//                             MANAGEMENT, SRI SATYA SAI
//                             UNIVERSITY OF TECHNOLOGY
//                             AND MEDICAL
//                             SCIENCES,(SSSUTMS)</b>
//                     </a>
//                 </p>
//                 <p>
//                     <a href={SOCA} target='_blank'>
//                         <b>SCHOOL OF COMPUTER
//                             APPLICATION,SRI SATYA SAI
//                             UNIVERSITY OF TECHNOLOGY
//                             AND MEDICAL
//                             SCIENCES,(SSSUTMS)</b>
//                     </a>
//                 </p>
//                 <p>
//                     <a href={SOD} target='_blank'>
//                         <b>SCHOOL OF DESIGN SRI SATYA
//                             SAI UNIVERSITY OF TECHNOLOGY
//                             AND MEDICAL SCIENCE</b>
//                     </a>
//                 </p>
//                 <p>
//                     <a href={SOMS} target='_blank'>
//                         <b>SRI SATYA SAI INSTITUTE OF
//                             MANAGEMENT.</b>
//                     </a>
//                 </p>
//             </>
//             <Footerpage />
//         </div >
//     )
// }

// export default Approval

import React from "react";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";
import COA from "../images/COA_Approvals.pdf";
import SOD from "../images/SOD.PDF";
import SOCA from "../images/SOCA.PDF";
import SHM from "../images/SHM.PDF";
import SOMS from "../images/SOMS.PDF";
import POLY from "../images/Poly_Eng.pdf";

import Nav from "../HomePage/Nav";
import NIRF_Eng from "../images/NRIF_Eng.pdf";

const Approval = () => {
  return (
    <>
      <style>
        {`
          .title h4::before {
            background: orange;
            height: 2px;
            width: 45px;
            content: "";
            position: absolute;
            top: 0px;
            left: 0px;
            bottom: 0px;
            margin: auto;
          }

          .title {
            font-family: inherit;
            font-weight: 350;
            margin-left: 80px;
          }

          .title h4 {
            text-transform: uppercase;
            font-weight: 500;
            font-size: 20px;
            position: relative;
            padding-left: 60px;
            margin-top: 0px;
            margin-bottom: 15px;
            display: inline-block;
            color: rgb(53, 56, 88);
            font-style: normal;
          }

          .title h3 {
            font-size: 50px;
            font-weight: 700;
            line-height: 49px;
            text-transform: uppercase;
            margin-bottom: 20px;
            color: #780000;
            font-style: normal;
          }

          @import url('https://fonts.googleapis.com/css?family=Abel');

          .center {
            display: flex;
            justify-content: space-between;
            position: absolute;
            top: 410%;
             left: 10%;
            width:100%;
            transform: translate(-50%, -50%);
          }

          .card, .cards, .card1 {
            width: 750px;
            background-color: #fff;
            background: linear-gradient(#f8f8f8, #fff);
            box-shadow: 0 8px 16px -8px rgba(0,0,0,0.4);
            border-radius: 6px;
            overflow: hidden;
            position: relative;
            margin: 1.5rem;
          }

          .card {
            height: 240px;
          }

          .cards {
            height: 90px;
          }

          .card1 {
            height: 290px;
          }

          .additional {
            position: absolute;
            width: 150px;
            height: 100%;
            background: linear-gradient(#dE685E, #EE786E);
            transition: width 0.4s;
            overflow: hidden;
            z-index: 2;
          }

          .green .additional {
            background: #BEC6A0;
          }

          .user-card {
            width: 150px;
            height: 100%;
            position: relative;
            float: left;
            color: black;
            font-weight: 800;
            margin-left: 40px;
            margin-top: 100px;
          }

          .user-card1 {
            width: 150px;
            height: 100%;
            position: relative;
            float: left;
            color: black;
            font-weight: 800;
            margin-left: 40px;
            margin-top: 20px;
          }

          .user-card::after {
            content: "";
            display: block;
            position: absolute;
            top: 10%;
            right: -2px;
            height: 80%;
            border-left: 2px solid rgba(0,0,0,0.025);
          }

          .user-card2 {
            width: 150px;
            height: 20%;
            position: relative;
            float: left;
            color: black;
            font-weight: 800;
            margin-left: 10px;
            margin-top: 20px;
          }

          .general {
            width: 450px;
            height: 100%;
            position: absolute;
            top: 0;
            right: 80px;
            z-index: 1;
            box-sizing: border-box;
            padding-top: 0;
          }

      
             @media (max-width: 400px) {
             
             .center{
              position: absolute;
            top: 270%;
            left:-90%;
          
            -webkit-transform: translate(-50%, -50%); 
            }


               .card, .cards, .card1 {
              width: 100%;
              height: auto;
              margin: 0.5rem;
              box-shadow: none;
            }

            .additional, .user-card, .general {
              position: static;
              width: 100%;
                padding:15px;
              height: auto;
            }

            .user-card::after {
              display: none;
            }

       .user-card {
            width: 150px;
            height: 10%;
            position: relative;
            float: left;
color:black;
            font-weight:800;
            margin-left:40px;
            margin-top:-20px
           
          }


          .green .additional {
          background: #BEC6A0;
          height:50px;
        
          }


          .user-card1 {
            width: 150px;
            height: 10%;
            position: relative;
            float: left;
color:black;
            font-weight:800;
            margin-left:40px;
            margin-top:-10px


       
           
          }




           .user-card2 {
            width: 150px;
            height: 20%;
            position: relative;
            float: left;
color:black;
            font-weight:800;
          
             margin-top:-10px


       
           
          }

          // //////////////////////////////////////////////////////////////
           .mee {
            border-radius: 10px;
            position: fixed;
            right: 100px;
            top: 70%;
            left:90px;
            width:300px;
            transform: translateY(-50%);
            color: black;
          }

          .uul {
            list-style-type: none;
            padding: 0;
            margin: 0;
            list-style-type: square;
            margin-left: 10px;
          }

          @media (max-width: 400px) {
            .mee {
              display: none;
            }
          }
        `}
      </style>
      <Nav />
      <div
        data-aos="fade-right"
        className="title aos-init aos-animate"
        style={{ marginTop: "40px", marginLeft: "120px" }}
      >
        <h4>Approvals</h4>
      </div>

      <div className="texxt" style={{ width: "90%" }}>
        <p
          style={{
            marginLeft: "70px",
            marginTop: "20px",
            fontSize: "15px",
            textAlign: "justify",
            fontFamily: "'Open Sans', sans-serif",
          }}
        >
          Own recommendations of Madhya Pradesh Niji Vishwavidyalaya Niyamak
          Aayog, the State Legislature of Madhya Pradesh has accorded approval
          to Sri Satya Sai University of Technology & Medical Sciences (SSSUTMS)
          as State Private University with main campus at Sehore from Academic
          session 2014-15 vide Gazette Notification of State Government of M.P.,
          Act no. 06 No.80 dated 12th February 2014 [The Madhya Pradesh Niji
          Vishwavidyalaya (Sthapana & Sanchalan) Sansodhan Adhiniyam 2014]”.
        </p>
      </div>

      <div className="center">
        <div style={{ marginLeft: "600px" }}>
          {/* <Element name="section1">
            <div className="card green">
              <div className="additional"></div>
              <div className="general">
                <p style={{ marginTop: "20px" }}>
                  MP PRIVATE UNIVERSITIES REGULATORY COMMISSION
                </p>
                <a href={NIRF_Eng}>
                  MP PRIVATE UNIVERSITIES REGULATORY COMMISSION
                </a>
                <p>MP PARAMEDICAL COUNCIL</p>
                <p>GCU</p>
                <p>AIUN</p>
              </div>
            </div>
          </Element> */}

          <Element name="section2">
            <div className="card1 green">
              <div className="additional">
                <div className="user-card">AICTE</div>
              </div>
              <div className="general">
                <p style={{ marginTop: "20px" }}>School of Design</p>
                <p>School of Engineering</p>
                <p>School of Computer Application</p>
                <p>School of Hotel Management</p>
                <p>School of Management Studies</p>
                <p>Polytechnic (Engineering)</p>
              </div>
            </div>
          </Element>

          <Element name="section3">
            <div className="card green">
              <div className="additional">
                <div className="user-card">NCTE</div>
              </div>
              <div className="general">
                <p style={{ marginTop: "20px" }}>
                  Faculty of Education -- (School of Education)
                </p>
                <p>Faculty of Education-- (School Teachers Education)</p>
                <p>Faculty of Education-- (School of Physical Education)</p>
                <p>Faculty of Education</p>
              </div>
            </div>
          </Element>

          <Element name="section4">
            <div className="card green">
              <div className="additional">
                <div className="user-card">PCI</div>
              </div>
              <div className="general">
                <p style={{ marginTop: "20px" }}>
                  Faculty of Pharmacy (College of Pharmacy)
                </p>
                <p>Faculty of Pharmacy (School of Pharmacy)</p>
                <p>Faculty of Pharmacy (Polytechnic (Pharmacy))</p>
              </div>
            </div>
          </Element>

          <Element name="section8">
            <div className="cards green">
              <div className="additional">
                <div className="user-card1">AYUSH</div>
              </div>
              <div className="general">
                <p style={{ marginTop: "15px" }}>School of Homoeopathy</p>
                <p>School of Ayurveda & Siddha Studies</p>
              </div>
            </div>
          </Element>

          <Element name="section6">
            <div className="cards green">
              <div className="additional">
                <div className="user-card1">
                  <a href={COA} target="_blank">
                    {" "}
                    COA
                  </a>
                  {/* <Link to={COA}>COA</Link> */}
                </div>
              </div>
              <div className="general">
                <p style={{ marginTop: "20px" }}>School of Design</p>
              </div>
            </div>
          </Element>

          <Element name="section2">
            <div className="card1 green">
              <div className="additional">
                <div className="user-card">EOA</div>
              </div>
              <div className="general">
                <p style={{ marginTop: "18px" }}>
                  {" "}
                  <a href={SHM} target="blank">
                    School of HOTEL MANAGEMENT
                  </a>
                </p>
                <p>
                  <a href={POLY} target="blank">
                    {" "}
                    POLYTECNIC Engineering{" "}
                  </a>
                </p>
                <p>
                  <a href={SOMS} target="blank">
                    School of MEDICAL SCIENCE
                  </a>
                </p>
                <p>
                  <a href={SOCA} target="blank">
                    School of COMPUTER APPLICATION
                  </a>
                </p>
                <p>
                  <a href={SOD} target="blank">
                    School of DESIGN
                  </a>
                </p>
              </div>
            </div>
          </Element>
          <Element name="section7">
            <div className="cards green">
              <div className="additional">
                <div className="user-card2">BAR COUNCIL OF INDIA</div>
              </div>
              <div className="general">
                <p style={{ marginTop: "20px" }}>School of Law</p>
              </div>
            </div>
          </Element>

          <Element name="section5">
            <div className="card green">
              <div className="additional">
                <div className="user-card2">MP NURSES REGISTRATION COUNCIL</div>
              </div>
              <div className="general">
                <p style={{ marginTop: "20px" }}>School of Nursing 2019-20</p>
                <p>School of Nursing 2020-21</p>
                <p>School of Nursing 2021-22</p>
              </div>
            </div>
          </Element>
        </div>

        <div>
          <div
            className="mee"
            style={{ width: "300px", marginLeft: "100px", marginTop: "60px" }}
          >
            <ul className="uul">
              <li style={{ margin: "10px 10px" }}>
                <Link to="section1" smooth={true} duration={100}>
                  AICTE
                </Link>
              </li>
              <li style={{ margin: "10px 10px" }}>
                <Link to="section2" smooth={true} duration={100}>
                  NCTE
                </Link>
              </li>
              <li style={{ margin: "10px 10px" }}>
                <Link to="section3" smooth={true} duration={100}>
                  PCI
                </Link>
              </li>
              <li style={{ margin: "10px 10px" }}>
                <Link to="section4" smooth={true} duration={100}>
                  COA
                </Link>
              </li>
              <li style={{ margin: "10px 10px" }}>
                <Link to="section5" smooth={true} duration={100}>
                  AYUSH
                </Link>
              </li>
              <li style={{ margin: "10px 10px" }}>
                <Link to="section6" smooth={true} duration={100}>
                  BAR COUNCIL OF INDIA
                </Link>
              </li>
              <li style={{ margin: "10px 10px" }}>
                <Link to="section7" smooth={true} duration={100}>
                  MP NURSES REGISTRATION COUNCIL
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Approval;
