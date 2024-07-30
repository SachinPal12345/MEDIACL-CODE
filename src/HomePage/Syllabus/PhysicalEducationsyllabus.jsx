


import React from "react";
import Nav from "../Nav";

import { Link } from "react-router-dom";
import Footerpage from "../Footerpage";

function PhysicalEducationsyllabus() {
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
        <h2>Physical Education </h2>
        <br />
        <h5 style={{ textAlign: "center", color: "Brown" }}>
          <b>
          Bachelor of Physical Education (B.P.Ed.)
          </b>
        </h5>{" "}
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
              <th colSpan={5} scope="colgroup">
                <h6>
                  <b>
                    {" "}
                    Syllabus
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
              <th style={{color:"#780000"}}> <b>Bachelor of Physical Education (CBCS)</b> </th>
           
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/bped_cbcs.pdf">B.P.Ed Two Year Course (CBCS) </Link></th>
             </tr>

             <tr>
              <th scope="rowgroup">
                2
              </th>
              <th style={{color:"#780000"}}> <b>Bachelor of Physical Education (Non- CBCS)</b> </th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBPEDG.pdf">B.P.Ed Two Year Course</Link> </th>
             </tr>
      </tbody>
        </table>{" "}
        <br />
        <br />

    {/* =============================================== */}


    <h5 style={{ textAlign: "center", color: "Brown" }}>
          <b>
          Bachelor of Physical Education and Sports (BPES) 
          </b>
        </h5>{" "}
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
              <th colSpan={5} scope="colgroup">
                <h6>
                  <b>
                    {" "}
                    Syllabus
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
              <th style={{color:"#780000"}}> <b>Bachelor of Physical Education and Sports</b> </th>
              <td >
                <h6>
                  <b><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBPE%20_I.pdf">B.P.Es I Year</Link></b>
                </h6>{" "}
              </td>
              <td>
                <h6>
                  <b><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBPE%20_II.pdf">B.P.Es II Year</Link></b>
                </h6>
              </td>
              <td>
                <h6>
                  <b><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBPE%20_III.pdf">B.P.Es III Yea</Link>r</b>
                </h6>
              </td>
            </tr>
          


            <tr>
              <th scope="rowgroup">
                2
              </th>
              <th style={{color:"#780000"}}> <b> Bachelor of Physical Education and Sports (New)</b> </th>
              <td >
                <h6>
                  <b> <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/Bpes_syllabus_new12-04-19r.pdf"> Syllabus of BPES</Link> </b>
                </h6>{" "}
              </td>
              <td>
                <h6>
                  <b></b>
                </h6>
              </td>
              <td>
                <h6>
                  <b></b>
                </h6>
              </td>
            </tr>
      </tbody>
        </table>{" "}
      </div> <br/>

     <Footerpage />
    </>
  );
}

export default PhysicalEducationsyllabus;



