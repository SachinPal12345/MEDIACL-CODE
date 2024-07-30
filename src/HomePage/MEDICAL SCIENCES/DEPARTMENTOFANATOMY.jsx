// import React from 'react'
// import Table from 'react-bootstrap/Table';
// import Footerpage from '../Footerpage';
// import Nav from '../Nav';

// function  DEPARTMENTOFANATOMY() {
//   return (
//     <>
//     <Nav />
//     <br/>
//     <Table striped bordered hover style={{width:"95%", marginLeft:"40px"}}>
//       <thead>
//         <tr >
//           <th style={{backgroundColor:"#83c5be"}}>#</th>
//           <th style={{backgroundColor:"#83c5be"}}>NAME</th>
//           <th style={{backgroundColor:"#83c5be"}}>EDUCATION QULIFICATIONe</th>
//           <th style={{backgroundColor:"#83c5be"}}>LATEST DESIGNATION</th>
//           <th style={{backgroundColor:"#83c5be"}}>NMC REGISTRATION/STATE</th>
//           <th style={{backgroundColor:"#83c5be"}}>DATE OF JOINING</th>
//           <th style={{backgroundColor:"#83c5be"}}>LATEST PHOTO </th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>1</td>
//           <td>DR. PREETI PRABHAKARAO THUTE</td>
//           <td>MBBS, MS</td>
//           <td>PROFESSOR</td>
//           <td>MBBS, MS, MAHARASHTRA MC -0575</td>
//           <td>4/3/2024</td>
//           <td><img src='' /></td>
//         </tr>
//         <tr>
//           <td>2</td>
//           <td>Dr. SUCHISMITA SARKAR</td>
//           <td>MBBS, MD</td>
//           <td>ASSOCIATE PROFESSOR</td>
//           <td>MBBS, MD- HARYANA MC- H20556</td>
//           <td>6/22/2024</td>
//         </tr>
//         <tr>
//           <td>3</td>
//           <td>Dr. FARIHA SABEEN</td>
//           <td>MBBS, MS</td>
//           <td>ASSISTANT PROFESSOR</td>
//           <td>MBBS,MS-JHARKHAND MC  -43609</td>
//           <td>6/22/2024</td>
//         </tr>
//         <tr>
//           <td>4</td>
//           <td>DR. MANOJ KUMAR</td>
//           <td>MBBS, MS</td>
//           <td>ASSISTANT PROFESSOR</td>
//           <td>MBBS,MS-BIHAR MC-35662</td>
//           <td>6/15/2024</td>
//         </tr>
//         <tr>
//           <td>5</td>
//           <td>DR. ARUNA AJIT CHAVAN</td>
//           <td>BAMS, MSc, Ph.d, MA ANATOMY</td>
//           <td>ASSISTANT PROFESSOR</td>
//           <td>BAMS, MAHARASHTRA MC -47997A</td>
//           <td>6/20/2024</td>
//         </tr>
//         <tr>
//           <td>6</td>
//           <td>DR. JITENDRA BUNKAR</td>
//           <td>MBBS</td>
//           <td>SR/TUTOR</td>
//           <td>MBBS- M.P  MC - MP10608</td>
//           <td>4/16/2024</td>
//         </tr>
//         <tr>
//           <td>7</td>
//           <td>DR. SACHIN CHANDEL</td>
//           <td>MBBS</td>
//           <td>SR/TUTOR</td>
//           <td>MBBS- M.P. MC - MP11202</td>
//           <td>4/16/2024</td>
//         </tr>
//         <tr>
//           <td>8</td>
//           <td>DR. NARENDRA RAWAT</td>
//           <td>MBBS</td>
//           <td>SR/TUTOR</td>
//           <td>MBBS-    M.P. MC -MP9152</td>
//           <td>4/5/2024</td>
//         </tr>
     
       
//       </tbody>
//     </Table>
//  <br/>
//     <Footerpage />
//     </>
    
//   );
// }

// export default DEPARTMENTOFANATOMY


