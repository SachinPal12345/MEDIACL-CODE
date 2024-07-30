


import React from 'react';
import Table from 'react-bootstrap/Table';
import Footerpage from '../Footerpage';
import Nav from '../Nav';
import SATHYENDRAKASHYAP from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF PHARMACOLOGY PHOTOS/Dr. SATHYENDRA KASHYAP.jpg"
import  CHETANSHANKARRAO from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF PHARMACOLOGY PHOTOS/Dr.  CHETAN SHANKARRAO URADE.jpg"
import  RAHULT from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF PHARMACOLOGY PHOTOS/Dr. RAHUL T. KHOBRAGADE.jpg"
import RAJKUMARIBANSA from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF PHARMACOLOGY PHOTOS/Dr. RAJKUMARI    BANSAL.jpg"
import GRIJESHLAKHAN from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF PHARMACOLOGY PHOTOS/Dr. GRIJESH  LAKHAN PASERKAR.jpg"
import MITESHKUMAR from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF PHARMACOLOGY PHOTOS/Dr. MITESH KUMAR RAJA RAM.jpg"
import ANKUSHTIWARI from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF PHARMACOLOGY PHOTOS/Dr.  ANKUSH TIWARI.jpg"
import NEELAMJYOTI from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF PHARMACOLOGY PHOTOS/Dr. NEELAM JYOTI MEDHI.jpg"
import  ARPITV from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF PHARMACOLOGY PHOTOS/Dr. ARPIT   V  VACHHANI.jpg"


function DEPARTMENTOFPHARMACOLOGY() {
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
          <td>Dr. SATHYENDRA KASHYAP</td>
          <td>MBBS, MD</td>
          <td>PROFESSOR</td>
          <td>MBBS, MD-KARNATAK MC -23140 </td>
          <td>3/16/2024</td>
          <td><img src={SATHYENDRAKASHYAP} style={{width:"120px"}} /></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Dr.  CHETAN SHANKARRAO URADE</td>
          <td>MBBS, MD </td>
          <td>ASSO PROF</td>
          <td>MBBS ,MD-MAHARASTRA MC- 201103059</td>
          <td>6/6/2024</td>
          <td><img src={CHETANSHANKARRAO} style={{width:"100px",height:"80px"}} /></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Dr. RAHUL T. KHOBRAGADE</td>
          <td>MBBS, MD</td>
          <td>ASSO PROF</td>
          <td>MBBS,MD-MAHARASTRA MC -2009123881</td>
          <td>6/8/2024</td>
          <td><img src={RAHULT} style={{width:"100px",height:"80px"}} /></td>
        </tr>
        <tr>
          <td>4</td>
          <td>Dr. RAJKUMARI    BANSAL</td>
          <td>MBBS, MD</td>
          <td>ASST PROF</td>
          <td>MBBS,MD-M.P MC -MP8498</td>
          <td>1/6/2024</td>
          <td><img src={ RAJKUMARIBANSA} style={{width:"100px"}} /></td>
       
        </tr>
        <tr>
          <td>5</td>
          <td>Dr. GRIJESH  LAKHAN PASERKAR</td>
          <td>MBBS, MD</td>
          <td>ASST PROF</td>
          <td>MBBS-NASIK MC-5127U, MD- 14-PG9M5-330</td>
          <td>3/2/2024</td>
          <td><img src={GRIJESHLAKHAN} style={{width:"100px"}} /></td>
        </tr>
        <tr>
          <td>6</td>
          <td>Dr. MITESH KUMAR RAJA RAM</td>
          <td>MBBS, MD,DM</td>
          <td>ASST PROF</td>
          <td>MBBS,MD,DM, NASHIK  MAHARASHTRA  MC-1217</td>
          <td>3/29/2024</td>
          <td><img src={MITESHKUMAR} style={{width:"100px"}} /></td>
        </tr>

        <tr>
          <td>7</td>
          <td>Dr.  ANKUSH TIWARI</td>
          <td>MBBS,MD</td>
          <td>SR</td>
          <td>MBBS,MD, MAHARASHTRA MC -0511</td>
          <td>1/29/2024</td>
          <td><img src={ANKUSHTIWARI} style={{width:"100px"}} /></td>
        </tr>

        <tr>
          <td>8</td>
          <td>Dr. NEELAM JYOTI MEDHI</td>
          <td>MBBS, MD</td>
          <td>SR</td>
          <td>MBBS,MD- ASSAM MC-18332</td>
          <td>2/3/2024</td>
          <td><img src={NEELAMJYOTI} style={{width:"100px"}} /></td>
        </tr>

        <tr>
          <td>9</td>
          <td>Dr. ARPIT   V  VACHHANI</td>
          <td>MBBS,MD</td>
          <td>SR</td>
          <td>MBBS-Gujarat MC-G46722,MD-Gujarat MC-G23362</td>
          <td>3/2/2024</td>
          <td><img src={ARPITV} style={{width:"100px"}} /></td>
        </tr>
     
       
      </tbody>
        </Table>
      </div>
      <br />
      <Footerpage />
    </>
  );
}

export default DEPARTMENTOFPHARMACOLOGY;


