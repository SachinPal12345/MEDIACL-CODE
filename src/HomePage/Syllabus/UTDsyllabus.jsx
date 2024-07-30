import React from "react";
import Nav from "../Nav";
import { Link } from "react-router-dom";
import Footerpage from "../Footerpage";

function UTDsyllabus() {
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
        <h2> UTD </h2>
        <br />
        <h4 style={{ textAlign: "center", textDecoration: "underline" }}>
          <b>Syllabus for UTD</b>
        </h4>{" "}
        <br />
        {/* ================================== */}
        <h5 style={{ textAlign: "center", color: "Brown" }}>
          <b>
            {" "}
            New Curriculum Session 2023-24 (THIRD YEAR)  Yearly <br/>
          राष्ट्रीय शिक्षा नीति के परिप्रेक्ष्य में सत्र 2023-24 से
          </b>
        </h5>
        <br />
        <table style={{ marginLeft: "15%", textAlign: "center" }}>
          <thead style={{ backgroundColor: "SteelBlue" }}>
            <tr>
              <th scope="col">
                <h6>
                  <b>Course/Degree</b>
                </h6>
              </th>
              <th colSpan={5} scope="colgroup">
                <h6>
                  <b> 	
                    SEMSTERS</b>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <th style={{color:"#780000"}}> <b>BA</b> </th>
              {/* <th scope="rowgroup">BA</th> */}
              <th>
                <Link to = "">  Foundation course </Link> </th>
              <th><Link to = "">Major subject</Link></th>
              <th><Link to = "">Minor Subject</Link></th>
              <th><Link to = ""> Elective Subject</Link></th>
              <th><Link to = ""> Vocational Subject</Link></th>
            </tr>

            <tr>
            <th style={{color:"#780000"}}> <b>B.Com.</b> </th>
              {/* <th scope="rowgroup">B.Com.</th> */}

              <th>
                <Link to = "">    Foundation course </Link> </th>
              <th><Link to = "">Major subject</Link></th>
              <th><Link to = "">Minor Subject</Link></th>
              <th><Link to = "">Elective Subject</Link></th>
             <th><Link to = ""> Vocational Subject</Link></th>
            </tr>

            <tr>
            <th style={{color:"#780000"}}> <b>B.Sc.</b> </th>
             

              <th>
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/syllabus%202023-24/B%20SC%20NEP%203%20YEAR/Foundation%201.pdf">    Foundation course </Link> </th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/syllabus%202023-24/B%20SC%20NEP%203%20YEAR/MAJAR%201.pdf">Major subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/syllabus%202023-24/B%20SC%20NEP%203%20YEAR/minor1.pdf">Minor Subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/syllabus%202023-24/B%20SC%20NEP%203%20YEAR/ELECTIVE%201.pdf"> Elective Subject</Link></th>
            <th><Link to = "h"> Vocational Subject</Link></th>
            </tr>

            <tr>
              {/* <th scope="rowgroup">BBA</th> */}
              <th style={{color:"#780000"}}> <b>BBA</b> </th>
              <th>
                <Link to = "">    Foundation course </Link> </th>
              <th><Link to = "">Major subject</Link></th>
              <th><Link to = "">Minor Subject</Link></th>
              <th><Link to = "">Elective Subject</Link></th>
              <th><Link to = ""> Vocational Subject</Link></th>   
            
            </tr>

            <tr>
              {/* <th scope="rowgroup">BCA</th> */}
              <th style={{color:"#780000"}}> <b>BCA</b> </th>
              <th>
                <Link to = "">    Foundation course </Link> </th>
              <th><Link to = "">Major subject</Link></th>
              <th><Link to = "">Minor Subject</Link></th>
              <th><Link to = "">Elective Subject</Link></th>
              <th><Link to = ""> Vocational Subject</Link></th>
            </tr>
          </tbody>
        </table>{" "}
        <br />
        <br />
        <br />

          {/* ================================== */}
          <h5 style={{ textAlign: "center", color: "Brown" }}>
          <b>
            {" "}
            New Curriculum Session 2022-23 SEMESTER SYSTEM( UG Courses)  3rd Semester <br/>
             राष्ट्रीय शिक्षा नीति के परिप्रेक्ष्य में सत्र 2022-23 से
          </b>
        </h5>
        <br />
        <table style={{ marginLeft: "15%", textAlign: "center" }}>
          <thead style={{ backgroundColor: "SteelBlue" }}>
            <tr>
              <th scope="col">
                <h6>
                  <b>Course/Degree</b>
                </h6>
              </th>
              <th colSpan={5} scope="colgroup">
                <h6>
                  <b> 	
                    SEMSTERS</b>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <th style={{color:"#780000"}}> <b>BA</b> </th>
             
              <th rowSpan={20}><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/syllabus%202023-24/nep2023-24/ba3rd/vocational%20ba%203rd.pdf">AEC <br/>(Ability Enhancement Courses )</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/syllabus%202023-24/nep2023-24/ba3rd/ba%20major%203rd.pdf">Major subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/syllabus%202023-24/nep2023-24/ba3rd/ba%20minor%203rd.pdf">Minor Subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/syllabus%202023-24/nep2023-24/ba3rd/ba%203rd%20Elective.pdf">   Generic Elective Subject</Link></th>
              
            </tr>

            <tr>
            
              <th style={{color:"#780000"}}> <b>B.Com.</b> </th>
            
              <th><Link to = "">Major subject</Link></th>
              <th><Link to = "">Minor Subject</Link></th>
              <th><Link to = "">  Generic Elective Subject</Link></th>
             
            </tr>

            <tr>
             
              <th style={{color:"#780000"}}> <b>B.Sc.</b> </th>
            
             
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/syllabus%202023-24/nep2023-24/iii%20sem%20major.pdf">Major subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/syllabus%202023-24/nep2023-24/3%20sem%20minor.pdf">Minor Subject</Link></th>
              <th><Link to = "">   Generic Elective Subject</Link></th>
            
            </tr>

            <tr>
              <th style={{color:"#780000"}}> <b>BBA</b> </th>

              
              <th><Link to = "">Major subject</Link></th>
              <th><Link to = "">Minor Subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/Syllabus2022/Elective.pdf">  Generic Elective Subject</Link></th>
                 
            
            </tr>

            <tr>
              <th style={{color:"#780000"}}> <b>BCA</b> </th>

             
              <th><Link to = "">Major subject</Link></th>
              <th><Link to = "">Minor Subject</Link></th>
              <th><Link to = "">  Generic Elective Subject</Link></th>
              
            </tr>
          </tbody>
        </table>{" "}
        <br />
        <br />
        <br />


    {/* ================================== */}
    <h5 style={{ textAlign: "center", color: "Brown" }}>
          <b>
            {" "}
            New Curriculum Session 2022-23 SEMESTER SYSTEM ( UG Courses)  Second Semester <br/>
            राष्ट्रीय शिक्षा नीति के परिप्रेक्ष्य में सत्र 2022-23 से
          </b>
        </h5>
        <br />
        <table style={{ marginLeft: "15%", textAlign: "center" }}>
          <thead style={{ backgroundColor: "SteelBlue" }}>
            <tr>
              <th scope="col">
                <h6>
                  <b>Course/Degree</b>
                </h6>
              </th>
              <th colSpan={5} scope="colgroup">
                <h6>
                  <b> 	
                    SEMSTERS</b>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
             
              <th style={{color:"#780000"}}> <b>BA</b> </th>
              <th rowSpan={20}><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/NEP/second%20sem/F.D.pdf">AEC <br/>(Ability Enhancement Courses )</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/NEP/second%20sem/BA/MAJOR.pdf">Major subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/NEP/second%20sem/BA/MINAR.pdf">Minor Subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/NEP/second%20sem/BA/ELECTIVE%202%20SEM.pdf">   Generic Elective Subject</Link></th>
              
            </tr>

            <tr>
            <th style={{color:"#780000"}}> <b>B.Com.</b> </th>
       

            
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/NEP/second%20sem/B.COM%202%20SEM%20MAJOR%20.pdf">Major subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/NEP/second%20sem/B.COM%202%20SEM%20MINOR.pdf">Minor Subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/NEP/second%20sem/b.com%20elective%202%20sem.pdf">  Generic Elective Subject</Link></th>
             
            </tr>

            <tr>
              <th style={{color:"#780000"}}> <b>B.Sc.</b> </th>

            
             
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/NEP/second%20sem/b.sc/MAJOR%20II%20SEM%20NEP.pdf">Major subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/NEP/second%20sem/b.sc/MINOR%20II%20SEM%20NEP.pdf">Minor Subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/NEP/second%20sem/b.sc/elective%20ii%20sem.pdf">   Generic Elective Subject</Link></th>
            
            </tr>

            <tr>
              <th style={{color:"#780000"}}> <b>BBA</b> </th>

              
              <th><Link to = "">Major subject</Link></th>
              <th><Link to = "">Minor Subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/Syllabus2022/Elective.pdf">  Generic Elective Subject</Link></th>
                 
            
            </tr>

            <tr>
              <th style={{color:"#780000"}}> <b>BCA</b> </th>

             
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/NEP/second%20sem/BCA/MAJOR%20BCA%20II%20Sem.pdf">Major subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/NEP/second%20sem/BCA/MINOR%20BCA%20II%20Sem.pdf">Minor Subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/NEP/second%20sem/BCA/ELECTIVE%20BCA%20II%20Sem.pdf">  Generic Elective Subject</Link></th>
              
            </tr>
          </tbody>
        </table>{" "}
        <br />
        <br />
        <br />
  {/* {=========================================} */}
        <h5 style={{ textAlign: "center", color: "Brown" }}>
          <b>  Course -M.Sc. (w.e.f. 2022-23)</b>
        </h5>
        <br />
        <table style={{ marginLeft: "15%", textAlign: "center" }}>
          <thead style={{ backgroundColor: "SteelBlue" }}>
            <tr>
              <th colSpan={2} scope="col">
                <h6>
                  <b>Course/Degree</b>
                </h6>
              </th>
              <th colSpan={5} scope="colgroup">
                <h6>
                  <b> Semster</b>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* <th rowSpan={20}>M.SC</th> */}
              <th rowSpan={20} style={{color:"#221e22"}}> <b>M.SC</b> </th>
              <th style={{color:"#780000"}}> <b>MATHEMATICS</b> </th>
              
              {/* <th scope="rowgroup">MATHEMATICS</th> */}
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/Math/M.Sc.%28Mathematics%29%20Syllabus%20%28I%29%20Semester.pdf">I Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/Math/M.Sc.%28Mathematics%29%20Syllabus%20%28II%29%20Semester.pdf">II Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/Math/M.Sc.%28Mathematics%29%20Syllabus%20%28III%29%20Semester.pdf">III Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/Math/M.Sc.%28Mathematics%29%20Syllabus%20%28IV%29%20Semester.pdf">IV Sem</Link></th>
            </tr>

            <tr>
            <th style={{color:"#780000"}}> <b>BOTANY</b> </th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/BOTANY/MSc%20Botany%201%20Semester%2022%20SY.pdf">I Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/BOTANY/BOTANY%20SCHEME%202.pdf">II Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/BOTANY/MSc%20BOT%20III%20Syllabus%2022%20SY.pdf">III Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/BOTANY/MSc%20BOT%20IV%20Syllabus%2022%20SY%20new.pdf">IV Sem</Link></th>
            </tr>

            <tr>
             
              <th style={{color:"#780000"}}> <b>CHEMISTRY</b> </th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/CHEM/M.Sc.%20Chemistry%20%20Syllabus%201st%20sem.pdf">I Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/CHEM/M.Sc.%20Chemistry%20Syllabus%202nd%20sem.pdf">II Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/CHEM/M.Sc.%20Chemistry%20%20Syllabus%203rd%20sem.pdf">III Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/CHEM/M.Sc.%20Chemistry%20Syllabus%204th%20Sem.pdf">IV Sem</Link></th>
            </tr>

            <tr>
             
              <th style={{color:"#780000"}}> <b>PHYSICS</b> </th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/PHY/M.SC%20PHY%20I%20SEM.pdf">I Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/PHY/M.SC%20PHY%20II%20SEM.pdf">II Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/PHY/M.SC%20PHY%20III%20SEM.pdf">III Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/PHY/M.SC%20PHY%20IV%20SEM.pdf">IV Sem</Link></th>
            </tr>

            <tr>
             
              <th style={{color:"#780000"}}> <b>MICROBIOLOGY</b> </th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/MICROBIOLOGY/MSc%20I%20Sem%20Microbiology%20Syllabus%20%281%29.pdf">I Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/MICROBIOLOGY/MSc%20Microbiology%20%20II%20Sem%20Syllabus.pdf">II Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/MICROBIOLOGY/MSc%20Microbiology%20III%20semester.pdf">III Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/MICROBIOLOGY/MSC%20MICRO-4th%20SEM%20Final.pdf">IV Sem</Link></th>
            </tr>

            <tr>
           
              <th style={{color:"#780000"}}> <b>ZOOLOGY</b> </th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/Zoology/MSc%20Zoology%20%201%20Semeste.pdf">I Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/Zoology/MSC%20ZOO%202%20SEM.pdf">II Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/Zoology/Msc%20Zoology-III%20SEM.pdf">III Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/Zoology/MSc-%20ZOOLOGY%204%20syllabus.pdf">IV Sem</Link></th>
            </tr>

           

            <tr>
              
              <th style={{color:"#780000"}}> <b>COMPUTER SCIENCE</b> </th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/CS/msc%20cs%201st%20sem.pdf">I Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/CS/MSC_computer_Science%202nd%20sem%20syllabus-converted.pdf">II Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/CS/MSc%20CS%203rd%20sem.pdfF">III Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEME/M.SC%202023/CS/MSC%204%20sem%20syllabus.pdf">IV Sem</Link></th>
            </tr>
          </tbody>
        </table>{" "}
        <br />
        <br />
        <br />

   {/* ================================== */}
   <h5 style={{ textAlign: "center", color: "Brown" }}>
          <b>
            {" "}
            New Curriculum Session 2022-23 SEMESTER SYSTEM ( UG Courses) First Semester <br/>
            राष्ट्रीय शिक्षा नीति के परिप्रेक्ष्य में सत्र 2022-23 से
          </b>
        </h5>
        <br />
        <table style={{ marginLeft: "15%", textAlign: "center" }}>
          <thead style={{ backgroundColor: "SteelBlue" }}>
            <tr>
              <th scope="col">
                <h6>
                  <b>Course/Degree</b>
                </h6>
              </th>
              <th colSpan={5} scope="colgroup">
                <h6>
                  <b> 	
                    SEMSTERS</b>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* <th scope="rowgroup">BA</th> */}
              <th style={{color:"#780000"}}> <b>BA</b> </th>
              <th rowSpan={20}><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/UTD2023/Syllabus/B.COM/B.COM%201%20ST%20SEM%20AEC.pdf">AEC <br/>(Ability Enhancement Courses )</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/UTD2023/Syllabus/B.A/BA%201%20ST%20SEM%20Mjr.pdf">Major subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/UTD2023/Syllabus/B.A/BA%201%20ST%20SEM%20Mnr.pdf">Minor Subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/UTD2023/Syllabus/B.A/elective%20gen.pdf">   Generic Elective Subject</Link></th>
              
            </tr>

            <tr>
             
              <th style={{color:"#780000"}}> <b>B.COM.</b> </th>
            
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/UTD2023/Syllabus/B.COM/B.COM%20IST%20SEM%20MAJOR%20.pdf">Major subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/UTD2023/Syllabus/B.COM/B.COM%20IST%20SEM%20MINOR.pdf">Minor Subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/UTD2023/Syllabus/B.COM/B.COM%20IST%20SEM%20Genric%20ELECTIVE.pdf">  Generic Elective Subject</Link></th>
             
            </tr>

            <tr>
              
              <th style={{color:"#780000"}}> <b>B.Sc.</b> </th>
            
             
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/UTD2023/Syllabus/B.SC/major%20i%20sem.pdf">Major subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/UTD2023/Syllabus/B.SC/minor%20i%20sem.pdf">Minor Subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/UTD2023/Syllabus/B.SC/ELECTIVE.pdf">   Generic Elective Subject</Link></th>
            
            </tr>

            <tr>
          
              <th style={{color:"#780000"}}> <b>BBA</b> </th>
              
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/UTD2023/Syllabus/BCA/MAJOR%20BCA%20I%20Sem%20Syllabus.pdf">Major subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/Syllabus2022/BBA/MINOR.pdf">Minor Subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/Syllabus2022/Elective.pdf">  Generic Elective Subject</Link></th>
                 
            
            </tr>

            <tr>
             
              <th style={{color:"#780000"}}> <b>BCA</b> </th>

             
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/UTD2023/Syllabus/BCA/MAJOR%20BCA%20I%20Sem%20Syllabus.pdf">Major subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/UTD2023/Syllabus/BCA/MINOR%20BCA%20I%20Sem%20Syllabus.pdf">Minor Subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SCHEMES/UTD2023/Syllabus/BCA/ELECTIVE%20BCA%20I%20Sem%20Syllabus.pdf">  Generic Elective Subject</Link></th>
              
            </tr>
          </tbody>
        </table>{" "}
        <br />
        <br />
        <br />
         {/* ================================== */}
   <h5 style={{ textAlign: "center", color: "Brown" }}>
          <b>
            {" "}
            New Curriculum Session 2022-23 (SECOND YEAR) <br/>
            राष्ट्रीय शिक्षा नीति के परिप्रेक्ष्य में सत्र 2022-23 से
          </b>
        </h5>
        <br />
        <table style={{ marginLeft: "15%", textAlign: "center" }}>
          <thead style={{ backgroundColor: "SteelBlue" }}>
            <tr>
              <th scope="col">
                <h6>
                  <b>Course/Degree</b>
                </h6>
              </th>
              <th colSpan={5} scope="colgroup">
                <h6>
                  <b> 	
                    SEMSTERS</b>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <th style={{color:"#780000"}}> <b>BA</b> </th>
              <th rowSpan={20}><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/Syllabus2022/FC.pdf">Foundation course</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/Syllabus2022/Mjor.pdf">Major subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/Syllabus2022/Minor.pdf">Minor Subject</Link></th>
                  <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/Syllabus2022/Elective.pdf"> Elective Subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/Syllabus2022/Vocational.pdf"> Vocational Subject</Link></th>
              
            </tr>

            <tr>
              <th style={{color:"#780000"}}> <b>B.Com.</b> </th>
            
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/Syllabus2022/b.com/Commerce_0001.pdf">Major subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/Syllabus2022/b.com/Commerce%20Minor%20B2T_0001.pdf">Minor Subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/Syllabus2022/b.com/Elective.pdf"> Elective Subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/Syllabus2022/b.com/Vocational.pdf"> Vocational Subject</Link></th>
             
            </tr>

            <tr>
               <th style={{color:"#780000"}}> <b>B.Sc.</b> </th>
             
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/Syllabus2022/BSC/Major.pdf">Major subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/Syllabus2022/BSC/Minor.pdf">Minor Subject</Link></th>
               <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/Syllabus2022/BSC/Elective.pdf"> Elective Subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/Syllabus2022/BSC/Vocational.pdf"> Vocational Subject</Link></th>
            </tr>

            <tr>
              <th style={{color:"#780000"}}> <b>BBA</b> </th>

              
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/Syllabus2022/BBA/MAJOR.pdf">Major subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/Syllabus2022/BBA/MINOR.pdf">Minor Subject</Link></th>
             
                 <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/Syllabus2022/BBA/ELECTIVE.pdf"> Elective Subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/Syllabus2022/BBA/vocational.pdf"> Vocational Subject</Link></th>  
            
            </tr>

            <tr>
              <th style={{color:"#780000"}}> <b>BCA</b> </th>
             
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/Syllabus2022/BCA/BCA%20Major_0001%20-%20Copy%201.pdf">Major subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/Syllabus2022/BCA/BCA%20Minor_0001.pdf">Minor Subject</Link></th>
                 <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/Syllabus2022/BCA/BCA%20Elective.pdf"> Elective Subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/Syllabus2022/BCA/Vocational.pdf"> Vocational Subject</Link></th>
              
            </tr>
          </tbody>
        </table>{" "}
        <br />
        <br />
        <br />
           {/* ================================== */}
   <h5 style={{ textAlign: "center", color: "Brown" }}>
          <b>
            {" "}
            New Curriculum Session 2021-22 (FIRST YEAR)<br/>
            राष्ट्रीय शिक्षा नीति के परिप्रेक्ष्य में सत्र 2021-22 से
          </b>
        </h5>
        <br />
        <table style={{ marginLeft: "15%", textAlign: "center" }}>
          <thead style={{ backgroundColor: "SteelBlue" }}>
            <tr>
              <th scope="col">
                <h6>
                  <b>Course/Degree</b>
                </h6>
              </th>
              <th colSpan={5} scope="colgroup">
                <h6>
                  <b> 	
                    SEMSTERS</b>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th style={{color:"#780000"}}> <b>BA</b> </th>
              <th rowSpan={20}><Link to = "https://sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/NEP/NEP_FC.pdf">Foundation course</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/NEP/NEP_Major_BA_I_R.pdf">Major subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/NEP/NEP_Minor_BA_I_R.pdf">Minor Subject</Link></th>
                  <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/NEP/NEP_Elective_BA_I_R.pdf"> Elective Subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/NEP/NEP_Voc_BA_I_R.pdf"> Vocational Subject</Link></th>
              
            </tr>

            <tr>
              <th style={{color:"#780000"}}> <b>B.Com.</b> </th>
            
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/NEP/NEP_Major_BCOM_I_R.pdf">Major subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/NEP/NEP_Minor_BCOM_I_R.pdf">Minor Subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/NEP/NEP_Elective_BCOM_I_R.pdf"> Elective Subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/NEP/NEP_Voc_BCOM_I_R.pdf"> Vocational Subject</Link></th>
             
            </tr>

            <tr>
              <th style={{color:"#780000"}}> <b>B.Sc.</b> </th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/NEP/NEP_Major_BSC_I_R.pdf">Major subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/NEP/NEP_Minor_BSC_I_R.pdf">Minor Subject</Link></th>
               <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/NEP/NEP_Elective_BSC_I_R.pdf"> Elective Subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/NEP/NEP_Voc_BSC_I_R.pdf"> Vocational Subject</Link></th>
            </tr>

            <tr>
            
              <th style={{color:"#780000"}}> <b>BBA</b> </th>
              
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/NEP/NEP_Major_BBA_I_R.pdf">Major subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/NEP/NEP_Minor_BBA_I_R.pdf">Minor Subject</Link></th>
             
                 <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/NEP/NEP_Elective_BBA_I_R.pdf"> Elective Subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/NEP/NEP_Voc_BBA_I_R.pdf"> Vocational Subject</Link></th>  
            
            </tr>

            <tr>
              <th style={{color:"#780000"}}> <b>BCA</b> </th>

              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/NEP/NEP_Major_BCA_I_R.pdf">Major subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/NEP/NEP_Minor_BCA_I_R.pdf">Minor Subject</Link></th>
                 <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/NEP/NEP_Elective_BCA_I_R.pdf"> Elective Subject</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/NEP/NEP_Voc_BCA_I_R.pdf"> Vocational Subject</Link></th>
              
            </tr>
          </tbody>
        </table>{" "}
        <br />
        <br />
        <br />
        {/* {=========================================} */}
        <h5 style={{ textAlign: "center", color: "Brown" }}>
          <b>All PG Courses (M.A./M.Sc./M.Com.) (w.e.f. 2021)</b>
        </h5>
        <br />
        <table style={{ marginLeft: "15%", textAlign: "center" }}>
          <thead style={{ backgroundColor: "SteelBlue" }}>
            <tr>
              <th colSpan={2} scope="col">
                <h6>
                  <b>Course/Degree</b>
                </h6>
              </th>
              <th colSpan={5} scope="colgroup">
                <h6>
                  <b> SYLLABUS</b>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th style={{color:"#221e22"}} rowSpan={7}><b>MA</b></th>
              <th style={{color:"#780000"}}> <b>ENGLISH</b> </th>
              {/* <th scope="rowgroup">ENGLISH</th> */}
              <th><Link to = "https://sssutms.co.in/cms/Areas/Website/Files/Link/MA_English_Literature_1_21122022_1106.pdf">I Sem</Link></th>
              <th><Link to = "https://sssutms.co.in/cms/Areas/Website/Files/Link/MA_English_Literature__2_21122022_1106.pdf">II Sem</Link></th>
              <th><Link to = "https://sssutms.co.in/cms/Areas/Website/Files/Link/MA_English_literature_3_21122022_1107.pdf">III Sem</Link></th>
              <th><Link to = "https://sssutms.co.in/cms/Areas/Website/Files/Link/MA_English_Literature__4_21122022_1108.pdf">IV Sem</Link></th>
            </tr>

            <tr>
              
              <th style={{color:"#780000"}}> <b>HINDI</b> </th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS2021/SY_MA_I_HIN_2021.pdf">I Sem</Link></th>
              <th><Link to = "https://sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS2021/SY_MA_II_HIN_2021.pdf">II Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/MA/ma%20iii%20sem%20syllabus.pdf">III Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS2021/SY_MA_IV_HIN_2021.pdf">IV Sem</Link></th>
            </tr>

            <tr>
           
              <th style={{color:"#780000"}}> <b>HISTORY</b> </th>
              
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/syllabus%202023-24/MA%20History%201%20Semester.pdf"></Link>I Sem</th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/syllabus%202023-24/ma%20history%202nd%20sem%20syllabus%20%285%29.pdf"></Link>II Sem</th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/syllabus%202023-24/MA%20History%20%203rd%20sem.pdf"></Link>III Sem</th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/syllabus%202023-24/MA%20IV%20Sem%20History%20Syllabus%20%281%29.pdf"></Link>IV Sem</th>
            </tr>

            <tr>
             
              <th style={{color:"#780000"}}> <b>ECONOMICS</b> </th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS2021/SY_MA_I_ECO_2021.pdf">I Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS2021/SY_MA_II_ECO_2021.pdf">II Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/MA/M.A.%20Economics%20III%20sem%20syllabus%20.pdf">III Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS2021/SY_MA_IV_ECO_2021.pdf">IV Sem</Link></th>
            </tr>

            <tr>
              
              <th style={{color:"#780000"}}> <b>SOCIOLOGY</b> </th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS2021/RSY_MA_I_SOC_2021.pdf">I Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS2021/RSY_MA_II_SOC_2021.pdf">II Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS2021/RSY_MA_III_SOC_2021.pdf">III Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS2021/RSY_MA_IV_SOC_2021.pdf">IV Sem</Link></th>
            </tr>

            <tr>
            <th style={{color:"#780000"}}> <b>POLITICAL SCIENCEY</b> </th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS2021/RSY_MA_I_POLS_2021.pdf">I Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS2021/RSY_MA_II_POLS_2021.pdf">II Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS2021/RSY_MA_III_POLS_2021.pdf">III Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS2021/RSY_MA_IV_POLS_2021.pdf">IV Sem</Link></th>
            </tr>

            <tr>
              
              <th style={{color:"#780000"}}> <b>PSYCHOLOGYE</b> </th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SY_MA_I_PSY_2021_14022022_1138.pdf">I Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS2021/SY_MA_II_PSY_2021.pdf">II Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS2021/SY_MA_III_PSY_2021_R.pdf">III Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS2021/SY_MA_IV_PSY_2021.pdf">IV Sem</Link></th>
            </tr>

            <tr>
           
              <th style={{color:"#221e22"}} rowSpan={7}><b>M.Com.</b></th>
              <th style={{color:"#780000"}}> <b>COMMERCE</b> </th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS2021/RSY_MCOM_I_2021.pdf">I Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS2021/RSY_MCOM_II_2021.pdf">II Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS2021/RSY_MCOM_III_2021.pdf">III Sem</Link></th>
              <th><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS2021/RSY_MCOM_IV_2021.pdf">IV Sem</Link></th>
            </tr>
          </tbody>
        </table>{" "}
        <br />
        <br />
        <br />
{/* {==========================================================================} */}
        
        <br />
        <table style={{ marginLeft: "15%", textAlign: "center" }}>
          <thead style={{ backgroundColor: "SteelBlue" }}>
            <tr>
              <th scope="col">
                <h6>
                  <b>Course/Degree</b>
                </h6>
              </th>
              <th scope="col">
                <h6>
                  <b>Yearly Courses w.e.f. 2017-18</b>
                </h6>
              </th>
              <th scope="col">
                <h6>
                  <b>Choice Based Credit System (CBCS)w.e.f. 2016-17</b>
                </h6>
              </th>
              <th scope="colgroup">
                <h6>
                  <b>
                    {" "}
                    Non – CBCS ( for Old Batches)
                  </b>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
          <th style={{color:"#780000"}} rowSpan={7}><b> All UG Courses <br/>
           (BA/BCA/BBA/BCom/BSc) .</b></th>
            


            <tr>
             

              <th>II Year</th>
               <td>
                {" "}
                <span>
                  {" "}
                  <b> III Semester</b>
                </span>{" "}
                <br />
                <span>
                  <b> IV Semester </b>
                </span>{" "}
              </td>
              <td>
                {" "}
                <span>
                  {" "}
                  <b> III Semester</b>
                </span>{" "}
                <br />
                <span>
                  <b>IV Semester</b>
                </span>{" "}
              </td>
            </tr>

            <tr>
             

             <th>III Year (All UG) <br/>
             B.Com. 2018-19</th>
              <td>
               {" "}
               <span>
                 {" "}
                 <b> V Semester </b>
               </span>{" "}
               <br />
               <span>
                 <b>VI Semester </b>
               </span>{" "}
             </td>
             <td>
               {" "}
               <span>
                 {" "}
                 <b>V Semester</b>
               </span>{" "}
               <br />
               <span>
                 <b>VI Semester</b>
               </span>{" "}
             </td>
           </tr>
           
        
    
          </tbody>
        </table>{" "}
        <br />
        <br />
        <br />
        {/* {=============================================} */}
        <br />
        <table style={{ marginLeft: "15%", textAlign: "center" }}>
          <thead style={{ backgroundColor: "SteelBlue" }}>
            <tr>
              <th scope="col">
                <h6>
                  <b>Syllabus</b>
                </h6>
              </th>

              <th colSpan={3} scope="colgroup">
                <h6>
                  <b> Course</b>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
          <th style={{color:"#780000"}} rowSpan={7}><b>  All PG Courses <br /> (MA/MSc/MCom)</b></th>
         

            <tr>
              <td>
                <h6>
                  <b>II Semester</b>
                </h6>{" "}
              </td>
            </tr>

            <tr>
              <td>
                <h6>
                  <b>III Semester</b>
                </h6>{" "}
              </td>
            </tr>

            <tr>
              <td>
                <h6>
                  <b>
                    IV Semester <br />
                 </b>
                </h6>{" "}
              </td>
            </tr>
          </tbody>
        </table>{" "}
        <br/><br/><br/>

        {/* _{====================================================} */}
        <br />
        <br />
        <br />
      </div>

   <Footerpage />
    </>
  );
}

export default UTDsyllabus;