import React from 'react';
import Table from 'react-bootstrap/Table';
import Footerpage from '../Footerpage';
import Nav from '../Nav';
import PREETI from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF ANATOMY PHOTOS/DR. PREETI PRABHAKARAO THUTE.jpg"
import SUCHISMITA from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF ANATOMY PHOTOS/Dr. SUCHISMITA SARKAR.jpg"
import FARIHA from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF ANATOMY PHOTOS/Dr. FARIHA SABEEN.jpg"
import MANOJKUMAR from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF ANATOMY PHOTOS/DR. MANOJ KUMAR.jpg"
import ARUNAAJITCHAVAN from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF ANATOMY PHOTOS/DR. ARUNA AJIT CHAVAN.jpg"
import JITENDRABUNKAR from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF ANATOMY PHOTOS/DR. JITENDRA BUNKAR.jpg"
import SACHIN from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF ANATOMY PHOTOS/DR. SACHIN CHANDEL.jpg"
import NARENDRA from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF ANATOMY PHOTOS/DR. NARENDRA RAWAT.jpg"


function DEPARTMENTOFANATOMY() {
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
          <td>DR. PREETI PRABHAKARAO THUTE</td>
          <td>MBBS, MS</td>
          <td>PROFESSOR</td>
          <td>MBBS, MS, MAHARASHTRA MC -0575</td>
          <td>4/3/2024</td>
          <td><img src={PREETI} style={{width:"120px"}} /></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Dr. SUCHISMITA SARKAR</td>
          <td>MBBS, MD</td>
          <td>ASSOCIATE PROFESSOR</td>
          <td>MBBS, MD- HARYANA MC- H20556</td>
          <td>6/22/2024</td>
          <td><img src={SUCHISMITA} style={{width:"100px",height:"80px"}} /></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Dr. FARIHA SABEEN</td>
          <td>MBBS, MS</td>
          <td>ASSISTANT PROFESSOR</td>
          <td>MBBS,MS-JHARKHAND MC  -43609</td>
          <td>6/22/2024</td>
          <td><img src={FARIHA} style={{width:"100px",height:"80px"}} /></td>
        </tr>
        <tr>
          <td>4</td>
          <td>DR. MANOJ KUMAR</td>
          <td>MBBS, MS</td>
          <td>ASSISTANT PROFESSOR</td>
          <td>MBBS,MS-BIHAR MC-35662</td>
          <td>6/15/2024</td>
          <td><img src={MANOJKUMAR} style={{width:"100px"}} /></td>
       
        </tr>
        <tr>
          <td>5</td>
          <td>DR. ARUNA AJIT CHAVAN</td>
          <td>BAMS, MSc, Ph.d, MA ANATOMY</td>
          <td>ASSISTANT PROFESSOR</td>
          <td>BAMS, MAHARASHTRA MC -47997A</td>
          <td>6/20/2024</td>
          <td><img src={ARUNAAJITCHAVAN} style={{width:"100px"}} /></td>
        </tr>
        <tr>
          <td>6</td>
          <td>DR. JITENDRA BUNKAR</td>
          <td>MBBS</td>
          <td>SR/TUTOR</td>
          <td>MBBS- M.P  MC - MP10608</td>
          <td>4/16/2024</td>
          <td><img src={JITENDRABUNKAR} style={{width:"100px"}} /></td>
        </tr>
        <tr>
          <td>7</td>
          <td>DR. SACHIN CHANDEL</td>
          <td>MBBS</td>
          <td>SR/TUTOR</td>
          <td>MBBS- M.P. MC - MP11202</td>
          <td>4/16/2024</td>
          <td><img src={SACHIN} style={{width:"100px"}} /></td>
        </tr>
        <tr>
          <td>8</td>
          <td>DR. NARENDRA RAWAT</td>
          <td>MBBS</td>
          <td>SR/TUTOR</td>
          <td>MBBS-    M.P. MC -MP9152</td>
          <td>4/5/2024</td>
          <td><img src={NARENDRA} style={{width:"100px"}} /></td>
        </tr>
     
       
      </tbody>
        </Table>
      </div>
      <br />
      <Footerpage />
    </>
  );
}

export default DEPARTMENTOFANATOMY;

