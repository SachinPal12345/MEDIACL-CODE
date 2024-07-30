

import React from "react";
import Nav from "../Nav";
import { Link } from "react-router-dom";
import Footerpage from "../Footerpage";

function Educationsyllabus() {
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
        <h2>Education </h2>
        <br />
       
        <h5 style={{ textAlign: "center", color: "Brown" }}>
          <b>
          Bachelor of Education
          </b>
        </h5>
        <br />
        <table style={{ marginLeft: "15%", textAlign: "center" }}>
          <thead style={{ backgroundColor: "SteelBlue" }}>
            <tr>
              <th scope="col">
                <h6>
                  <b>S.No.</b>
                </h6>
              </th>
              <th scope="col">
                <h6>
                  <b>Course</b>
                </h6>
              </th>
              <th colSpan={6} scope="colgroup">
                <h6>
                  <b>
                    {" "}
                    Semester
                  </b>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="rowgroup">
                1.
              </th>
              <th style={{color:"#780000"}} > <b>Bachelor of Education (CBCS) </b> </th>
              <td><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/CBCS%20SYLLABUS/bed_cbcs.pdf"> <h6>
                  <b>First Semester  (CBCS)</b>
                </h6>{" "}</Link>   
                   </td>
              <td >
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/CBCS%20SYLLABUS/BEDCII17SYL.pdf"> <h6>
                  <b>Second  Semester  (CBCS)</b>
                </h6></Link>
               </td>
               <td >
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/CBCS%20SYLLABUS/Syllabus%20Education/SYBEDC_III.pdf"> <h6>
                  <b>Third  Semester  (CBCS)</b>
                </h6></Link>
               </td>
               <td >
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/CBCS%20SYLLABUS/Syllabus%20Education/SYBEDC_IV.pdf"> <h6>
                  <b>Forth  Semester  (CBCS)</b>
                </h6></Link>
               </td>
           
            
             
            </tr>
            <tr>
          </tr>

          <tr>
              <th scope="rowgroup">
                2.
              </th>
              <th style={{color:"#780000"}} > <b>B.Ed. (Non- CBCS) </b> </th>
              
              <td>
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBEDNS_I.pdf"> <h6>
                  <b>First Semester</b>
                </h6>{" "}</Link>
               
              </td>
              <td >
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/B.EdIIY.pdf">
                <h6>
                  <b>Second Year   ( III & IV Semester) </b>
                </h6>
                </Link>
              </td>
              <td >
                <Link to = "">
                <h6>
                  <b> </b>
                </h6>
                </Link>
              </td>
              <td >
                <Link to = "">
                <h6>
                  <b> </b>
                </h6>
                </Link>
              </td>
             
            
            
            </tr>
            <tr>
          </tr>
          </tbody>
        </table>{" "}
        <br />
        <br />
        <br />
        <br />
        {/* ================================== */}
        <h5 style={{ textAlign: "center", color: "Brown" }}>
          <b>
            {" "}
            Bachelor of Arts Bachelor of Education
          </b>
        </h5>
        <br />
        <table style={{ marginLeft: "15%", textAlign: "center" }}>
          <thead style={{ backgroundColor: "SteelBlue" }}>
            <tr>
            <th scope="col">
                <h6>
                  <b>S.No.</b>
                </h6>
              </th>
              <th scope="col">
                <h6>
                  <b>COURSE</b>
                </h6>
              </th>
              <th colSpan={5} scope="colgroup">
                <h6>
                <b>Syllabus</b>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th  scope="rowgroup">
              1
              </th>
              <th style={{color:"#780000"}}  rowSpan={2}> <b>Bachelor of Arts Bachelor of Educatione </b> </th>
         
              <td >
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/CBCS%20SYLLABUS/Syllabus%20Education/SYBA_Bednrr_I,IISem.pdf">
                <h6>
                  <b>I-Year</b>
                </h6>{" "}</Link>
               
              </td>
              <td>
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/CBCS%20SYLLABUS/Syllabus%20Education/SYBABed_III_IV.pdf">
                <h6>
                  <b>II-Year</b>
                </h6></Link>
               
              </td>
              <td>
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/CBCS%20SYLLABUS/Syllabus%20Education/SYBABed_V_VI.pdf">
                <h6>
                  <b>III-Year</b>
                </h6>
                </Link>
              </td>
              <td >
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/BA_BED_syllabus_VIII.pdf">
                <h6>
                  <b>IV-Year</b>
                </h6></Link>
              
              </td>
           
            </tr>
            <tr>
              <th scope="row"></th>
              <td  scope="rowgroup">
               
                  {" "}
                  <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/babed_Is_year__Ist_Sem_syllabus_2021--22_(1)_09072022_1214.pdf">
                  <span>
                  {" "}
                  <b> I Sem 2021-22</b>
                </span>{" "}</Link>
                 
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/babed_syllabus_II_sem_2021-22_final_09072022_1214.pdf">
                <span>
                  <b> II  Sem 2021-22 </b>
                </span>{" "}
                </Link>
               {" "}
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/babed1_04112022_0415.pdf">
                <span>
                  {" "}
                  <b>  III Sem 2022-23</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/babed%20II%20year%20syllabus2022-2023%20final..pdf">
                <span>
                  <b> IV Sem 2022-23</b>
                </span>{" "}</Link>
               
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/syllabus%202023-24/babed%20III%20year%20V%20sem%20syllabus.pdf">
                <span>
                  {" "}
                  <b> V Sem 2022-23  </b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/BABED6.pdf">
                <span>
                  <b>VI  Sem 2022-23</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <span>
                  {" "}
                  <b>  </b>
                </span>{" "}
                <br />
              </td>
              
            </tr>

        
     </tbody>
        </table>{" "}
        <br />
        <br />
        
      </div>
<Footerpage />
    </>
  );
}

export default Educationsyllabus;

