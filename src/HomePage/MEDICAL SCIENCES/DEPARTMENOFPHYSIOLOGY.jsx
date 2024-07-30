// import React from 'react'
// import Table from 'react-bootstrap/Table';
// import Footerpage from '../Footerpage';
// import Nav from '../Nav';

// function  DEPARTMENOFPHYSIOLOGY() {
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
//           <td>Dr. THAKUR SHAILESH KUMAR SINGH</td>
//           <td>MBBS, MD</td>
//           <td>PROFESSOR</td>
//           <td>MBBS, MD -UP STATE  MC -37575</td>
//           <td>5/2/2024</td>
//           <td><img src='' /></td>
//         </tr>
//         <tr>
//           <td>2</td>
//           <td>Dr. NEELAM ASHOK DEOKAR</td>
//           <td>MBBS, MS</td>
//           <td>ASSOCIATE </td>
//           <td>MBBS  MD,  MAHARASHTRA  MC-   48895</td>
//           <td>6/20/2024</td>
//           <td><img src='' /></td>
//         </tr>
//         <tr>
//           <td>3</td>
//           <td>Dr. MUNEEB JEHAN</td>
//           <td>MBBS, MD</td>
//           <td>ASSISTANT PROFESSOR </td>
//           <td>MBBS, MD- TELANGANA MC - 40075</td>
//           <td>6/8/2024</td>
//           <td><img src='' /></td>
//         </tr>
//         <tr>
//           <td>4</td>
//           <td>Dr. RICHA KUMARI</td>
//           <td>MBBS, MD</td>
//           <td>ASSISTANT PROFESSOR</td>
//           <td>MBBS, MD- DELHI, MCI-49048</td>
//           <td>5/24/2024</td>
//           <td><img src='' /></td>
//         </tr>
//         <tr>
//           <td>5</td>
//           <td>Dr. ANUJA KANCHANKAR </td>
//           <td>MBBS, MD</td>
//           <td>ASSISTANT PROFESSOR</td>
//           <td>MBBS, MD-MAHARASHTRA MC-10280, </td>
//           <td>5/27/2024</td>
//           <td><img src='' /></td>
//         </tr>
//         <tr>
//           <td>6</td>
//           <td>Dr. ARPIT BHARGAV</td>
//           <td>MBBS</td>
//           <td>SR/TUTOR</td>
//           <td>MBBS-M.P. MC- MP35482</td>
//           <td>2/5/2024</td>
//           <td><img src='' /></td>
//         </tr>
//         <tr>
//           <td>7</td>
//           <td>Dr. DIKSHA JHA</td>
//           <td>MBBS</td>
//           <td>SR/TUTOR</td>
//           <td>MBBS- M.P. MC -MP35322</td>
//           <td>12/02/2024</td>
//           <td><img src='' /></td>
//         </tr>
//         <tr>
//           <td>8</td>
//           <td>Dr. VAISHNAVI VERMA</td>
//           <td>MBBS</td>
//           <td>SR/TUTOR</td>
//           <td>MBBS-M.P. MC -MP35698</td>
//           <td>2/12/2024</td>
//           <td><img src='' /></td>
//         </tr>
     
       
//       </tbody>
//     </Table>
//  <br/>
//     <Footerpage />
//     </>
    
//   );
// }

// export default  DEPARTMENOFPHYSIOLOGY;


import React from 'react';
import Table from 'react-bootstrap/Table';
import Footerpage from '../Footerpage';
import Nav from '../Nav';
import THAKURSHAILESH from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF PHYSIOLOGY/Dr. THAKUR SHAILESH KUMAR SINGH.jpg"
import NEELAMASHOK from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF PHYSIOLOGY/Dr. NEELAM ASHOK DEOKAR.jpg"
import MUNEEBJEHAN from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF PHYSIOLOGY/Dr. MUNEEB JEHAN.jpg"
import RICHAKUMARI from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF PHYSIOLOGY/Dr. RICHA KUMARI.jpg"
import ANUJAKANCHANKAR from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF PHYSIOLOGY/Dr. ANUJA KANCHANKAR.jpg"
import ARPITBHARGA from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF PHYSIOLOGY/Dr. ARPIT BHARGAV.jpg"
import DIKSHAJHA from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF PHYSIOLOGY/Dr. DIKSHA JHA.jpg"
import VAISHNAVIVERMA from "../../HomePage/MEDICAL SCIENCES PHOTOS/DEPARTMENT OF PHYSIOLOGY/Dr. VAISHNAVI VERMA.jpg"

function DEPARTMENOFPHYSIOLOGY() {
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
              <td>Dr. THAKUR SHAILESH KUMAR SINGH</td>
              <td>MBBS, MD</td>
              <td>PROFESSOR</td>
              <td>MBBS, MD -UP STATE  MC -37575</td>
              <td>5/2/2024</td>
              <td><img src={THAKURSHAILESH} style={{width:"120px"}} /></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Dr. NEELAM ASHOK DEOKAR</td>
              <td>MBBS, MS</td>
              <td>ASSOCIATE</td>
              <td>MBBS  MD,  MAHARASHTRA  MC-   48895</td>
              <td>6/20/2024</td>
              <td><img src={NEELAMASHOK} style={{width:"120px"}} /></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Dr. MUNEEB JEHAN</td>
              <td>MBBS, MD</td>
              <td>ASSISTANT PROFESSOR</td>
              <td>MBBS, MD- TELANGANA MC - 40075</td>
              <td>6/8/2024</td>
              <td><img src={MUNEEBJEHAN} style={{width:"120px"}} /></td>
            </tr>
            <tr>
              <td>4</td>
              <td>Dr. RICHA KUMARI</td>
              <td>MBBS, MD</td>
              <td>ASSISTANT PROFESSOR</td>
              <td>MBBS, MD- DELHI, MCI-49048</td>
              <td>5/24/2024</td>
              <td><img src={RICHAKUMARI} style={{width:"120px"}} /></td>
            </tr>
            <tr>
              <td>5</td>
              <td>Dr. ANUJA KANCHANKAR</td>
              <td>MBBS, MD</td>
              <td>ASSISTANT PROFESSOR</td>
              <td>MBBS, MD-MAHARASHTRA MC-10280</td>
              <td>5/27/2024</td>
              <td><img src={ANUJAKANCHANKAR} style={{width:"120px"}} /></td>
            </tr>
            <tr>
              <td>6</td>
              <td>Dr. ARPIT BHARGAV</td>
              <td>MBBS</td>
              <td>SR/TUTOR</td>
              <td>MBBS-M.P. MC- MP35482</td>
              <td>2/5/2024</td>
              <td><img src={ARPITBHARGA} style={{width:"120px"}} /></td>
            </tr>
            <tr>
              <td>7</td>
              <td>Dr. DIKSHA JHA</td>
              <td>MBBS</td>
              <td>SR/TUTOR</td>
              <td>MBBS- M.P. MC -MP35322</td>
              <td>12/02/2024</td>
              <td><img src={DIKSHAJHA} style={{width:"120px"}} /></td>
            </tr>
            <tr>
              <td>8</td>
              <td>Dr. VAISHNAVI VERMA</td>
              <td>MBBS</td>
              <td>SR/TUTOR</td>
              <td>MBBS-M.P. MC -MP35698</td>
              <td>2/12/2024</td>
              <td><img src={VAISHNAVIVERMA} style={{width:"120px"}} /></td>
            </tr>
          </tbody>
        </Table>
      </div>
      <br />
      <Footerpage />
    </>
  );
}

export default DEPARTMENOFPHYSIOLOGY;
