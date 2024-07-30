


import React from 'react';
import Table from 'react-bootstrap/Table';
import Footerpage from '../Footerpage';
import Nav from '../Nav';
import SAVITABHARAT from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF MICROBIOLOGY PHOTOS/Dr. SAVITA BHARAT JAIN.jpg"
import SANJOGUPT from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF MICROBIOLOGY PHOTOS/Dr. SANJO GUPTA.jpg"
import OMPRAKASHGANPATRAO from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF MICROBIOLOGY PHOTOS/Dr. OMPRAKASH GANPATRAO BOBADE.jpg"
import  RAMEENAANWA from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF MICROBIOLOGY PHOTOS/Dr. RAMEENA ANWAR.jpg"
import SUNILKUMAR from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF MICROBIOLOGY PHOTOS/Dr. SUNIL KUMAR SAHU.jpg"
import ISHARASTOGI from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF MICROBIOLOGY PHOTOS/Dr. ISHA RASTOGI.jpg"
import MODIFALAK from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF MICROBIOLOGY PHOTOS/Dr. MODI FALAK.jpg"
import TRASHAMOURYA from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF MICROBIOLOGY PHOTOS/Dr. TRASHA MOURYA.jpg"

function  DEPARTMENTOFMICROBIOLOGY() {
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
          <td>Dr. SAVITA BHARAT JAIN</td>
          <td>MBBS, MD</td>
          <td>PROFESSOR</td>
          <td>MBBS, MD - M.P. MC- MP-4807 </td>
          <td>3/20/2024</td>
          <td><img src={SAVITABHARAT} style={{width:"120px"}} /></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Dr. SANJO GUPTA</td>
          <td>M.Sc, PhD </td>
          <td>ASSOCIATE PROFESSOR</td>
          <td>PhD- AA180527</td>
          <td>3/1/2024</td>
          <td><img src={SANJOGUPT} style={{width:"100px",height:"80px"}} /></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Dr. OMPRAKASH GANPATRAO BOBADE</td>
          <td>MBBS, MD</td>
          <td>ASSOCIATE PROFESSOR</td>
          <td>MBBS , MD- MAHARASHTRA MC - 2000/07/2661</td>
          <td>12/30/2023</td>
          <td><img src={OMPRAKASHGANPATRAO} style={{width:"100px",height:"80px"}} /></td>
        </tr>
        <tr>
          <td>4</td>
          <td>Dr. RAMEENA ANWAR</td>
          <td>MBBS, MD</td>
          <td>ASSISTANT PROFESSOR</td>
          <td>MBBS, MD- TELANGANA MC- 20182</td>
          <td>4/22/2024</td>
          <td><img src={RAMEENAANWA} style={{width:"100px"}} /></td>
       
        </tr>
        <tr>
          <td>5</td>
          <td>Dr. SUNIL KUMAR SAHU</td>
          <td>MBBS, MD</td>
          <td>ASSISTANT PROFESSOR</td>
          <td>MBBS, MD- ODISSA MC- 18812/13</td>
          <td>5/24/2024</td>
          <td><img src={SUNILKUMAR} style={{width:"100px"}} /></td>
        </tr>
        <tr>
          <td>6</td>
          <td>Dr. ISHA RASTOGI</td>
          <td>MBBS, MD</td>
          <td>ASSISTANT PROFESSOR</td>
          <td>MBBS-U.P.MC - 58298, MD- MCI - 13-14233</td>
          <td>4/3/2024</td>
          <td><img src={ISHARASTOGI} style={{width:"100px"}} /></td>
        </tr>
        <tr>
          <td>7</td>
          <td>Dr. MODI FALAK</td>
          <td>MBBS, MD</td>
          <td>SR </td>
          <td>MBBS, Gujarat MC- G-58853 , MD, Gujarat MC-G-28014</td>
          <td>2/3/2024</td>
          <td><img src={MODIFALAK} style={{width:"100px"}} /></td>
        </tr>
        <tr>
          <td>8</td>
          <td>Dr. TRASHA MOURYA</td>
          <td>MBBS</td>
          <td>SR/TUTOR </td>
          <td>MBBS- M.P. MC - MP-31521</td>
          <td>11/27/2023</td>
          <td><img src={TRASHAMOURYA} style={{width:"100px"}} /></td>
        </tr>
       
      </tbody>
        </Table>
      </div>
      <br />
      <Footerpage />
    </>
  );
}

export default DEPARTMENTOFMICROBIOLOGY;

