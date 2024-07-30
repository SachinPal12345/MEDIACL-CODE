

import React from "react";
import Nav  from "../Nav";
import { Link } from "react-router-dom";
import Footerpage from "../Footerpage";

function Pharmacysyllabus() {
  return (
    <>
    <Nav />
      <style>
        {`
          .ddd {
            margin: 10px auto; /* Center the table */
            padding: 30px;
            overflow-x: auto; /* Allow horizontal scrolling on small screens */
            counter-reset: examples approaches;
            background-color: Gainsboro;
            color: #333;
            font-size: 93.75%;
            line-height: 1.5;
            max-width: 1680px;
          }

          table {
            width: 70%; /* Make the table fill the container */
            border-collapse: collapse; /* Remove default spacing between table cells */
          }

          th, td {
            padding: .5em;
            border: 1px solid #999;
          }

          @media screen and (max-width: 768px) {
            /* Apply responsive styles for screens smaller than 768px */
            .ddd {
              overflow-x: auto;
            }

            table {
              max-width: 100%; /* Allow horizontal scrolling on small screens */
            }
          }
          h2 {
            text-align: center;
            background-color:#14adad;
            // Width : 100%;
            // margin-left:10px;
            border-radius: 25px;
            font-size: 30px; /* Default font size */
            margin: 0; /* Remove default margin */
           
          }
          @media screen and (max-width: 600px) {
            h2 {
                font-size: 18px; /* Adjust font size for smaller screens */
            }
        }
        @media screen and (max-width: 768px) {
          table {
            width: 100%;
          }
          table thead {
            display: none;
          }
          table, table tbody, table tr, table td {
            display: block;
            width: 100%;
          }
          table tr {
            margin-bottom: 15px;
            display: block;
            border: 1px solid #ccc;
          }
          table td {
            text-align: left;
            padding: 10px;
          }
        }
        `}
      </style>
     
      <div className="ddd" style={{ color: "black" }}>
        <h2>Pharmacy Syllabus </h2>
        <br />
        <h4 style={{ textAlign: "center", textDecoration: "underline" }}>
          <b>Syllabus for Pharmacy</b>
        </h4>{" "}
        <br />
        <h5 style={{ textAlign: "center", color: "Brown" }}>
          <b>
          B.Pharmacy
          </b>
        </h5>
        <br />
        <table style={{ marginLeft: "15%", textAlign: "center" }}>
          <thead style={{ backgroundColor: "SteelBlue" }}>
            <tr>
              <th scope="col">
                <h6>
                  <b>S.No</b>
                </h6>
              </th>
              <th scope="col">
                <h6>
                  <b>Choice Based Credit System (CBCS) w.e.f. 2016-17</b>
                </h6>
              </th>
              <th colSpan={3} scope="colgroup">
                <h6>
                  <b>
                    {" "}
                    Non CBCS for 2014 and 2015 admitted students
                  </b>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">  1  </th>
              <th scope="row"> <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/CBCS%20SYLLABUS/Syllabus%20BPharmacy/SYBPHC_I.pdf">First Semester</Link></th>
              <th scope="row"> <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SY_BPH_I.pdf">First Semester</Link></th>
              </tr>

              <tr>
              <th scope="row"> 2  </th>
             <th scope="row"> <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/CBCS%20SYLLABUS/Syllabus%20BPharmacy/SYBPHC_II.pdf">Second Semester</Link></th>
              <th scope="row"> <Link to = ""> Second Semester</Link></th>
              </tr>

              <tr>
              <th scope="row"> 3  </th>
           <th scope="row"> <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/CBCS%20SYLLABUS/Syllabus%20BPharmacy/SYBPHC_III.pdf">Third Semester</Link></th>
              <th scope="row"> <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SyllabusIIIsem/SY_BPH_III.pdf"> Third Semester</Link></th>
              </tr>

              <tr>
              <th scope="row"> 4  </th>
          <th scope="row"> <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/CBCS%20SYLLABUS/Syllabus%20BPharmacy/SYBPHC_IV.pdf">Forth Semester</Link></th>
              <th scope="row"> <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/syllsbus_iv_sem/BPH4sem.pdf">Forth Semester</Link></th>
              </tr>

              <tr>
              <th scope="row"> 5  </th>
        <th scope="row"> <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/CBCS%20SYLLABUS/Syllabus%20BPharmacy/SYBPHC_V.pdf">Fifth Semester</Link></th>
              <th scope="row"> <Link to = "hhttps://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/6%20sem%20syllabus/BPHVSYL.pdf">Fifth Semester</Link></th>
              </tr>

              <tr>
              <th scope="row"> 6  </th>
           <th scope="row"> <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/CBCS%20SYLLABUS/Syllabus%20BPharmacy/SYBPHC_VI.pdf">Sixth Semester</Link></th>
              <th scope="row"> <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/6%20sem%20syllabus/BPHVISY.pdf">Sixth Semester</Link></th>
              </tr>

              <tr>
                
              <th scope="row"> 7  </th>   
              <th scope="row"> <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/CBCS%20SYLLABUS/Syllabus%20BPharmacy/SYBPHC_VII.pdf">Seventh Semester</Link></th>
               <th scope="row"> <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/7%20sem%20syllabus/SYBP_VII.pdf">Seventh Semester</Link></th>
              </tr>

              <tr>
              <th scope="row"> 8  </th>
           <th scope="row"> <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/CBCS%20SYLLABUS/Syllabus%20BPharmacy/SYBPHC_VIII.pdf">Eight Semester</Link></th>
              <th scope="row" ><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBP_VIII.pdf">Eight Semester</Link></th>
              </tr>
         
          </tbody>
        </table>{" "}
        <br />
        <br />
       
       
      {/* ========================================================= */}

        <h5 style={{ textAlign: "center", color: "Brown" }}>
          <b>M. Pharmacy</b>
        </h5>
        <br />
        <table style={{ marginLeft: "15%", textAlign: "center" }}>
          <thead style={{ backgroundColor: "SteelBlue" }}>
            <tr>
              <th scope="col">
                <h6>
                  <b>Stream</b>
                </h6>
              </th>
              <th scope="col">
                <h6>
                  <b>New Syllabus (wef 2017-18)</b>
                </h6>
              </th>
              <th scope="colgroup">
                <h6>
                  <b>
                    {" "}
                    Old syllabus
                  </b>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <th style={{color:"#780000"}}> <b>Pharmacology</b> </th>
          
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYWEF2017/SYMPHPCOWEF17_I.pdf">I  Semester </Link> <br/>
              <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYWEF2017/SYPHARMACOLOGY_II.pdf">II  Semester </Link><br/>
              <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYWEF2017/SY_MPharmacy_IIISem.pdf">III  Semester </Link>
              </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/PHCOI_15.pdff"></Link>I Year</th>
              </tr>

              <tr>
              <th style={{color:"#780000"}}> <b> Pharmaceutics</b> </th>
              
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYWEF2017/SYMPHPSEUWEF17_I.pdf">I  Semester </Link> <br/>
              <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYWEF2017/SYPHARMACEUTICS_II.pdf">II  Semester </Link><br/>
              <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYWEF2017/SY_MPharmacy_IIISem.pdf">III  Semester </Link>
              </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/PHCEI_15.pdf">II Year</Link></th>
              </tr>
           
          </tbody>
        </table>{" "}<br/><br/>
       
        
     










        {/* {=========================================} */}
        <h5 style={{ textAlign: "center", color: "Brown" }}>
          <b>D. Pharmacy</b>
        </h5>
        <br />
        <table style={{ marginLeft: "15%", textAlign: "center" }}>
          <thead style={{ backgroundColor: "SteelBlue" }}>
            <tr>
              <th scope="col">
                <h6>
                  <b>S.No</b>
                </h6>
              </th>
              <th scope="col">
                <h6>
                  <b>As per PCI (w.e.f. 2021-22)</b>
                </h6>
              </th>
              <th scope="colgroup">
                <h6>
                  <b>
                    {" "}
                    Old Scheme 
                  </b>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">  1  </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS2021/SY_DPHARMA_I_2021.pdf">I Year</Link></th>
              <th scope="row"><Link to = ""></Link>I Year</th>
              </tr>

              <tr>
              <th scope="row"> 2  </th>
              <th scope="row"><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS2021/SY_DPHARMA_II_2021.pdf">I Year</Link></th>
              <th scope="row"><Link to = "">II Year</Link></th>
              </tr>
           
          </tbody>
        </table>{" "}<br/><br/>
      </div>

<Footerpage />
    
    </>
  );
}

export default Pharmacysyllabus;

