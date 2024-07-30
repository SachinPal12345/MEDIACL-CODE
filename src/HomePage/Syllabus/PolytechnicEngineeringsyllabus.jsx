import React from "react";
import Nav from "../Nav";
import { Link } from "react-router-dom";
import Footerpage from "../Footerpage";

function PolytechnicEngineeringsyllabus () {
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
        <h2>Polytechnic Engineering </h2>
        <br />
        {/* <h4 style={{ textAlign: "center", textDecoration: "underline" }}>
          <b>Syllabus for Polytechnic Engineering</b>
        </h4>{" "} */}
        <br />
        <h5 style={{ textAlign: "center", color: "Brown" }}>
          <b>
          Syllabus : Diploma Engineering (Polytechnic)
          </b>
        </h5>
        
<br/>

        <table style={{ marginLeft: "15%", textAlign: "center" }}>
          <thead style={{ backgroundColor: "SteelBlue" }}>
            <tr>
              <th scope="col">
                <h6>
                  <b>COURSE</b>
                </h6>
              </th>
              <th scope="col">
                <h6>
                  <b>BRANCH</b>
                </h6>
              </th>
              <th colSpan={4} scope="colgroup">
                <h6>
                  <b>
                    {" "}
                    SEMESTER
                  </b>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <th style={{color:"#221e22"}} rowSpan={20}><b>  DIPLOMA ENGINEERING </b></th>
          
              <th></th>
              <td style={{ backgroundColor: "MediumAquaMarine" }}>
                <h6>
                  <b>1 Year</b>
                </h6>{" "}
              </td>
              <td style={{ backgroundColor: "MediumAquaMarine" }}>
                <h6>
                  <b>2 Year</b>
                </h6>
              </td>
              <td style={{ backgroundColor: "MediumAquaMarine" }}>
                <h6>
                  <b>3 Year</b>
                </h6>
              </td>
              <td style={{ backgroundColor: "MediumAquaMarine" }}>
                <h6>
                  <b>4 Year</b>
                </h6>
              </td>
            </tr>
            <tr>
           
            <th style={{color:"#780000"}}> <b>Chemical Engineering</b> </th>
             
              <td rowSpan={20}>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/syllabus%202023-24/POLY%20SSS.pdf">
                <span>
                  {" "}
                  <b>Common to all I Sem & Sem </b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "">
                <span>
                  {" "}
                  <b> </b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "">
                <span>
                  <b> </b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "">
                <span>
                  {" "}
                  <b></b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "">
                <span>
                  <b></b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <span>
                  {" "}
                  <b> </b>
                </span>{" "}
                <br />
                <span>
                  <b></b>
                </span>{" "}
              </td>
            </tr>

            <tr>
              
              <th style={{color:"#780000"}}> <b>Civil Engineering</b> </th>
              <td>
                {" "}
                <Link to = "">
                <span>
                  {" "}
                  <b> </b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "">
                <span>
                  <b></b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "">
                <span>
                  {" "}
                  <b> </b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "">
                <span>
                  <b></b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <span>
                  {" "}
                  <b> </b>
                </span>{" "}
                <br />
                <span>
                  <b></b>
                </span>{" "}
              </td>
            </tr>

            <tr>
             
              <th style={{color:"#780000"}}> <b>Computer Science And Engineering</b> </th>
              <td>
                {" "}

                <Link to = "">
                <span>
                  {" "}
                  <b> </b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "">
                <span>
                  <b> </b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "">
                <span>
                  {" "}
                  <b></b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "">
                <span>
                  <b></b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <span>
                  {" "}
                  <b> </b>
                </span>{" "}
                <br />
                <span>
                  <b></b>
                </span>{" "}
              </td>
            </tr>

            <tr>
             
              <th style={{color:"#780000"}}> <b>Electrical Engineering</b> </th>
              <td>
                {" "}
                <Link to = "">
                <span>
                  {" "}
                  <b> </b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "">
                <span>
                  <b> </b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "">
                <span>
                  {" "}
                  <b> </b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "">
                <span>
                  <b></b>
                </span>{" "}
                </Link>
               
              </td>
              <td>
                {" "}
                <span>
                  {" "}
                  <b> </b>
                </span>{" "}
                <br />
                <span>
                  <b></b>
                </span>{" "}
              </td>
            </tr>


            <tr>
              <th style={{color:"#780000"}}> <b>Machanical Engineering</b> </th>
              <td>
                {" "}
                <Link to = "">
                <span>
                  {" "}
                  <b> </b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "">
                <span>
                  <b> </b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "">
                <span>
                  {" "}
                  <b></b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "">
                <span>
                  <b></b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <span>
                  {" "}
                  <b> </b>
                </span>{" "}
                <br />
                <span>
                  <b></b>
                </span>{" "}
              </td>
            </tr>
            

           
              
            
          </tbody>
        </table>


        
      </div>

      <Footerpage />
    </>
  );
}

export default PolytechnicEngineeringsyllabus;


