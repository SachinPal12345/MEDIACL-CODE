import React from "react";
import Nav from "../Nav";
import { Link } from "react-router-dom";
import Footerpage from "../Footerpage";

function BEsyllabus() {
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
        <h2>B.E. Syllabus </h2>
        <br />
        <h4 style={{ textAlign: "center", textDecoration: "underline" }}>
          <b> Syllabus for Bachelor of engineering</b>
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
                    SEMESTER <br />
                    (As pre AICTE Curriculum)
                  </b>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <th rowSpan={20} style={{color:"#221e22"}}><b>B.E.</b></th>
             
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
            <th style={{color:"#780000"}} > <b> Aeronautical Engineering </b> </th>  
              <td>
                {" "}

                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/I_B_Syllabus.pdf">
                <span>
                  {" "}
                  <b> 1 Sem</b>
                </span>{" "}
                </Link>
                <br />
                
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/II_B_Syllabus.pdf">
                <span>
                  <b> 2 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/AE_III_SYLLABUS.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/AE_IV_SYLLABUS.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYAE_V_D2020.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link >
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYAE_VI_D2020.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/AAICTE_BE_AE_VII_SY.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link >
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/AAICTE_BE_AE_VIII_SY.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
            <th style={{color:"#780000"}} > <b> Chemical Engineering </b> </th>  
           
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/I_A_Syllabus.pdf">
                <span>
                  {" "}
                  <b> 1 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/II_A_Syllabus.pdf">
                <span>
                  <b> 2 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/CM_III_SYLLABUS.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/CM_IV_SYLLABUS.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYCM_V_D2020.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYCM_VI_D2020.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/AAICTE_BE_CM_VII_SY.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/AAICTE_BE_CM_VIII_SY.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>

            <tr>
             
              <th style={{color:"#780000"}} > <b> Civil Engineering </b> </th> 
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/I_B_Syllabus.pdf">
                <span>
                  {" "}
                  <b> 1 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link  to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/II_B_Syllabus.pdf">
                <span>
                  <b> 2 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/CE_III_SYLLABUS.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/CE_IV_SYLLABUS.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYCE_V_D2020.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYCE_VI_D2020.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/AAICTE_BE_CE_VII_SY.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/AAICTE_BE_CE_VIII_SY.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
             
              <th style={{color:"#780000"}} > <b> Computer Science and Engineering </b> </th> 
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/I_B_Syllabus.pdf">
                <span>
                  {" "}
                  <b> 1 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/II_B_Syllabus.pdf">
                <span>
                  <b> 2 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/CSE_III_SYLLABUS.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link >
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/CSE_IV_SYLLABUS.pdf">
                <span>
                
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
               <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYCS_V_D2020.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYCS_VI_D2020.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>

              <td>
                {" "}
               <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/AAICTE_BE_CS_VII_SY.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/AAICTE_BE_CS_VIII_SY.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
           
              <th style={{color:"#780000"}} > <b> Electrical Engineering </b> </th> 
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/I_A_Syllabus.pdf">
                <span>
                  {" "}
                  <b> 1 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link  to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/II_A_Syllabus.pdf">
                <span>
                  <b> 2 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link  to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/EE_III_SYLLABUS.pdf"> 
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link  to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/EE_IV_SYLLABUS.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link  to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEX_V_D2020R.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link >
                <br />
                <Link  to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEE_VI_D2020R.pdf"> 
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link  to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/AIEE-7.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link >
                <br />
                <Link  to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/AIEE-8.pdf"> 
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
            <th style={{color:"#780000"}} > <b>Electrical and Electronics Engineering </b> </th> 
            
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/I_A_Syllabus.pdf">
                <span>
                  {" "}
                  <b> 1 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/II_A_Syllabus.pdf">
                <span>
                  <b> 2 Sem</b>
                </span>{" "}
                </Link >
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/EEE_III_SYLLABUS.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/EEE_IV_SYLLABUS.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEX_V_D2020R.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEX_VI_D2020R.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/AAICTE_BE_EX_VII_SY.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/AAICTE_BE_EX_VIII_SY.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
            <th style={{color:"#780000"}} > <b>Electronics and Communication </b> </th> 
              
              <td>
                {" "}
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/I_A_Syllabus.pdf">
                <span>
                  {" "}
                  <b> 1 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/II_A_Syllabus.pdf">
                <span>
                  <b> 2 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/ECE_III_SYLLABUS.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/ECE_IV_SYLLABUS.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEC_V_D2020.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEC_VI_D2020.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>

              <td>
                {" "}
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/AAICTE_BE_EC_VII_SY.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/AAICTE_BE_EC_VIII_SY.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
            <th style={{color:"#780000"}} > <b>Electronics and Instrumentation</b> </th> 
          

              <td>
                {" "}
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/I_B_Syllabus.pdf">
                <span>
                  {" "}
                  <b> 1 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/II_B_Syllabus.pdf">
                <span>
                  <b> 2 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/EI_III_SYLLABUS.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/EI_IV_SYLLABUS.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                <Link  to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEI_V_D2020.pdf">
                {" "}
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link  to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEI_VI_D2020.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                <Link  to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/AAICTE_BE_EI_VII_SY.pdf">
                {" "}
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link  to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/AAICTE_BE_EI_VIII_SY.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
           
              <th style={{color:"#780000"}} > <b>Information Technology</b> </th> 
              <td>
                {" "}
                <Link  to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/I_A_Syllabus.pdf">
                <span>
                  {" "}
                  <b> 1 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link  to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/II_A_Syllabus.pdf">
                <span>
                  <b> 2 Sem</b>
                </span>{" "}
                </Link>
              </td>
             
              <td>
                {" "}
                <Link  to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/IT_III_SYLLABUS.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link  to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/IT_IV_SYLLABUS.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link  to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SyllabusIIIsem/syllabus%202022/BE_IT%20SYLLABUS%20V%20TH%20SEM.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link  to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SyllabusIIIsem/syllabus%202022/BE_IT%20SYLLABUS%20VI%20TH%20SEM.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/Syllabus%20BE%20VIII/BE_IT%20SYLLABUS%20VII%20TH%20SEM.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link  to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/Syllabus%20BE%20VIII/BE_IT%20SYLLABUS%20VIII%20TH%20SEM.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              
              <th style={{color:"#780000"}} > <b>Mechanical Engineering</b> </th> 
              <td>
                {" "}
                <Link  to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/I_B_Syllabus.pdf">
                <span>
                  {" "}
                  <b> 1 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link  to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/II_B_Syllabus.pdf">
                <span>
                  <b> 2 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link  to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/ME_III_SYLLABUS.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link  to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/ME_IV_SYLLABUS.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link  to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYME_V_D2020.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link  to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYME_VI_D2020.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>

              <td>
                {" "}
                <Link  to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/AAICTE_BE_ME_VII_SY.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link  to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/AAICTE_BE_ME_VIII_SY.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th style={{color:"#780000"}} > <b>Mining Engineering</b> </th> 
              
              <td>
                {" "}
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/I_B_Syllabus.pdf">
                <span>
                  {" "}
                  <b> 1 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/II_B_Syllabus.pdf">
                <span>
                  <b> 2 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/MI_III_SYLLABUS.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/MI_IV_SYLLABUS.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYMI_V_D2020.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYMI_VI_D2020.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>

              <td>
                {" "}
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/AAICTE_BE_MI_VII_SY.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/AAICTE_BE_MI_VIII_SY.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
              
            </tr>
          </tbody>
        </table>{" "}
        <br />
        <br />
        <br />
        <br />


          {/* {=========================================} */}
          <h5 style={{ textAlign: "center", color: "Brown" }}>
          <b> 
          Choice Based Credit System(CBCS) with effect from academic session 2016-17</b>
        </h5>
        <br />
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
                    SEMESTER
                    <br />
                    (Non-CBCS)
                  </b>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <th rowSpan={20} style={{color:"#221e22"}}><b>B.E.</b></th>
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
            
              <th style={{color:"#780000"}} > <b>Aeronautical Engineering</b> </th> 
         
              <td rowSpan={20} scope="rowgroup">
                <b>
                  {" "}
               <span>
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/CBCS%20SYLLABUS/BEI_CBCS_SYL.pdf">I Semester and</Link></span>    <br />
               <span><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/CBCS%20SYLLABUS/BEI_CBCS_SYL.pdf" >II Semester Non-CBCS(Old scheme)<br/> Common to All{" "}</Link></span>
                </b>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYAEC_III.pdf"></Link>
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYAE_IV.pdf"></Link>
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBE_AE_%205th.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBE_AE_%206th.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBEAE_CBCS7thSEM..pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBEAE_CBCS8thSEM..pdf"></Link>
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
              </td>
            </tr>
            <tr>
           
              <th style={{color:"#780000"}} > <b>Chemical Engineering</b> </th> 

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYCMC_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYCH_IV.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBE_CM_%205th.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBE_CM_%206th.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBECME_CBCS7thSEM..pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBECME_CBCS8thSEM..pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>

            <tr>
             
              <th style={{color:"#780000"}} > <b>Civil Engineering</b> </th> 

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYCEC_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYCE_IV.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBE_CE_%205th.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBErr_CE_%206th.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBECE_CBCS7thSEM..pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBECE_CBCS8thSEM..pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
          
              <th style={{color:"#780000"}} > <b>Computer Science and Engineering</b> </th> 


              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYCSC_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYCS_IV.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBE_CSEr_%205th.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBE_CSEr_%206th.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBECS_CBCS7thSEM..pdf">
                <span>
                  {" "}
                  <b>  7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBECS_CBCS8thSEM..pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
          <th style={{color:"#780000"}} > <b>Electrical Engineering</b> </th> 
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEEC_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link  to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEE_IV.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link  to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBE_EE_%205th.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link  to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBE_EE_%206th.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link  to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBEEE_CBCS7thSEM..pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link  to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBEEE_CBCS8thSEM..pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              
              <th style={{color:"#780000"}} > <b>Electrical and Electronics Engineering</b> </th> 
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEXC_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEX_IV.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBE_EX_%205th.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBE_EX_%206th.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBEEX_CBCS7thSEM..pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBEEX_CBCS8thSEM..pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
            
              <th style={{color:"#780000"}} > <b> Electronics and Communication </b> </th> 

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYECC_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEC_IV.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBE_EC_%205th.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBE_ECrn_%206th.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBEEC_CBCS7thSEM..pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBEEC_CBCS8thSEM..pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              
              <th style={{color:"#780000"}} > <b> Electronics and Instrumentation </b> </th> 

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEIC_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEI_IV.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBE_EIrr_%205th.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBE_EIrr_%206th.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBEEI_CBCS7thSEM..pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBEEI_CBCS8thSEM..pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
           
              <th style={{color:"#780000"}} > <b>Information Technology </b> </th> 


              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/ITC%20III%20SEM%20SYLLABUS.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/ITC%20IV%20SEM%20SYLLABUS.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBE_IT_%205th.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBE_ITr_%206th.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBEIT_CBCS7thSEM..pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBEIT_CBCS8thSEM..pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
            <th style={{color:"#780000"}} > <b>Mechanical Engineering </b> </th> 
            

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYMEC_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYME_IVr.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBE_ME_%205th.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/BE_ME_VI_Sem_Syllabus_CBCS.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBEME_CBCS7thSEM..pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBEME_CBCS8thSEM..pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
            
              <th style={{color:"#780000"}} > <b>Mining Engineering </b> </th> 

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYMIC_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYMI_IV.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBE_MI_5thR.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBE_MIr_%206th.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBEMI_CBCS7thSEM..pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBEMI_CBCS8thSEM..pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
        <br />
        <br />


        {/* ================================== */}
        <h5 style={{ textAlign: "center", color: "Brown" }}>
          <b>
            {" "}
            Non CBCS (for 2014 and 2015 admitted students)
          </b>
        </h5>
        <br />
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
                    SEMESTER <br />
                    (CBCS)
                  </b>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
         
            <tr>
            <th rowSpan={20} style={{color:"#221e22"}}><b>B.E.</b></th>
              
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
            
              <th style={{color:"#780000"}} > <b>Aeronautical Engineering </b> </th> 
              <td rowSpan={20} scope="rowgroup">
                <b>
                  {" "}
                 <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SY_BE_Inew.pdf"> <span> I Semester and</span><br /></Link> 
               <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SY_BE_Inew.pdf">  <span>II Semester Common to All{" "}</span> </Link>  
                </b>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/AERO.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link >
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/AER_IV.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/AEV.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/AEVISY.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYAE_VII.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYAE_VIII.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
           
              <th style={{color:"#780000"}} > <b>Chemical Engineering </b> </th> 

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYCH_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBECM.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/CMV.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/CMVIS.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYCM_VII.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYCH_VIII.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>

            <tr>
         
              <th style={{color:"#780000"}} > <b>Civil Engineering </b> </th> 

              <td>
                {" "}
                <Link  to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYCE_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/CE4SEM.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/CEV.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/CEVISY.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYCE_VII.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYCE_VIII.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
             
              <th style={{color:"#780000"}} > <b>Computer Science and Engineering </b> </th> 

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYCSE_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/CSE4.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
            
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/CSEV.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/CSVISY.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
               
              <td>
                {" "}
                <Link to = "https://sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYCS_VII.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYCS_VIII.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
          
              <th style={{color:"#780000"}} > <b>Electrical Engineering </b> </th> 

              <td>
                {" "}
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEE_III.pdf">  
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
              
                <br />
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEE_III.pdf">  
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/EEV.pdf"> 
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/EEVISY.pdf">  
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEE_VII.pdf"> 
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEE_VIII.pdf">  
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              
              <th style={{color:"#780000"}} > <b>Electrical and Electronics Engineering </b> </th> 

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEX_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/EX4SEM.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/EXV.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/EXVISY.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEX_VII.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEX_VIII.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
             
              <th style={{color:"#780000"}} > <b>Electronics and Communication </b> </th> 

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEC_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/EC4SEM.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/ECV.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/ECVISY.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEC_VII.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEC_VIII.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
            
              <th style={{color:"#780000"}} > <b>Electronics and Instrumentation </b> </th> 

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEI_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/EI4SEM.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/EIV.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/EIVISY.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEI_VII.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEI_VIII.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
            
              <th style={{color:"#780000"}} > <b>Information Technology </b> </th> 
            <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYIT_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/BE_IV/%20SY_BEIT_IV.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/ITV.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/ITVISY.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYIT_VII.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYIT_VIIIr.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
             
              <th style={{color:"#780000"}} > <b>Mechanical Engineering </b> </th> 

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYME_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/ME4SEM.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/ME.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/MEVISYL.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYME_VII.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYME_VIII.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
       
              <th style={{color:"#780000"}} > <b>Mining Engineering </b> </th> 

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYMIN_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBEMIN.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/MIV_SY.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/MIVI_SY.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYMI_VII.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYMI_VIII.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
          </tbody>
        </table>{" "}
        <br />
        <br />
        <br />
        <br />
      
   </div>

<Footerpage />
    </>
  );
}

export default BEsyllabus;

