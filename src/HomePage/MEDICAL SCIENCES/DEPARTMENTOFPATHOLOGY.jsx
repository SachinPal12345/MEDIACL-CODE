


import React from 'react';
import Table from 'react-bootstrap/Table';
import Footerpage from '../Footerpage';
import Nav from '../Nav';
import SMITAANIL from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF PATHOLOGY PHOTOS/Dr. SMITA ANIL SHAH.jpg"
import BHARATJAIN from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF PATHOLOGY PHOTOS/Dr. BHARAT JAIN.jpg"
import   ABHIJEETDHAWALE from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF PATHOLOGY PHOTOS/Dr. ABHIJEET DHAWALE.jpg"
import SHALINIJAIN from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF PATHOLOGY PHOTOS/Dr. SHALINI JAIN.jpg"
import DILIPGANPATRAO from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF PATHOLOGY PHOTOS/Dr. DILIP GANPATRAO ARJUNE.jpg"
import POONAMAROR from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF PATHOLOGY PHOTOS/Dr. POONAM ARORA.jpg"
import ASHISHNARSINHBHAI from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF PATHOLOGY PHOTOS/Dr. ASHISH NARSINHBHAI LADUMOR.jpg"
import HUZEFAALI from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF PATHOLOGY PHOTOS/Dr. HUZEFA ALI TURKEY.jpg"
import  SWATIGOYA from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF PATHOLOGY PHOTOS/Dr. SWATI GOYA.jpg"
import  SAIYEDZEBA from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF PATHOLOGY PHOTOS/Dr. SAIYED ZEBA SULTANA.jpg"
import  NARBADAPRASAD from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF PATHOLOGY PHOTOS/Dr. NARBADA PRASAD TIWARI.jpg"



function DEPARTMENTOFPATHOLOGY() {
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
          <td>Dr. SMITA ANIL SHAH</td>
          <td>MBBS, MD</td>
          <td>PROFESSOR</td>
          <td>MBBS- Gujarat MC G-13680, MD- Gujarat MC - G-3313 </td>
          <td>2/1/2024</td>
          <td><img src={SMITAANIL} style={{width:"120px"}} /></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Dr. BHARAT JAIN</td>
          <td>MBBS, MD </td>
          <td>PROFESSOR</td>
          <td>MBBS, MD- M.P. MC - 2927</td>
          <td>3/20/2024</td>
          <td><img src={BHARATJAIN} style={{width:"100px",height:"80px"}} /></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Dr. ABHIJEET DHAWALE</td>
          <td>MBBS, MD</td>
          <td>ASSOCIATE PROFESSOR</td>
          <td>MBBS, MD-MAHARASHTRA MC- 2010/03/0730</td>
          <td>1/25/2024</td>
          <td><img src={ ABHIJEETDHAWALE} style={{width:"100px",height:"80px"}} /></td>
        </tr>
        <tr>
          <td>4</td>
          <td>Dr. SHALINI JAIN</td>
          <td>MBBS, MD</td>
          <td>ASSOCIATE PROFESSOR</td>
          <td>MBBS, MD, M.P. Medical council - 2594</td>
          <td>2/6/2024</td>
          <td><img src={SHALINIJAIN} style={{width:"100px"}} /></td>
       
        </tr>
        <tr>
          <td>5</td>
          <td>Dr. DILIP GANPATRAO ARJUNE</td>
          <td>MBBS, MD</td>
          <td>ASSOCIATE PROFESSOR</td>
          <td>MMBBS, MD-MAHARASHTRA MC- 073332</td>
          <td>2/7/2024</td>
          <td><img src={DILIPGANPATRAO} style={{width:"100px"}} /></td>
        </tr>
        <tr>
          <td>6</td>
          <td>Dr. POONAM ARORA</td>
          <td>MBBS, MD</td>
          <td>ASSISTANT PROFESSOR</td>
          <td>MBBS-Rajasthan MC- 96570, MD-Rajsthan MC- 19483</td>
          <td>1/6/2024</td>
          <td><img src={POONAMAROR} style={{width:"100px"}} /></td>
        </tr>

        <tr>
          <td>7</td>
          <td>Dr. ASHISH NARSINHBHAI LADUMOR</td>
          <td>MBBS, MD</td>
          <td>ASSISTANT PROFESSOR</td>
          <td>MBBS- Gujarat MC- G-56945, MD-Gujarat MC- G-31217</td>
          <td>1/29/2024</td>
          <td><img src={ASHISHNARSINHBHAI} style={{width:"100px"}} /></td>
        </tr>

        <tr>
          <td>8</td>
          <td>Dr. HUZEFA ALI TURKEY</td>
          <td>MBBS, MD</td>
          <td>ASSISTANT PROFESSOR</td>
          <td>MBBS-MAHARASHTRA MC- 2014101/10086, MD-MAHARASHTRA MC- 3031/2019</td>
          <td>4/27/2024</td>
          <td><img src={HUZEFAALI} style={{width:"100px"}} /></td>
        </tr>

        <tr>
          <td>9</td>
          <td>Dr. SWATI GOYAL</td>
          <td>MBBS, MD</td>
          <td>SR</td>
          <td>MBBS, MD- M.P. MC-MP-7976</td>
          <td>1/1/2022</td>
          <td><img src={ SWATIGOYA} style={{width:"100px"}} /></td>
        </tr>

        <tr>
          <td>10</td>
          <td>Dr. SAIYED ZEBA SULTANAL</td>
          <td>MBBS, MD</td>
          <td>SR</td>
          <td>MBBS, MD -KARNATAKA MC - 113363</td>
          <td>1/6/2024</td>
          <td><img src={ SAIYEDZEBA} style={{width:"100px"}} /></td>
        </tr>

        <tr>
          <td>11</td>
          <td>Dr. NARBADA PRASAD TIWARI</td>
          <td>MBBS, MD</td>
          <td>SR</td>
          <td>MBBS-BIHAR MC- 39274, MD- M.P. MC- MP18284</td>
          <td>1/27/2024</td>
          <td><img src={ NARBADAPRASAD} style={{width:"100px"}} /></td>
        </tr>
     
       
      </tbody>
        </Table>
      </div>
      <br />
      <Footerpage />
    </>
  );
}

export default DEPARTMENTOFPATHOLOGY;


