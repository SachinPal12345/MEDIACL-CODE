

import React from "react";
import Nav from "../Nav";
import {Link} from "react-router-dom"
import Footerpage from "../Footerpage";

function MBAsyllabus() {
  return (
    <>
    <Nav/>
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
        <h2>MBA </h2>
        <br />
        <h4 style={{ textAlign: "center", textDecoration: "underline" }}>
          <b>Masters of Business Administration</b>
        </h4>{" "}
        <br />
        <h5 style={{ textAlign: "center", color: "Brown" }}>
          <b>
            As per AICTE Curriculam with effect from academic session 2022-23
          </b>
        </h5>
        <br />
        <table style={{ marginLeft: "15%", textAlign: "center" }}>
          <thead style={{ backgroundColor: "SteelBlue" }}>
            <tr>
              <th scope="col">
                <h6>
                  <b>S.NO.</b>
                </h6>
              </th>
              <th scope="col">
                <h6>
                  <b>Course</b>
                </h6>
              </th>
              <th colSpan={4} scope="colgroup">
                <h6>
                  <b>
                    {" "}
                    Scheme
                  </b>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="rowgroup">
                1
              </th>
              <th style={{color:"#780000"}}> <b>MBA (CBCS)( Wef. Academic Session 2016-17)</b> </th>
              <td >
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/CBCS%20SYLLABUS/Syllabus%20MBA/SYMBA_ICBCS.pdf">
                <h6>
                  <b>First Semester </b>
                </h6>{" "}
                </Link>
              </td>
              <td>
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/CBCS%20SYLLABUS/MBACII_SYL.pdf">
                <h6>
                  <b>Second Semester</b>
                </h6>
                </Link>
              </td>
              <td>
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/CBCS%20SYLLABUS/Syllabus%20MBA/SYMBACnr_III_R.pdf">
                <h6>
                  <b>Third Semester </b>
                </h6>
                </Link>
              </td>
              <td>
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/CBCS%20SYLLABUS/Syllabus%20MBA/SYMBAnr_IV_R.pdf">
                <h6>
                  <b>Fourth Semester </b>
                </h6>
                </Link>
              </td>
            </tr>
          


            <tr>
              <th scope="rowgroup">
                2
              </th>
              <th style={{color:"#780000"}}> <b>MBA Non CBCS (Old Scheme) </b> </th>
              <td >
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SY_MBA_I.pdf">
                <h6>
                  <b>First Semester </b>
                </h6>{" "}
                </Link>
              </td>
              <td>
                <Link to = "">
                <h6>
                  <b>Second Semester </b>
                </h6>
                </Link>
              </td>
              <td>
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SyllabusIIIsem/Syllabus2015/Management/MBAIIISEMSS.pdf"> 
                <h6>
                  <b>Third Semester </b>
                </h6>
                </Link>
              </td>
              <td>
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SyllabusIIIsem/Syllabus2015/Management/MBA4Syl.pdf"> 
                <h6>
                  <b>Fourth Semester </b>
                </h6>
                </Link>
              </td>
            </tr>


            <tr>
              <th scope="rowgroup">
                3
              </th>
              <th style={{color:"#780000"}}> <b>Part Time </b> </th>
           
              <td >
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SY_MBAPT_I.pdf">
                <h6>
                  <b>First Semester Syllabus   </b>
                </h6>{" "}
                </Link>
              </td>
              <td>
                <Link to = "">
                <h6>
                  <b>Second Semester Syllabus</b>
                </h6>
                </Link>
              </td>
              <td>
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/6%20sem%20syllabus/MBAP_V.pdf">
                <h6>
                  <b>Fifth Semester Syllabus</b>
                </h6>
                </Link>
                
              </td>
              <td>
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/6%20sem%20syllabus/MBAP_VI.pdf"> 
                <h6>
                  <b>Six Semester Syllabus</b>
                </h6>
                </Link>
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

export default MBAsyllabus;




