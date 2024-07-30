


import React from 'react';
import Table from 'react-bootstrap/Table';
import Footerpage from '../Footerpage';
import Nav from '../Nav';
import SHAILENDRABHADAURIYA from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF BIOCHEMISTRY PHOTOS/Dr. SHAILENDRA  BHADAURIYA.jpg"
import VIPULGUPTA from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF BIOCHEMISTRY PHOTOS/Dr. VIPUL GUPTA.jpg"
import SONALIRAJDEV from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF BIOCHEMISTRY PHOTOS/Dr.  SONALI RAJDEV.jpg"
import RISHIKAPATE from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF BIOCHEMISTRY PHOTOS/Dr. RISHIKA PATEL.jpg"
import AMANSINGH from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF BIOCHEMISTRY PHOTOS/Dr. AMAN SINGH.jpg"
import PRABHADEVI from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF BIOCHEMISTRY PHOTOS/Dr. PRABHA DEVI KUSHAWAH.jpg"


function DEPARTMENTOFBIOCHEMISTRY() {
  return (
    <>
      <Nav />
      <br />
      <div className="table-responsive" style={{ width: "95%", marginLeft: "40px" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th style={{ backgroundColor: "#83c5be" }}>#</th>
              <th style={{ backgroundColor: "#83c5be" }}>NAME</th>
              <th style={{ backgroundColor: "#83c5be" }}>EDUCATION QUALIFICATION</th>
              <th style={{ backgroundColor: "#83c5be" }}>LATEST DESIGNATION</th>
              <th style={{ backgroundColor: "#83c5be" }}>NMC REGISTRATION/STATE</th>
              <th style={{ backgroundColor: "#83c5be" }}>DATE OF JOINING</th>
              <th style={{ backgroundColor: "#83c5be" }}>LATEST PHOTO</th>
            </tr>
          </thead>
          <tbody>
        <tr>
          <td>1</td>
          <td> Dr. SHAILENDRA  BHADAURIYAE</td>
          <td>MBBS ,M.SC, P.HD</td>
          <td>PROFESSOR</td>
          <td>PhD </td>
          <td>4/3/2023</td>
          <td><img src={SHAILENDRABHADAURIYA} style={{width:"120px"}} /></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Dr. VIPUL GUPTA</td>
          <td>MBBS,MD </td>
          <td>ASSOCIATE PROFESSOR</td>
          <td>MBBS-HIMACAL PRADESH MC 555/2009,MD-HIMACAL PRADESH MC -555/15</td>
          <td>6/21/2024</td>
          <td><img src={VIPULGUPTA} style={{width:"100px",height:"80px"}} /></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Dr.  SONALI RAJDEV</td>
          <td>BSC,MSC ,PHD</td>
          <td>ASSISTANT PROFESSOR</td>
          <td>PhD - MU 18PHB003</td>
          <td>4/5/2023</td>
          <td><img src={SONALIRAJDEV} style={{width:"100px",height:"80px"}} /></td>
        </tr>
        <tr>
          <td>4</td>
          <td>Dr. RISHIKA PATEL</td>
          <td>MBBS</td>
          <td>SR/ TUTOR</td>
          <td>MBBS-M.P. MC -  31513</td>
          <td>2/13/2024</td>
          <td><img src={RISHIKAPATE} style={{width:"100px"}} /></td>
       
        </tr>
        <tr>
          <td>5</td>
          <td>Dr. AMAN SINGH</td>
          <td>MBBS</td>
          <td>SR/ TUTOR</td>
          <td>MBBS-M.P. MC-  31487</td>
          <td>2/13/2024</td>
          <td><img src={ AMANSINGH} style={{width:"100px"}} /></td>
        </tr>
        <tr>
          <td>6</td>
          <td>Dr. PRABHA DEVI KUSHAWAH</td>
          <td>MBBS</td>
          <td>SR/TUTOR</td>
          <td>MBBS-  M.P.MC   -2416264</td>
          <td>4/8/2024</td>
          <td><img src={PRABHADEVI} style={{width:"100px"}} /></td>
        </tr>
     
       
      </tbody>
        </Table>
      </div>
      <br />
      <Footerpage />
    </>
  );
}

export default DEPARTMENTOFBIOCHEMISTRY;

