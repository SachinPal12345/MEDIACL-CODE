

import React from "react";
import Nav from "../Nav";

import {Link} from "react-router-dom"
import Footerpage from "../Footerpage";

function Paramedicalsyllabus() {
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
        <h2>Paramedical </h2>
        <br />
        <br/>
       
        {/* ================================== */}
        <h4 style={{ textAlign: "center", color: "Brown" }}>
          <b>
          <span><Link to = "">New Scheme (With effect from 2016-17)</Link></span>
         <br/> <br/>
         <span><Link to = "">New Scheme (With effect of 2017-18)</Link></span>
          </b>
        </h4>
        <br />
        <br/>
        <br/>


        
      </div>

    <Footerpage />
    </>
  );
}

export default Paramedicalsyllabus;

